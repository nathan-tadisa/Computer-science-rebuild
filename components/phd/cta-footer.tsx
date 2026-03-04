import Link from "next/link"
import { ArrowRight, FileText } from "lucide-react"

export default function CTAFooter() {
  return (
    <section className="bg-[#61223B] py-20 relative overflow-hidden">
      {/* S-graphic background pattern */}
      <div className="absolute top-0 right-0 h-full w-auto max-w-[40%] opacity-10 pointer-events-none">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-04.svg" 
          alt="" 
          className="h-full w-auto object-cover object-right"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left content */}
          <div className="col-span-12 lg:col-span-7 text-white">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Ready to begin your
              <br />
              doctoral journey?
            </h2>
            <p className="text-base sm:text-lg text-white/80 font-medium leading-relaxed mb-6">
              Take the first step towards contributing new knowledge to computer science. Explore our research areas and connect with potential supervisors today.
            </p>
            <p className="text-sm text-white/60 font-medium">
              Applications are accepted year-round. Deadline: End of September for the following academic year.
            </p>
          </div>
          
          {/* Right CTAs */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">
            <Link
              href="/research"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D22730] text-white font-bold text-sm hover:bg-[#B01F28] transition-colors"
            >
              <ArrowRight size={18} />
              Browse research areas
            </Link>
            
            <Link
              href="/postgraduate#application-process"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold text-sm hover:bg-white hover:text-[#61223B] transition-colors"
            >
              <FileText size={18} />
              View application procedures
            </Link>
          </div>
        </div>
        
        {/* Additional Info Cards */}
        <div className="mt-16 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4 bg-white/10 backdrop-blur-sm p-6">
            <h3 className="text-lg font-bold text-white mb-2">Duration</h3>
            <p className="text-sm text-white/80 font-medium">
              3-4 years full-time research
            </p>
          </div>
          
          <div className="col-span-12 md:col-span-4 bg-white/10 backdrop-blur-sm p-6">
            <h3 className="text-lg font-bold text-white mb-2">Format</h3>
            <p className="text-sm text-white/80 font-medium">
              Dissertation-based, no coursework
            </p>
          </div>
          
          <div className="col-span-12 md:col-span-4 bg-white/10 backdrop-blur-sm p-6">
            <h3 className="text-lg font-bold text-white mb-2">Outcome</h3>
            <p className="text-sm text-white/80 font-medium">
              Original research contribution
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
