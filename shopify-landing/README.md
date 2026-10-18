# Noir Puja — Shopify landing page

A single-product festive landing page built as Shopify Online Store 2.0 sections,
with a static preview you can run locally without a store.

## Run the preview

```bash
cd shopify-landing
python3 -m http.server 8080
# open http://localhost:8080/preview/
```

The preview uses the same `assets/noir-landing.css` and `assets/noir-landing.js` as the
theme sections. It runs with sample variants, and "Add to cart" shows a toast instead of
calling the cart.

## Install in a Shopify theme

Copy the folders into your theme (Dawn or any OS 2.0 theme):

| Folder | Files |
| --- | --- |
| `sections/` | `noir-announcement`, `noir-hero`, `noir-trust`, `noir-product`, `noir-features`, `noir-steps`, `noir-testimonials`, `noir-faq`, `noir-cta` |
| `snippets/` | `noir-assets.liquid` (fonts, CSS and JS, rendered by every section) |
| `assets/` | `noir-landing.css`, `noir-landing.js`, `noir-diya.svg` (placeholder art) |
| `templates/` | `page.noir-puja.json` |

With Shopify CLI: `shopify theme push --only sections/noir-* snippets/noir-* assets/noir-* templates/page.noir-puja.json`
(or `shopify theme dev` to try it on a development theme first).

Then:

1. **Online Store → Pages → Add page**, set **Theme template** to `page.noir-puja`.
2. Open it in the theme editor and choose your product in the **Noir product** section.
3. Replace the copy, hero image, stats and sample reviews with your own. Everything is an
   editable setting or block.

Every section also has a preset, so you can add any of them to other pages or to a product
template. On a product template, **Noir product** uses the current product when its product
setting is left blank.

## What the sections do

- **Product form** posts to `/cart/add.js` (AJAX) and falls back to a normal form submit.
  The variant picker updates the price, compare-at price, "Save %" badge and sold-out state
  from `product.variants`. Prices use your store's `shop.money_format`.
- **Sticky add-to-cart** appears on mobile once the buy box scrolls out of view.
- **Countdowns** take an ISO date (`2026-10-31T23:59:59+05:30`). They hide themselves if the
  date is invalid.
- **FAQ** outputs `FAQPage` structured data.
- The JS re-initialises on `shopify:section:load`, so the theme editor shows changes live.

Checked with Shopify Theme Check (`@shopify/theme-check-node`): no errors. The only warnings
are that the Google Fonts links are not served from Shopify's CDN. To clear them, upload the
font files to `assets/` or use your theme's font settings.
