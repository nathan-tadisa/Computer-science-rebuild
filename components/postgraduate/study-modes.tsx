"use client"

import { useState } from "react"
import { ChevronDown, Clock, Globe } from "lucide-react"

const sections = [
  {
    id: "part-time",
    icon: Clock,
    title: "Part-time studies",
    content: [
      {
        subtitle: "Honours",
        points: [
          "Can extend to a maximum of two consecutive years",
          "The project must be completed in year 1 or 2",
          "All 6 semester-modules are presented during working hours",
          "No after-hours lectures available",
          "Employer arrangement required for attendance"
        ]
      },
      {
        subtitle: "Master's",
        points: [
          "Extends over 3-4 years part-time",
          "Flexible research schedule with supervisor agreement",
          "Regular meetings with supervisor required"
        ]
      }
    ]
  },
  {
    id: "international",
    icon: Globe,
    title: "Foreign students",
    content: [
      {
        subtitle: "Application process",
        points: [
          "Foreign students are welcomed to apply",
          "Must contact the university's Postgraduate Office for administrative details",
          "Additional documentation may be required for visa purposes"
        ]
      },
      {
        subtitle: "Academic information",
        points: [
          "16 credit modules equal 8 ECTS credits",
          "All modules are presented in English",
          "No Afrikaans language requirement"
        ]
      }
    ]
  }
]

export default function StudyModes() {
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id)
  }

  return (
    <section className="bg-[#F5F5F5] py-20 relative overflow-hidden">
      {/* S-graphic background pattern */}
      <div className="absolute top-0 left-0 h-full opacity-10 pointer-events-none">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-05.svg" 
          alt="" 
          className="h-full object-cover"
        />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-[#D22730]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#61223B]">
              Study options
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#61223B] mb-6">
            Study modes & international students
          </h2>
          <p className="text-lg text-[#4D5356] font-medium leading-relaxed">
            We accommodate various study arrangements to suit your circumstances, whether you're working full-time or joining us from abroad.
          </p>
        </div>
        
        {/* Accordion */}
        <div className="space-y-4">
          {sections.map((section) => {
            const Icon = section.icon
            const isOpen = openSection === section.id
            
            return (
              <div
                key={section.id}
                className="bg-white border-l-4 border-[#D22730] overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F5F5F5] transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#D22730] flex items-center justify-center">
                      <Icon size={20} className="text-white" />
                    </div>
                    <span className="text-xl font-bold text-[#2D2D2D]">
                      {section.title}
                    </span>
                  </div>
                  <ChevronDown
                    size={24}
                    className={`text-[#61223B] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-[1000px]' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6 space-y-6">
                    {section.content.map((item, index) => (
                      <div key={index}>
                        <h4 className="text-base font-bold text-[#2D2D2D] mb-3">
                          {item.subtitle}
                        </h4>
                        <ul className="space-y-2">
                          {item.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 bg-[#D22730] rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm text-[#4D5356] font-medium leading-relaxed">
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
