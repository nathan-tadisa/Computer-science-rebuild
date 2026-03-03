"use client"

import { useState } from "react"
import { X, BookOpen } from "lucide-react"

const year1Modules = [
  {
    code: "CS 114",
    name: "Introductory Computer Science",
    credits: 16,
    year: "Year 1",
    description: "Introduction to basic computer programming; formulation and solution of problems by means of computer programming; data representation and variable types (including character strings, integers, floating point numbers and Boolean variables); assignment statements; conditional execution and iteration; static data structures (arrays and records); input and output (including graphics and sound); modular programming; recursion; testing and debugging; introduction to object-oriented programming (including abstraction, encapsulation and use of existing object implementations).",
    prerequisites: "None",
    color: "#D22730"
  },
  {
    code: "CS 144",
    name: "Introductory Computer Science",
    credits: 16,
    year: "Year 1",
    description: "Further formulation and solution of problems by means of computer programming; introductory data structures and algorithms in an object-oriented set-up; key concepts in object orientation: inheritance and polymorphism; design patterns as abstractions for the creation of reusable object-oriented designs; searching and sorting algorithms; complexity theory for the analysis of algorithms; fundamental methods in the design of algorithms; dynamic data structures; regular expressions and finite automata.",
    prerequisites: "CS 114",
    color: "#D22730"
  }
]

const year2Modules = [
  {
    code: "CS 214",
    name: "Data Structures and Algorithms",
    credits: 16,
    year: "Year 2",
    description: "The classical data structures and algorithms in an object-oriented set-up. Advanced techniques for the analysis of algorithms.",
    prerequisites: "CS 144",
    color: "#CAA258"
  },
  {
    code: "CS 244",
    name: "Computer Architecture",
    credits: 16,
    year: "Year 2",
    description: "Basic computer architecture. Programming in machine language and assembly language. Assemblers, binders and loaders. Basic concepts of operating systems; memory management, process management and file systems.",
    prerequisites: "CS 144",
    color: "#CAA258"
  }
]

const year3Modules = [
  {
    code: "CS 313",
    name: "Computer Networks",
    credits: 16,
    year: "Year 3",
    description: "Introduction to networks in general and the internet in particular. Architecture and protocols. Allocation of resources and congestion control. Network security. Applications.",
    prerequisites: "CS 214, CS 244",
    color: "#61223B"
  },
  {
    code: "CS 314",
    name: "Concurrency",
    credits: 16,
    year: "Year 3",
    description: "Introduction to programming techniques and principles of concurrent systems, from operating systems to application programs. This includes communication, synchronisation, scheduling and load balancing. Several parallel and distributed architectures will be covered.",
    prerequisites: "CS 214, CS 244",
    color: "#61223B"
  },
  {
    code: "CS 315",
    name: "Machine Learning",
    credits: 16,
    year: "Year 3",
    description: "Dimension reduction techniques; machine learning techniques based on maximum-likelihood, maximum posterior and expectation-maximisation estimates; modelling using logistic regression, Gaussian mixtures and hidden Markov models.",
    prerequisites: "CS 214, Mathematics",
    color: "#61223B"
  },
  {
    code: "CS 343",
    name: "Databases and Web Centric Programming",
    credits: 16,
    year: "Year 3",
    description: "Introduction to relational databases. Mapping relational model onto object model. Implementing a database application in the context of the web. Web services. Server-side scalability. Virtualisation. Cloud Computing.",
    prerequisites: "CS 214",
    color: "#61223B"
  },
  {
    code: "CS 344",
    name: "Program Design",
    credits: 16,
    year: "Year 3",
    description: "Program specifications as guidelines for program design; reusable frameworks for program design; testability of program designs; development of a medium-sized system to illustrate the practical application of the principles of program design.",
    prerequisites: "CS 214",
    color: "#61223B"
  },
  {
    code: "CS 345",
    name: "Computability and Automata",
    credits: 16,
    year: "Year 3",
    description: "Introduction to automata theory and formal languages, computability and complexity. Regular languages, context-free languages and grammars. Turing machines. P vs NP problem and NP completeness.",
    prerequisites: "CS 214, Discrete Mathematics",
    color: "#61223B"
  }
]

type Module = typeof year1Modules[0]

export default function UndergraduateModuleCatalog() {
  const [selectedModule, setSelectedModule] = useState<Module | null>(null)
  const [activeTab, setActiveTab] = useState<"year1" | "year2" | "year3">("year1")

  const currentModules = 
    activeTab === "year1" ? year1Modules :
    activeTab === "year2" ? year2Modules :
    year3Modules

  return (
    <section id="module-catalog" className="bg-white py-20 relative overflow-hidden">
      {/* S-graphic background pattern */}
      <div className="absolute top-0 right-0 h-full opacity-10 pointer-events-none">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-04.svg" 
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
              BSc Computer Science curriculum
            </span>
            <div className="w-12 h-0.5 bg-[#D22730]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#61223B] mb-6">
            Module catalogue
          </h2>
          <p className="text-lg text-[#4D5356] font-medium max-w-3xl mx-auto">
            Click on any module card to view full details, including description, credits, and prerequisites.
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab("year1")}
            className={`flex items-center gap-2 px-6 py-3 font-bold text-sm transition-all ${
              activeTab === "year1"
                ? 'bg-[#61223B] text-white'
                : 'bg-[#F5F5F5] text-[#4D5356] hover:bg-[#E2E2E2]'
            }`}
          >
            <BookOpen size={18} />
            Year 1
          </button>
          <button
            onClick={() => setActiveTab("year2")}
            className={`flex items-center gap-2 px-6 py-3 font-bold text-sm transition-all ${
              activeTab === "year2"
                ? 'bg-[#61223B] text-white'
                : 'bg-[#F5F5F5] text-[#4D5356] hover:bg-[#E2E2E2]'
            }`}
          >
            <BookOpen size={18} />
            Year 2
          </button>
          <button
            onClick={() => setActiveTab("year3")}
            className={`flex items-center gap-2 px-6 py-3 font-bold text-sm transition-all ${
              activeTab === "year3"
                ? 'bg-[#61223B] text-white'
                : 'bg-[#F5F5F5] text-[#4D5356] hover:bg-[#E2E2E2]'
            }`}
          >
            <BookOpen size={18} />
            Year 3
          </button>
        </div>
        
        {/* Module Grid */}
        <div className="grid grid-cols-12 gap-6">
          {currentModules.map((module) => (
            <button
              key={module.code}
              onClick={() => setSelectedModule(module)}
              className="col-span-12 md:col-span-6 lg:col-span-4 text-left bg-[#F5F5F5] p-6 hover:bg-white hover:shadow-xl transition-all border-l-4 group"
              style={{ borderColor: module.color }}
            >
              <div className="flex items-start justify-between mb-3">
                <span 
                  className="text-xs font-bold px-2 py-1"
                  style={{ backgroundColor: module.color, color: 'white' }}
                >
                  {module.code}
                </span>
                <span className="text-xs font-bold text-[#4D5356]">
                  {module.credits} credits
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-[#2D2D2D] mb-2 group-hover:text-[#61223B] transition-colors">
                {module.name}
              </h3>
              
              <p className="text-xs font-semibold text-[#4D5356] uppercase tracking-wider mb-3">
                {module.year}
              </p>
              
              <p className="text-sm text-[#4D5356] font-medium leading-relaxed line-clamp-3">
                {module.description}
              </p>
              
              <div className="mt-4 flex items-center gap-1 text-xs font-bold group-hover:gap-2 transition-all" style={{ color: module.color }}>
                View details
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>
      
      {/* Modal */}
      {selectedModule && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedModule(null)}>
          <div 
            className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div 
              className="p-6 text-white"
              style={{ backgroundColor: selectedModule.color }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-sm font-bold opacity-90">{selectedModule.code}</span>
                  <h3 className="text-2xl font-bold mt-1">{selectedModule.name}</h3>
                </div>
                <button
                  onClick={() => setSelectedModule(null)}
                  className="p-2 hover:bg-white/20 transition-colors"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex items-center gap-4 text-sm font-semibold">
                <span>{selectedModule.credits} credits</span>
                <span>•</span>
                <span>{selectedModule.year}</span>
              </div>
            </div>
            
            {/* Modal Body */}
            <div className="p-6">
              <div className="mb-6">
                <h4 className="text-sm font-bold text-[#61223B] uppercase tracking-wider mb-3">
                  Description
                </h4>
                <p className="text-base text-[#4D5356] font-medium leading-relaxed">
                  {selectedModule.description}
                </p>
              </div>
              
              <div className="bg-[#F5F5F5] p-4">
                <h4 className="text-sm font-bold text-[#61223B] uppercase tracking-wider mb-2">
                  Prerequisites
                </h4>
                <p className="text-sm text-[#4D5356] font-medium">
                  {selectedModule.prerequisites}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
