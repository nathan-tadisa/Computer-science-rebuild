import Link from "next/link"
import { Award, Users, Briefcase, ExternalLink } from "lucide-react"

const fundingOptions = [
  {
    icon: Award,
    title: "Bursaries",
    description: "No direct departmental support, but external bursaries are available through the SU portal and Postgraduate Office website. Apply early for the best opportunities.",
    links: [
      { label: "SU bursaries portal", href: "https://www.sun.ac.za/english/learning-teaching/student-funding" },
      { label: "Postgraduate Office", href: "https://www.sun.ac.za/english/postgraduate" }
    ],
    color: "#D22730"
  },
  {
    icon: Users,
    title: "Teaching assistantships",
    description: "Honours students are expected to act as teaching assistants for undergraduate modules. This provides supplemental income and helps consolidate your knowledge.",
    note: "Typically 10-15 hours per week during teaching periods",
    color: "#61223B"
  },
  {
    icon: Briefcase,
    title: "Research funds",
    description: "Some supervisors have funds available for Master's and Doctoral students. This must be discussed directly with your potential supervisor during the application process.",
    note: "Availability varies by research group and project",
    color: "#CAA258"
  }
]

export default function FundingSupport() {
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      {/* S-graphic background pattern */}
      <div className="absolute top-0 right-0 h-full w-auto max-w-[40%] opacity-10 pointer-events-none">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-04.svg" 
          alt="" 
          className="h-full w-auto object-cover object-right"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-[#D22730]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#61223B]">
              Financial support
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#61223B] mb-6">
            Fees, funding & support
          </h2>
          <p className="text-base sm:text-lg text-[#4D5356] font-medium max-w-3xl leading-relaxed">
            We understand that funding is a crucial consideration for postgraduate study. Explore the various financial support options available to you.
          </p>
        </div>
        
        {/* Funding Options Grid */}
        <div className="grid grid-cols-12 gap-6">
          {fundingOptions.map((option) => {
            const Icon = option.icon
            return (
              <div
                key={option.title}
                className="col-span-12 lg:col-span-4"
              >
                <div className="bg-[#F5F5F5] p-6 h-full border-l-4" style={{ borderColor: option.color }}>
                  <div 
                    className="w-14 h-14 flex items-center justify-center mb-4"
                    style={{ backgroundColor: option.color }}
                  >
                    <Icon size={24} className="text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">
                    {option.title}
                  </h3>
                  
                  <p className="text-sm text-[#4D5356] font-medium leading-relaxed mb-4">
                    {option.description}
                  </p>
                  
                  {option.note && (
                    <div className="bg-white p-3 mb-4">
                      <p className="text-xs text-[#4D5356] font-semibold">
                        {option.note}
                      </p>
                    </div>
                  )}
                  
                  {option.links && (
                    <div className="space-y-2">
                      {option.links.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-xs font-bold text-[#61223B] hover:text-[#D22730] transition-colors"
                        >
                          <ExternalLink size={12} />
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
