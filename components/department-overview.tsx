export default function DepartmentOverview() {
  return (
    <section className="bg-white py-16 relative overflow-hidden">
      {/* S-graphic background pattern */}
      <div className="absolute top-0 right-0 h-full w-auto max-w-[50%] opacity-10 pointer-events-none">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-01.svg" 
          alt="" 
          className="h-full w-auto object-cover object-right"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          
          {/* About Us */}
          <div className="col-span-12 lg:col-span-7">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-0.5 bg-[#D22730]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#61223B]">
                About us
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#61223B] mb-6 leading-tight">
              Shaping Africa's
              <br />
              technology leaders
            </h2>
            
            <p className="text-base sm:text-lg text-[#4D5356] mb-6 font-medium leading-relaxed">
              We are one of South Africa's leading computer science departments, pioneering research and education at the intersection of artificial intelligence, software engineering, and computational thinking. Since 1972, we've been empowering students to become innovators, problem-solvers, and leaders who shape the digital future.
            </p>
            
            <p className="text-sm sm:text-base text-[#4D5356] font-medium leading-relaxed">
              Our vibrant community thrives on collaboration, curiosity, and excellence. We combine rigorous academic programmes with cutting-edge research, industry partnerships, and a supportive environment where every student can flourish.
            </p>
          </div>
          
          {/* Quick Stats */}
          <div className="col-span-12 lg:col-span-5">
            <div className="bg-[#F5F5F5] p-6 sm:p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D22730] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">50+</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#2D2D2D] mb-1">Years of excellence</h3>
                  <p className="text-sm text-[#4D5356] font-medium">
                    Established in 1972, pioneering CS education in Africa
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#61223B] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">11+</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#2D2D2D] mb-1">Academic staff</h3>
                  <p className="text-sm text-[#4D5356] font-medium">
                    World-class researchers and educators
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
