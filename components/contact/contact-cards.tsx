import { Mail, Phone, MapPin, Mailbox } from "lucide-react"

export default function ContactCards() {
  return (
    <section className="bg-[#F5F5F5] py-20 relative overflow-hidden">
      {/* S-graphic background pattern */}
      <div className="absolute bottom-0 left-0 h-full opacity-10 pointer-events-none">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-03.svg" 
          alt="" 
          className="h-full w-auto object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Direct Enquiries */}
          <div className="bg-white border-2 border-[#E5E5E5] p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#61223B] flex items-center justify-center">
                <Mail size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#61223B]">
                Direct enquiries
              </h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-[#D22730] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-[#4D5356] mb-1">Telephone</p>
                  <a 
                    href="tel:+27218084232" 
                    className="text-sm text-[#2D2D2D] hover:text-[#61223B] font-medium"
                  >
                    +27 21 808 4232
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-[#D22730] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-[#4D5356] mb-1">Fax</p>
                  <p className="text-sm text-[#2D2D2D] font-medium">
                    +27 86 603 7130
                  </p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-[#E5E5E5]">
                <p className="text-xs font-bold text-[#4D5356] mb-3">Email addresses</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Mail size={14} className="text-[#D22730] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[#4D5356] mb-0.5">Administrative</p>
                      <a 
                        href="mailto:secretary@cs.sun.ac.za" 
                        className="text-sm text-[#2D2D2D] hover:text-[#61223B] font-medium break-all"
                      >
                        secretary@cs.sun.ac.za
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Mail size={14} className="text-[#D22730] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[#4D5356] mb-0.5">Postgraduate</p>
                      <a 
                        href="mailto:postgrad@cs.sun.ac.za" 
                        className="text-sm text-[#2D2D2D] hover:text-[#61223B] font-medium break-all"
                      >
                        postgrad@cs.sun.ac.za
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Mail size={14} className="text-[#D22730] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[#4D5356] mb-0.5">Undergraduate</p>
                      <a 
                        href="mailto:undergrad@cs.sun.ac.za" 
                        className="text-sm text-[#2D2D2D] hover:text-[#61223B] font-medium break-all"
                      >
                        undergrad@cs.sun.ac.za
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Card 2: Physical Address */}
          <div className="bg-white border-2 border-[#E5E5E5] p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#61223B] flex items-center justify-center">
                <MapPin size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#61223B]">
                Physical address
              </h3>
            </div>
            
            <address className="not-italic text-sm text-[#2D2D2D] font-medium leading-relaxed">
              Computer Science<br />
              Stellenbosch University<br />
              Decanting Facility<br />
              Hammanshand Road<br />
              7600 Stellenbosch<br />
              SOUTH AFRICA
            </address>
          </div>
          
          {/* Card 3: Postal Address */}
          <div className="bg-white border-2 border-[#E5E5E5] p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#61223B] flex items-center justify-center">
                <Mailbox size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#61223B]">
                Postal address
              </h3>
            </div>
            
            <address className="not-italic text-sm text-[#2D2D2D] font-medium leading-relaxed">
              Computer Science Division<br />
              Dept of Mathematical Sciences<br />
              Stellenbosch University<br />
              Private Bag X1<br />
              7602 Matieland<br />
              SOUTH AFRICA
            </address>
          </div>
        </div>
      </div>
    </section>
  )
}
