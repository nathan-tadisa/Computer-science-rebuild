"use client"

import { BookOpen, Code, Cpu } from "lucide-react"

const curriculumData = [
  {
    year: "First year",
    subtitle: "Foundational",
    icon: BookOpen,
    color: "#D22730",
    modules: [
      { code: "CS 114", name: "Introductory Computer Science 1", credits: 16, semester: "Semester 1" },
      { code: "CS 144", name: "Introductory Computer Science 2", credits: 16, semester: "Semester 2" }
    ]
  },
  {
    year: "Second year",
    subtitle: "Intermediate",
    icon: Code,
    color: "#CAA258",
    modules: [
      { code: "CS 214", name: "Data Structures and Algorithms", credits: 16, semester: "Semester 1" },
      { code: "CS 244", name: "Computer Architecture", credits: 16, semester: "Semester 2" }
    ]
  },
  {
    year: "Third year",
    subtitle: "Advanced",
    icon: Cpu,
    color: "#61223B",
    note: "Must take at least two of 314/313/315",
    modules: [
      { code: "CS 314", name: "Concurrency", credits: 16, semester: "First Semester" },
      { code: "CS 313", name: "Computer Networks", credits: 16, semester: "First Semester" },
      { code: "CS 315", name: "Machine Learning", credits: 16, semester: "First Semester" },
      { code: "CS 344", name: "Program Design / Software Engineering", credits: 16, semester: "Second Semester" },
      { code: "CS 343", name: "Databases and Web Centric Programming", credits: 16, semester: "Second Semester" },
      { code: "CS 345", name: "Computability and Automata", credits: 16, semester: "Second Semester" }
    ]
  }
]

export default function CurriculumPathway() {
  return (
    <section className="bg-[#F5F5F5] py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-[#D22730]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#61223B]">
              Degree pathway
            </span>
            <div className="w-12 h-0.5 bg-[#D22730]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#61223B] mb-6">
            Core curriculum visualiser
          </h2>
          <p className="text-lg text-[#4D5356] font-medium max-w-3xl mx-auto">
            Follow the structured pathway through the Computer Science curriculum, from foundational concepts to advanced topics.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="max-w-5xl mx-auto space-y-8">
          {curriculumData.map((yearData, yearIndex) => {
            const Icon = yearData.icon
            
            return (
              <div key={yearIndex} className="relative">
                {/* Connector line */}
                {yearIndex < curriculumData.length - 1 && (
                  <div 
                    className="absolute left-6 top-20 w-0.5 h-full"
                    style={{ backgroundColor: yearData.color, opacity: 0.3 }}
                  />
                )}
                
                <div className="bg-white p-8 border-l-4" style={{ borderColor: yearData.color }}>
                  {/* Year header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div 
                      className="flex-shrink-0 w-12 h-12 flex items-center justify-center"
                      style={{ backgroundColor: yearData.color }}
                    >
                      <Icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#61223B]">
                        {yearData.year}
                      </h3>
                      <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: yearData.color }}>
                        {yearData.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  {/* Note if exists */}
                  {yearData.note && (
                    <div className="mb-4 bg-[#CAA258]/10 border-l-2 border-[#CAA258] px-4 py-2">
                      <p className="text-sm font-bold text-[#61223B]">
                        Note: {yearData.note}
                      </p>
                    </div>
                  )}
                  
                  {/* Modules grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {yearData.modules.map((module, moduleIndex) => (
                      <div 
                        key={moduleIndex}
                        className="bg-[#F5F5F5] p-4 hover:bg-white hover:shadow-md transition-all"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <span 
                            className="text-xs font-bold px-2 py-1 text-white"
                            style={{ backgroundColor: yearData.color }}
                          >
                            {module.code}
                          </span>
                          <span className="text-xs font-bold text-[#4D5356]">
                            {module.credits} credits
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-[#2D2D2D] mb-2">
                          {module.name}
                        </h4>
                        <p className="text-xs font-semibold text-[#4D5356] uppercase tracking-wider">
                          {module.semester}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      
      {/* S-graphic background pattern */}
      <div className="absolute bottom-0 right-0 h-full opacity-10 pointer-events-none">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-04.svg" 
          alt="" 
          className="h-full object-cover"
        />
      </div>
    </section>
  )
}
