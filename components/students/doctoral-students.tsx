"use client"

import { useState, useMemo } from "react"
import { Search, User } from "lucide-react"

const doctoralStudents = [
  {
    name: "Adekunle Adekoya",
    supervisor: "Andries Engelbrecht",
    topic: "Multi-Objective Optimization for Dynamic Incremental Machine Learning Algorithms"
  },
  {
    name: "Winston Anderson",
    supervisor: "Lynette van Zijl",
    topic: "The Role of Multilingual Semantic and Semantic Web Technologies in Automated Assessment"
  },
  {
    name: "Willem Bester",
    supervisor: "Brink van der Merwe",
    topic: "The pathology, amelioration and cure of catastrophic backtracking in extended regular expressions"
  },
  {
    name: "Dave Bockus",
    supervisor: "Andries Engelbrecht",
    topic: "High Dimensional Fitness Landscape Analysis"
  },
  {
    name: "Dirko Coetsee",
    supervisor: "McElory Hoffmann, Steve Kroon",
    topic: "Automated spreadsheet integration"
  },
  {
    name: "Jordan Masakuna",
    supervisor: "Dr Simukai Utete, Steve Kroon",
    topic: "Robot games with randomisation"
  },
  {
    name: "Taivvo Omomule",
    supervisor: "Andries Engelbrecht",
    topic: "Mixtures of Heterogeneous Experts"
  },
  {
    name: "Moeketsi Raselimo",
    supervisor: "Bernd Fischer",
    topic: "Fault Localization and Repair for Grammarware"
  },
  {
    name: "Amani Saad",
    supervisor: "Andries Engelbrecht",
    topic: "Differential Evolution and optimal Population Sizes"
  }
]

export default function DoctoralStudents() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredStudents = useMemo(() => {
    if (!searchTerm) return doctoralStudents
    
    const term = searchTerm.toLowerCase()
    return doctoralStudents.filter(student => 
      student.name.toLowerCase().includes(term) ||
      student.supervisor.toLowerCase().includes(term) ||
      student.topic.toLowerCase().includes(term)
    )
  }, [searchTerm])

  return (
    <section className="bg-[#F5F5F5] py-20 relative overflow-hidden">
      {/* S-graphic background pattern */}
      <div className="absolute bottom-0 right-0 h-full opacity-10 pointer-events-none">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-04.svg" 
          alt="" 
          className="h-full w-auto object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#61223B] mb-6">
            Doctoral students
          </h2>
          <p className="text-lg text-[#4D5356] font-medium max-w-3xl mx-auto mb-8">
            Our PhD candidates are conducting original research that advances the frontiers of computer science.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4D5356]" size={20} />
              <input
                type="text"
                placeholder="Search by student name, supervisor, or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-[#E5E5E5] focus:border-[#61223B] focus:outline-none text-sm font-medium text-[#2D2D2D] placeholder:text-[#9B9B9B]"
              />
            </div>
          </div>
        </div>
        
        {/* Results Count */}
        {searchTerm && (
          <div className="text-center mb-6">
            <p className="text-sm text-[#4D5356] font-medium">
              Found {filteredStudents.length} {filteredStudents.length === 1 ? 'student' : 'students'}
            </p>
          </div>
        )}
        
        {/* Students Grid */}
        {filteredStudents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudents.map((student, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[#E5E5E5] hover:border-[#61223B] transition-colors p-6"
              >
                {/* Name */}
                <h3 className="text-lg font-bold text-[#61223B] mb-3 leading-tight">
                  {student.name}
                </h3>
                
                {/* Supervisor */}
                <div className="flex items-start gap-2 mb-4">
                  <User size={16} className="text-[#4D5356] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-[#4D5356] mb-1">Supervisor</p>
                    <p className="text-sm text-[#4D5356] font-medium">
                      {student.supervisor}
                    </p>
                  </div>
                </div>
                
                {/* Research Topic */}
                <div className="bg-[#61223B]/5 p-4 border-l-2 border-[#61223B]">
                  <p className="text-xs font-bold text-[#61223B] mb-2">Research topic</p>
                  <p className="text-sm text-[#2D2D2D] font-medium italic leading-relaxed">
                    {student.topic}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-[#4D5356] font-medium">
              No students found matching "{searchTerm}"
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
