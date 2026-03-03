const facultyMembers = [
  "Bagula, BA",
  "Cloete, I (Prof)",
  "Ackerman, C",
  "de Villiers PJA (Prof)",
  "de Villiers H (Dr)",
  "Dodds, RMcD",
  "Du Toit, C",
  "Eloff, J",
  "Engelbrecht, JA",
  "Geldenhuys, J (Prof)",
  "Gouws, EH (Dr)",
  "Hayter, J",
  "Hoffmann, M (Dr)",
  "Lezar, E",
  "Ludik, J (Dr)",
  "Omlin, CW (Dr)",
  "Scheffler, K (Prof)",
  "Uys, JB",
  "Van Deventer, MH",
  "Van der Walt, APJ (Prof)"
]

export default function AlumniFaculty() {
  return (
    <div>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-[#61223B] mb-4">
          Former faculty members
        </h3>
        <p className="text-base text-[#4D5356] font-medium max-w-3xl mx-auto">
          Honouring the distinguished academics who have contributed to the department's excellence over the decades.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {facultyMembers.map((name, index) => (
          <div
            key={index}
            className="bg-white border-t-4 border-[#CAA258] p-6 hover:shadow-md transition-shadow"
          >
            <p className="text-sm font-bold text-[#2D2D2D] text-center">
              {name}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
