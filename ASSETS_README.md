# PadWorld Media Assets Guide

This project uses a centralized routing file for all images and video backgrounds to ensure ease of updates and maintenance.

## How to Update Images

1. **Prepare your files**: Ensure images are optimized for web (JPEG/WebP, <500KB ideally).
2. **Upload**: 
   - If hosting locally, place images in a `public/images/` folder.
   - If hosting on cloud (AWS S3, Cloudinary), get the public URL.
3. **Update Registry**:
   - Open `assets.ts` in the root directory.
   - Replace the URL string for the corresponding key.

## Routing Structure (`assets.ts`)

```typescript
export const ASSETS = {
  hero: {
    video: "URL_TO_HERO_VIDEO.mp4",
    poster: "URL_TO_FALLBACK_IMAGE.jpg"
  },
  dividers: {
    ecosystem: { url: "..." },
    economics: { url: "..." },
    roi: { url: "..." }
  }
}
```

## Recommended Specs

- **Hero Video**: 1080p, MP4 format, muted, <5MB size. Dark overlay is applied automatically by code.
- **Divider Images**: 1920x600px resolution, dark/moody aesthetic preferred to match the Carbon UI theme.
