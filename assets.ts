/**
 * PADWORLD ASSET REGISTRY
 * -----------------------
 * This file acts as the router for all static media assets (images/videos).
 * To update images, upload your file to your public folder (or cloud storage)
 * and replace the URL strings below.
 */

export const ASSETS = {
  hero: {
    // Background video for the main landing area. 
    // Recommended: Abstract, dark, slow-moving network or financial data loops.
    // ONLINE EXAMPLE:
    video: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-blue-grid-962-large.mp4",
    // LOCAL FILE (Place 'hero.mp4' in public/videos/):
    // video: "/videos/hero.mp4",

    // Fallback image if video fails or on mobile low-data modes
    poster: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&auto=format&fit=crop"
  },
  dividers: {
    // Divider 1: Between Hero and Ecosystem
    ecosystem: {
      // ONLINE EXAMPLE:
      url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop",
      // LOCAL FILE (Place 'ecosystem.jpg' in public/images/dividers/):
      // url: "/images/dividers/ecosystem.jpg",
      
      title: "Vertical Integration",
      subtitle: "System Architecture",
      slogan: "One Engine. Infinite Scale."
    },
    // Divider 2: Between Ecosystem and Unit Economics
    economics: {
      // ONLINE EXAMPLE:
      url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
      // LOCAL FILE (Place 'economics.jpg' in public/images/dividers/):
      // url: "/images/dividers/economics.jpg",
      
      title: "Hyper-Scalability",
      subtitle: "Global Footprint",
      slogan: "Profitability Built Into The Core."
    },
    // Divider 3: Between Economics and ROI
    roi: {
      // ONLINE EXAMPLE:
      url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
      // LOCAL FILE (Place 'roi.jpg' in public/images/dividers/):
      // url: "/images/dividers/roi.jpg",
      
      title: "Capital Efficiency",
      subtitle: "Performance Data",
      slogan: "Returns That Reshape The Game."
    }
  }
};