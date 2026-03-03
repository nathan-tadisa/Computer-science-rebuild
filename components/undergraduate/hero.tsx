"use client"

import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"

export default function UndergraduateHero() {
  const scrollToContent = () => {
    const element = document.getElementById('what-is-cs')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative bg-[#61223B] overflow-hidden min-h-screen flex items-center">
      {/* Full background image */}
      <div className="absolute inset-0">
        <img
          src="/images/su-campus-day.jpg"
          alt="Students studying computer science"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#61223B]/80" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 relative z-10">
        <div className="grid grid-cols-12 gap-8 items-center">
          
          {/* Content */}
          <div className="col-span-12 lg:col-span-8 text-white">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-0.5 bg-[#CAA258]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#CAA258]">
                Undergraduate study
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Build the
              <br />
              <span className="text-[#CAA258]">digital future</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-xl font-medium leading-relaxed">
              Transform your curiosity into expertise. Our undergraduate programmes equip you with the skills to solve tomorrow's challenges through code, algorithms, and innovation.
            </p>
            
            {/* Join us badge */}
            <div className="inline-block bg-white/95 backdrop-blur-sm p-6 mb-8">
              <p className="text-2xl font-bold text-[#61223B] mb-2">Join us in 2027</p>
              <p className="text-sm text-[#4D5356] font-medium">
                Applications open April 2026 • Be part of Africa's leading CS programme
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link
                href="#how-to-apply"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#D22730] text-white font-bold text-sm hover:bg-[#B01F28] transition-colors"
              >
                Apply now
                <ArrowRight size={18} />
              </Link>
              
              <button
                onClick={scrollToContent}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-bold text-sm hover:bg-white hover:text-[#61223B] transition-colors"
              >
                Learn more
                <ChevronDown size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative S-graphic pattern */}
      <div className="absolute bottom-0 left-0 h-full opacity-10 pointer-events-none">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-01.svg" 
          alt="" 
          className="h-full w-auto object-cover"
        />
      </div>
    </section>
  )
}
