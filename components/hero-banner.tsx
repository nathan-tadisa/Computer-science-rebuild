"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HeroBanner() {
  return (
    <section className="relative bg-[#61223B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid grid-cols-12 gap-8 items-center">
          
          {/* Left content */}
          <div className="col-span-12 lg:col-span-6 text-white z-10">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-0.5 bg-[#CAA258]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#CAA258]">
                World-class education
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              STELLENBOSCH
              <br />
              UNIVERSITY
              <br />
              <span className="text-[#CAA258]">WORLD RANK—</span>
              <br />
              LEADERSHIP
            </h1>
            
            <p className="text-lg text-white/80 mb-8 max-w-md font-medium">
              Your gateway to a world of higher education
            </p>
            
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#61223B] font-bold text-sm hover:bg-[#CAA258] hover:text-white transition-colors"
            >
              Unlock your potential, your future
              <ArrowRight size={18} />
            </Link>
          </div>
          
          {/* Right image */}
          <div className="col-span-12 lg:col-span-6 relative">
            <div className="relative aspect-[4/5] lg:aspect-square">
              <img
                src="/images/su-campus-day.jpg"
                alt="Student studying"
                className="w-full h-full object-cover"
              />
              {/* Trophy badge */}
              <div className="absolute top-8 right-8 w-20 h-20 bg-[#CAA258] rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-[#61223B]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative S-graphic pattern */}
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full text-white">
          <path d="M100 20 Q140 40 140 80 Q140 100 120 110 Q100 120 100 140 Q100 160 120 170 Q160 190 160 180" 
                stroke="currentColor" strokeWidth="3" fill="none"/>
        </svg>
      </div>
    </section>
  )
}
