import { Users, BookOpen, FlaskConical, Trophy } from "lucide-react"

const stats = [
  { icon: Users,        value: "11+",   label: "Academic staff" },
  { icon: BookOpen,     value: "50+",   label: "Years of excellence" },
  { icon: FlaskConical, value: "4",     label: "Active research groups" },
  { icon: Trophy,       value: "Top 3", label: "SA CS departments" },
]

export default function StatsBar() {
  return (
    <section className="bg-white border-y border-[#E2E2E2]">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-12 gap-6">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="col-span-6 lg:col-span-3 flex items-center gap-4">
              {/* Science Red-accented icon badge */}
              <div
                className="w-11 h-11 flex items-center justify-center flex-shrink-0"
                style={{ background: "#F5F5F5", borderLeft: "3px solid #D22730" }}
              >
                <Icon size={18} className="text-[#61223B]" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#2D2D2D] leading-none">{value}</p>
                <p className="text-xs text-[#4D5356] mt-1 font-medium">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
