# Marches Explorer — project notes for future edits

Hand this file to your local Claude Code session (the one with the
`push-to-github` skill) alongside the project files, and it'll have
everything it needs to make a tweak and push it live.

## What this is

A mobile-first web app with three tabs:

- **Sites** — a curated database of 40 Neolithic/Bronze Age/Iron Age
  monuments across Shropshire, the Welsh Marches, and the Cotswold
  escarpment around Shurdington/Cheltenham, Gloucestershire, each with a
  sourced write-up. Has GPS "use my location" (sorts by distance).
- **Other sites** — the live Wikipedia geosearch layer for anywhere not in
  the curated list, with an "All" / "Landscape & geology" filter (the
  latter classified from each result's Wikipedia categories) so open
  countryside doesn't get lost in a list of villages and railway stations.
- **Geology** — write-ups of the region's key rock outcrops, cross-linked
  to sites, plus a tappable geological time scale (Hadean to today) with
  local rock flagged at the right point.

Plain HTML/CSS/JS, no build step, no framework, no backend.

## Design system

Restyled to match the Design Museum's site (designmuseum.org) — bold
condensed headlines (Archivo Narrow), a signature yellow `#E8E315` for
primary actions and highlights, magenta `#E2007A` and blue `#0057FF` as
secondary accents, black/white base, sharp square corners throughout, thin
rule-line dividers instead of cards-with-shadows, and small uppercase
colour-coded tag pills (used for the Neolithic/Bronze/Iron period labels
and the geology era tags). All of this is CSS custom properties at the
top of `style.css` (`--yellow`, `--magenta`, `--blue`, etc.) with a dark-mode
override block — change the palette there rather than hunting through
individual rules.

## Where it lives

- **Repo:** `github.com/fidgetrope/marches-explorer`
- **Live site:** `https://fidgetrope.github.io/marches-explorer/`
- **Pages config:** already set up — Source = "Deploy from a branch",
  branch = `main`, folder = `/ (root)`. Any push to `main` rebuilds the
  live site automatically within a minute or two — no separate deploy
  step needed once the files are pushed.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page structure — three tabs, controls, map container, detail sheet |
| `style.css` | All styling. Light/dark mode via `prefers-color-scheme`. |
| `data.js` | **All the content lives here.** `SITES`, `GEOLOGY_REGIONS`, `TIME_SCALE` arrays. |
| `app.js` | All the logic — rendering, search, geolocation, map, Wikipedia fetch, accordions. Reads `data.js`, doesn't need editing for a content-only change. |
| `README.md` | Deploy instructions (kept from first build). |

## Making a tweak — the 90% case

Almost everything you'll want to change is a content edit in `data.js`,
not a code edit. Three arrays:

### Adding/editing a site (`SITES` array)

```js
{
  id: "kebab-case-id",              // unique, used internally
  name: "Display Name",
  period: "Iron Age",               // drives the colour dot: contains
                                     // "neolithic"/"bronze"/"iron" (case-
                                     // insensitive) or falls back to "mixed"
  dates: "date range as text",
  lat: 52.1234, lon: -2.9876,       // decimal degrees
  approx: false,                    // true if coordinates are estimated,
                                     // not from a primary source — shows
                                     // "location approximate" in the UI
  elevation: "one-line setting description",
  summary: "2-4 sentences, the overview shown first",
  archaeology: "what's actually been found/excavated",
  interest: "optional — a hook, a curiosity, a connection to another site",
  links: [
    { label: "Wikipedia", url: "https://..." }
  ]
}
```

Keep the sourcing standard from the original build: every fact should be
checkable against the linked sources, and if you can't find precise
coordinates anywhere, estimate from a known neighbour and set
`approx: true` — don't present a guess as precise.

### Adding/editing a geology region (`GEOLOGY_REGIONS` array)

```js
{
  id: "kebab-case-id",
  name: "Display Name",
  periodTag: "short era/date label shown on the card",
  summary: "the main write-up",
  detail: "a second paragraph — more specific/technical",
  linkedSiteIds: ["site-id-1", "site-id-2"]  // must match SITES ids;
                                               // renders as clickable chips
                                               // that jump to that site's card
}
```

### Editing the time scale (`TIME_SCALE`)

This one's structurally nested (eons → eras → periods) and follows the
ICS International Chronostratigraphic Chart. Only touch this if you're
correcting a date or adding a `local:` note tying a period to a Marches
outcrop — the shape is fiddly enough that it's worth pasting the existing
array back to whichever Claude session is doing the edit and asking it to
follow the existing pattern exactly, rather than writing a new entry from
scratch.

## If you want an actual code/behaviour change

That's `app.js` and/or `style.css` — fine to hand those over too, just
flag which file the behaviour lives in if you already know (e.g. "the
search box" is in `app.js` under `renderSiteList`; "the bottom sheet
styling" is in `style.css` under `.detail-sheet`).

## Known constraints, so nobody "fixes" them by mistake

- The map (Leaflet + OpenStreetMap tiles) and the "also nearby, via
  Wikipedia" panel both need a live internet connection. This is
  intentional and already handled gracefully — if the map can't load, it
  shows a text fallback and the rest of the app (curated list, search,
  geology tab) still works fully offline.
- The "type in a place" search only searches the curated site names,
  periods, and descriptions in `data.js` — it is not a geocoder. That was
  a deliberate scope decision, not a bug.
- A few site coordinates are marked `approx: true` because no primary
  source gave an exact lat/lon for them (currently just Whetstones, which
  was demolished in 1870 — its site is described only by distance/
  direction from Mitchell's Fold in the sources).

## Deploying a change

Once `push-to-github` has committed and pushed to `main`, GitHub Pages
picks it up automatically. No action needed beyond the push itself —
check `https://fidgetrope.github.io/marches-explorer/` after a minute or
two (hard-refresh or add `?v=2` to the URL if your phone has the old
version cached).
