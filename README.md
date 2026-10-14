# GARAGE 73 PUB — QR Menu

Responsive, mobile-first static HTML menu based on the supplied `image_1.jpg`–`image_7.jpg` screen references.

## Files
- `index.html` — all screen layouts, navigation, responsive styling and interactions
- `menu-data.json` — editable local menu data (dish categories, items, drink categories and prices)
- `assets/screens/` — original reference images extracted from the supplied ZIP
- `assets/photos/` — image crops prepared from the supplied screen references for cards and hero panels

## Run it
The page fetches `menu-data.json`, so use a static web server or publish the folder to GitHub Pages. For GitHub Pages, upload the contents of this folder to the repository root, keeping the same folder structure. Open `index.html` through the published URL, then use that URL for your QR code.

## Important data notes
- Prices not present in the supplied material are shown as `—`; replace them in `menu-data.json` when confirmed.
- Some food photo crops are reused placeholders because the archive contains seven full-screen mockups, not individual photographs for every menu item. Replace files under `assets/photos/` with original item photos later without changing the data schema.
- No cart, ordering or checkout features are included.
