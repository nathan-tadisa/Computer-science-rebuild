"use client"

import { Info, AlertCircle } from "lucide-react"

export default function ProgrammeGuideIntro() {
  return (
    <section id="programme-content" className="bg-white py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Context paragraph */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-[#4D5356] font-medium leading-relaxed mb-6">
            Many disciplines now require coding knowledge, and the focus here is strictly on software development. Note that while this guide is helpful, students must always confirm final details in the official University calendar (yearbook).
          </p>
        </div>
        
        {/* Callout box */}
        <div className="max-w-4xl mx-auto bg-[#CAA258]/10 border-l-4 border-[#CAA258] p-8 mb-12">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-[#CAA258] flex items-center justify-center">
              <Info size={20} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#61223B] mb-4">Did you know?</h3>
              <p className="text-base text-[#4D5356] font-medium mb-3">
                When you come to university, you must choose:
              </p>
              <ol className="space-y-2 text-base text-[#4D5356] font-medium">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#CAA258] text-white text-sm font-bold flex items-center justify-center">1</span>
                  <span>A degree (e.g., BSc)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#CAA258] text-white text-sm font-bold flex items-center justify-center">2</span>
                  <span>A degree variant, called a programme (e.g., BSc Computer Science)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#CAA258] text-white text-sm font-bold flex items-center justify-center">3</span>
                  <span>A programme variant, called a focal area (e.g., BSc Computer Science: General Computer Science)</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
        
        {/* Warning box */}
        <div className="max-w-4xl mx-auto bg-[#D22730]/5 border-l-4 border-[#D22730] p-6">
          <div className="flex items-start gap-4">
            <AlertCircle size={24} className="text-[#D22730] flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-base font-bold text-[#D22730] mb-2">Important notice</h4>
              <p className="text-sm text-[#4D5356] font-medium leading-relaxed">
                Just because a programme allows first-year CS modules does not guarantee enrolment in 2nd/3rd-year modules. The focal area may not include them, or there may be timetable clashes. Read university documentation carefully.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* S-graphic background pattern */}
      <div className="absolute top-0 right-0 h-full opacity-10 pointer-events-none">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-01.svg" 
          alt="" 
          className="h-full object-cover"
        />
      </div>
    </section>
  )
}
