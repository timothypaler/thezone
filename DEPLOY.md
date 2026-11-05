# Publish The Zone

The download is a complete static website. No npm install, build process, database, API keys or Worker is required.

## GitHub to Cloudflare Pages

1. Unzip the download. Upload the **contents** to a GitHub repository. `index.html`, `restaurant.html`, `bar.html` and `assets/` must sit at the repository root. Do not upload the ZIP itself.
2. In Cloudflare, create a **Pages** project and connect that repository. Choose **None** as the framework preset.
3. Leave the build command blank. Set the build output directory to `/` (the repository root). Leave the root directory blank.
4. Deploy. Future commits to the production branch update the site.

For a manual Pages upload, select the unzipped folder containing `index.html`. Do not create a Worker or add `wrangler` configuration.

## Edit the site

- `index.html`: opening and experience selector.
- `restaurant.html` and `bar.html`: page sections, hours, links and venue text.
- `style.css` and `design.css`: layout, typography, buttons and motion styling. Later rules in `design.css` refine earlier ones.
- `entry.js`: entry zoom and page arrival.
- `motion.js`: scroll scenes, galleries and reduced-motion behavior.
- `app.js`: menu browser, saved orders, lightbox, floor plan and inquiries.
- `menu-data.js`: all menu entries and listed prices.
- `assets/`: supplied venue images, smaller responsive copies and favicon. Keep both `name.webp` and `name-small.webp` when replacing photos. Update image dimensions and the `media` map in `app.js` if their sizes change.
- `_headers`: Cloudflare Pages cache settings.

Use a local static server when editing; for example, `python3 -m http.server 8080` from this folder. Open http://localhost:8080.

## How orders and reservations work

Saved menu choices and quantities stay in that visitor's browser. Ready to order opens a review and a staff-facing summary. Guests show it to staff or copy it; it is not sent automatically. Reservations prepare an inquiry to copy and send to the team. No live availability, staff dashboard, online payment or server-side order submission is included.

Images, posters, listed capacities/rates and menu content come from the supplied Zone materials. Confirm current hours, prices, package availability and source-menu ambiguities with the venue before launch. Video areas intentionally reserve space for supplied footage.
