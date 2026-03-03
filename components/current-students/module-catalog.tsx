"use client"

import { useState } from "react"
import { X, BookOpen, Award } from "lucide-react"

const prerequisiteModules = [
  {
    code: "CS 313",
    name: "Computer Networks",
    credits: 16,
    level: "3rd Year Core",
    description: "Introduction to networks in general and the internet in particular. Architecture and protocols. Allocation of resources and congestion control. Network security. Applications.",
    prerequisites: "2nd year CS modules",
    color: "#D22730"
  },
  {
    code: "CS 314",
    name: "Concurrency",
    credits: 16,
    level: "3rd Year Core",
    description: "Introduction to programming techniques and principles of concurrent systems, from operating systems to application programs. Includes communication, synchronisation, scheduling and load balancing.",
    prerequisites: "2nd year CS modules",
    color: "#D22730"
  },
  {
    code: "CS 315",
    name: "Machine Learning",
    credits: 16,
    level: "3rd Year Core",
    description: "Dimension reduction techniques; machine learning techniques based on maximum-likelihood, maximum posterior and expectation-maximisation estimates; modelling using logistic regression, Gaussian mixtures and hidden Markov models.",
    prerequisites: "2nd year CS modules, Mathematics",
    color: "#D22730"
  },
  {
    code: "CS 343",
    name: "Databases and Web Centric Programming",
    credits: 16,
    level: "3rd Year Core",
    description: "Introduction to relational databases. Mapping relational model onto object model. Implementing a database application in the context of the web. Web services. Server-side scalability. Virtualisation. Cloud Computing.",
    prerequisites: "2nd year CS modules",
    color: "#D22730"
  },
  {
    code: "CS 344",
    name: "Programme Design",
    credits: 16,
    level: "3rd Year Core",
    description: "Programme specifications as guidelines for programme design; reusable frameworks for programme design; testability of programme designs; development of a medium-sized system to illustrate the practical application of the principles of programme design.",
    prerequisites: "2nd year CS modules",
    color: "#D22730"
  },
  {
    code: "CS 345",
    name: "Computability and Automata",
    credits: 16,
    level: "3rd Year Core",
    description: "Introduction to automata theory and formal languages, computability and complexity. Regular languages, context-free languages and grammars. Turing machines. P vs NP problem and NP completeness.",
    prerequisites: "2nd year CS modules, Discrete Mathematics",
    color: "#D22730"
  },
  {
    code: "AppMath 364",
    name: "Applied Fourier Analysis",
    credits: 16,
    level: "3rd Year",
    description: "Prerequisite for Digital Image Processing. Fourier series, Continuous and Discrete Fourier transforms, Convolution, Laplace transform, Sturm-Liouville theory, Orthogonal functions. Applications in signal and image processing.",
    prerequisites: "2nd year Applied Mathematics",
    color: "#61223B"
  },
  {
    code: "Math/AppMath 214",
    name: "Advanced Calculus and Linear Algebra",
    credits: 16,
    level: "2nd Year",
    description: "Prerequisite for Computer Vision. Linear algebra basics, functions of more than one real variable, multiple integrals, linear transformations of real vector spaces and their matrices.",
    prerequisites: "1st year Mathematics",
    color: "#61223B"
  }
]

const honoursModules = [
  {
    code: "Module 771",
    name: "Honours Project in Computer Science",
    credits: 32,
    level: "Honours",
    compulsory: true,
    description: "The independent development of a larger computer application. The project must illustrate the student's expertise with regards to all aspects of software engineering, including formal specification, prototype development, testing and documentation.",
    prerequisites: "Admission to Honours programme",
    color: "#CAA258"
  },
  {
    code: "Module 792",
    name: "Computer Vision",
    credits: 16,
    level: "Honours",
    description: "Convolution neural networks for image classification, with extensions like transfer learning and visual attention. Further computer vision tasks include object segmentation, colourisation, style transfer and automated image captioning. Variational auto-encoders and generative adversarial networks.",
    prerequisites: "Math/AppMath 214 (Linear Algebra)",
    color: "#CAA258"
  },
  {
    code: "Module 793",
    name: "Digital Image Processing",
    credits: 16,
    level: "Honours",
    description: "Basic greyscale transformations and image enhancement techniques in the spatial domain; Fourier analysis in two dimensions and image enhancement techniques in the Fourier domain; image restoration; morphological filters; image compression techniques.",
    prerequisites: "AppMath 364 (Fourier Analysis)",
    color: "#CAA258"
  },
  {
    code: "Module 791",
    name: "Artificial Intelligence",
    credits: 16,
    level: "Honours",
    description: "Introduction to a selection of topics in artificial intelligence and optimisation Meta-heuristics. Swarm intelligence, including particle swarm optimisation and the ant colony meta-heuristic. Evolutionary computation, genetic algorithms.",
    prerequisites: "3rd year CS modules",
    color: "#CAA258"
  },
  {
    code: "Module 715",
    name: "Databases",
    credits: 16,
    level: "Honours",
    description: "Advanced database management system design principles and techniques. Possible topics include access methods, query processing and optimisation, transaction processing, distributed databases, object-oriented and object-relational databases, data warehousing and data mining.",
    prerequisites: "CS 343 or equivalent",
    color: "#CAA258"
  },
  {
    code: "Module 712",
    name: "Advanced Algorithms",
    credits: 16,
    level: "Honours",
    description: "Advanced topics in the design and analysis of algorithms and associated data structures. Topics include linear programming, approximation algorithms, randomised algorithms, probabilistic algorithms, parallel algorithms, computational geometry, and complexity theory.",
    prerequisites: "3rd year CS modules, strong mathematical foundation",
    color: "#CAA258"
  }
]

type Module = typeof prerequisiteModules[0]

export default function ModuleCatalog() {
  const [selectedModule, setSelectedModule] = useState<Module | null>(null)
  const [activeTab, setActiveTab] = useState<"prerequisites" | "honours">("prerequisites")

  const currentModules = activeTab === "prerequisites" ? prerequisiteModules : honoursModules

  return (
    <section id="module-catalog" className="bg-white py-20 relative overflow-hidden">
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
              Interactive module directory
            </span>
            <div className="w-12 h-0.5 bg-[#D22730]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#61223B] mb-6">
            Module catalog
          </h2>
          <p className="text-lg text-[#4D5356] font-medium max-w-3xl mx-auto">
            Click on any module card to view full details, including description, credits, and prerequisites.
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab("prerequisites")}
            className={`flex items-center gap-2 px-6 py-3 font-bold text-sm transition-all ${
              activeTab === "prerequisites"
                ? 'bg-[#61223B] text-white'
                : 'bg-[#F5F5F5] text-[#4D5356] hover:bg-[#E2E2E2]'
            }`}
          >
            <BookOpen size={18} />
            Prerequisite 3rd-Year Core Modules
          </button>
          <button
            onClick={() => setActiveTab("honours")}
            className={`flex items-center gap-2 px-6 py-3 font-bold text-sm transition-all ${
              activeTab === "honours"
                ? 'bg-[#61223B] text-white'
                : 'bg-[#F5F5F5] text-[#4D5356] hover:bg-[#E2E2E2]'
            }`}
          >
            <Award size={18} />
            Honours/Postgraduate Modules
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
                {module.level}
                {('compulsory' in module) && (module as any).compulsory && ' • Compulsory'}
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
                <span>{selectedModule.level}</span>
                {('compulsory' in selectedModule) && (selectedModule as any).compulsory && (
                  <>
                    <span>•</span>
                    <span>Compulsory</span>
                  </>
                )}
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
