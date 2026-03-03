import Link from "next/link"
import { Search, FileText, Calendar, AlertCircle } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Find a supervisor",
    subtitle: "(Master's & Doctoral only)",
    description: "Browse our Research pages and staff publications to find an area of interest. Contact a staff member to secure agreement for supervision. A face-to-face meeting is strongly recommended.",
    action: "Browse research areas",
    actionLink: "/research"
  },
  {
    number: "02",
    icon: FileText,
    title: "Apply online",
    subtitle: "(All applicants)",
    description: "Complete application forms and upload required documents via the SU portal under Prospective Postgraduate Students or the Science Faculty website.",
    action: "Go to SU portal",
    actionLink: "https://www.sun.ac.za/english/apply"
  }
]

const deadlines = [
  { programme: "Honours", deadline: "End of October", color: "#D22730" },
  { programme: "Master's & Doctoral", deadline: "End of September", color: "#61223B" }
]

export default function ApplicationProcess() {
  return (
    <section id="application-process" className="bg-[#F5F5F5] py-20 relative overflow-hidden">
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
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-[#D22730]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#61223B]">
              How to apply
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#61223B] mb-6">
            The application process
          </h2>
          <p className="text-lg text-[#4D5356] font-medium max-w-3xl leading-relaxed">
            Follow these steps to submit your postgraduate application. The process varies slightly depending on your chosen programme.
          </p>
        </div>
        
        {/* Steps Timeline */}
        <div className="grid grid-cols-12 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="col-span-12 md:col-span-6"
              >
                <div className="bg-white p-8 h-full relative">
                  {/* Connector line */}
                  {index === 0 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-[#E2E2E2] -translate-x-1/2 z-0" />
                  )}
                  
                  <div className="relative z-10">
                    {/* Number Badge */}
                    <div className="w-20 h-20 bg-[#D22730] flex items-center justify-center mb-6">
                      <span className="text-3xl font-bold text-white">{step.number}</span>
                    </div>
                    
                    {/* Icon */}
                    <div className="mb-4">
                      <Icon size={32} className="text-[#61223B]" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-[#2D2D2D] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs font-bold text-[#D22730] uppercase tracking-wider mb-4">
                      {step.subtitle}
                    </p>
                    
                    <p className="text-sm text-[#4D5356] font-medium leading-relaxed mb-6">
                      {step.description}
                    </p>
                    
                    {/* Action Link */}
                    <Link
                      href={step.actionLink}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#61223B] hover:text-[#D22730] transition-colors"
                    >
                      {step.action}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Deadlines Callout */}
        <div className="bg-[#D22730] p-8 lg:p-12">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <Calendar size={32} className="text-white" />
                <h3 className="text-2xl font-bold text-white">
                  Application deadlines
                </h3>
              </div>
              <p className="text-sm text-white/80 font-medium">
                Mark these dates in your calendar. Late applications may not be considered.
              </p>
            </div>
            
            <div className="col-span-12 lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {deadlines.map((item) => (
                  <div
                    key={item.programme}
                    className="bg-white p-6"
                  >
                    <p className="text-sm font-bold text-[#61223B] uppercase tracking-wider mb-2">
                      {item.programme}
                    </p>
                    <p className="text-2xl font-bold text-[#2D2D2D]">
                      {item.deadline}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 flex items-start gap-2 text-white/80">
                <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                <p className="text-xs font-medium">
                  Check the Science Faculty website for exact dates each year
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
