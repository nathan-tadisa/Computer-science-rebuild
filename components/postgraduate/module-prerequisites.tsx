import { AlertCircle } from "lucide-react"

const moduleRequirements = [
  {
    module: "General Honours modules",
    prerequisites: [
      "4 core 3rd-year CS modules",
      "Mathematics up to 1st year",
      "Probability Theory & Statistics (Applied Math) up to 1st year",
      "Preferably Math/Applied Math up to 2nd year"
    ]
  },
  {
    module: "Digital Image Processing",
    prerequisites: [
      "Working knowledge of Fourier Analysis (covered in Applied Maths 364)"
    ]
  },
  {
    module: "Computer Vision",
    prerequisites: [
      "Linear algebra (covered in Applied Math 214 and Math 214)"
    ]
  }
]

export default function ModulePrerequisites() {
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      {/* S-graphic background pattern */}
      <div className="absolute bottom-0 right-0 h-full opacity-10 pointer-events-none">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-06.svg" 
          alt="" 
          className="h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-[#D22730]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#61223B]">
              Module information
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#61223B] mb-6">
            Individual module prerequisites
          </h2>
          <p className="text-lg text-[#4D5356] font-medium max-w-3xl leading-relaxed">
            If you're interested in registering for individual modules, ensure you meet the specific prerequisites for each module.
          </p>
        </div>
        
        <div className="grid grid-cols-12 gap-8">
          
          {/* Prerequisites Table */}
          <div className="col-span-12 lg:col-span-8">
            <div className="bg-[#F5F5F5] overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#61223B] text-white">
                    <th className="text-left px-6 py-4 text-sm font-bold uppercase tracking-wider">
                      Module
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-bold uppercase tracking-wider">
                      Prerequisites
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {moduleRequirements.map((item, index) => (
                    <tr
                      key={item.module}
                      className={`${
                        index % 2 === 0 ? 'bg-white' : 'bg-[#F5F5F5]'
                      } border-l-4 border-[#D22730]`}
                    >
                      <td className="px-6 py-4 align-top">
                        <p className="text-sm font-bold text-[#2D2D2D]">
                          {item.module}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <ul className="space-y-2">
                          {item.prerequisites.map((prereq, prereqIndex) => (
                            <li key={prereqIndex} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-[#D22730] rounded-full mt-1.5 flex-shrink-0" />
                              <span className="text-sm text-[#4D5356] font-medium">
                                {prereq}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Sidebar Information */}
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-[#D22730]/10 p-6 border-l-4 border-[#D22730]">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle size={20} className="text-[#D22730]" />
                <h3 className="text-lg font-bold text-[#2D2D2D]">
                  Registration requirements
                </h3>
              </div>
              
              <p className="text-sm text-[#4D5356] font-medium leading-relaxed mb-4">
                To register for individual modules, you must have:
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm text-[#4D5356] font-medium leading-relaxed">
                  <div className="w-1.5 h-1.5 bg-[#D22730] rounded-full mt-1.5 flex-shrink-0" />
                  A CS degree (or fulfil requirements for next graduation)
                </li>
                <li className="flex items-start gap-2 text-sm text-[#4D5356] font-medium leading-relaxed">
                  <div className="w-1.5 h-1.5 bg-[#D22730] rounded-full mt-1.5 flex-shrink-0" />
                  The same mathematics and programming background as required for the Honours degree
                </li>
              </ul>
              
              <div className="pt-4 border-t border-[#D22730]/20">
                <p className="text-xs font-bold text-[#61223B] uppercase tracking-wider mb-2">
                  Need clarification?
                </p>
                <p className="text-sm text-[#4D5356] font-medium mb-3">
                  Contact the postgraduate coordinator for advice on module selection.
                </p>
                <a
                  href="mailto:postgrad@cs.sun.ac.za"
                  className="text-sm font-bold text-[#D22730] hover:text-[#B01F28] transition-colors"
                >
                  postgrad@cs.sun.ac.za
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
