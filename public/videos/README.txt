PADWORLD VIDEO ASSETS
=====================

Place your local video files in this folder.

How to use:
1. Save your video loop here (e.g., 'hero-loop.mp4').
2. In 'assets.ts', update the URL:

   hero: {
     video: "/videos/hero-loop.mp4",
     ...
   }

Recommendations:
- Format: MP4 (H.264)
- Size: Keep under 5MB for fast loading
- Audio: Remove audio track (muted by default in code)
