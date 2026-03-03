"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const partialProgrammes = [
  {
    id: "bdatsci-other",
    title: "BDatSci",
    focalAreas: [
      "Applied Mathematics",
      "Statistical Physics",
      "Analytics and Optimisation",
      "Behavioural Economics",
      "Statistical Learning"
    ]
  },
  {
    id: "bsc-interdisciplinary",
    title: "BSc Interdisciplinary",
    focalAreas: [
      "Biomedical Mathematical Sciences",
      "Biomathematics",
      "Bioinformatics and Computational Biology"
    ]
  },
  {
    id: "bsc-physics",
    title: "BSc Physics",
    focalAreas: [
      "Laser Physics (Physical)",
      "Nuclear Physics",
      "Radiation and Health Physics",
      "Theoretical Physics"
    ]
  },
  {
    id: "beng-electrical",
    title: "BEng Electrical and Electronic",
    focalAreas: [
      "Data Engineering",
      "Informatics",
      "Robotics"
    ]
  },
  {
    id: "bsc-chemistry",
    title: "BSc Chemistry",
    focalAreas: [
      "Chemistry and Polymer Science",
      "Materials Technology"
    ]
  }
]

export default function PartialCSProgrammes() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-[#CAA258]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#61223B]">
              Partial curriculum options
            </span>
            <div className="w-12 h-0.5 bg-[#CAA258]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#61223B] mb-6">
            Programmes with partial CS modules
          </h2>
          <p className="text-lg text-[#4D5356] font-medium max-w-3xl mx-auto">
            The following programmes include some, but not all, Computer Science modules.
          </p>
        </div>
        
        {/* Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {partialProgrammes.map((programme) => {
            const isOpen = openItems.includes(programme.id)
            
            return (
              <div key={programme.id} className="border-l-4 border-[#CAA258] bg-[#F5F5F5]">
                <button
                  onClick={() => toggleItem(programme.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#E2E2E2] transition-colors"
                >
                  <span className="text-lg font-bold text-[#61223B]">
                    {programme.title}
                  </span>
                  {isOpen ? (
                    <ChevronUp size={20} className="text-[#61223B]" />
                  ) : (
                    <ChevronDown size={20} className="text-[#61223B]" />
                  )}
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6">
                    <h4 className="text-sm font-bold text-[#61223B] uppercase tracking-wider mb-3">
                      Focal areas
                    </h4>
                    <ul className="space-y-2">
                      {programme.focalAreas.map((area, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#CAA258] mt-2" />
                          <span className="text-base text-[#4D5356] font-medium">{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
      
      {/* S-graphic background pattern */}
      <div className="absolute top-0 right-0 h-full opacity-10 pointer-events-none">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-03.svg" 
          alt="" 
          className="h-full object-cover"
        />
      </div>
    </section>
  )
}
