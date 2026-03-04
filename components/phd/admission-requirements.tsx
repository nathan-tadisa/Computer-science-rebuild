import { CheckCircle2, AlertCircle } from "lucide-react"

export default function AdmissionRequirements() {
  return (
    <section id="requirements" className="bg-white py-20 relative overflow-hidden">
      {/* S-graphic background pattern */}
      <div className="absolute top-0 right-0 h-full w-auto max-w-[40%] opacity-10 pointer-events-none">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-02.svg" 
          alt="" 
          className="h-full w-auto object-cover object-right"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid grid-cols-12 gap-6 lg:gap-8">
          
          {/* Main Requirements Card */}
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-0.5 bg-[#D22730]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#61223B]">
                Entry requirements
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#61223B] mb-8">
              Admission requirements
            </h2>
            
            <div className="bg-[#F5F5F5] p-8 border-l-4 border-[#D22730]">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-[#D22730] flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2D2D2D] mb-3">
                    Core requirement
                  </h3>
                  <p className="text-lg text-[#4D5356] font-medium leading-relaxed">
                    A Master's degree in Computer Science or an approved equivalent qualification.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6">
                <h4 className="text-base font-bold text-[#2D2D2D] mb-3">
                  What you'll need to demonstrate:
                </h4>
                <ul className="space-y-3">
                  {[
                    "Strong research capability evidenced by your Master's thesis",
                    "Solid foundation in computer science fundamentals",
                    "Ability to conduct independent research",
                    "Clear research interests aligned with departmental expertise",
                    "Academic writing and publication potential"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#D22730] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-[#4D5356] font-medium leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Sidebar Caveat */}
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-[#CAA258]/10 p-6 border-l-4 border-[#CAA258] sticky top-24">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle size={20} className="text-[#CAA258]" />
                <h3 className="text-lg font-bold text-[#2D2D2D]">
                  Important note
                </h3>
              </div>
              
              <p className="text-sm text-[#4D5356] font-medium leading-relaxed mb-4">
                Additional background or supplementary studies may be required, as determined by your supervisor on a case-by-case basis.
              </p>
              
              <p className="text-sm text-[#4D5356] font-medium leading-relaxed mb-4">
                Your supervisor will assess your preparedness for doctoral research and may recommend additional coursework or reading to strengthen your foundation in specific areas.
              </p>
              
              <div className="pt-4 border-t border-[#CAA258]/20">
                <p className="text-xs font-bold text-[#61223B] uppercase tracking-wider mb-2">
                  Questions about requirements?
                </p>
                <p className="text-sm text-[#4D5356] font-medium mb-3">
                  Discuss your background with potential supervisors during the application process.
                </p>
                <a
                  href="mailto:postgrad@cs.sun.ac.za"
                  className="text-sm font-bold text-[#D22730] hover:text-[#B01F28] transition-colors"
                >
                  postgrad@cs.sun.ac.za
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
