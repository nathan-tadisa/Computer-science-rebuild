import { CheckCircle2, AlertCircle } from "lucide-react"

const requirements = [
  {
    category: "National Senior Certificate (NSC)",
    items: [
      { label: "Admission to bachelor's degree study", value: "Required", highlight: true },
      { label: "English (Home Language or First Additional Language)", value: "Level 5 (60%+)", highlight: true },
      { label: "Mathematics", value: "Level 6 (70%+)", highlight: true },
      { label: "Physical Sciences", value: "Level 5 (60%+)", highlight: false },
      { label: "Admission Point Score (APS)", value: "Minimum varies by programme", highlight: false }
    ]
  }
]

const additionalInfo = [
  "International qualifications are assessed for equivalence to NSC requirements",
  "Alternative entry routes available for mature students (23+ years)",
  "NBT (National Benchmark Test) scores may be required",
  "Meeting minimum requirements does not guarantee admission due to limited spaces"
]

export default function AdmissionRequirements() {
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      {/* S-graphic background pattern */}
      <div className="absolute top-0 left-0 h-full opacity-10 pointer-events-none">
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
              Entry requirements
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#61223B] mb-6">
            Admission requirements
          </h2>
          <p className="text-lg text-[#4D5356] font-medium max-w-3xl leading-relaxed">
            To be considered for admission to our undergraduate computer science programmes, you must meet the following minimum requirements. Strong performance in mathematics is essential.
          </p>
        </div>
        
        <div className="grid grid-cols-12 gap-8">
          
          {/* Requirements Table */}
          <div className="col-span-12 lg:col-span-8">
            {requirements.map((req) => (
              <div key={req.category} className="mb-8">
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-4 flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-[#D22730]" />
                  {req.category}
                </h3>
                
                <div className="bg-[#F5F5F5] overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[#61223B] text-white">
                        <th className="text-left px-6 py-4 text-sm font-bold uppercase tracking-wider">
                          Subject/Requirement
                        </th>
                        <th className="text-left px-6 py-4 text-sm font-bold uppercase tracking-wider">
                          Minimum Level
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {req.items.map((item, index) => (
                        <tr
                          key={item.label}
                          className={`${
                            index % 2 === 0 ? 'bg-white' : 'bg-[#F5F5F5]'
                          } ${item.highlight ? 'border-l-4 border-[#D22730]' : ''}`}
                        >
                          <td className="px-6 py-4 text-sm font-medium text-[#2D2D2D]">
                            {item.label}
                            {item.highlight && (
                              <span className="ml-2 text-xs font-bold text-[#D22730]">*</span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-sm font-semibold text-[#4D5356]">
                            {item.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <p className="mt-3 text-xs text-[#4D5356] font-medium flex items-start gap-2">
                  <span className="text-[#D22730] font-bold">*</span>
                  Critical requirements for admission
                </p>
              </div>
            ))}
          </div>
          
          {/* Additional Information */}
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-[#D22730]/10 p-6 border-l-4 border-[#D22730]">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle size={20} className="text-[#D22730]" />
                <h3 className="text-lg font-bold text-[#2D2D2D]">
                  Important notes
                </h3>
              </div>
              
              <ul className="space-y-3">
                {additionalInfo.map((info) => (
                  <li key={info} className="flex items-start gap-2 text-sm text-[#4D5356] font-medium leading-relaxed">
                    <div className="w-1.5 h-1.5 bg-[#D22730] rounded-full mt-1.5 flex-shrink-0" />
                    {info}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-[#D22730]/20">
                <p className="text-xs font-bold text-[#61223B] uppercase tracking-wider mb-2">
                  Need help?
                </p>
                <p className="text-sm text-[#4D5356] font-medium mb-3">
                  Contact our admissions office for guidance on your specific situation.
                </p>
                <a
                  href="mailto:undergrad@cs.sun.ac.za"
                  className="text-sm font-bold text-[#D22730] hover:text-[#B01F28] transition-colors"
                >
                  undergrad@cs.sun.ac.za
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
