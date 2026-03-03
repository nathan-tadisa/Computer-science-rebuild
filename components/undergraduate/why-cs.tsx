import { Globe, TrendingUp, Zap, Users } from "lucide-react"

const reasons = [
  {
    icon: Globe,
    title: "Global impact",
    description: "Computer science extends our cognitive abilities and gives you the tools to solve problems that affect billions of people worldwide."
  },
  {
    icon: TrendingUp,
    title: "High demand",
    description: "Tech professionals are among the most sought-after in the job market, with competitive salaries and diverse career opportunities."
  },
  {
    icon: Zap,
    title: "Build the future",
    description: "Whether you're interested in cybersecurity, software development, or data science, you'll have the skills to create tomorrow's innovations."
  },
  {
    icon: Users,
    title: "Versatile skills",
    description: "Computational thinking and problem-solving abilities transfer across industries, from finance to healthcare to entertainment."
  }
]

export default function WhyCS() {
  return (
    <section className="bg-[#F5F5F5] py-20 relative overflow-hidden">
      {/* S-graphic background pattern */}
      <div className="absolute bottom-0 left-0 h-full opacity-10 pointer-events-none">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-03.svg" 
          alt="" 
          className="h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-[#D22730]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#61223B]">
              Your future starts here
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#61223B] mb-6">
            Why Computer Science?
          </h2>
          <p className="text-lg text-[#4D5356] font-medium max-w-3xl leading-relaxed">
            Computer science is more than just coding. It's about understanding how to harness computational power to extend human capabilities, solve complex problems, and shape the digital world we live in.
          </p>
        </div>
        
        {/* Reasons Grid */}
        <div className="grid grid-cols-12 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                className="col-span-12 md:col-span-6 lg:col-span-3"
              >
                <div className="bg-white p-6 h-full hover:shadow-xl transition-all group">
                  <div className="w-14 h-14 bg-[#D22730] flex items-center justify-center mb-4 group-hover:bg-[#61223B] transition-colors">
                    <Icon size={24} className="text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#2D2D2D] mb-3 group-hover:text-[#61223B] transition-colors">
                    {reason.title}
                  </h3>
                  
                  <p className="text-sm text-[#4D5356] font-medium leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
