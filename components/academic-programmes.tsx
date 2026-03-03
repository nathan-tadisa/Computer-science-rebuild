import Link from "next/link"
import { GraduationCap, BookOpen, Microscope, Award } from "lucide-react"

const programmes = [
  {
    icon: GraduationCap,
    title: "BSc Computer Science",
    duration: "3 years",
    description: "A comprehensive undergraduate programme covering algorithms, data structures, software engineering, and systems design. Build a strong foundation for your technology career.",
    highlights: ["Core CS fundamentals", "Practical projects", "Industry exposure"],
    href: "/undergraduate"
  },
  {
    icon: BookOpen,
    title: "BSc Mathematical Sciences",
    duration: "3 years",
    description: "Combine computer science with mathematics for a deeper understanding of computational theory, algorithms, and mathematical modelling.",
    highlights: ["Mathematics & CS", "Theoretical foundations", "Problem solving"],
    href: "/undergraduate"
  },
  {
    icon: Microscope,
    title: "Master's Programme",
    duration: "1-2 years",
    description: "Pursue original research under expert supervision. Choose between coursework-and-dissertation or pure-research tracks to advance your academic career.",
    highlights: ["Original research", "Expert supervision", "Publications"],
    href: "/postgraduate"
  },
  {
    icon: Award,
    title: "Doctoral Programme",
    duration: "3-4 years",
    description: "Join our vibrant research community and contribute new knowledge to global challenges in AI, security, networks, and computational science.",
    highlights: ["Cutting-edge research", "International collaboration", "Academic leadership"],
    href: "/phd"
  }
]

export default function AcademicProgrammes() {
  return (
    <section className="bg-[#CAA258]/10 py-20 relative overflow-hidden">
      {/* S-graphic background pattern */}
      <div className="absolute top-0 right-0 h-full opacity-10 pointer-events-none">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-03.svg" 
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
              Academic programmes
            </span>
            <div className="w-12 h-0.5 bg-[#D22730]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#61223B] mb-6">
            Your pathway to excellence
          </h2>
          <p className="text-lg text-[#4D5356] font-medium max-w-3xl mx-auto">
            From undergraduate fundamentals to doctoral research, our programmes are designed to transform curious minds into world-class computer scientists.
          </p>
        </div>
        
        {/* Programme Cards */}
        <div className="grid grid-cols-12 gap-6">
          {programmes.map((programme, index) => {
            const Icon = programme.icon
            return (
              <div
                key={programme.title}
                className="col-span-12 md:col-span-6 lg:col-span-3"
              >
                <div className="bg-white p-6 h-full hover:shadow-xl transition-all border-t-4 border-[#D22730] group">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-[#61223B] flex items-center justify-center mb-4 group-hover:bg-[#D22730] transition-colors">
                    <Icon size={24} className="text-white" />
                  </div>
                  
                  {/* Title & Duration */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-[#2D2D2D] mb-1 group-hover:text-[#61223B] transition-colors">
                      {programme.title}
                    </h3>
                    <p className="text-xs font-bold text-[#D22730] uppercase tracking-wider">
                      {programme.duration}
                    </p>
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm text-[#4D5356] font-medium leading-relaxed mb-4">
                    {programme.description}
                  </p>
                  
                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {programme.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-xs text-[#4D5356] font-medium">
                        <div className="w-1.5 h-1.5 bg-[#D22730] rounded-full mt-1.5 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA */}
                  <Link
                    href={programme.href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#61223B] hover:text-[#D22730] transition-colors"
                  >
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            href="/undergraduate"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#D22730] text-white font-bold text-sm hover:bg-[#B01F28] transition-colors"
          >
            View all programmes
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
