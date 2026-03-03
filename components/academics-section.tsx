import Link from "next/link"
import { ArrowRight, GraduationCap, Microscope, Cpu, BrainCircuit, Network, Code2 } from "lucide-react"

/* ── Undergraduate programmes ── */
const undergrad = [
  {
    title: "BSc Computer Science",
    description:
      "A rigorous 3-year programme covering algorithms, data structures, operating systems, and software engineering. The gateway to a technology career.",
    tag: "3 Years",
    href: "#",
  },
  {
    title: "BSc Maths & Computer Science",
    description:
      "An interdisciplinary programme blending mathematical theory with computer science, ideal for those pursuing careers in research or quantitative roles.",
    tag: "3 Years",
    href: "#",
  },
  {
    title: "BSc Extended Programme",
    description:
      "A 4-year extended curriculum designed to give students additional support in mathematics and science before transitioning to the full CS programme.",
    tag: "4 Years",
    href: "#",
  },
]

/* ── Postgraduate programmes ── */
const postgrad = [
  {
    title: "MSc Computer Science",
    description:
      "Pursue original research under world-class supervision. Choose from a coursework-and-dissertation or pure-research track.",
    tag: "1–2 Years",
    href: "#",
  },
  {
    title: "PhD Computer Science",
    description:
      "Join a vibrant research community and contribute new knowledge to global challenges in AI, security, networks, and more.",
    tag: "3–4 Years",
    href: "#",
  },
  {
    title: "Postdoctoral research",
    description:
      "Collaborate directly with NRF-rated academics on cutting-edge projects. Competitive fellowships available.",
    tag: "1–3 Years",
    href: "#",
  },
]

/* ── Research labs ── */
const labs = [
  {
    icon: BrainCircuit,
    title: "Machine Learning Lab",
    description:
      "Deep learning, reinforcement learning, and statistical models applied to real-world datasets across medicine, language, and robotics.",
    tags: ["ML", "Deep Learning", "NLP"],
  },
  {
    icon: Cpu,
    title: "Robotics & Vision Lab",
    description:
      "Autonomous systems, computer vision, and SLAM. Interdisciplinary research bridging hardware and intelligent algorithms.",
    tags: ["Robotics", "CV", "SLAM"],
  },
  {
    icon: Network,
    title: "Networks & Security Lab",
    description:
      "Broadband networks, mobile computing, cybersecurity, and privacy-preserving systems for the African context and beyond.",
    tags: ["Networks", "Security", "5G"],
  },
  {
    icon: Code2,
    title: "Software Engineering Lab",
    description:
      "Formal methods, programme testing, verification, and model-driven development for high-assurance software systems.",
    tags: ["Testing", "Formal Methods", "DevOps"],
  },
]

function ProgramCard({
  title,
  description,
  tag,
  href,
}: {
  title: string
  description: string
  tag: string
  href: string
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col p-6 bg-white border border-[#E2E2E2] hover:border-[#D22730] hover:shadow-md transition-all"
      style={{ borderTop: "3px solid #D22730" }}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-semibold text-[#2D2D2D] text-sm leading-snug group-hover:text-[#61223B] transition-colors">
          {title}
        </h3>
        <span className="ml-3 flex-shrink-0 px-2 py-0.5 text-[10px] font-semibold bg-[#F5F5F5] text-[#61223B] border border-[#E2E2E2]">
          {tag}
        </span>
      </div>
      <p className="text-sm text-[#4D5356] leading-relaxed flex-1 font-medium">{description}</p>
      <div className="mt-4 flex items-center gap-1 text-xs text-[#D22730] font-semibold group-hover:gap-2 transition-all">
        Learn more <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  )
}

function LabCard({
  icon: Icon,
  title,
  description,
  tags,
}: {
  icon: React.ElementType
  title: string
  description: string
  tags: string[]
}) {
  return (
    <div className="group p-6 bg-white border border-[#E2E2E2] hover:border-[#D22730] hover:shadow-md transition-all">
      {/* Science Red-accented icon */}
      <div
        className="w-10 h-10 flex items-center justify-center mb-4"
        style={{ background: "#F5F5F5", borderLeft: "3px solid #D22730" }}
      >
        <Icon size={18} className="text-[#61223B]" />
      </div>
      <h3 className="font-semibold text-[#2D2D2D] mb-2 group-hover:text-[#61223B] transition-colors">{title}</h3>
      <p className="text-sm text-[#4D5356] leading-relaxed mb-4 font-medium">{description}</p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 text-[10px] font-semibold text-[#61223B] bg-[#F5F5F5] border border-[#E2E2E2]"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── Section divider with label ── */
function SectionDivider({
  icon: Icon,
  label,
  href,
}: {
  icon: React.ElementType
  label: string
  href: string
}) {
  return (
    <div className="flex items-center gap-3 mb-7">
      <div className="w-7 h-7 flex items-center justify-center bg-[#D22730]">
        <Icon size={14} className="text-white" />
      </div>
      <h3 className="text-base font-bold text-[#2D2D2D]">{label}</h3>
      <div className="flex-1 h-px bg-[#E2E2E2]" />
      <Link href={href} className="text-xs text-[#D22730] hover:text-[#B01F28] font-semibold transition-colors">
        View all &rarr;
      </Link>
    </div>
  )
}

export default function AcademicsSection() {
  return (
    <section id="academics" className="bg-[#F5F5F5] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Section header ── */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-0.5 bg-[#D22730]" aria-hidden="true" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#61223B]">
              Academics &amp; research
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#61223B] text-balance">
            Study. Discover. Innovate.
          </h2>
          <p className="mt-3 text-[#4D5356] max-w-xl leading-relaxed font-medium">
            From first-year fundamentals to doctoral research — our programmes are designed to
            turn curious minds into world-class engineers and scientists.
          </p>
        </div>

        {/* ── Undergraduate ── */}
        <div className="mb-14">
          <SectionDivider icon={GraduationCap} label="Undergraduate programmes" href="#" />
          <div className="grid grid-cols-12 gap-5">
            {undergrad.map((p) => (
              <div key={p.title} className="col-span-12 md:col-span-6 lg:col-span-4">
                <ProgramCard {...p} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Postgraduate ── */}
        <div className="mb-14">
          <SectionDivider icon={Microscope} label="Postgraduate programmes" href="#" />
          <div className="grid grid-cols-12 gap-5">
            {postgrad.map((p) => (
              <div key={p.title} className="col-span-12 md:col-span-6 lg:col-span-4">
                <ProgramCard {...p} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Research labs ── */}
        <div id="research">
          <SectionDivider icon={Cpu} label="Active research labs" href="#" />
          <div className="grid grid-cols-12 gap-5">
            {labs.map((l) => (
              <div key={l.title} className="col-span-12 sm:col-span-6 lg:col-span-3">
                <LabCard {...l} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
