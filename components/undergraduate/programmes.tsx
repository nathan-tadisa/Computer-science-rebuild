import Link from "next/link"
import { BookOpen, Code, Database, Cpu } from "lucide-react"

const programmes = [
  {
    title: "BSc Computer Science",
    duration: "3 years",
    description: "Contains the full core curriculum. Taking at least 32 credits of quantitative modules at the 2nd/3rd-year level can lead to a CS honours programme.",
    focalAreas: ["General Computer Science", "Computer Systems", "Data Science"],
    href: "/current-students/programme-guide"
  },
  {
    title: "BSc Mathematical Sciences",
    duration: "3 years",
    description: "Various programmes within Mathematical Sciences that include computer science components, including Applied Mathematics, Mathematics, Abstract Mathematics, and Operations Research.",
    focalAreas: ["Applied Mathematics", "Mathematics", "Operations Research"],
    href: "/current-students/programme-guide"
  }
]

export default function UndergraduateProgrammes() {
  return (
    <section className="bg-[#CAA258]/10 py-20 relative overflow-hidden">
      {/* S-graphic background pattern */}
      <div className="absolute bottom-0 left-0 h-full opacity-10 pointer-events-none">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-05.svg" 
          alt="" 
          className="h-full w-auto object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-[#D22730]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#61223B]">
              Undergraduate programmes
            </span>
            <div className="w-12 h-0.5 bg-[#D22730]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#61223B] mb-6">
            Choose your path
          </h2>
          <p className="text-lg text-[#4D5356] font-medium max-w-3xl mx-auto">
            We offer two undergraduate degree programmes, each designed to give you a solid foundation in computer science while allowing you to specialise in areas that interest you most.
          </p>
        </div>
        
        {/* Programme Cards */}
        <div className="grid grid-cols-12 gap-8">
          {programmes.map((programme) => (
            <div
              key={programme.title}
              className="col-span-12 lg:col-span-6"
            >
              <div className="bg-white p-8 h-full border-t-4 border-[#D22730]">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#2D2D2D] mb-2">
                    {programme.title}
                  </h3>
                  <p className="text-xs font-bold text-[#D22730] uppercase tracking-wider mb-4">
                    {programme.duration}
                  </p>
                  <p className="text-base text-[#4D5356] font-medium leading-relaxed">
                    {programme.description}
                  </p>
                </div>
                
                {/* Focal Areas */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Code size={16} className="text-[#61223B]" />
                    <h4 className="text-sm font-bold text-[#2D2D2D] uppercase tracking-wider">
                      Focal areas
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {programme.focalAreas.map((area) => (
                      <span
                        key={area}
                        className="px-3 py-1 bg-[#F5F5F5] text-xs font-semibold text-[#61223B] border border-[#E2E2E2]"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* CTA */}
                <Link
                  href={programme.href}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#61223B] hover:text-[#D22730] transition-colors"
                >
                  View programme guide
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
