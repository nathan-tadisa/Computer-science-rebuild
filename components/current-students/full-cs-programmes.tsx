"use client"

import { useState } from "react"
import { GraduationCap } from "lucide-react"

const programmes = [
  {
    id: "bsc-cs",
    title: "BSc Computer Science",
    description: "Contains the full core curriculum. Taking at least 32 credits of quantitative modules at the 2nd/3rd-year level can lead to a CS honours programme. General CS allows for additional 3rd-year CS electives.",
    focalAreas: [
      "General Computer Science",
      "Computer Systems",
      "Data Science"
    ],
    color: "#D22730"
  },
  {
    id: "bdatsci",
    title: "Interfaculty BDatSci (Data Science)",
    description: "A four-year programme (NQF level 8). Students register in the faculty offering their focal area. The Computer Science focal area contains the full CS curriculum.",
    focalAreas: [
      "Computer Science"
    ],
    color: "#CAA258"
  },
  {
    id: "other-math",
    title: "Other Mathematical & Economic Sciences",
    description: "Various programmes within the Faculty of Economic and Management Sciences and Faculty of Science that include computer science components.",
    focalAreas: [
      "BSc Mathematical Sciences: Applied Mathematics",
      "BSc Mathematical Sciences: Mathematics",
      "BSc Mathematical Sciences: Abstract Mathematics",
      "BSc Mathematical Sciences: Operations Research",
      "BCom Mathematical Sciences: Data Science",
      "BCom Economic Sciences",
      "BSc GeoInformatics"
    ],
    color: "#61223B"
  }
]

export default function FullCSProgrammes() {
  const [activeTab, setActiveTab] = useState("bsc-cs")
  
  const activeProgramme = programmes.find(p => p.id === activeTab)

  return (
    <section className="bg-[#F5F5F5] py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-[#D22730]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#61223B]">
              Full curriculum options
            </span>
            <div className="w-12 h-0.5 bg-[#D22730]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#61223B] mb-6">
            Programmes with a full CS curriculum
          </h2>
          <p className="text-lg text-[#4D5356] font-medium max-w-3xl mx-auto">
            These programmes include the complete Computer Science core curriculum and can lead to honours in Computer Science.
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {programmes.map((programme) => (
            <button
              key={programme.id}
              onClick={() => setActiveTab(programme.id)}
              className={`px-6 py-3 font-bold text-sm transition-all ${
                activeTab === programme.id
                  ? 'bg-[#61223B] text-white'
                  : 'bg-white text-[#4D5356] hover:bg-[#E2E2E2]'
              }`}
            >
              {programme.title}
            </button>
          ))}
        </div>
        
        {/* Content */}
        {activeProgramme && (
          <div className="max-w-4xl mx-auto bg-white p-8 border-l-4" style={{ borderColor: activeProgramme.color }}>
            <div className="flex items-start gap-4 mb-6">
              <div 
                className="flex-shrink-0 w-12 h-12 flex items-center justify-center"
                style={{ backgroundColor: activeProgramme.color }}
              >
                <GraduationCap size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#61223B] mb-3">
                  {activeProgramme.title}
                </h3>
                <p className="text-base text-[#4D5356] font-medium leading-relaxed">
                  {activeProgramme.description}
                </p>
              </div>
            </div>
            
            <div className="bg-[#F5F5F5] p-6">
              <h4 className="text-sm font-bold text-[#61223B] uppercase tracking-wider mb-4">
                Focal areas
              </h4>
              <ul className="space-y-2">
                {activeProgramme.focalAreas.map((area, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span 
                      className="flex-shrink-0 w-1.5 h-1.5 mt-2"
                      style={{ backgroundColor: activeProgramme.color }}
                    />
                    <span className="text-base text-[#4D5356] font-medium">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      
      {/* S-graphic background pattern */}
      <div className="absolute bottom-0 left-0 h-full opacity-10 pointer-events-none">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-02.svg" 
          alt="" 
          className="h-full object-cover"
        />
      </div>
    </section>
  )
}
