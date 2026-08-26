(function () {
  "use strict";

  // ---------------------------------------------------------------- helpers

  function haversine(lat1, lon1, lat2, lon2) {
    const R = 6371; // km
    const toRad = (d) => (d * Math.PI) / 180;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    return R * 2 * Math.asin(Math.sqrt(a));
  }

  function fmtDist(km) {
    if (km < 1) return Math.round(km * 1000) + " m away";
    return km.toFixed(km < 10 ? 1 : 0) + " km away";
  }

  function periodClass(period) {
    const p = period.toLowerCase();
    const hasNeo = p.includes("neolithic");
    const hasBronze = p.includes("bronze");
    const hasIron = p.includes("iron");
    const count = [hasNeo, hasBronze, hasIron].filter(Boolean).length;
    if (count > 1) return "mixed";
    if (hasNeo) return "neolithic";
    if (hasBronze) return "bronze";
    if (hasIron) return "iron";
    return "mixed";
  }

  // ---------------------------------------------------------------- state

  let userLoc = null; // {lat, lon}
  let map, markerLayer;
  let otherMap, otherMarkerLayer, otherResultsLayer;
  const markerById = {};
  let liveResults = []; // last fetched Wikipedia geosearch results, classified
  let liveFilter = "all"; // "all" | "landscape"

  // Wikipedia category names (with "Category:" stripped) that mark a page
  // as a landscape/geological feature rather than a building, settlement,
  // or other man-made thing. Matched with .some(), so one hit is enough.
  const LANDSCAPE_CATEGORY_PATTERNS = [
    /geology/i,
    /geological/i,
    /geomorphology/i,
    /landform/i,
    /\bhills? of\b/i,
    /\bmountains? of\b/i,
    /\bvalleys? of\b/i,
    /\brivers? of\b/i,
    /\bstreams? of\b/i,
    /\blakes? of\b/i,
    /reservoirs? in/i,
    /sites of special scientific interest/i,
    /national nature reserves?/i,
    /nature reserves? (in|of)/i,
    /areas of outstanding natural beauty/i,
    /\bcaves? of\b/i,
    /quarries in/i,
    /woodland/i,
    /forests? in/i,
    /moors?\b|moorland/i,
    /waterfalls?/i,
    /\bsummits?\b/i,
    /nature reserves/i
  ];

  // Some settlement articles (e.g. a town with a "Geology" section) still
  // pick up a landscape-looking category like "Geology of Shropshire" —
  // these settlement categories take priority and rule a result out even
  // if it also matched a landscape pattern above.
  const SETTLEMENT_CATEGORY_PATTERNS = [
    /\btowns? (in|of)\b/i,
    /\bvillages? (in|of)\b/i,
    /\bhamlets? (in|of)\b/i,
    /\bcivil parishes?\b/i,
    /\bsuburbs? (in|of)\b/i,
    /\bmarket towns?\b/i,
    /\bspa towns?\b/i,
    /\bcities (in|of)\b/i,
    /\brailway stations?\b/i,
    /\bchurches? (in|of)\b/i,
    /\bschools? (in|of)\b/i,
    /\bpubs? (in|of)\b/i,
    /\bpeople from\b/i,
    /\bbuildings and structures (in|of)\b/i,
    /\bcastles? (in|of)\b/i,
    /\bhouses? (in|of)\b/i
  ];

  function isLandscapeResult(categories) {
    const looksLikeSettlement = categories.some((c) => SETTLEMENT_CATEGORY_PATTERNS.some((re) => re.test(c)));
    if (looksLikeSettlement) return false;
    return categories.some((c) => LANDSCAPE_CATEGORY_PATTERNS.some((re) => re.test(c)));
  }

  // ---------------------------------------------------------------- tabs

  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      const target = btn.dataset.tab;
      document.querySelectorAll(".tab-panel").forEach((p) => p.classList.remove("active"));
      document.getElementById("tab-" + target).classList.add("active");
      if (target === "sites" && map) {
        setTimeout(() => map.invalidateSize(), 50);
      }
      if (target === "other" && otherMap) {
        setTimeout(() => otherMap.invalidateSize(), 50);
      }
    });
  });

  // ---------------------------------------------------------------- map

  function initMap() {
    if (typeof L === "undefined") {
      document.getElementById("map").outerHTML =
        '<div class="map map-fallback">Map couldn\'t load (no connection to the map tiles right now) — the list and search below still work fully offline.</div>';
      setStatus("Map tiles unavailable right now. Site list and search still work offline.", true);
      return;
    }
    try {
      map = L.map("map", { scrollWheelZoom: false }).setView([52.55, -2.85], 9);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      markerLayer = L.layerGroup().addTo(map);
    } catch (e) {
      map = null;
      setStatus("Map couldn't load. Site list and search still work offline.", true);
    }
  }

  function initOtherMap() {
    if (typeof L === "undefined") {
      document.getElementById("other-map").outerHTML =
        '<div class="map map-fallback">Map couldn\'t load (no connection to the map tiles right now) — the list below still works once you\'re located.</div>';
      return;
    }
    try {
      otherMap = L.map("other-map", { scrollWheelZoom: false }).setView([52.55, -2.85], 9);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(otherMap);
      otherMarkerLayer = L.layerGroup().addTo(otherMap); // "you are here" pin — persists across filter toggles
      otherResultsLayer = L.layerGroup().addTo(otherMap); // live result pins — cleared/rebuilt on each render
    } catch (e) {
      otherMap = null;
    }
  }

  const dotColor = {
    neolithic: "#0057ff",
    bronze: "#e8e315",
    iron: "#e2007a",
    mixed: "#0a0a0a"
  };

  function renderMarkers() {
    if (!markerLayer) return;
    markerLayer.clearLayers();
    SITES.forEach((site) => {
      const cls = periodClass(site.period);
      const icon = L.divIcon({
        className: "",
        html: `<div style="width:16px;height:16px;border-radius:50%;background:${dotColor[cls]};border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.4)"></div>`,
        iconSize: [16, 16],
        iconAnchor: [8, 8]
      });
      const m = L.marker([site.lat, site.lon], { icon }).addTo(markerLayer);
      m.bindTooltip(site.name, { direction: "top", offset: [0, -8] });
      m.on("click", () => openSiteSheet(site));
      markerById[site.id] = m;
    });
  }

  // ---------------------------------------------------------------- lists

  const PERIOD_LABEL = { neolithic: "Neo", bronze: "Bronze", iron: "Iron", mixed: "Mixed" };

  function siteCardHtml(site, dist) {
    const cls = periodClass(site.period);
    return `
      <li class="site-card" data-id="${site.id}">
        <span class="period-dot dot-${cls}">${PERIOD_LABEL[cls]}</span>
        <span class="site-card-body">
          <span class="site-card-title">${site.name}</span>
          <div class="site-card-meta">${site.period} &middot; ${site.dates}</div>
          ${dist != null ? `<div class="site-card-dist">${fmtDist(dist)}</div>` : ""}
        </span>
      </li>`;
  }

  function renderSiteList(filterText) {
    const q = (filterText || "").trim().toLowerCase();
    let list = SITES.map((s) => {
      const dist = userLoc ? haversine(userLoc.lat, userLoc.lon, s.lat, s.lon) : null;
      return { site: s, dist };
    });

    if (q) {
      list = list.filter(({ site }) => {
        const hay = [site.name, site.period, site.summary, site.elevation]
          .join(" ")
          .toLowerCase();
        return hay.includes(q);
      });
    }

    if (userLoc) list.sort((a, b) => a.dist - b.dist);
    else list.sort((a, b) => a.site.name.localeCompare(b.site.name));

    const listEl = document.getElementById("site-list");
    document.getElementById("site-count").textContent = list.length;

    if (list.length === 0) {
      listEl.innerHTML = `<li class="empty-note">Nothing in the curated list matches that. Try a shorter search, or check the "Other sites" tab for live Wikipedia results once you've located.</li>`;
      return;
    }

    listEl.innerHTML = list.map(({ site, dist }) => siteCardHtml(site, dist)).join("");
    listEl.querySelectorAll(".site-card").forEach((card) => {
      card.addEventListener("click", () => {
        const site = SITES.find((s) => s.id === card.dataset.id);
        openSiteSheet(site);
      });
    });
  }

  // ---------------------------------------------------------------- detail sheet

  function openSiteSheet(site) {
    const dist = userLoc ? haversine(userLoc.lat, userLoc.lon, site.lat, site.lon) : null;
    const html = `
      <div class="sheet-title">${site.name}</div>
      <div class="sheet-meta">${site.period} &middot; ${site.dates}${site.approx ? " &middot; location approximate" : ""}</div>
      ${dist != null ? `<div class="sheet-dist">${fmtDist(dist)} from you</div>` : ""}
      <div class="sheet-section-label">Overview</div>
      <p>${site.summary}</p>
      <div class="sheet-section-label">Setting</div>
      <p>${site.elevation}</p>
      <div class="sheet-section-label">Archaeology</div>
      <p>${site.archaeology}</p>
      ${site.interest ? `<div class="sheet-section-label">Worth knowing</div><p>${site.interest}</p>` : ""}
      <div class="sheet-links">
        ${site.links.map((l) => `<a class="sheet-link" href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>`).join("")}
      </div>
    `;
    showSheet(html);
    if (map) {
      map.flyTo([site.lat, site.lon], 12, { duration: 0.6 });
      const mk = markerById[site.id];
      if (mk) mk.openTooltip();
    }
  }

  function openLiveSheet(item) {
    const html = `
      <div class="sheet-title">${item.title}</div>
      <div class="sheet-meta">Live Wikipedia result &middot; not curated &middot; ${fmtDist(item.dist)}${item.isLandscape ? " &middot; landscape/geology" : ""}</div>
      <p>${item.extract || "No summary available from Wikipedia for this one — open the article to see what it actually is; geosearch results include anything geotagged nearby, not just archaeology."}</p>
      <div class="sheet-links">
        <a class="sheet-link" href="${item.url}" target="_blank" rel="noopener">Open on Wikipedia ↗</a>
      </div>
    `;
    showSheet(html);
  }

  function showSheet(html) {
    document.getElementById("sheet-content").innerHTML = html;
    document.getElementById("sheet-backdrop").hidden = false;
    const sheet = document.getElementById("detail-sheet");
    sheet.hidden = false;
    sheet.setAttribute("aria-hidden", "false");
  }

  function closeSheet() {
    document.getElementById("sheet-backdrop").hidden = true;
    const sheet = document.getElementById("detail-sheet");
    sheet.hidden = true;
    sheet.setAttribute("aria-hidden", "true");
  }

  document.getElementById("sheet-close").addEventListener("click", closeSheet);
  document.getElementById("sheet-backdrop").addEventListener("click", closeSheet);

  // ---------------------------------------------------------------- geolocation + live search

  function setStatus(msg, isError) {
    ["status-line", "other-status"].forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.hidden = !msg;
      el.textContent = msg || "";
      el.style.color = isError ? "var(--primary)" : "";
    });
  }

  function locate() {
    if (!("geolocation" in navigator)) {
      setStatus("Your browser doesn't support location. Try the search box instead.", true);
      return;
    }
    setStatus("Finding you…");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        userLoc = { lat: pos.coords.latitude, lon: pos.coords.longitude };
        setStatus("Located. Sites are sorted nearest first.");
        renderSiteList(document.getElementById("search-input").value);
        if (map) {
          map.flyTo([userLoc.lat, userLoc.lon], 11, { duration: 0.6 });
          L.marker([userLoc.lat, userLoc.lon], {
            icon: L.divIcon({
              className: "",
              html: `<div style="width:16px;height:16px;border-radius:50%;background:#e2007a;border:3px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.5)"></div>`,
              iconSize: [16, 16],
              iconAnchor: [8, 8]
            })
          }).addTo(markerLayer).bindTooltip("You are here", { permanent: false });
        }
        if (otherMap) {
          try {
            // If "Other sites" was just switched to, its 50ms invalidateSize
            // (from the tab-click handler) may not have fired yet — the map
            // container can still measure 0×0. flyTo's multi-frame animation
            // then throws "Invalid LatLng (NaN, NaN)" from inside its own
            // requestAnimationFrame loop, asynchronously — outside this
            // try/catch — and that would otherwise abort the rest of this
            // callback before fetchLiveNearby ever runs. setView is instant
            // (no animation loop), sidestepping the whole issue.
            otherMap.invalidateSize();
            otherMap.setView([userLoc.lat, userLoc.lon], 11);
            L.marker([userLoc.lat, userLoc.lon], {
              icon: L.divIcon({
                className: "",
                html: `<div style="width:16px;height:16px;border-radius:50%;background:#e2007a;border:3px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.5)"></div>`,
                iconSize: [16, 16],
                iconAnchor: [8, 8]
              })
            }).addTo(otherMarkerLayer).bindTooltip("You are here", { permanent: false });
          } catch (e) {
            /* map display is a nice-to-have — never let it block the live results fetch below */
          }
        }
        fetchLiveNearby(userLoc.lat, userLoc.lon);
      },
      (err) => {
        setStatus("Couldn't get your location (" + err.message + "). You can still search by name below.", true);
      },
      { enableHighAccuracy: true, timeout: 12000 }
    );
  }

  document.getElementById("locate-btn").addEventListener("click", locate);
  document.getElementById("locate-btn-other").addEventListener("click", locate);

  async function fetchLiveNearby(lat, lon) {
    const filterEl = document.getElementById("live-filter");
    const listEl = document.getElementById("live-list");
    filterEl.hidden = true;
    listEl.innerHTML = `<li class="empty-note">Checking Wikipedia for anything else nearby…</li>`;
    try {
      const url =
        "https://en.wikipedia.org/w/api.php?action=query&list=geosearch" +
        `&gscoord=${lat}|${lon}&gsradius=10000&gslimit=30&format=json&origin=*`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("network");
      const data = await res.json();
      const results = (data.query && data.query.geosearch) || [];
      if (results.length === 0) {
        liveResults = [];
        listEl.innerHTML = `<li class="empty-note">Nothing geotagged on Wikipedia within 10 km of here.</li>`;
        if (otherResultsLayer) otherResultsLayer.clearLayers();
        return;
      }

      // One combined call for short extracts + categories, so filtering by
      // category costs nothing extra over what the list already needed.
      const titles = results.map((r) => r.title).join("|");
      let extracts = {};
      let categories = {};
      try {
        // cllimit is a *shared* budget across every title in this batch, not
        // per-title — with a low number like 50, some pages (often later in
        // the list) come back with zero categories at all. "max" avoids that.
        const infoUrl =
          "https://en.wikipedia.org/w/api.php?action=query&prop=extracts%7Ccategories&exintro=1&explaintext=1&exchars=280&cllimit=max" +
          `&titles=${encodeURIComponent(titles)}&format=json&origin=*`;
        const infoRes = await fetch(infoUrl);
        const infoData = await infoRes.json();
        const pages = (infoData.query && infoData.query.pages) || {};
        Object.values(pages).forEach((p) => {
          extracts[p.title] = p.extract;
          categories[p.title] = (p.categories || []).map((c) => c.title.replace(/^Category:/, ""));
        });
      } catch (e) {
        /* extracts/categories are a nice-to-have, ignore failure — everything just falls into "all" */
      }

      liveResults = results.map((r) => {
        const cats = categories[r.title] || [];
        return {
          title: r.title,
          lat: r.lat,
          lon: r.lon,
          dist: r.dist / 1000,
          extract: extracts[r.title],
          isLandscape: isLandscapeResult(cats),
          url: "https://en.wikipedia.org/wiki/" + encodeURIComponent(r.title.replace(/ /g, "_"))
        };
      });

      liveFilter = "all";
      filterEl.hidden = false;
      renderLiveList();
    } catch (e) {
      liveResults = [];
      filterEl.hidden = true;
      if (otherResultsLayer) otherResultsLayer.clearLayers();
      listEl.innerHTML = `<li class="empty-note">Couldn't reach Wikipedia just now (no signal, maybe). The curated list above still works offline.</li>`;
    }
  }

  function liveCardHtml(item) {
    const bg = item.isLandscape ? "var(--blue)" : "#888";
    const label = item.isLandscape ? "geo" : "wiki";
    return `<li class="site-card live-card" data-title="${item.title.replace(/"/g, "&quot;")}">
      <span class="period-dot" style="background:${bg};color:#fff">${label}</span>
      <span class="site-card-body">
        <span class="site-card-title">${item.title}</span>
        <div class="site-card-dist">${fmtDist(item.dist)}</div>
      </span>
    </li>`;
  }

  function renderLiveList() {
    const listEl = document.getElementById("live-list");
    const landscapeResults = liveResults.filter((r) => r.isLandscape);
    const list = liveFilter === "landscape" ? landscapeResults : liveResults;

    document.querySelectorAll(".live-filter-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.filter === liveFilter);
      if (btn.dataset.filter === "all") btn.textContent = `All (${liveResults.length})`;
      if (btn.dataset.filter === "landscape") btn.textContent = `Landscape & geology (${landscapeResults.length})`;
    });

    if (list.length === 0) {
      listEl.innerHTML =
        liveFilter === "landscape"
          ? `<li class="empty-note">Nothing in this batch was categorised as landscape or geology on Wikipedia — try "All", or somewhere with more open countryside nearby.</li>`
          : `<li class="empty-note">Nothing geotagged on Wikipedia within 10 km of here.</li>`;
      return;
    }

    listEl.innerHTML = list.map(liveCardHtml).join("");
    listEl.querySelectorAll(".live-card").forEach((card) => {
      const item = liveResults.find((r) => r.title === card.dataset.title);
      card.addEventListener("click", () => openLiveSheet(item));
    });

    renderOtherMapMarkers(list);
  }

  function renderOtherMapMarkers(list) {
    if (!otherResultsLayer) return;
    otherResultsLayer.clearLayers();
    list.forEach((item) => {
      if (typeof item.lat !== "number" || typeof item.lon !== "number") return;
      const bg = item.isLandscape ? "var(--blue)" : "#888";
      const icon = L.divIcon({
        className: "",
        html: `<div style="width:14px;height:14px;border-radius:50%;background:${bg};border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.4)"></div>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7]
      });
      const m = L.marker([item.lat, item.lon], { icon }).addTo(otherResultsLayer);
      m.bindTooltip(item.title, { direction: "top", offset: [0, -7] });
      m.on("click", () => openLiveSheet(item));
    });
  }

  document.querySelectorAll(".live-filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      liveFilter = btn.dataset.filter;
      renderLiveList();
    });
  });

  // ---------------------------------------------------------------- search

  const searchInput = document.getElementById("search-input");
  const searchClear = document.getElementById("search-clear");
  searchInput.addEventListener("input", () => {
    searchClear.hidden = !searchInput.value;
    renderSiteList(searchInput.value);
  });
  searchClear.addEventListener("click", () => {
    searchInput.value = "";
    searchClear.hidden = true;
    renderSiteList("");
    searchInput.focus();
  });

  // ---------------------------------------------------------------- geology tab

  function renderGeologyRegions() {
    const wrap = document.getElementById("geology-regions");
    wrap.innerHTML = GEOLOGY_REGIONS.map((r) => `
      <div class="geo-card" id="geo-${r.id}">
        <button class="geo-card-head">
          <span class="geo-card-name">${r.name}</span>
          <span class="geo-card-tag">${r.periodTag}</span>
        </button>
        <div class="geo-card-body">
          <p>${r.summary}</p>
          <p class="geo-card-detail">${r.detail}</p>
          ${r.linkedSiteIds.length ? `<div class="geo-linked">${r.linkedSiteIds.map((id) => {
            const s = SITES.find((x) => x.id === id);
            return s ? `<button class="geo-link-chip" data-id="${id}">${s.name}</button>` : "";
          }).join("")}</div>` : ""}
        </div>
      </div>
    `).join("");

    wrap.querySelectorAll(".geo-card-head").forEach((head) => {
      head.addEventListener("click", () => head.closest(".geo-card").classList.toggle("open"));
    });
    wrap.querySelectorAll(".geo-link-chip").forEach((chip) => {
      chip.addEventListener("click", (e) => {
        e.stopPropagation();
        const site = SITES.find((s) => s.id === chip.dataset.id);
        document.querySelector('.tab-btn[data-tab="sites"]').click();
        setTimeout(() => openSiteSheet(site), 80);
      });
    });
  }

  const EON_COLORS = {
    Hadean: "#0a0a0a",
    Archean: "#333333",
    Proterozoic: "#0057ff",
    Phanerozoic: "#e8e315"
  };
  const EON_TEXT_COLORS = {
    Hadean: "#fff",
    Archean: "#fff",
    Proterozoic: "#fff",
    Phanerozoic: "#0a0a0a"
  };

  function renderTimescale() {
    const totalSpan = TIME_SCALE[0].start; // 4600
    const barEl = document.getElementById("timescale");
    const bar = document.createElement("div");
    bar.className = "eon-bar";
    TIME_SCALE.forEach((eon) => {
      const widthPct = ((eon.start - eon.end) / totalSpan) * 100;
      const seg = document.createElement("button");
      seg.className = "eon-seg";
      seg.style.width = Math.max(widthPct, 6) + "%";
      seg.style.background = EON_COLORS[eon.eon] || "#888";
      seg.style.color = EON_TEXT_COLORS[eon.eon] || "#fff";
      seg.textContent = eon.eon;
      seg.dataset.eon = eon.eon;
      bar.appendChild(seg);
    });
    barEl.appendChild(bar);

    const detailHolder = document.createElement("div");
    barEl.appendChild(detailHolder);

    TIME_SCALE.forEach((eon) => {
      const det = document.createElement("div");
      det.className = "eon-detail";
      det.id = "eon-detail-" + eon.eon;

      let inner = `<p class="eon-detail-blurb"><strong>${eon.eon}</strong> &middot; ${fmtMa(eon.start)} – ${fmtMa(eon.end)}. ${eon.blurb}</p>`;
      if (eon.local) inner += `<div class="eon-detail-local">📍 ${eon.local}</div>`;

      if (eon.eras) {
        eon.eras.forEach((era) => {
          inner += `<div class="era-block"><div class="era-title">${era.era} &middot; ${fmtMa(era.start)}–${fmtMa(era.end)}</div>`;
          if (era.blurb) inner += `<p style="font-size:0.85rem;color:var(--text-dim);margin:-2px 0 6px">${era.blurb}</p>`;
          if (era.periods) {
            era.periods.forEach((p) => {
              const pid = "period-" + p.period.replace(/\s+/g, "-");
              inner += `
                <div class="period-row" id="${pid}">
                  <button class="period-row-head">
                    <span class="period-row-name">${p.period}${p.local ? ' <span class="period-row-pin">📍</span>' : ""}</span>
                    <span class="period-row-span">${fmtMa(p.start)}–${fmtMa(p.end)}</span>
                  </button>
                  <div class="period-row-body">
                    ${p.blurb ? `<p>${p.blurb}</p>` : ""}
                    ${p.local ? `<p class="period-row-local">📍 Local rock: ${p.local}</p>` : ""}
                  </div>
                </div>`;
            });
          }
          inner += `</div>`;
        });
      }
      det.innerHTML = inner;
      barEl.appendChild(det);
    });

    bar.querySelectorAll(".eon-seg").forEach((seg) => {
      seg.addEventListener("click", () => {
        const eonName = seg.dataset.eon;
        document.querySelectorAll(".eon-seg").forEach((s) => s.classList.toggle("active", s === seg));
        document.querySelectorAll(".eon-detail").forEach((d) => {
          d.classList.toggle("open", d.id === "eon-detail-" + eonName);
        });
      });
    });

    barEl.querySelectorAll(".period-row-head").forEach((head) => {
      head.addEventListener("click", () => head.closest(".period-row").classList.toggle("open"));
    });

    // open Phanerozoic by default — it's the one with all the local rock
    const defaultSeg = bar.querySelector('.eon-seg[data-eon="Phanerozoic"]');
    if (defaultSeg) defaultSeg.click();
  }

  function fmtMa(n) {
    if (n === 0) return "today";
    if (n >= 1000) return (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1) + " Ga";
    return (Number.isInteger(n) ? n : n.toFixed(1)) + " Ma";
  }

  // ---------------------------------------------------------------- boot

  initMap();
  renderMarkers();
  initOtherMap();
  renderSiteList("");
  renderGeologyRegions();
  renderTimescale();
})();
