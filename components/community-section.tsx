export default function CommunitySection() {
  return (
    <section className="bg-[#F5F5F5] py-20 relative overflow-hidden">
      {/* S-graphic background pattern */}
      <div className="absolute bottom-0 left-0 h-full opacity-10 pointer-events-none">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-02.svg" 
          alt="" 
          className="h-full w-auto object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-12 gap-8 items-center">
          
          {/* Left content */}
          <div className="col-span-12 lg:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-0.5 bg-[#D22730]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#61223B]">
                Community
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-[#61223B] mb-6">
              JOIN OUR
              <br />
              VIBRANT
              <br />
              COMMUNITY
            </h2>
            
            <p className="text-base text-[#4D5356] mb-8 font-medium leading-relaxed">
              From the Tech Society to the AI Club, our student organisations provide opportunities to connect with like-minded peers, develop leadership skills, and make lasting friendships.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D22730] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">01</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#2D2D2D] mb-1">Student societies</h3>
                  <p className="text-sm text-[#4D5356] font-medium">
                    Join clubs and societies aligned with your interests
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#61223B] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">02</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#2D2D2D] mb-1">Hackathons</h3>
                  <p className="text-sm text-[#4D5356] font-medium">
                    Participate in coding competitions and innovation challenges
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#CAA258] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">03</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#2D2D2D] mb-1">Networking</h3>
                  <p className="text-sm text-[#4D5356] font-medium">
                    Connect with industry professionals and alumni
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right images grid */}
          <div className="col-span-12 lg:col-span-7">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src="/placeholder.jpg"
                    alt="Student with guitar"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white text-[#61223B] text-xs font-bold">
                    MUSIC
                  </div>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="/placeholder.jpg"
                    alt="Student portrait"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white text-[#61223B] text-xs font-bold">
                    INNOVATION
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 pt-12">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="/placeholder.jpg"
                    alt="Students studying"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white text-[#61223B] text-xs font-bold">
                    WORKSHOPS
                  </div>
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src="/placeholder.jpg"
                    alt="Student working"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white text-[#61223B] text-xs font-bold">
                    RESEARCH
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
