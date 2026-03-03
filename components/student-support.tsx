import Link from "next/link"
import { Users, BookOpen, Heart, Briefcase, MessageCircle, Award } from "lucide-react"

const supportServices = [
  {
    icon: Users,
    title: "Computer Science Society",
    description: "Join our vibrant student community for tech talks, workshops, and social events.",
    link: "#",
    linkText: "Join the society"
  },
  {
    icon: BookOpen,
    title: "Academic support",
    description: "Access tutoring, study groups, and mentorship programmes to excel in your studies.",
    link: "#",
    linkText: "Get support"
  },
  {
    icon: Heart,
    title: "Mentorship programme",
    description: "Connect with senior students and alumni who guide you through your academic journey.",
    link: "#",
    linkText: "Find a mentor"
  },
  {
    icon: Briefcase,
    title: "Career services",
    description: "Prepare for your future with CV workshops, interview prep, and industry connections.",
    link: "#",
    linkText: "Explore careers"
  },
  {
    icon: MessageCircle,
    title: "Peer learning",
    description: "Collaborate with fellow students through study groups and project teams.",
    link: "#",
    linkText: "Join a group"
  },
  {
    icon: Award,
    title: "Competitions & hackathons",
    description: "Participate in coding competitions, hackathons, and innovation challenges.",
    link: "#",
    linkText: "View events"
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
                  
                  <p className="text-sm text-[#4D5356] font-medium leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  {/* Link */}
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#D22730] hover:text-[#B01F28] transition-colors"
                  >
                    {service.linkText}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
