# Tisha Cafe research snapshot

Checked 2 November 2026. This file is background for the proposed site, not publish-ready café copy. The supplied menu JSON is preserved verbatim at `src/data/tisha_cafe_menu.research.json`; `src/data/business.js` contains the shorter, source-aware facts intended for future components.

## Visit details

| Detail | Current evidence | Publishing status |
| --- | --- | --- |
| Name | Tisha Cafe | Usable |
| Address | Shop 25, Tanishka Vikrant Building, Ward N, R.B Mehta Road, Ghatkopar East, Mumbai, Maharashtra 400077 ([District](https://www.district.in/dining/mumbai/tisha-cafe-ghatkopar-east), [Zomato](https://www.zomato.com/mumbai/tisha-cafe-ghatkopar-east/info)) | Verify postcode and map pin with café |
| Public phone | +91 90047 89358 ([Zomato](https://www.zomato.com/mumbai/tisha-cafe-ghatkopar-east/info)) | Confirm before publishing a call CTA |
| Instagram | [@tishacafe_](https://www.instagram.com/tishacafe_/) (user supplied) | Usable as a link |
| Hours | Instagram bio reported as 7:30 AM–3:00 AM in supplied research; [Zomato](https://www.zomato.com/mumbai/tisha-cafe-ghatkopar-east/info) shows 9:00 AM–11:45 PM plus midnight–2:00 AM. [District](https://www.district.in/dining/mumbai/tisha-cafe-ghatkopar-east) compact display shows only 9:00 AM–11:45 PM. | **Unresolved**; confirm dine-in, kitchen, takeaway and delivery separately |
| Service modes | Dine-in, takeaway and delivery listed by [Zomato](https://www.zomato.com/mumbai/tisha-cafe-ghatkopar-east/info) | Confirm actual channels and booking process |
| Approximate spend | ₹1,500 for two on [District](https://www.district.in/dining/mumbai/tisha-cafe-ghatkopar-east) and [Zomato](https://www.zomato.com/mumbai/tisha-cafe-ghatkopar-east/info) | Dynamic estimate; not a menu price |

The supplied research says an indexed Instagram announcement advertised a grand opening on **19 June 2026**, noon onwards, with live music from 6 PM. The original post was not retrievable in this pass, so this is an advertised event date, not the legal establishment date. The owner and Instagram operator remain unknown. A [JobHai listing](https://www.jobhai.com/housekeeping-house-keeping-staff-job-in-tisha-cafe-ghatkopar-east-mumbai-0-to-2-years-1791189114-8463710-jid) names **Priyanka** only as a recruitment contact.

## Menu and content

The supplied source-separated catalog has **181 indexed Zomato item rows** (107 food, 74 beverages) and **94 District photographed menu rows** (62 food, 32 beverages), including **151 priced options** on the printed District pages. Source categories and discrepancy flags are retained. The two sets overlap and should never be merged by title alone. The photographed menu is labelled “updated 3 months ago” on [District](https://www.district.in/dining/mumbai/tisha-cafe-ghatkopar-east).

A separate [IndiaRestros listing](https://indiarestros.com/r/tisha-cafe-ghatkopar-east-mqrhr1x0pf) now displays prices for 181 items and claims a menu update of 11 October 2026. It is a third-party snapshot, not a verified live Zomato export; those prices have **not** been inserted into either source catalog. A site menu needs café approval on items, prices, variants, availability, dietary labels and photos.

Visible category signals include momos, pizza, sandwiches, coffee, shakes, juices, desserts and mocktails ([Zomato](https://www.zomato.com/mumbai/tisha-cafe-ghatkopar-east/info), [source catalog](src/data/tisha_cafe_menu.research.json)). Matcha and late-night positioning are useful leads from the supplied brief, but should be confirmed for current availability and operating hours. Do not turn review claims about Jain preparation, alcohol, games or events into official business facts without confirmation.

The most important menu discrepancies already flagged in the JSON are duplicate **Peri Peri Fries** and **Veg Grill Sandwich** prices, a steep Burrata Cheese Pizza size progression, unusual Zomato category placements, and different channel assortments.

## Media inventory

`src/data/assetManifest.js` records the four District menu-image URLs and five listing-photo URLs. The folder structure is ready under `src/assets/{brand,food,ambience,menu,reviews,reels}`. Five original **generated concept** images now support the preview UI and are listed separately in the manifest; they do not depict the actual café or approved menu item photography. The exact logo appears in the chat attachment but has no accessible file in the workspace; no replacement logo has been invented. Image downloads from `b.zmtcdn.com` failed in this environment, so the public-media manifest deliberately has `localPath: null`. The listing photos remain unclassified until visually inspected; their URLs should not be used in the live site without confirming reuse rights and receiving suitable originals from the café.

## Design system starting point

The logo has muted sage lettering, coffee-brown coffee bean and flower accents, and a warm white field. `tailwind.config.js` defines **sage, coffee, cream and night** scales from 50 through 950. The 500 values are visual estimates from the chat image, not pixel-sampled measurements. Use Tailwind classes throughout components; `src/index.css` contains Tailwind directives only. Framer Motion is already installed for future animation work.

## Next decisions for the café

1. Confirm exact daily hours for dine-in, kitchen, takeaway and delivery, including the midnight rollover.
2. Approve one master menu with channel differences, prices, dietary information and hero items.
3. Supply the original logo file, licensed food and ambience photos, and any reels or reviews approved for the site.
4. Confirm whether the domain `tishacafe.in`, mentioned by a third-party directory, belongs to the café; it could not be verified here.
5. Confirm who may approve business copy, the contact channel, directions pin, and any booking or ordering links.
