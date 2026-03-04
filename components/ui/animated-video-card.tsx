"use client"

import { useState, useRef, useEffect } from "react"
import { X } from "lucide-react"
import styles from "./animated-video-card.module.css"

interface AnimatedVideoCardProps {
  videoId: string
  thumbnailUrl: string
  playIconUrl?: string
}

// Extend Window interface for YouTube API
declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: () => void
  }
}

export default function AnimatedVideoCard({
  videoId,
  thumbnailUrl,
  playIconUrl = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1613479/play.svg"
}: AnimatedVideoCardProps) {
  const [isAnimating, setIsAnimating] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isApiReady, setIsApiReady] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<any>(null)

  // Load YouTube IFrame API
  useEffect(() => {
    // Check if API is already loaded
    if (window.YT && window.YT.Player) {
      setIsApiReady(true)
      return
    }

    // Load the API script
    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    tag.async = true

    const firstScriptTag = document.getElementsByTagName("script")[0]
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

    // Set up the callback
    window.onYouTubeIframeAPIReady = () => {
      setIsApiReady(true)
    }

    return () => {
      // Cleanup
      delete window.onYouTubeIframeAPIReady
    }
  }, [])

  // Initialize YouTube player when API is ready and video should be shown
  useEffect(() => {
    if (isApiReady && showVideo && !playerRef.current) {
      playerRef.current = new window.YT.Player(`youtube-player-${videoId}`, {
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          enablejsapi: 1,
          html5: 1,
          iv_load_policy: 3,
          rel: 0,
          showinfo: 0,
          modestbranding: 1
        },
        events: {
          onReady: (event: any) => {
            event.target.playVideo()
          }
        }
      })
    }
  }, [isApiReady, showVideo, videoId])

  // Prevent body scroll when fullscreen
  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isFullscreen])

  // Mouse tracking for shine effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isAnimating) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    cardRef.current.style.setProperty("--x", `${x}px`)
    cardRef.current.style.setProperty("--y", `${y}px`)
  }

  // Handle play button click
  const handlePlayClick = () => {
    setIsAnimating(true)
    setIsFullscreen(true)

    // Wait for expansion animation to complete before showing video
    setTimeout(() => {
      setShowVideo(true)
    }, 500)
  }

  // Handle close button click
  const handleClose = () => {
    // Stop the video if playing
    if (playerRef.current && playerRef.current.stopVideo) {
      playerRef.current.stopVideo()
    }
    
    setIsFullscreen(false)
    setShowVideo(false)
    setIsAnimating(false)
    
    // Destroy the player to clean up
    if (playerRef.current && playerRef.current.destroy) {
      playerRef.current.destroy()
      playerRef.current = null
    }
  }

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        handleClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isFullscreen])

  return (
    <>
      {/* Original Card */}
      <div
        ref={cardRef}
        className={`${styles.card} ${isAnimating && !isFullscreen ? styles.videoIsOpen : ""}`}
        onMouseMove={handleMouseMove}
        style={{
          backgroundImage: `url(${thumbnailUrl})`
        }}
      >
        {/* Play Button */}
        <div
          className={styles.cardPlay}
          onClick={handlePlayClick}
          style={{
            backgroundImage: `url(${playIconUrl})`
          }}
          role="button"
          aria-label="Play video"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault()
              handlePlayClick()
            }
          }}
        />
      </div>

      {/* Fullscreen Modal Overlay */}
      {isFullscreen && (
        <div className={styles.modalOverlay} onClick={handleClose}>
          <div 
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className={styles.closeButton}
              onClick={handleClose}
              aria-label="Close video"
            >
              <X size={24} />
            </button>

            {/* Video Container */}
            {showVideo && (
              <div className={styles.modalVideo}>
                <div id={`youtube-player-${videoId}`} />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
