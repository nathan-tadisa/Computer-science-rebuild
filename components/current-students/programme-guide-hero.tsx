"use client"

import { BookOpen, ChevronDown } from "lucide-react"

export default function ProgrammeGuideHero() {
  const scrollToContent = () => {
    const element = document.getElementById('programme-content')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/su-campus.jpg"
          alt="Computer Science programmes"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#61223B]/85" />
      </div>

      {/* S-graphic pattern */}
      <div className="absolute bottom-0 left-0 h-full opacity-10 pointer-events-none z-10">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-05.svg" 
          alt="" 
          className="h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 relative z-20">
        <div className="grid grid-cols-12 gap-8 items-center">
          
          {/* Left content */}
          <div className="col-span-12 lg:col-span-7 text-white">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-0.5 bg-[#CAA258]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#CAA258]">
                Current students
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Computer Science
              <br />
              <span className="text-[#CAA258]">programmes</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-6 max-w-xl font-medium leading-relaxed">
              BSc Computer Science is the primary option for students wanting a career in software development. This international qualification enables work at national and international companies.
            </p>
            
            <p className="text-base text-white/80 mb-8 max-w-xl font-medium leading-relaxed">
              With appropriate electives, it leads to an honours programme in Computer Science or other subjects like Applied Mathematics, Economics, or Mathematical Statistics.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToContent}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#D22730] text-white font-bold text-sm hover:bg-[#B01F28] transition-colors"
              >
                <BookOpen size={18} />
                Explore programmes
              </button>
              
              <button
                onClick={scrollToContent}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-bold text-sm hover:bg-white hover:text-[#61223B] transition-colors"
              >
                View curriculum
                <ChevronDown size={18} />
              </button>
            </div>
          </div>
          
          {/* Right badge */}
          <div className="col-span-12 lg:col-span-5 relative">
            <div className="bg-white/95 backdrop-blur-sm p-8">
              <p className="text-lg font-bold text-[#61223B] mb-3">Complete programme guide</p>
              <p className="text-sm text-[#4D5356] font-medium">
                Explore degree options, focal areas, and curriculum pathways
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
