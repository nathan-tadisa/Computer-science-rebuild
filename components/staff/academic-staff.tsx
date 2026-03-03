"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react"

const academicStaff = [
  {
    name: "Brink van der Merwe",
    role: "Professor, Head of division",
    office: "A511",
    email: "abvdm@cs.sun.ac.za",
    phone: "+27 21 808 4232",
    interests: "Tree automata and applications, Learning of grammars and languages from data",
    category: "core"
  },
  {
    name: "George Azzopardi",
    role: "Associate Professor Extraordinary",
    office: "Remote",
    phone: "+27 21 808 4232",
    interests: "Brain-inspired computing, Computer Vision, Pattern Recognition, Machine Learning",
    category: "extraordinary"
  },
  {
    name: "Willem Bester",
    role: "Junior Lecturer",
    office: "A508",
    email: "whkbester@cs.sun.ac.za",
    phone: "+27 21 808 4232",
    interests: "Software Engineering, Formal Methods, Formal Language and Automata Theory",
    category: "core"
  },
  {
    name: "Judith Bishop",
    role: "Professor Extraordinary",
    email: "jbishop@sun.ac.za",
    interests: "Programming languages, software engineering, mobile computing, open source software",
    category: "extraordinary"
  },
  {
    name: "Loek Cleophas",
    role: "Associate Professor Extraordinary",
    office: "Remote",
    phone: "+27 21 808 4232",
    interests: "Model-driven engineering, Digital Twins, Algorithm + model variability",
    category: "extraordinary"
  },
  {
    name: "Marcel Dunaiski",
    role: "Senior Lecturer",
    office: "A519",
    email: "marceldunaiski@sun.ac.za",
    phone: "+27 21 808 4232",
    interests: "Data Science, Informetrics, Scientometrics",
    category: "core"
  },
  {
    name: "David Baker Effendi",
    role: "Research Fellow",
    office: "Remote",
    phone: "+27 21 808 4232",
    interests: "Program analysis, static analysis",
    category: "core"
  },
  {
    name: "Andries Engelbrecht",
    role: "Professor",
    office: "B2023",
    email: "engel@sun.ac.za",
    phone: "+27 21 808 9259",
    interests: "Swarm intelligence, Evolutionary computation, Hyper-heuristics, Neural networks, Machine learning",
    category: "core"
  },
  {
    name: "Bernd Fischer",
    role: "Professor",
    office: "A513",
    email: "bfischer@cs.sun.ac.za",
    phone: "+27 21 808 2527",
    interests: "Software engineering, formal methods, program analysis, program generation, program verification, AI",
    category: "core"
  },
  {
    name: "Trienko Grobler",
    role: "Lecturer",
    office: "A510",
    email: "tlgrobler@sun.ac.za",
    phone: "+27 21 808 4232",
    interests: "Machine learning, remote sensing, radio interferometry, coding theory",
    category: "core"
  },
  {
    name: "McElory Hoffmann",
    role: "Senior Lecturer Extraordinary",
    office: "Remote",
    email: "mcelory@praelexis.co.za",
    interests: "Computer vision, machine learning, smart cameras",
    category: "extraordinary"
  },
  {
    name: "Cornelia Inggs",
    role: "Senior Lecturer",
    office: "A509",
    email: "cinggs@cs.sun.ac.za",
    phone: "+27 21 808 4232",
    interests: "Formal methods, model checking, concurrency",
    category: "core"
  },
  {
    name: "Maria Keet",
    role: "Professor Extraordinary",
    office: "Remote",
    phone: "+27 21 808 4232",
    interests: "Ontology, Semantic Web, Conceptual Modeling, Knowledge Representation and reasoning",
    category: "extraordinary"
  },
  {
    name: "Steve Kroon",
    role: "Associate Professor",
    office: "A515",
    email: "kroon@sun.ac.za",
    phone: "+27 21 808 9375",
    interests: "Artificial intelligence/machine learning, statistical learning theory, probability and computing",
    category: "core"
  },
  {
    name: "Mkhuseli Ngxande",
    role: "Lecturer",
    office: "A518",
    email: "ngxandem@sun.ac.za",
    phone: "+27 21 808 4232",
    interests: "Machine learning, computer vision, bioinformatics, wide area surveillance",
    category: "core"
  },
  {
    name: "Francesco Petruccione",
    role: "Visiting Academic",
    office: "MIV 1003",
    email: "petruccione@sun.ac.za",
    phone: "+27 21 808 4562",
    interests: "Interim director of NITheCS, Quantum Computing",
    category: "visiting"
  },
  {
    name: "Laurette Pretorius",
    role: "Associate Professor Extraordinary",
    phone: "+27 21 808 4232",
    interests: "Multilingual NLP, Semantic computing, Ontology development, Machine translation",
    category: "extraordinary"
  },
  {
    name: "Moeketsi Raselimo",
    role: "Lecturer Extraordinary",
    office: "Remote",
    phone: "+27 21 808 4232",
    interests: "Programming Languages, Software Testing, Fuzzing",
    category: "extraordinary"
  },
  {
    name: "Gavin Rens",
    role: "Lecturer",
    office: "A508",
    email: "gavinrens@sun.ac.za",
    phone: "+27 21 808 4232",
    interests: "Cognitive Robotics, knowledge representation and reasoning under uncertainty, Probabilistic planning",
    category: "core"
  },
  {
    name: "William (Bill) Tucker",
    role: "Professor",
    office: "A522",
    email: "btucker@sun.ac.za",
    phone: "+27 21 808 3382",
    interests: "Computer networks and applications; human computer interaction; social impact; ethical computing",
    category: "core"
  },
  {
    name: "Lynette van Zijl",
    role: "Professor",
    office: "A520",
    email: "lvzijl@sun.ac.za",
    phone: "+27 21 808 4232",
    interests: "Implementation and applications of automata; assistive technologies",
    category: "core"
  },
  {
    name: "Wolf-Tilo Balke and Florian Plötzky",
    role: "Visiting Academic",
    email: "balke@ifis.cs.tu-bs.de",
    phone: "+27 21 808 4232",
    interests: "Query Processing, User Preferences and Personalization, Cognitive User Modeling",
    category: "visiting"
  },
  {
    name: "Willem Visser",
    role: "Part-time Professor",
    office: "A517",
    email: "visserw@sun.ac.za",
    phone: "+27 21 808 4232",
    interests: "Software engineering, testing, symbolic execution, and model checking",
    category: "core"
  },
  {
    name: "Fabian Yamaguchi",
    role: "Professor Extraordinary",
    email: "fabs@shiftleft.io",
    interests: "Computer security, Program analysis, Machine learning",
    category: "extraordinary"
  }
]

export default function AcademicStaff() {
  const [filter, setFilter] = useState("all")

  const filteredStaff = filter === "all" 
    ? academicStaff 
    : academicStaff.filter(staff => staff.category === filter)

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
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#61223B] mb-6">
            Academic staff
          </h2>
          <p className="text-lg text-[#4D5356] font-medium max-w-3xl mx-auto mb-8">
            Our academic team brings together world-class researchers and educators dedicated to excellence in teaching and research.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 text-sm font-bold transition-colors ${
                filter === "all"
                  ? "bg-[#61223B] text-white"
                  : "bg-white text-[#61223B] border-2 border-[#E5E5E5] hover:border-[#61223B]"
              }`}
            >
              All staff
            </button>
            <button
              onClick={() => setFilter("core")}
              className={`px-6 py-2 text-sm font-bold transition-colors ${
                filter === "core"
                  ? "bg-[#61223B] text-white"
                  : "bg-white text-[#61223B] border-2 border-[#E5E5E5] hover:border-[#61223B]"
              }`}
            >
              Core faculty
            </button>
            <button
              onClick={() => setFilter("extraordinary")}
              className={`px-6 py-2 text-sm font-bold transition-colors ${
                filter === "extraordinary"
                  ? "bg-[#61223B] text-white"
                  : "bg-white text-[#61223B] border-2 border-[#E5E5E5] hover:border-[#61223B]"
              }`}
            >
              Extraordinary & visiting
            </button>
          </div>
        </div>
        
        {/* Staff Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredStaff.map((staff, index) => (
            <div
              key={index}
              className="bg-white border-2 border-[#E5E5E5] hover:border-[#61223B] transition-colors p-6"
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
              <div className="space-y-2 mb-4">
                {staff.office && (
                  <div className="flex items-start gap-2">
                    <MapPin size={14} className="text-[#D22730] mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-[#4D5356] font-medium">
                      {staff.office}
                    </span>
                  </div>
                )}
                {staff.email && (
                  <div className="flex items-start gap-2">
                    <Mail size={14} className="text-[#D22730] mt-0.5 flex-shrink-0" />
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
                    <Phone size={14} className="text-[#D22730] mt-0.5 flex-shrink-0" />
                    <a
                      href={`tel:${staff.phone}`}
                      className="text-xs text-[#4D5356] hover:text-[#61223B] font-medium"
                    >
                      {staff.phone}
                    </a>
                  </div>
                )}
              </div>
              
              {/* Research Interests */}
              {staff.interests && (
                <div className="pt-4 border-t border-[#E5E5E5]">
                  <p className="text-xs font-bold text-[#61223B] mb-2">
                    Research interests
                  </p>
                  <p className="text-xs text-[#4D5356] font-medium leading-relaxed">
                    {staff.interests}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
