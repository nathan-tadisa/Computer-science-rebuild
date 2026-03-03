import { Users, Award, Laptop, Heart } from "lucide-react"

const highlights = [
  {
    icon: Users,
    title: "Acorns and Oaks Mentorship Programme",
    description: "Seamlessly transition into university life with experienced mentors who guide you through your first year and beyond."
  },
  {
    icon: Award,
    title: "Active student community",
    description: "Join the CS Society, participate in departmental hackathons, and collaborate with peers who share your passion for technology."
  },
  {
    icon: Laptop,
    title: "State-of-the-art facilities",
    description: "Access modern computer labs, high-performance computing clusters, and dedicated project spaces for hands-on learning."
  },
  {
    icon: Heart,
    title: "Strong academic support",
    description: "Benefit from small class sizes, accessible lecturers, tutoring programmes, and a culture that celebrates your success."
  }
]

export default function WhyStellenbosch() {
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      {/* S-graphic background pattern */}
      <div className="absolute top-0 right-0 h-full opacity-10 pointer-events-none">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-04.svg" 
          alt="" 
          className="h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-12 gap-12 items-center">
          
          {/* Left content */}
          <div className="col-span-12 lg:col-span-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-0.5 bg-[#D22730]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#61223B]">
                Your home for the next three years
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-[#61223B] mb-6">
              Why Stellenbosch?
            </h2>
            
            <p className="text-lg text-[#4D5356] font-medium leading-relaxed mb-8">
              At Stellenbosch, you're not just a student number. You're part of a vibrant community that supports your growth, celebrates your achievements, and prepares you for a successful career in technology.
            </p>
            
            <div className="space-y-6">
              {highlights.map((highlight) => {
                const Icon = highlight.icon
                return (
                  <div key={highlight.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-[#D22730] flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#2D2D2D] mb-1">
                        {highlight.title}
                      </h3>
                      <p className="text-sm text-[#4D5356] font-medium leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          
          {/* Right image */}
          <div className="col-span-12 lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square overflow-hidden">
                  <img
                    src="/placeholder.jpg"
                    alt="Students collaborating"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/placeholder.jpg"
                    alt="Computer lab"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="space-y-4 pt-12">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/placeholder.jpg"
                    alt="Mentorship session"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden">
                  <img
                    src="/placeholder.jpg"
                    alt="Hackathon event"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
