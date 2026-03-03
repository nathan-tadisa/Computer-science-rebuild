import { Code, Database, Brain, Server, Shield, Smartphone, Globe, Cpu } from "lucide-react"

const careerCategories = [
  {
    category: "Software Engineering",
    icon: Code,
    careers: [
      "Full-stack developer",
      "Front-end developer",
      "Back-end developer",
      "Mobile app developer",
      "DevOps engineer",
      "Software architect"
    ],
    color: "#D22730"
  },
  {
    category: "Data & Analytics",
    icon: Database,
    careers: [
      "Data scientist",
      "Data analyst",
      "Business intelligence analyst",
      "Data engineer",
      "Database administrator",
      "Analytics consultant"
    ],
    color: "#61223B"
  },
  {
    category: "Artificial Intelligence",
    icon: Brain,
    careers: [
      "Machine learning engineer",
      "AI researcher",
      "NLP specialist",
      "Computer vision engineer",
      "Robotics engineer",
      "AI ethics consultant"
    ],
    color: "#CAA258"
  },
  {
    category: "Systems & Infrastructure",
    icon: Server,
    careers: [
      "Systems administrator",
      "Cloud architect",
      "Network engineer",
      "Site reliability engineer",
      "Infrastructure engineer",
      "Platform engineer"
    ],
    color: "#D22730"
  },
  {
    category: "Cybersecurity",
    icon: Shield,
    careers: [
      "Security analyst",
      "Penetration tester",
      "Security architect",
      "Cryptographer",
      "Incident responder",
      "Security consultant"
    ],
    color: "#61223B"
  },
  {
    category: "Emerging Technologies",
    icon: Cpu,
    careers: [
      "Blockchain developer",
      "IoT specialist",
      "Quantum computing researcher",
      "AR/VR developer",
      "Edge computing engineer",
      "Tech entrepreneur"
    ],
    color: "#CAA258"
  }
]

export default function CareerPaths() {
  return (
    <section className="bg-[#F5F5F5] py-20 relative overflow-hidden">
      {/* S-graphic background pattern */}
      <div className="absolute bottom-0 right-0 h-full opacity-10 pointer-events-none">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-01.svg" 
          alt="" 
          className="h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-[#D22730]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#61223B]">
              Your future awaits
            </span>
            <div className="w-12 h-0.5 bg-[#D22730]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#61223B] mb-6">
            Career paths
          </h2>
          <p className="text-lg text-[#4D5356] font-medium max-w-3xl mx-auto">
            A computer science degree opens doors to diverse and exciting career opportunities across industries. Here are just some of the paths our graduates pursue.
          </p>
        </div>
        
        {/* Career Categories Grid */}
        <div className="grid grid-cols-12 gap-6">
          {careerCategories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.category}
                className="col-span-12 md:col-span-6 lg:col-span-4"
              >
                <div className="bg-white p-6 h-full hover:shadow-xl transition-all border-l-4" style={{ borderColor: category.color }}>
                  {/* Icon & Category */}
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="w-12 h-12 flex items-center justify-center"
                      style={{ backgroundColor: category.color }}
                    >
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-[#2D2D2D]">
                      {category.category}
                    </h3>
                  </div>
                  
                  {/* Career List */}
                  <ul className="space-y-2">
                    {category.careers.map((career) => (
                      <li key={career} className="flex items-start gap-2 text-sm text-[#4D5356] font-medium">
                        <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: category.color }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {career}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4 bg-white p-6 text-center">
            <div className="text-4xl font-bold text-[#61223B] mb-2">95%+</div>
            <p className="text-sm font-semibold text-[#4D5356] uppercase tracking-wider">
              Employment rate within 6 months
            </p>
          </div>
          
          <div className="col-span-12 md:col-span-4 bg-white p-6 text-center">
            <div className="text-4xl font-bold text-[#61223B] mb-2">R450k+</div>
            <p className="text-sm font-semibold text-[#4D5356] uppercase tracking-wider">
              Average starting salary
            </p>
          </div>
          
          <div className="col-span-12 md:col-span-4 bg-white p-6 text-center">
            <div className="text-4xl font-bold text-[#61223B] mb-2">Global</div>
            <p className="text-sm font-semibold text-[#4D5356] uppercase tracking-wider">
              Career opportunities worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
