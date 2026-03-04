"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import Dropdown from "./ui/dropdown"

const NAV_ITEMS = [
  {
    label: "Prospective students",
    href: "#",
    children: [
      { label: "Undergraduate", href: "/undergraduate" },
      { label: "Postgraduate", href: "/postgraduate" },
      { label: "PhD", href: "/phd" },
    ],
  },
  {
    label: "Current students",
    href: "#",
    children: [
      { label: "Undergraduate modules", href: "/current-students/undergraduate-modules" },
      { label: "Programme guide", href: "/current-students/programme-guide" },
      { label: "Postgraduate modules", href: "/current-students/postgraduate-modules" },
      { label: "Yearbook 2026", href: "/engscience-yearbook-2026.pdf" },
    ],
  },
  { label: "Research", href: "/research", children: [] },
  {
    label: "People",
    href: "#",
    children: [
      { label: "Staff", href: "/staff" },
      { label: "Students", href: "/students" },
      { label: "Alumni", href: "/alumni" },
    ],
  },
  { label: "News", href: "https://www.su.ac.za/en/stories", children: [] },
  { label: "Contact us", href: "/contact", children: [] },
]

const LANGUAGES = ["EN", "AF", "XH"]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [lang, setLang] = useState("EN")

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* ── Maroon utility bar ── */}
      <div className="bg-[#61223B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-9">
          <span className="text-white/75 text-xs hidden sm:block">
            Stellenbosch University &mdash; Department of Mathematical Sciences
          </span>
          {/* Language toggle */}
          <div className="flex items-center gap-0.5 ml-auto">
            {LANGUAGES.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`px-3 py-1 text-xs font-medium transition-colors ${
                  lang === l
                    ? "bg-white text-[#61223B]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Gold rule ── */}
      <div className="h-0.5 bg-[#CAA258]" aria-hidden="true" />

      {/* ── Main nav bar ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-12 gap-4 sm:gap-6 items-center h-16">

          {/* Logo */}
          <Link href="/" className="col-span-6 lg:col-span-3 flex items-center gap-3 flex-shrink-0 group" aria-label="Computer Science — Stellenbosch University home">
            {/* SU logo */}
            <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center" aria-hidden="true">
              <img src="/logo.svg" alt="SU Logo" className="w-full h-full" />
            </div>
            <div className="leading-tight">
              <p className="text-[#61223B] font-bold text-sm tracking-tight leading-none">Computer Science</p>
              <p className="text-[#6B6B6B] text-[11px] mt-0.5 leading-none">Stellenbosch University</p>
            </div>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex col-span-6 items-center justify-center gap-0" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                {item.children.length > 0 ? (
                  <Dropdown
                    buttonLabel={item.label}
                    items={item.children}
                    buttonClassName="flex items-center gap-0.5 px-2 py-2 text-sm font-semibold text-[#2D2D2D] hover:text-[#61223B] transition-colors whitespace-nowrap"
                  />
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center gap-0.5 px-2 py-2 text-sm font-semibold text-[#2D2D2D] hover:text-[#61223B] transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Apply CTA */}
          <div className="hidden lg:flex col-span-3 justify-end">
            <Link
              href="https://www.sun.ac.za/english/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2 bg-[#D22730] hover:bg-[#B01F28] text-white text-sm font-semibold transition-colors"
            >
              Apply now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden col-span-6 ml-auto p-2 text-[#2D2D2D] justify-self-end"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#E2E2E2] bg-white">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-0.5" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                {item.children.length > 0 ? (
                  <>
                    <button
                      onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                      className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-[#2D2D2D] hover:bg-[#F5F5F5] hover:text-[#61223B] transition-colors border-b border-[#E2E2E2]"
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${openMenu === item.label ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {openMenu === item.label && (
                      <div className="bg-[#F5F5F5] border-b border-[#E2E2E2]">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-6 py-2.5 text-sm font-medium text-[#4D5356] hover:text-[#61223B] transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2.5 text-sm font-semibold text-[#2D2D2D] hover:bg-[#F5F5F5] hover:text-[#61223B] transition-colors border-b border-[#E2E2E2]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="https://www.sun.ac.za/english/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-center px-4 py-2.5 bg-[#D22730] hover:bg-[#B01F28] text-white text-sm font-semibold transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Apply now
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
