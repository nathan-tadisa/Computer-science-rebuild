"use client"

import { useState, useMemo } from "react"
import { Search, User } from "lucide-react"

const mastersStudents = [
  {
    name: "Albertus Aribeb",
    supervisor: "Andries Engelbrecht",
    topic: "Time Series Data Clustering"
  },
  {
    name: "David Baker Effendi",
    supervisor: "Brink van der Merwe, Willem Visser",
    topic: "Applications of Graph Technology in Spatio-Temporal Data Modelling, Program Analysis and Natural Language Processing"
  },
  {
    name: "Chelsea Barraball",
    supervisor: "Andries Engelbrecht",
    topic: "Co-Evolutionary Particle Swarm Optimization in Dynamic Environments"
  },
  {
    name: "Burger Becker",
    supervisor: "Trienko Grobler",
    topic: "Classification of Radio Galaxies"
  },
  {
    name: "Neil Burger",
    supervisor: "Trienko Grobler, Waldo Kleynhans",
    topic: "Trajectory Mining and Prediction Algorithms for Vessels using AIS Data"
  },
  {
    name: "Rohan Chhipa",
    supervisor: "Andries Engelbrecht",
    topic: "Community Detection in Social Networks using Set-based Particle Swarm"
  },
  {
    name: "Heinrich Cilliers",
    supervisor: "Andries Engelbrecht",
    topic: "Adaptive Gaussian Mixture Models"
  },
  {
    name: "Chris Coetzee",
    supervisor: "Willem Bester, Bernd Fischer",
    topic: "Application of static binary instrumentation to recovering data structures and their types"
  },
  {
    name: "Andrew Collett",
    supervisor: "Brink van der Merwe, Willem Visser",
    topic: "Software Stack Architectures and their Performance"
  },
  {
    name: "Jordan Daubinet",
    supervisor: "Andries Engelbrecht",
    topic: "Multi-Agent Reinforcement Learning for Financial Trading"
  },
  {
    name: "Nicole Du Toit",
    supervisor: "Cornelia Inggs",
    topic: "Linearization Checking of Concurrent Non-blocking Data Structures"
  },
  {
    name: "Kyle Erwin",
    supervisor: "Andries Engelbrecht",
    topic: "Set-base PSO for Portfolio Optimization"
  },
  {
    name: "Ignazio Ferreira",
    supervisor: "Andries Engelbrecht",
    topic: "Neural Network Ensembles and Concept Drift"
  },
  {
    name: "Manfred Habeck",
    supervisor: "Trienko Grobler, Lynette van Zijl / Jaco Geldenhuys",
    topic: "Box-repetition Free Words"
  },
  {
    name: "Jason Jackson",
    supervisor: "Trienko Grobler, Danie Ludick",
    topic: "Interferometry Imaging and Calibration Artefacts"
  },
  {
    name: "Ryan Lang",
    supervisor: "Andries Engelbrecht",
    topic: "Landscape-aware Hyper-heuristics"
  },
  {
    name: "Fidelis Mnkandla",
    supervisor: "Andries Engelbrecht",
    topic: "Training support vector machines under the presence of concept drift using particle swarm optimization"
  },
  {
    name: "Zhunaid Mohamed",
    supervisor: "Willem Visser",
    topic: "Interpreting and explaining Rural Networks"
  },
  {
    name: "Werner Mostert",
    supervisor: "Andries Engelbrecht",
    topic: "Feature Selection Fitness Landscape Analysis"
  },
  {
    name: "Muhammed Rahman",
    supervisor: "Andries Engelbrecht",
    topic: "Genetic Programming to Induce Decision Trees in Dynamic Environments"
  },
  {
    name: "Cian Steenkamp",
    supervisor: "Andries Engelbrecht",
    topic: "Multi-Guide Particle Swarm Optimization for Many-Objective Optimization Problems"
  },
  {
    name: "Charl Steyl",
    supervisor: "McElory Hoffmann, Trienko Grobler",
    topic: "Deep Learning Framework to Predictive Maintenance"
  },
  {
    name: "Benjamin Strelitz",
    supervisor: "Andries Engelbrecht",
    topic: "Constrained multi-modal optimization using particle swarm optimization"
  },
  {
    name: "Stefan Strydom",
    supervisor: "Brink van der Merwe",
    topic: "Automatic assignment of diagnosis codes to free-form text medical notes"
  },
  {
    name: "Aksel Thele",
    supervisor: "Andries Engelbrecht",
    topic: "Honey Bee Optimization for Dynamic Environments"
  },
  {
    name: "Elan van Biljon",
    supervisor: "Steve Kroon",
    topic: "Initialisation of Noise-Regularised Neural Networks"
  },
  {
    name: "Phillip van Heerden",
    supervisor: "Willem Visser, Bernd Fischer",
    topic: "Automatic Input Language Learning with Symbolic Methods"
  },
  {
    name: "Steyn van Litsenborgh",
    supervisor: "Brink van der Merwe",
    topic: "Learning Practical Regular Expressions"
  }
]

export default function MastersStudents() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredStudents = useMemo(() => {
    if (!searchTerm) return mastersStudents
    
    const term = searchTerm.toLowerCase()
    return mastersStudents.filter(student => 
      student.name.toLowerCase().includes(term) ||
      student.supervisor.toLowerCase().includes(term) ||
      student.topic.toLowerCase().includes(term)
    )
  }, [searchTerm])

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      {/* S-graphic background pattern */}
      <div className="absolute top-0 left-0 h-full opacity-10 pointer-events-none">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-06.svg" 
          alt="" 
          className="h-full w-auto object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#61223B] mb-6">
            Master's students
          </h2>
          <p className="text-lg text-[#4D5356] font-medium max-w-3xl mx-auto mb-8">
            Our Master's candidates are developing expertise through focused research projects across diverse areas of computer science.
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
                className="bg-white border-2 border-[#E5E5E5] hover:border-[#CAA258] transition-colors p-6"
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
                <div className="bg-[#CAA258]/10 p-4 border-l-2 border-[#CAA258]">
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
