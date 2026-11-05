# The Zone — Restaurant & Bar

Buildless static site. All website files are at the root of this download.

- `index.html`: breathing Times New Roman opening and split experience selection.
- `restaurant.html`: light restaurant experience, full menu, gallery and celebrations.
- `bar.html`: dark bar experience, full menu, interactive floor plan and gallery.
- `menu-data.js`: menu data transcribed from the 18-page supplied Canva menu.
- `entry.js`: experience-entry zoom, arrival and back-navigation cleanup.
- `app.js`: menu, saved orders, gallery, table plan and inquiries.
- `motion.js`: scroll scenes and animation scheduling.
- `style.css`, `design.css`: responsive layout and visual styling.
- `assets/`: optimized WebP copies and thumbnails of the supplied Zone assets.

No Echo source or assets were used. No generated or stock images added.

## Content provenance

Venue images, event posters, floor plan, dress code and package information: supplied The Zone files.
Menu: https://www.canva.com/design/DAHWzFQ8ehE/sLSqrPSYpodbzfuSvzYyew/view
Facebook: https://www.facebook.com/profile.php?id=61564591966849
Dining hours 11 AM–3 AM: supplied October 5 Facebook post screenshot.
Indoor bar 9 PM–4 AM daily: supplied dress code poster.
Location and Instagram: supplied celebration poster.

Source menu ambiguities are retained as notes: Veggie Deluxe Roll has two listed prices (355 and 335); the seven-roll combination is labeled for six in the source despite eight soups; bar menu paired rates have no explicit serving legend. Do not infer exact serving basis. Confirm these with the venue before public launch.

Reservations are inquiry preparation only. The browser generates a copyable message; no request is sent or booking confirmed. There is no backend or availability inventory.

Video sections reserve space with honest coming-soon captions. To add actual footage, replace each `.film-space > img` with a video element including controls, playsinline, poster and an appropriately encoded source. No videos have been supplied yet.

## Checks

Run `node --check dist/app.js` and `node --check dist/menu-data.js`.
The site is static and requires no build, dependency installation or API key.


## Design revision 2

Visual research: Amici by Studio Beaucoup (https://beaucoup.studio/en/projects/amici/ and https://restaurant-amici.com/), Hï Ibiza (https://www.hiibiza.com/), and UNVRS (https://www.unvrs.com/). Used as design references only; all site photography remains The Zone's own supplied assets.

The opening contains only The Zone Restaurant & Bar and Scroll to explore. A synchronized six-second warm light pulse illuminates the type from below. The selector expands on hover and enters through an image mask.

Restaurant: monumental serif typography, a full-width room photograph, a pinned three-image food stack with chapter controls, parallax kitchen imagery and asymmetric gallery.

Bar: outlined sans-serif typography, offset DJ photograph, a pinned horizontal photo sequence, a swipe/drag gallery, and a contrasting deep-red floor-plan section.

Motion runs on scroll with a single requestAnimationFrame update loop; the scene progress is tied to document position. Reduced-motion mode uses a static, horizontally browsable presentation. Menu and table inquiry functions are preserved.

## Refinement 3

Removed arrow decorations from buttons/links, custom cursor and visible photograph captions. Rebalanced heading tracking, text line heights, controls, menu rows, responsive margins and dialogs. The hero uses a two-pixel type shadow for restrained depth while retaining the breathing light.

All visible hours and reservation time choices use AM/PM. Time values remain machine-readable internally and are formatted before display or copy.

Saved selections now open through Ready to order. Guests can adjust quantities, remove items, specify serving prices when the source lists alternatives, and enter a table/reference and notes. Show to staff produces a food/drink summary with an estimated total and Copy order. Favorites and order quantities persist in the visitor's browser across the restaurant and bar pages. The summary does not submit an order to a server; guests show it to staff or copy it. No payment or inventory backend was added.

## Refinement 4

Restaurant cover wording now sits together with a natural word gap. Bar section labels consistently say The Bar. Added an original vector Z favicon with PNG and Apple icon fallbacks on all pages. Opening title has a stepped bronze extrusion, ivory face, a slow perspective arrival, restrained travelling highlight and synchronized underlighting. Reduced motion shows a static title.

## Performance release

The homepage loads only entry and motion code: 11,364 bytes instead of 37,758 bytes of JavaScript before this release (70% less, uncompressed). It no longer downloads menu/dialog logic. No external font or JavaScript CDN is required.

Images use native responsive source selection, explicit dimensions and asynchronous decoding. Below-fold images load lazily; opening experience images retain high priority. Existing full-resolution WebP files remain available in the image viewer. `_headers` defines revalidation for page/code updates and a one-day asset cache on Cloudflare Pages.

Scroll motion batches layout reads before writes, caches element lookups and changes counters only when their value changes. Hero lighting pauses offscreen or in a background tab. Menu entrance animations are limited to 12 items; search text and category counts are cached. Removed duplicate native cross-document transitions and restored entry state when navigating back.

Verified JavaScript syntax, local asset references, 183 unique menu records, responsive desktop/mobile layouts, menu search, saved-order quantities/totals and staff summary, plus VIP 6 capacity/rate and inquiry defaults. These are functional checks, not a Lighthouse score or a real-device speed benchmark.

See `DEPLOY.md` for the independent GitHub / Cloudflare Pages export.
