import Link from "next/link"
import { Search, Users, FileText } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Explore research",
    description: "Browse our Research pages and staff publications to identify the kind of work being done in the department. Find topics that align with your interests and expertise.",
    action: "Browse research areas",
    actionLink: "/research",
    color: "#D22730"
  },
  {
    number: "02",
    icon: Users,
    title: "Secure a supervisor",
    description: "It is mandatory to obtain a staff member's agreement to supervise your thesis before applying. Contact the responsible staff member to discuss potential topics. A face-to-face meeting is highly recommended.",
    note: "You don't need to have a specific topic finalized beforehand",
    action: "View staff profiles",
    actionLink: "/people",
    color: "#61223B"
  },
  {
    number: "03",
    icon: FileText,
    title: "Apply",
    description: "Once you have secured a supervisor, proceed with your formal application. Visit the Prospective Postgraduate Students page for application procedures, FAQ, and final submission details.",
    action: "View application procedures",
    actionLink: "/postgraduate#application-process",
    color: "#CAA258"
  }
]

export default function ApplicationJourney() {
  return (
    <section id="application-journey" className="bg-[#F5F5F5] py-20 relative overflow-hidden">
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
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-[#D22730]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#61223B]">
              Your path to doctoral study
            </span>
            <div className="w-12 h-0.5 bg-[#D22730]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#61223B] mb-6">
            The application journey
          </h2>
          <p className="text-lg text-[#4D5356] font-medium max-w-3xl mx-auto">
            Follow these three essential steps to begin your doctoral journey. Each step is crucial to ensuring a successful application.
          </p>
        </div>
        
        {/* Steps Flowchart */}
        <div className="grid grid-cols-12 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="col-span-12 lg:col-span-4"
              >
                <div className="bg-white p-8 h-full relative">
                  {/* Connector arrow (except for last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-8 -translate-y-1/2 z-0">
                      <svg className="w-full h-8 text-[#E2E2E2]" fill="none" stroke="currentColor" viewBox="0 0 32 32">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16h24m-8-8l8 8-8 8" />
                      </svg>
                    </div>
                  )}
                  
                  <div className="relative z-10">
                    {/* Number Badge */}
                    <div 
                      className="w-20 h-20 flex items-center justify-center mb-6"
                      style={{ backgroundColor: step.color }}
                    >
                      <span className="text-3xl font-bold text-white">{step.number}</span>
                    </div>
                    
                    {/* Icon */}
                    <div className="mb-4">
                      <Icon size={32} className="text-[#61223B]" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-[#2D2D2D] mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-sm text-[#4D5356] font-medium leading-relaxed mb-4">
                      {step.description}
                    </p>
                    
                    {step.note && (
                      <div className="bg-[#F5F5F5] p-3 mb-4">
                        <p className="text-xs text-[#4D5356] font-semibold italic">
                          Note: {step.note}
                        </p>
                      </div>
                    )}
                    
                    {/* Action Link */}
                    <Link
                      href={step.actionLink}
                      className="inline-flex items-center gap-2 text-sm font-bold hover:text-[#D22730] transition-colors"
                      style={{ color: step.color }}
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
      </div>
    </section>
  )
}
