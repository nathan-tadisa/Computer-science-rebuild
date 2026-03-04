import { Building2, Globe, Users } from "lucide-react"

export default function Facilities() {
  return (
    <section className="bg-[#61223B] py-20 relative overflow-hidden">
      {/* Decorative S-graphic pattern */}
      <div className="absolute top-0 right-0 h-full w-auto max-w-[40%] opacity-10 pointer-events-none">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-02.svg" 
          alt="" 
          className="h-full w-auto object-cover object-right"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left content */}
          <div className="col-span-12 lg:col-span-6 text-white">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-0.5 bg-[#CAA258]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#CAA258]">
                World-class infrastructure
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Key facilities & institutes
            </h2>
            
            <p className="text-base sm:text-lg text-white/90 mb-8 font-medium leading-relaxed">
              Stellenbosch University is the proud host of the newly opened headquarters for the National Institute of Theoretical and Computational Sciences (NITheCS). This provides state-of-the-art facilities and global collaborative opportunities for computer science researchers.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#CAA258] flex items-center justify-center">
                  <Building2 size={24} className="text-[#61223B]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">NITheCS headquarters</h3>
                  <p className="text-sm text-white/80 font-medium leading-relaxed">
                    Modern research facilities equipped with high-performance computing infrastructure and collaborative workspaces.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#CAA258] flex items-center justify-center">
                  <Globe size={24} className="text-[#61223B]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Global collaborations</h3>
                  <p className="text-sm text-white/80 font-medium leading-relaxed">
                    Access to international research networks and partnerships with leading institutions worldwide.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#CAA258] flex items-center justify-center">
                  <Users size={24} className="text-[#61223B]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Research community</h3>
                  <p className="text-sm text-white/80 font-medium leading-relaxed">
                    Vibrant community of researchers, postdoctoral fellows, and graduate students working on cutting-edge problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right image with unique shape */}
          <div className="col-span-12 lg:col-span-6 relative">
            <div className="relative aspect-[4/3] overflow-hidden" style={{ borderBottomRightRadius: '4rem' }}>
              <img
                src="/images/building 2.jpg"
                alt="NITheCS facilities"
                className="w-full h-full object-cover"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6">
                <p className="text-sm font-bold text-[#61223B] mb-2">NITheCS at Stellenbosch</p>
                <p className="text-xs text-[#4D5356] font-medium">
                  National hub for theoretical and computational sciences
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
