import Link from "next/link"
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react"

const quickLinks = [
  {
    heading: "Prospective students",
    links: [
      { label: "Undergraduate", href: "/undergraduate" },
      { label: "Postgraduate", href: "/postgraduate" },
      { label: "PhD", href: "/phd" },
      { label: "Apply now", href: "https://www.sun.ac.za/english/apply" },
    ],
  },
  {
    heading: "Current students",
    links: [
      { label: "Programme guide", href: "/current-students/programme-guide" },
      { label: "Undergraduate modules", href: "/current-students/undergraduate-modules" },
      { label: "Postgraduate modules", href: "/current-students/postgraduate-modules" },
    ],
  },
  {
    heading: "Research & people",
    links: [
      { label: "Research", href: "/research" },
      { label: "Staff", href: "/staff" },
      { label: "Students", href: "/students" },
      { label: "Alumni", href: "/alumni" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Contact us", href: "/contact" },
      { label: "News", href: "https://www.su.ac.za/en/stories" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#61223B]">

      {/* Science Red rule at very top */}
      <div className="h-1 bg-[#D22730]" aria-hidden="true" />

      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-12 gap-10">

          {/* Brand + contact column (spans 4 of 12 on xl) */}
          <div className="col-span-12 md:col-span-6 xl:col-span-4">
            {/* Full brand signature with logo */}
            <Link href="/" className="flex items-center gap-3 mb-4" aria-label="SU Computer Science home">
              <div className="w-12 h-12 flex items-center justify-center border-2 border-[#CAA258]" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L3 6.5v6C3 17.3 7 21.5 12 23c5-1.5 9-5.7 9-10.5v-6L12 2z" stroke="#CAA258" strokeWidth="1.4" fill="none" />
                  <text x="12" y="16" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#CAA258" fontFamily="Georgia,serif">SU</text>
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-base leading-tight">Stellenbosch University</p>
                <p className="text-[#CAA258] text-xs mt-0.5 font-semibold">Computer Science</p>
              </div>
            </Link>
            
            {/* Trilingual slogan */}
            <p className="text-white/60 text-xs mb-6 font-medium italic">
              forward together | sonke siya phambili | saam vorentoe
            </p>

            <p className="text-white/70 text-sm leading-relaxed mb-7 font-medium">
              The Computer Science Division in the Department of Mathematical Sciences — shaping Africa's technology leaders since 1972.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-3.5">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-[#D22730] mt-0.5 flex-shrink-0" />
                <address className="not-italic text-xs text-white/65 leading-relaxed font-medium">
                  Computer Science Division<br />
                  Dept. of Mathematical Sciences<br />
                  Private Bag X1, 7602 Matieland<br />
                  Stellenbosch, South Africa
                </address>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-[#D22730] flex-shrink-0" />
                <a href="tel:+27218084232" className="text-xs text-white/65 hover:text-white transition-colors font-medium">
                  +27 21 808 4232
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-[#D22730] flex-shrink-0" />
                <a href="mailto:secretary@cs.sun.ac.za" className="text-xs text-white/65 hover:text-white transition-colors font-medium">
                  secretary@cs.sun.ac.za
                </a>
              </div>
            </div>
          </div>

          {/* Quick link columns (each spans 2 of 12 on xl) */}
          {quickLinks.map((col) => (
            <div key={col.heading} className="col-span-6 md:col-span-3 xl:col-span-2">
              <h3 className="text-xs font-bold tracking-widest uppercase text-[#CAA258] mb-4">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/65 hover:text-white transition-colors font-medium"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Enquiry shortcut cards */}
        <div className="mt-14 grid grid-cols-12 gap-3">
          {[
            { label: "General enquiries", email: "secretary@cs.sun.ac.za" },
            { label: "Postgraduate enquiries", email: "postgrad@cs.sun.ac.za" },
            { label: "Undergraduate enquiries", email: "undergrad@cs.sun.ac.za" },
          ].map(({ label, email }) => (
            <a
              key={email}
              href={`mailto:${email}`}
              className="col-span-12 md:col-span-4 flex items-center gap-3 p-4 border border-white/15 hover:border-[#D22730] transition-colors group"
            >
              <Mail size={14} className="text-[#D22730] flex-shrink-0" />
              <div>
                <p className="text-[11px] text-white/50 mb-0.5 font-semibold">{label}</p>
                <p className="text-xs text-white group-hover:text-[#CAA258] transition-colors font-medium">{email}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Campus map row */}
        <div className="mt-4 p-5 border border-white/15 grid grid-cols-12 gap-4 items-center">
          <div className="col-span-12 lg:col-span-8 flex items-center gap-3">
            <MapPin size={16} className="text-[#D22730] flex-shrink-0" />
            <div>
              <p className="text-sm font-bold text-white">Find us on campus</p>
              <p className="text-xs text-white/55 mt-0.5 font-medium">General Building, Banghoek Road, Stellenbosch (7602)</p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 flex justify-start lg:justify-end">
            <a
              href="https://www.sun.ac.za/en/about-us/stellenbosch-university-campus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-white/25 hover:border-[#D22730] text-sm text-white/70 hover:text-white transition-colors font-semibold"
            >
              Open campus map <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar with university links */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-12 gap-3 items-center">
          <p className="col-span-12 lg:col-span-6 text-xs text-white/45 font-medium text-center lg:text-left">
            &copy; {new Date().getFullYear()} Stellenbosch University. All rights reserved.
          </p>
          <div className="col-span-12 lg:col-span-6 flex items-center gap-5 flex-wrap justify-center lg:justify-end">
            {[
              { label: "SU home", href: "https://www.sun.ac.za" },
              { label: "Privacy policy", href: "https://www.sun.ac.za/english/about-us/strategic-documents/policies" },
              { label: "Accessibility", href: "https://www.sun.ac.za/english/about-us/accessibility" },
              { label: "Webmaster", href: "mailto:tech@cs.sun.ac.za" }
            ].map((item) => (
              <Link key={item.label} href={item.href} className="text-xs text-white/45 hover:text-white transition-colors font-medium">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}
