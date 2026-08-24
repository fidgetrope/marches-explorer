# Marches Explorer

A mobile web app for ancient monuments and underlying geology of Shropshire
and the Welsh Marches.

- **Sites tab** — 14 curated Neolithic, Bronze Age and Iron Age sites
  (hillforts, stone circles, a barrow cemetery), each with a proper write-up
  and sources. Tap "Use my location" to sort by distance and see a live
  Wikipedia geosearch for anything else nearby that isn't in the curated
  list (clearly labelled as unverified). Works fully offline for the
  curated list; the map and live search need a signal.
- **Geology tab** — write-ups of the region's key rock outcrops (Long Mynd,
  the Wrekin/Ercall, Stiperstones, Wenlock Edge, the Clee Hills), each
  cross-linked to the relevant sites, plus a tappable geological time scale
  from the Hadean to today with local rock flagged at the right point.

Every fact in the data files (`data.js`) is sourced — mostly Wikipedia,
Historic England, the Atlas of Hillforts, and the Shropshire Geological
Society — with links included in the app itself. A few site coordinates
(marked `approx: true` in `data.js`) are estimated from a stated distance
off a precisely-known neighbour rather than a primary source giving exact
coordinates; treat GPS distances to those as indicative, not exact.

## Running it locally

No build step. From this folder:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

## Putting it on GitHub Pages

Same pattern as before:

1. Create a new repository on GitHub (public, so Pages can serve it for
   free) — call it whatever you like, e.g. `marches-explorer`.
2. Push these four files (`index.html`, `style.css`, `app.js`, `data.js`)
   to the repository's default branch.
3. In the repo, go to **Settings → Pages**, set **Source** to "Deploy from
   a branch", pick your default branch and the `/ (root)` folder, then
   save.
4. GitHub gives you a URL like `https://<your-username>.github.io/marches-explorer/`
   within a minute or two. Open that on your phone (or add it to your home
   screen) and it behaves like an app.

## Notes on how it's built

- The map uses [Leaflet](https://leafletjs.com/) with OpenStreetMap tiles,
  loaded from a CDN — needs a live connection.
- "Use my location" uses the browser's own Geolocation API — no network
  call, no key needed, works offline once the page itself has loaded.
- The "also nearby, via Wikipedia" list calls Wikipedia's free geosearch
  API directly from your phone — no key, no server, but does need signal.
  It surfaces anything geotagged nearby, not just archaeology, and isn't
  curated, which the app says plainly.
- Everything else (the curated database, the geology write-ups, the time
  scale) is baked into `data.js` and works with the phone in airplane mode
  once the page has loaded once.

## Extending it

To add a site, add an object to the `SITES` array in `data.js` following
the existing shape. To add a geology region, do the same in
`GEOLOGY_REGIONS`. Both drive the UI automatically — no changes needed
elsewhere.
