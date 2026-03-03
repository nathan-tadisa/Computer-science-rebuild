"use client"

import { useState } from "react"
import { ChevronDown, Users, Code, Brain, Network } from "lucide-react"

const researchGroups = [
  {
    icon: Code,
    title: "Theory and Applications of Automata and Grammars",
    description: "Nondeterministic finite automata (NFA) theory, descriptional complexity, and application of automata/grammars to pattern layout optimisation, image processing, music generation, and automatic grammar correction.",
    members: [
      { name: "Willem Bester", image: "/placeholder-user.jpg" },
      { name: "Walter Schulze", image: "/placeholder-user.jpg" },
      { name: "Brink van der Merwe", image: "/placeholder-user.jpg" },
      { name: "Steyn van Litsenborgh", image: "/placeholder-user.jpg" },
      { name: "Lynette van Zijl", image: "/placeholder-user.jpg" }
    ],
    links: [
      { text: "Theory and Applications of Automata and Grammars", url: "#" },
      { text: "Regular Expression Static Analysis Project", url: "#" }
    ]
  },
  {
    icon: Network,
    title: "Software Engineering and Verification",
    description: "Operating system kernels, protocols, and verification tools since 1990. Investigating highly reliable system software using computer-aided verification, systematic testing, and defensive programming.",
    members: [
      { name: "Andrew Collett", image: "/placeholder-user.jpg" },
      { name: "Bernd Fischer", image: "/placeholder-user.jpg" },
      { name: "Jaco Geldenhuys", image: "/placeholder-user.jpg" },
      { name: "Cornelia Inggs", image: "/placeholder-user.jpg" },
      { name: "Zhunaid Mohamed", image: "/placeholder-user.jpg" },
      { name: "Jan Taljaard", image: "/placeholder-user.jpg" },
      { name: "Phillip van Heerden", image: "/placeholder-user.jpg" },
      { name: "Willem Visser", image: "/placeholder-user.jpg" }
    ],
    links: [
      { text: "COASTAL", url: "#" },
      { text: "ESBMC", url: "#" },
      { text: "CSeq", url: "#" }
    ]
  },
  {
    icon: Brain,
    title: "Machine Learning and Artificial Intelligence",
    description: "General decision-making, planning, machine learning, and search algorithms grounded in probability and game theory. Application of ML to big data, specifically earth observation satellite sensors and radio interferometers.",
    members: [
      { name: "Burger Becker", image: "/placeholder-user.jpg" },
      { name: "Marc Christoph", image: "/placeholder-user.jpg" },
      { name: "Dirko Coetsee", image: "/placeholder-user.jpg" },
      { name: "Trienko Grobler", image: "/placeholder-user.jpg" },
      { name: "Steve Kroon", image: "/placeholder-user.jpg" },
      { name: "Jordan Masakuna", image: "/placeholder-user.jpg" },
      { name: "Arnu Pretorius", image: "/placeholder-user.jpg" },
      { name: "Charl Steyl", image: "/placeholder-user.jpg" },
      { name: "Elan van Biljon", image: "/placeholder-user.jpg" }
    ],
    links: []
  },
  {
    icon: Users,
    title: "Telkom-Siemens Centre of Excellence in ATM and Broadband Networks",
    description: "Promoting R&D in broadband technologies and applications, and training postgraduate students and professionals in telecommunications expertise.",
    members: [
      { name: "Jaco Geldenhuys", image: "/placeholder-user.jpg" },
      { name: "Anthony E Krzesinski", image: "/placeholder-user.jpg" },
      { name: "Willem Visser", image: "/placeholder-user.jpg" }
    ],
    links: []
  }
]

export default function ResearchGroups() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleGroup = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="research-groups" className="bg-white py-20 relative overflow-hidden">
      {/* S-graphic background pattern */}
      <div className="absolute top-0 right-0 h-full opacity-10 pointer-events-none">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-03.svg" 
          alt="" 
          className="h-full w-auto object-cover"
        />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-[#D22730]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#61223B]">
              Our expertise
            </span>
            <div className="w-12 h-0.5 bg-[#D22730]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#61223B] mb-6">
            Core research groups
          </h2>
          <p className="text-lg text-[#4D5356] font-medium max-w-3xl mx-auto">
            Our research spans multiple domains, from theoretical foundations to practical applications that solve real-world problems.
          </p>
        </div>
        
        {/* Research Groups Accordion */}
        <div className="space-y-4">
          {researchGroups.map((group, index) => {
            const IconComponent = group.icon
            return (
              <div
                key={index}
                className="bg-white border-2 border-[#E5E5E5] hover:border-[#61223B] transition-colors overflow-hidden"
              >
                <button
                  onClick={() => toggleGroup(index)}
                  className="w-full flex items-center gap-4 p-6 text-left hover:bg-[#F5F5F5] transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#61223B] flex items-center justify-center">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <span className="text-lg font-bold text-[#2D2D2D] pr-4 flex-grow">
                    {group.title}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-[#61223B] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-[800px]' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-2 border-t-2 border-[#F5F5F5]">
                    <p className="text-sm text-[#4D5356] font-medium leading-relaxed mb-6">
                      {group.description}
                    </p>
                    
                    {/* Members */}
                    <div className="mb-6">
                      <h4 className="text-xs font-bold tracking-widest uppercase text-[#61223B] mb-4">
                        Research members
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {group.members.map((member, idx) => (
                          <div
                            key={idx}
                            className="flex flex-col items-center text-center group cursor-pointer"
                          >
                            <div className="w-20 h-20 mb-2 overflow-hidden bg-[#F5F5F5] border-2 border-[#E5E5E5] group-hover:border-[#61223B] transition-colors" style={{ borderBottomRightRadius: '1rem' }}>
                              <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <span className="text-xs font-medium text-[#2D2D2D] leading-tight">
                              {member.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Links */}
                    {group.links.length > 0 && (
                      <div>
                        <h4 className="text-xs font-bold tracking-widest uppercase text-[#61223B] mb-3">
                          Related links
                        </h4>
                        <div className="flex flex-col gap-2">
                          {group.links.map((link, idx) => (
                            <a
                              key={idx}
                              href={link.url}
                              className="text-sm font-medium text-[#D22730] hover:text-[#B01F28] underline"
                            >
                              {link.text}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
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
