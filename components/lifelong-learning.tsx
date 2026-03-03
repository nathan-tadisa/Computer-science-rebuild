export default function LifelongLearning() {
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      {/* S-graphic background pattern */}
      <div className="absolute top-0 right-0 h-full opacity-10 pointer-events-none">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-01.svg" 
          alt="" 
          className="h-full w-auto object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-12 gap-12 items-center">
          
          {/* Left content */}
          <div className="col-span-12 lg:col-span-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-0.5 bg-[#D22730]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#61223B]">
                Lifelong learning
              </span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-[#2D2D2D] mb-6 leading-tight">
              LIFE-LONG
              <br />
              LEARNING
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#D22730] rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-[#2D2D2D] mb-2">Learning resources and programmes</h3>
                  <p className="text-sm text-[#4D5356] font-medium leading-relaxed">
                    Access a wealth of online courses, workshops, and seminars designed for continuous professional development.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#D22730] rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-[#2D2D2D] mb-2">Contribute to advancing knowledge</h3>
                  <p className="text-sm text-[#4D5356] font-medium leading-relaxed">
                    Engage in research projects and collaborate with leading academics in your field.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="flex items-center gap-8">
              <div>
                <div className="text-4xl font-bold text-[#61223B] mb-1">120+</div>
                <p className="text-xs text-[#4D5356] font-semibold uppercase tracking-wider">
                  Modules available
                </p>
              </div>
              <div className="w-px h-12 bg-[#E2E2E2]" />
              <div>
                <div className="text-4xl font-bold text-[#61223B] mb-1">50+</div>
                <p className="text-xs text-[#4D5356] font-semibold uppercase tracking-wider">
                  Years excellence
                </p>
              </div>
            </div>
          </div>
          
          {/* Right images */}
          <div className="col-span-12 lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src="/placeholder.jpg"
                  alt="Learning resources"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm p-3">
                    <p className="text-xs font-bold text-[#61223B] uppercase">
                      Learning resources and programmes
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative aspect-square overflow-hidden">
                <img
                  src="/placeholder.jpg"
                  alt="Contribute to knowledge"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm p-3">
                    <p className="text-xs font-bold text-[#61223B] uppercase">
                      Contribute to advancing knowledge
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
