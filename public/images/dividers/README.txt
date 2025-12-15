PADWORLD SECTION DIVIDERS
=========================

This folder is specifically for the parallax background images that appear between dashboard sections.

---------------------------------------------------------------------
RECOMMENDED FILENAMES
---------------------------------------------------------------------
Please name your images exactly as follows to match the suggestions in 'assets.ts':

1. ecosystem.jpg   -> (Divider between Hero & Ecosystem Section)
2. economics.jpg   -> (Divider between Ecosystem & Unit Economics)
3. roi.jpg         -> (Divider between Unit Economics & ROI)

---------------------------------------------------------------------
HOW TO INSTALL
---------------------------------------------------------------------
1. Paste your images into this folder: /public/images/dividers/
2. Open 'assets.ts' in the root directory.
3. Uncomment the local path lines (switch from the https:// link to the local link).

Example in assets.ts:

   ecosystem: {
     // url: "https://...",  <-- Comment this out
     url: "/images/dividers/ecosystem.jpg",  <-- Uncomment this
     ...
   }

---------------------------------------------------------------------
IMAGE SPECIFICATIONS
---------------------------------------------------------------------
- Resolution:  1920x1080 (HD) or 2560x1440 (2K)
- Orientation: Landscape
- Style:       Dark, moody, abstract, concrete, or financial data.
               The app automatically applies a dark overlay, so bright images will work but look darker.
