"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: "88vh", minHeight: "580px" }}>
      {/* Full-bleed daytime campus photo */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/building 1.jpg"
          alt="Stellenbosch University Computer Science building"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Subtle gradient overlay — light at top, deeper at bottom for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.58) 72%, rgba(0,0,0,0.82) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Giant display headline centred over the building */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-start pointer-events-none select-none"
        style={{ paddingTop: "10vh" }}
      >
        <p
          className="text-white font-bold leading-none tracking-tight"
          style={{
            fontSize: "clamp(4rem, 14vw, 12rem)",
            textShadow: "0 4px 48px rgba(0,0,0,0.35)",
            opacity: 0.92,
          }}
        >
          Computer
        </p>
        <p
          className="font-bold leading-none tracking-tight"
          style={{
            fontSize: "clamp(4rem, 14vw, 12rem)",
            color: "rgba(255,255,255,0.18)",
            WebkitTextStroke: "2px rgba(255,255,255,0.60)",
            textShadow: "0 4px 48px rgba(0,0,0,0.25)",
          }}
        >
          Science
        </p>
        {/* Gold rule */}
        <div className="mt-5 w-16 h-0.5 bg-[#CAA258]" aria-hidden="true" />
        <p
          className="mt-4 text-white/80 font-medium tracking-widest uppercase"
          style={{ fontSize: "clamp(0.65rem, 1.8vw, 1rem)", letterSpacing: "0.25em" }}
        >
          Pursue &middot; Discover &middot; Together
        </p>
      </div>


    </section>
  )
}
