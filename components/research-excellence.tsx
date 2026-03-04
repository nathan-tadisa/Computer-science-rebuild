import Link from "next/link"
import { Brain, Code, Eye, Network, Database, Cpu } from "lucide-react"

const researchAreas = [
  {
    icon: Code,
    title: "Theory and Applications of Automata",
    description: "NFA theory, descriptional complexity, and applications to pattern layout optimisation and image processing.",
    color: "#D22730"
  },
  {
    icon: Network,
    title: "Software Engineering and Verification",
    description: "Operating system kernels, protocols, and verification tools for highly reliable system software.",
    color: "#61223B"
  },
  {
    icon: Brain,
    title: "Machine Learning and AI",
    description: "Decision-making, planning, and ML algorithms applied to big data and earth observation systems.",
    color: "#CAA258"
  },
  {
    icon: Cpu,
    title: "Telkom-Siemens Centre of Excellence",
    description: "R&D in broadband technologies and training in telecommunications expertise.",
    color: "#D22730"
  }
]

export default function ResearchExcellence() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* S-graphic background pattern */}
      <div className="absolute top-0 left-0 h-full opacity-10 pointer-events-none">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-04.svg" 
          alt="" 
          className="h-full w-auto object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 lg:gap-12 mb-16">
          <div className="col-span-12 lg:col-span-7">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-0.5 bg-[#D22730]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#61223B]">
                Research excellence
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#61223B] mb-6 leading-tight break-words">
              Pioneering research that shapes the future
            </h2>
            <p className="text-base sm:text-lg text-[#4D5356] font-medium leading-relaxed">
              Our research groups tackle some of the most pressing challenges in computer science, from artificial intelligence to cybersecurity. We collaborate with leading international institutions and industry partners to drive innovation.
            </p>
          </div>
          
          <div className="col-span-12 lg:col-span-5 flex items-center justify-center lg:justify-end">
            <div className="bg-[#F5F5F5] p-8 text-center">
              <div className="text-5xl font-bold text-[#61223B] mb-2">4</div>
              <p className="text-sm font-bold text-[#4D5356] uppercase tracking-wider mb-4">
                Active research groups
              </p>
              <div className="w-16 h-0.5 bg-[#D22730] mx-auto" />
            </div>
          </div>
        </div>
        
        {/* Research Areas Grid */}
        <div className="grid grid-cols-12 gap-6 mb-12">
          {researchAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <div
                key={area.title}
                className="col-span-12 md:col-span-6"
              >
                <div className="group p-6 bg-[#F5F5F5] hover:bg-white hover:shadow-lg transition-all h-full border-l-4 hover:border-l-4" style={{ borderColor: area.color }}>
                  <div 
                    className="w-12 h-12 flex items-center justify-center mb-4"
                    style={{ backgroundColor: area.color }}
                  >
                    <Icon size={24} className="text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#2D2D2D] mb-3 group-hover:text-[#61223B] transition-colors">
                    {area.title}
                  </h3>
                  
                  <p className="text-sm text-[#4D5356] font-medium leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#61223B] text-white font-bold text-sm hover:bg-[#4E1A2F] transition-colors"
          >
            Discover our research groups
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
