import { Mail, Phone, MapPin } from "lucide-react"

const administrativeStaff = [
  {
    name: "Emile Dreyer",
    role: "Administrative Staff",
    office: "A507",
    email: "edreyer@sun.ac.za",
    phone: "+27 21 808 4232"
  },
  {
    name: "Gaynor Fortuin",
    role: "Administrative Officer",
    office: "A514",
    email: "gfortuin@sun.ac.za",
    phone: "+27 21 808 4232"
  },
  {
    name: "Derrick Stephanus",
    role: "Assistant",
    office: "A507",
    email: "djstep@sun.ac.za",
    phone: "+27 21 808 4232"
  }
]

export default function AdministrativeStaff() {
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      {/* Subtle background with 10% Brilliant Gold tint */}
      <div className="absolute inset-0 bg-[#CAA258] opacity-5" />
      
      {/* S-graphic background pattern */}
      <div className="absolute top-0 right-0 h-full w-auto max-w-[40%] opacity-10 pointer-events-none">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-05.svg" 
          alt="" 
          className="h-full w-auto object-cover object-right"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-[#CAA258]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#61223B]">
              Support team
            </span>
            <div className="w-12 h-0.5 bg-[#CAA258]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#61223B] mb-6">
            Administrative staff
          </h2>
          <p className="text-base sm:text-lg text-[#4D5356] font-medium max-w-3xl mx-auto">
            Our dedicated administrative team ensures smooth operations and provides essential support to students, staff, and visitors.
          </p>
        </div>
        
        {/* Staff Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {administrativeStaff.map((staff, index) => (
            <div
              key={index}
              className="bg-white border-2 border-[#E5E5E5] hover:border-[#CAA258] transition-colors p-6"
            >
              {/* Profile Image */}
              <div 
                className="w-full aspect-square bg-[#E5E5E5] mb-4 overflow-hidden"
                style={{ borderBottomRightRadius: '2rem' }}
              >
                <img
                  src="/placeholder-user.jpg"
                  alt={staff.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Name */}
              <h3 className="text-lg font-bold text-[#61223B] mb-1 leading-tight">
                {staff.name}
              </h3>
              
              {/* Role */}
              <p className="text-sm text-[#4D5356] font-medium mb-4">
                {staff.role}
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2">
                {staff.office && (
                  <div className="flex items-start gap-2">
                    <MapPin size={14} className="text-[#CAA258] mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-[#4D5356] font-medium">
                      {staff.office}
                    </span>
                  </div>
                )}
                {staff.email && (
                  <div className="flex items-start gap-2">
                    <Mail size={14} className="text-[#CAA258] mt-0.5 flex-shrink-0" />
                    <a
                      href={`mailto:${staff.email}`}
                      className="text-xs text-[#4D5356] hover:text-[#61223B] font-medium break-all"
                    >
                      {staff.email}
                    </a>
                  </div>
                )}
                {staff.phone && (
                  <div className="flex items-start gap-2">
                    <Phone size={14} className="text-[#CAA258] mt-0.5 flex-shrink-0" />
                    <a
                      href={`tel:${staff.phone}`}
                      className="text-xs text-[#4D5356] hover:text-[#61223B] font-medium"
                    >
                      {staff.phone}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
