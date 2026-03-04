"use client"

import { Brain, Cpu, Lightbulb } from "lucide-react"
import AnimatedVideoCard from "../ui/animated-video-card"

const areas = [
  {
    icon: Brain,
    title: "Theoretical Computer Science",
    timestamp: "02:43",
    description: "The mathematical foundation, exploring algorithms, cryptography, and computational complexity to solve problems as efficiently as possible.",
    color: "#D22730"
  },
  {
    icon: Cpu,
    title: "Computer Engineering",
    timestamp: "05:45",
    description: "The design of the hardware and software layers, including computer architecture, operating systems, and the programming languages used to write code.",
    color: "#61223B"
  },
  {
    icon: Lightbulb,
    title: "Applications",
    timestamp: "07:21",
    description: "Using computational power to solve real-world problems through artificial intelligence, machine learning, big data, and robotics.",
    color: "#CAA258"
  }
]

export default function WhatIsCS() {
  return (
    <section id="what-is-cs" className="bg-white py-20 relative overflow-hidden">
      {/* S-graphic background pattern */}
      <div className="absolute top-0 right-0 h-full w-auto max-w-[40%] opacity-10 pointer-events-none">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-02.svg" 
          alt="" 
          className="h-full w-auto object-cover object-right"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-[#D22730]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#61223B]">
              The fundamentals
            </span>
            <div className="w-12 h-0.5 bg-[#D22730]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#61223B] mb-6">
            What is Computer Science?
          </h2>
          <p className="text-base sm:text-lg text-[#4D5356] font-medium max-w-4xl mx-auto leading-relaxed px-4">
            Computer science is the study of exactly what computers can do. While it ultimately boils down to flipping zeroes and ones, it is the foundation for running the internet, generating lifelike graphics, and even simulating the universe. The discipline is broadly divided into three main areas:
          </p>
        </div>
        
        <div className="grid grid-cols-12 gap-8 lg:gap-12 mb-12 sm:mb-16">
          
          {/* Three Areas */}
          <div className="col-span-12 lg:col-span-7">
            <div className="space-y-4 sm:space-y-6">
              {areas.map((area) => {
                const Icon = area.icon
                return (
                  <div
                    key={area.title}
                    className="flex flex-col sm:flex-row gap-4 p-4 sm:p-6 bg-[#F5F5F5] hover:bg-white hover:shadow-lg transition-all border-l-4"
                    style={{ borderColor: area.color }}
                  >
                    <div 
                      className="w-14 h-14 flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: area.color }}
                    >
                      <Icon size={24} className="text-white" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                        <h3 className="text-base sm:text-lg font-bold text-[#2D2D2D]">
                          {area.title}
                        </h3>
                        <span className="text-xs font-bold text-[#D22730] bg-white px-2 py-1">
                          {area.timestamp}
                        </span>
                      </div>
                      <p className="text-sm text-[#4D5356] font-medium leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          
          {/* Video Preview */}
          <div className="col-span-12 lg:col-span-5">
            <div className="bg-[#2D2D2D] p-4 sm:p-6 lg:sticky lg:top-24">
              {/* Animated Video Card */}
              <div className="mb-4 flex items-center justify-center">
                <AnimatedVideoCard
                  videoId="SzJ46YA_RaA"
                  thumbnailUrl="https://img.youtube.com/vi/SzJ46YA_RaA/maxresdefault.jpg"
                />
              </div>
              
              <h3 className="text-base sm:text-lg font-bold text-white mb-3">
                Watch: The Map of Computer Science
              </h3>
              
              <p className="text-sm text-white/80 font-medium leading-relaxed mb-4">
                Get a visual overview of the entire field with this comprehensive animation. From Alan Turing's foundational computing theories to the modern forefront of artificial intelligence and virtual reality, this short video maps out the exact landscape you will explore during your degree.
              </p>
              
              <div className="flex items-center gap-2 text-xs text-white/60 font-medium">
                <span>Duration: 11:09</span>
                <span>•</span>
                <span>Domain of Science</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
