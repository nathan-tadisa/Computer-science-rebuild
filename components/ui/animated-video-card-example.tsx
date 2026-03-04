/**
 * ANIMATED VIDEO CARD - USAGE EXAMPLES
 * 
 * This component creates an interactive video card with:
 * - Mouse-tracking shine effect
 * - Smooth expansion animation
 * - YouTube video playback
 */

import AnimatedVideoCard from "./animated-video-card"

export function AnimatedVideoCardExamples() {
  return (
    <div className="min-h-screen bg-[#121212] flex flex-col items-center justify-center gap-12 p-8">
      <h1 className="text-3xl font-bold text-white mb-8">
        Animated Video Card Examples
      </h1>

      {/* Example 1: Inception Movie */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4 text-center">
          Example 1: Movie Trailer
        </h2>
        <AnimatedVideoCard
          videoId="JE9z-gy4De4"
          thumbnailUrl="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1613479/inception.jpg"
        />
      </div>

      {/* Example 2: Custom Video */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4 text-center">
          Example 2: Custom Thumbnail
        </h2>
        <AnimatedVideoCard
          videoId="dQw4w9WgXcQ"
          thumbnailUrl="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
          playIconUrl="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1613479/play.svg"
        />
      </div>
    </div>
  )
}

/**
 * HOW TO USE:
 * 
 * 1. Import the component:
 *    import AnimatedVideoCard from "@/components/ui/animated-video-card"
 * 
 * 2. Use it with required props:
 *    <AnimatedVideoCard
 *      videoId="JE9z-gy4De4"
 *      thumbnailUrl="https://example.com/thumbnail.jpg"
 *    />
 * 
 * 3. Optional: Customize play icon:
 *    <AnimatedVideoCard
 *      videoId="JE9z-gy4De4"
 *      thumbnailUrl="https://example.com/thumbnail.jpg"
 *      playIconUrl="https://example.com/custom-play-icon.svg"
 *    />
 * 
 * PROPS:
 * - videoId (required): YouTube video ID (the part after ?v= in the URL)
 * - thumbnailUrl (required): URL to the thumbnail image
 * - playIconUrl (optional): URL to custom play button icon
 * 
 * FEATURES:
 * - Mouse-tracking shine effect on hover
 * - Smooth expansion animation when play is clicked
 * - Automatic YouTube video playback
 * - Fully accessible (keyboard navigation support)
 * - Responsive design
 * - Clean YouTube API integration
 * 
 * NOTES:
 * - The component automatically loads the YouTube IFrame API
 * - Video starts playing automatically after the expansion animation
 * - Works on both desktop (hover) and mobile (tap)
 * - Maintains 16:9 aspect ratio
 */
