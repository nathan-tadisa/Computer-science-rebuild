export default function CareerSection() {
  return (
    <section className="bg-[#2D2D2D] py-20 relative overflow-hidden">
      {/* S-graphic background pattern */}
      <div className="absolute top-1/2 right-0 w-96 h-96 -translate-y-1/2 opacity-10 pointer-events-none">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-03.svg" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-12 gap-12 items-center">
          
          {/* Left image */}
          <div className="col-span-12 lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src="/images/su-campus.jpg"
                alt="Professional career"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Right content */}
          <div className="col-span-12 lg:col-span-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-0.5 bg-[#CAA258]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#CAA258]">
                Graduate
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              A professional
              <br />
              looking to
              <br />
              advance your
              <br />
              career
            </h2>
            
            <p className="text-base text-white/80 mb-8 font-medium leading-relaxed max-w-md">
              Whether you're seeking to upskill, change careers, or pursue advanced research, our postgraduate programmes and professional development courses are designed to help you achieve your goals.
            </p>
            
            <button className="px-8 py-4 bg-[#D22730] text-white font-bold text-sm hover:bg-[#B01F28] transition-colors">
              Explore opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
