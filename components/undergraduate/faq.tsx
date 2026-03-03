"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Do I need my own laptop?",
    answer: "Yes, you will need a laptop for your studies. We recommend a laptop with at least 8GB RAM, a modern processor (Intel i5/AMD Ryzen 5 or better), and 256GB storage. The department has computer labs available, but having your own device allows you to work flexibly. Bursaries may cover laptop costs for qualifying students."
  },
  {
    question: "What's the difference between Computer Science and other engineering disciplines?",
    answer: "Computer Science focuses on the theoretical foundations of computation, algorithms, and software development, while Computer Engineering emphasises hardware design and embedded systems. Information Technology is more applied, focusing on using existing technologies to solve business problems. CS provides the deepest understanding of how computers work and how to create new software solutions."
  },
  {
    question: "How heavy is the workload?",
    answer: "Computer Science is challenging and requires dedication. Expect to spend 40-50 hours per week on lectures, practicals, assignments, and self-study. Time management is crucial. However, the department provides extensive support through tutors, mentors, and study groups to help you succeed."
  },
  {
    question: "Are bursaries available?",
    answer: "Yes, various bursaries and financial aid options are available for qualifying students. These include university bursaries, NSFAS funding, and external bursaries from companies like Google, Amazon, and local tech firms. Apply early and check the SU financial aid office for current opportunities."
  },
  {
    question: "Can I switch between BSc CS and BSc Maths & CS?",
    answer: "Switching between programmes is possible, usually at the end of your first year, subject to academic performance and space availability. Speak to the departmental advisor early if you're considering a switch, as some module requirements differ between the programmes."
  },
  {
    question: "What programming languages will I learn?",
    answer: "You'll start with Python and Java in your first year, then progress to C/C++ for systems programming. You'll also learn web technologies (HTML, CSS, JavaScript), database languages (SQL), and may explore languages like Haskell, Prolog, or Rust in advanced modules. The focus is on programming concepts that transfer across languages."
  },
  {
    question: "Is there support for students who struggle with mathematics?",
    answer: "Absolutely. The department offers mathematics support tutorials, peer mentoring through the Acorns and Oaks programme, and access to the university's academic support services. Many successful CS students initially found maths challenging but thrived with the right support."
  },
  {
    question: "Can I do internships during my degree?",
    answer: "Yes, we strongly encourage internships. Many students complete vacation work or year-long internships between their second and third years. The department maintains relationships with leading tech companies and can help connect you with opportunities. Internships provide valuable experience and often lead to graduate job offers."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-[#F5F5F5] py-20 relative overflow-hidden">
      {/* S-graphic background pattern */}
      <div className="absolute top-0 right-0 h-full opacity-10 pointer-events-none">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-04.svg" 
          alt="" 
          className="h-full object-cover"
        />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-[#D22730]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#61223B]">
              Got questions?
            </span>
            <div className="w-12 h-0.5 bg-[#D22730]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#61223B] mb-6">
            Frequently asked questions
          </h2>
          <p className="text-lg text-[#4D5356] font-medium">
            Find answers to common questions about studying computer science at Stellenbosch.
          </p>
        </div>
        
        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-l-4 border-[#D22730] overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F5F5F5] transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-bold text-[#2D2D2D] pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-[#61223B] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-sm text-[#4D5356] font-medium leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Contact CTA */}
        <div className="mt-12 text-center bg-white p-8 border-l-4 border-[#CAA258]">
          <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">
            Still have questions?
          </h3>
          <p className="text-sm text-[#4D5356] font-medium mb-4">
            Our admissions team is here to help. Get in touch and we'll answer any questions you have about studying with us.
          </p>
          <a
            href="mailto:undergrad@cs.sun.ac.za"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#61223B] text-white font-bold text-sm hover:bg-[#4E1A2F] transition-colors"
          >
            Contact admissions
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
