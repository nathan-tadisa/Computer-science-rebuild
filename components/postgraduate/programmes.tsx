"use client"

import { useState } from "react"
import Link from "next/link"
import { GraduationCap, Award, BookOpen, ExternalLink } from "lucide-react"

const programmes = [
  {
    id: "honours",
    title: "Honours in Computer Science",
    icon: GraduationCap,
    duration: "1 year full-time (max 2 years part-time)",
    description: "Deepen your expertise with advanced coursework and a research project. The Honours programme bridges undergraduate study and postgraduate research.",
    requirements: [
      "CS degree covering the core curriculum",
      "At least 65% average in final-year CS modules (highly competitive)",
      "Strong mathematical foundation (Algebra and Calculus)",
      "At least 32 credits at 2nd/3rd-year level in quantitative modules (Math, Applied Math, Physics, Stats, Bioinformatics, Operations Research, or GIT242/GIT341)",
      "Practical programming experience"
    ],
    color: "#D22730"
  },
  {
    id: "masters",
    title: "Master's in Computer Science",
    icon: Award,
    duration: "1-2 years full-time (3-4 years part-time)",
    description: "Pursue original research under expert supervision. Choose between coursework-and-dissertation or pure-research tracks.",
    requirements: [
      "CS degree covering the core curriculum",
      "Honours degree in Computer Science or related field"
    ],
    color: "#61223B"
  },
  {
    id: "phd",
    title: "Doctoral (PhD) in Computer Science",
    icon: BookOpen,
    duration: "3-4 years full-time",
    description: "Contribute new knowledge to the field through independent research. Join our vibrant research community and work alongside world-class academics.",
    requirements: [
      "Thesis-based Master's degree",
      "Degree covering required CS background",
      "Demonstrated research capability"
    ],
    color: "#CAA258"
  }
]

export default function PostgraduateProgrammes() {
  const [activeTab, setActiveTab] = useState("honours")

  const activeProgramme = programmes.find(p => p.id === activeTab)

  return (
    <section id="programmes" className="bg-white py-20 relative overflow-hidden">
      {/* S-graphic background pattern */}
      <div className="absolute top-0 right-0 h-full opacity-10 pointer-events-none">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-02.svg" 
          alt="" 
          className="h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-[#D22730]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#61223B]">
              Degree programmes
            </span>
            <div className="w-12 h-0.5 bg-[#D22730]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#61223B] mb-6">
            Choose your programme
          </h2>
          <p className="text-lg text-[#4D5356] font-medium max-w-3xl mx-auto">
            We offer three postgraduate degree levels, each designed to advance your expertise and research capabilities in computer science.
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {programmes.map((programme) => {
            const Icon = programme.icon
            return (
              <button
                key={programme.id}
                onClick={() => setActiveTab(programme.id)}
                className={`flex items-center gap-2 px-6 py-3 font-bold text-sm transition-all ${
                  activeTab === programme.id
                    ? 'bg-[#61223B] text-white'
                    : 'bg-[#F5F5F5] text-[#4D5356] hover:bg-[#E2E2E2]'
                }`}
              >
                <Icon size={18} />
                {programme.title.split(' in ')[0]}
              </button>
            )
          })}
        </div>
        
        {/* Active Programme Content */}
        {activeProgramme && (
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8">
              <div className="bg-[#F5F5F5] p-8 border-l-4" style={{ borderColor: activeProgramme.color }}>
                <div className="flex items-start gap-4 mb-6">
                  <div 
                    className="w-16 h-16 flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: activeProgramme.color }}
                  >
                    {(() => {
                      const Icon = activeProgramme.icon
                      return <Icon size={28} className="text-white" />
                    })()}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2D2D2D] mb-2">
                      {activeProgramme.title}
                    </h3>
                    <p className="text-xs font-bold text-[#4D5356] uppercase tracking-wider">
                      {activeProgramme.duration}
                    </p>
                  </div>
                </div>
                
                <p className="text-base text-[#4D5356] font-medium leading-relaxed mb-6">
                  {activeProgramme.description}
                </p>
                
                <div>
                  <h4 className="text-lg font-bold text-[#2D2D2D] mb-4">
                    Entry requirements
                  </h4>
                  <ul className="space-y-3">
                    {activeProgramme.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div 
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: activeProgramme.color }}
                        />
                        <span className="text-sm text-[#4D5356] font-medium leading-relaxed">
                          {req}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="col-span-12 lg:col-span-4">
              <div className="bg-[#61223B] p-6 text-white mb-6">
                <h4 className="text-lg font-bold mb-3">Important note</h4>
                <p className="text-sm font-medium leading-relaxed opacity-90">
                  Meeting minimum requirements ensures consideration but does not guarantee admission due to limited capacity.
                </p>
              </div>
              
              {/* Structured MSc Card */}
              <div className="bg-[#CAA258]/10 p-6 border-l-4 border-[#CAA258]">
                <h4 className="text-lg font-bold text-[#2D2D2D] mb-3">
                  Structured MSc in ML and AI
                </h4>
                <p className="text-sm text-[#4D5356] font-medium leading-relaxed mb-4">
                  Interested in a structured Master's programme focused on Machine Learning and Artificial Intelligence?
                </p>
                <Link
                  href="https://mlai.sun.ac.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#61223B] hover:text-[#D22730] transition-colors"
                >
                  Visit mlai.sun.ac.za
                  <ExternalLink size={14} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
