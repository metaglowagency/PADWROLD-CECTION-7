
# PadWorld Divider System Guide

This presentation uses a high-performance parallax divider system to separate institutional logical blocks.

## Customizing Dividers

1.  **Imagery**: Place your institutional images in the `public/images/dividers/` directory.
2.  **Naming Convention**: Match the filenames to the keys in `assets.ts`:
    *   `stack.jpg`
    *   `economics.jpg`
    *   `scale.jpg`
    *   `roi.jpg`
    *   `fastpad.jpg`
    *   `share.jpg`
    *   `compound.jpg`
    *   `risk.jpg`
3.  **Asset Registry**: Update `assets.ts` to change the `title`, `subtitle`, or `slogan` associated with each divider.

## Visual Configuration

The `SectionDivider.tsx` component automatically handles:
- **Parallax**: Background shifts at 15% speed of scroll.
- **Grayscale/Brightness**: Automatically applies institutional filters to ensure text readability.
- **Backdrop Blur**: Uses glassmorphism on labels for a premium finish.
