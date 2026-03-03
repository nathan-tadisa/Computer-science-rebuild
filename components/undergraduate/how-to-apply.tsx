import Link from "next/link"
import { CheckCircle2, FileText, Upload, Send } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: CheckCircle2,
    title: "Check your eligibility",
    description: "Review the admission requirements above to ensure you meet the minimum criteria for your chosen programme.",
    action: "Review requirements",
    actionLink: "#admission-requirements"
  },
  {
    number: "02",
    icon: FileText,
    title: "Prepare your documents",
    description: "Gather your academic transcripts, ID document, proof of payment, and any supporting documents required for your application.",
    action: null,
    actionLink: null
  },
  {
    number: "03",
    icon: Upload,
    title: "Submit your application",
    description: "Complete your application through the Stellenbosch University online portal. Applications open in April each year for the following academic year.",
    action: "Go to SU portal",
    actionLink: "https://www.sun.ac.za/english/apply"
  },
  {
    number: "04",
    icon: Send,
    title: "Track your application",
    description: "Monitor your application status online and respond promptly to any requests for additional information from the admissions office.",
    action: null,
    actionLink: null
  }
]

export default function HowToApply() {
  return (
    <section id="how-to-apply" className="bg-white py-20 relative overflow-hidden">
      {/* S-graphic background pattern */}
      <div className="absolute top-0 left-0 h-full opacity-10 pointer-events-none">
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
              Start your journey
            </span>
            <div className="w-12 h-0.5 bg-[#D22730]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#61223B] mb-6">
            How do I apply?
          </h2>
          <p className="text-lg text-[#4D5356] font-medium max-w-3xl mx-auto">
            Follow these four simple steps to submit your application. We're here to support you throughout the process.
          </p>
        </div>
        
        {/* Steps */}
        <div className="grid grid-cols-12 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="col-span-12 md:col-span-6 lg:col-span-3"
              >
                <div className="relative">
                  {/* Connector line (except for last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-[#E2E2E2] -translate-x-1/2" />
                  )}
                  
                  <div className="relative bg-[#F5F5F5] p-6 hover:bg-white hover:shadow-lg transition-all">
                    {/* Number Badge */}
                    <div className="w-16 h-16 bg-[#D22730] flex items-center justify-center mb-4 relative z-10">
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                    
                    {/* Icon */}
                    <div className="mb-4">
                      <Icon size={24} className="text-[#61223B]" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-lg font-bold text-[#2D2D2D] mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-sm text-[#4D5356] font-medium leading-relaxed mb-4">
                      {step.description}
                    </p>
                    
                    {/* Action Link */}
                    {step.action && step.actionLink && (
                      <Link
                        href={step.actionLink}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#D22730] hover:text-[#B01F28] transition-colors"
                      >
                        {step.action}
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* CTA Section */}
        <div className="bg-[#61223B] p-8 lg:p-12">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Ready to start your application?
              </h3>
              <p className="text-base text-white/80 font-medium">
                Applications for 2027 entry open in April 2026. Don't miss your chance to join one of South Africa's leading computer science programmes.
              </p>
            </div>
            
            <div className="col-span-12 lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                href="https://www.sun.ac.za/english/apply"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#D22730] text-white font-bold text-sm hover:bg-[#B01F28] transition-colors"
              >
                Apply now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
