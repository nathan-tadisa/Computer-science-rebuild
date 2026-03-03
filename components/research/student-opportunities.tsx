import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"

export default function StudentOpportunities() {
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      {/* S-graphic background pattern */}
      <div className="absolute top-0 left-0 h-full opacity-10 pointer-events-none">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-06.svg" 
          alt="" 
          className="h-full w-auto object-cover"
        />
      </div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-[#D22730]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#61223B]">
              Join our research
            </span>
            <div className="w-12 h-0.5 bg-[#D22730]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#61223B] mb-6">
            Get involved in our research
          </h2>
          <p className="text-lg text-[#4D5356] font-medium max-w-3xl mx-auto">
            We invite prospective Master's and Doctoral students to explore supervision opportunities with our research groups. Undergraduates can also participate in hackathons and vacation research projects to gain hands-on experience.
          </p>
        </div>
        
        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* Postgraduate Research */}
          <div className="bg-[#F5F5F5] border-l-4 border-[#D22730] p-8">
            <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">
              Postgraduate research
            </h3>
            <p className="text-sm text-[#4D5356] font-medium leading-relaxed mb-6">
              Join our Master's or Doctoral programmes and work alongside leading researchers on cutting-edge projects. We offer supervision across all our research groups and provide funding opportunities for qualifying students.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-sm text-[#4D5356] font-medium">
                <span className="text-[#D22730] font-bold">•</span>
                <span>Master's and PhD supervision available</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-[#4D5356] font-medium">
                <span className="text-[#D22730] font-bold">•</span>
                <span>Bursaries and funding support</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-[#4D5356] font-medium">
                <span className="text-[#D22730] font-bold">•</span>
                <span>Access to NITheCS facilities</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-[#4D5356] font-medium">
                <span className="text-[#D22730] font-bold">•</span>
                <span>International collaboration opportunities</span>
              </li>
            </ul>
          </div>
          
          {/* Undergraduate Involvement */}
          <div className="bg-[#F5F5F5] border-l-4 border-[#CAA258] p-8">
            <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">
              Undergraduate involvement
            </h3>
            <p className="text-sm text-[#4D5356] font-medium leading-relaxed mb-6">
              Get a taste of research through vacation projects, hackathons, and undergraduate research assistantships. These opportunities help you develop research skills and explore potential postgraduate pathways.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-sm text-[#4D5356] font-medium">
                <span className="text-[#CAA258] font-bold">•</span>
                <span>Summer and winter vacation projects</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-[#4D5356] font-medium">
                <span className="text-[#CAA258] font-bold">•</span>
                <span>Research hackathons and competitions</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-[#4D5356] font-medium">
                <span className="text-[#CAA258] font-bold">•</span>
                <span>Undergraduate research assistant positions</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-[#4D5356] font-medium">
                <span className="text-[#CAA258] font-bold">•</span>
                <span>Honours project supervision</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/postgraduate"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#61223B] text-white font-bold text-sm hover:bg-[#4E1A2F] transition-colors"
          >
            View postgraduate admissions
            <ArrowRight size={18} />
          </Link>
          
          <a
            href="mailto:postgrad@cs.sun.ac.za"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#61223B] text-[#61223B] font-bold text-sm hover:bg-[#61223B] hover:text-white transition-colors"
          >
            Contact a researcher
            <Mail size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
