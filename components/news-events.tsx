"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, ArrowRight, Trophy, Users, Lightbulb } from "lucide-react"

const newsItems = [
  {
    id: 1,
    category: "Achievement",
    icon: Trophy,
    date: "2025",
    title: "BDatSci Final-Years Win the 2025 Discovery GradHack",
    excerpt: "A team of final-year Bachelor of Data Science students developed 'InsureShield,' an AI-powered voice and text analysis system designed to detect potential insurance fraud in real-time for call-centre agents.",
    href: "https://www.su.ac.za/en/faculties/economy/news/bdatsci-final-years-win-2025-discovery-gradhack",
    featured: true
  },
  {
    id: 2,
    category: "Research",
    icon: Lightbulb,
    date: "2025",
    title: "New Science Powerhouse: NITheCS Headquarters Opens at SU",
    excerpt: "Stellenbosch University celebrated the official opening of the National Institute for Theoretical and Computational Sciences (NITheCS) headquarters, focusing on machine learning, quantum technologies, and climate modelling.",
    href: "https://www.su.ac.za/en/news/new-science-powerhouse-nithecs-set-transform-sa-research",
    featured: false
  },
  {
    id: 3,
    category: "Achievement",
    icon: Trophy,
    date: "2025",
    title: "SU Alumni Take First Place in Cambridge Misinformation Hackathon",
    excerpt: "A 'dream team' of three Stellenbosch University alumni won first place by developing an innovative web-based plugin that addresses and flags misleading numerical claims in online media reports.",
    href: "https://www.su.ac.za/en/innovus/taxonomy/term/288",
    featured: false
  }
]

export default function NewsEvents() {
  return (
    <section className="bg-[#F5F5F5] py-20 relative overflow-hidden">
      {/* S-graphic background pattern */}
      <div className="absolute top-0 left-0 h-full opacity-10 pointer-events-none">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-02.svg" 
          alt="" 
          className="h-full w-auto object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-0.5 bg-[#D22730]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#61223B]">
                News &amp; events
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#61223B] mb-4">
              Latest from the
              <br />
              Department
            </h2>
          </div>
          
          <div className="col-span-12 lg:col-span-4 flex items-end justify-start lg:justify-end">
            <Link
              href="https://www.su.ac.za/en/stories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#D22730] hover:text-[#B01F28] transition-colors"
            >
              View all news
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        
        {/* News Grid */}
        <div className="grid grid-cols-12 gap-6">
          {newsItems.map((item, index) => {
            const Icon = item.icon
            return (
              <Link
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group ${
                  index === 0 
                    ? 'col-span-12 lg:col-span-6' 
                    : 'col-span-12 md:col-span-6 lg:col-span-3'
                }`}
              >
                <div className="bg-white p-6 h-full hover:shadow-lg transition-all border-l-4 border-[#D22730]">
                  {/* Icon & Category */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#D22730] flex items-center justify-center">
                      <Icon size={18} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold tracking-wider uppercase text-[#D22730]">
                        {item.category}
                      </p>
                      <p className="text-xs text-[#6B6B6B] font-medium flex items-center gap-1">
                        <Calendar size={10} />
                        {item.date}
                      </p>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className={`font-bold text-[#2D2D2D] group-hover:text-[#61223B] transition-colors mb-3 ${
                    index === 0 ? 'text-xl' : 'text-base'
                  }`}>
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-[#4D5356] font-medium leading-relaxed mb-4">
                    {item.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-1 text-xs text-[#D22730] font-bold group-hover:gap-2 transition-all">
                    Read more
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
