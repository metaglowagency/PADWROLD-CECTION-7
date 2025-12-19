# PadWorld Media Assets Guide

This project uses a centralized routing file (`assets.ts`) to manage all high-impact visuals, parallax backgrounds, and brand messaging.

## How to Update Media

1. **Prepare Assets**: Use high-resolution images (1920px+ width) and optimized videos (<5MB).
2. **Registry Mapping**:
   - Open `assets.ts`.
   - Update the `url`, `video`, or `poster` properties.
   - Modify `slogan` and `title` to change the on-screen brand messaging.

## Registry Structure (`assets.ts`)

### Hero Section
- `hero.video`: The main background loop.
- `hero.poster`: The fallback image used for slow connections or as a static background.
- `hero.slogan`: The primary sub-heading in the hero section.

### Section Dividers
Each divider corresponds to a transition between major financial modules:
- `ecosystem`: Hero → Revenue Stack
- `economics`: Revenue Stack → Unit Economics
- `roi`: Unit Economics → Investor Scenarios

## Recommended Specs

- **Parallax Images**: 2560x1440px, moody/abstract aesthetic.
- **Videos**: 1080p MP4, muted, H.264.
- **Local Files**: If using local files, place them in `/public/images/` and use paths like `/images/your-file.jpg`.