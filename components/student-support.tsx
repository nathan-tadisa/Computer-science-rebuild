import { Users, BookOpen, Heart, Briefcase, Code, Laptop, Award } from "lucide-react"

const supportServices = [
  {
    icon: Users,
    title: "Acorns and Oaks Mentorship Programme",
    description: "Transitioning to university can be daunting, but you don't have to do it alone. Through the Acorns and Oaks programme, newcomers are paired with experienced senior students who provide guidance, academic advice, and a welcoming introduction to campus life."
  },
  {
    icon: Code,
    title: "SUDS & The AI Society",
    description: "Connect with like-minded peers by joining our active student-run groups. Whether you want to build collaborative projects with the SU Developer Society (SUDS) or explore the future of tech with the newly established AI Society, you will find a space to learn, network, and grow outside the classroom."
  },
  {
    icon: Laptop,
    title: "The NARGA Computer Labs",
    description: "Our dedicated Science Faculty computer labs (NARGA) are more than just a place to study; they are the physical hub of our community. This is where study groups naturally form, late-night debugging sessions happen, and lifelong friendships are built."
  },
  {
    icon: Award,
    title: "Departmental Hackathons",
    description: "Participate in coding competitions, hackathons, and innovation challenges that push your skills to the next level and connect you with industry partners."
  },
  {
    icon: BookOpen,
    title: "Academic Support (TAs & Tutors)",
    description: "Access tutoring, study groups, and teaching assistants who provide personalised support to help you excel in your studies and master challenging concepts."
  },
  {
    icon: Briefcase,
    title: "Career Services",
    description: "Prepare for your future with CV workshops, interview preparation, and industry connections that open doors to exciting career opportunities in technology."
  }
]

export default function StudentSupport() {
  return (
    <section className="bg-[#D22730]/10 py-20 relative overflow-hidden">
      {/* S-graphic background pattern */}
      <div className="absolute top-0 right-0 h-full opacity-10 pointer-events-none">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-05.svg" 
          alt="" 
          className="h-full w-auto object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-[#D22730]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#61223B]">
              Student support &amp; community
            </span>
            <div className="w-12 h-0.5 bg-[#D22730]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#61223B] mb-6">
            You're never alone
            <br />
            on your journey
          </h2>
          <p className="text-lg text-[#4D5356] font-medium max-w-3xl mx-auto">
            We're committed to your success. Our comprehensive support services ensure you have everything you need to thrive academically, professionally, and personally.
          </p>
        </div>
        
        {/* Support Services Grid */}
        <div className="grid grid-cols-12 gap-6">
          {supportServices.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="col-span-12 md:col-span-6 lg:col-span-4"
              >
                <div className="bg-white p-6 h-full hover:shadow-xl transition-all group">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-[#D22730] flex items-center justify-center mb-4 group-hover:bg-[#61223B] transition-colors">
                    <Icon size={24} className="text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-[#2D2D2D] mb-3 group-hover:text-[#61223B] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-[#4D5356] font-medium leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
