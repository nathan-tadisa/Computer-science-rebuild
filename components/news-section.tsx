"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight, Calendar, Tag } from "lucide-react"

const news = [
  {
    category: "Achievement",
    date: "12 Jan 2026",
    title: "Computer Science features in top 10 best jobs of 2026",
    excerpt:
      "Once again, a CS degree from Stellenbosch ranks as one of the most sought-after qualifications in the South African job market, according to the latest Universum survey.",
    href: "#",
  },
  {
    category: "Hackathon",
    date: "5 Feb 2026",
    title: "SU CS team wins national cybersecurity hackathon",
    excerpt:
      "A team of four final-year students captured first place at HackZA 2026, defeating over 200 teams from across South Africa with an AI-driven intrusion detection system.",
    href: "#",
  },
  {
    category: "Research",
    date: "20 Jan 2026",
    title: "New NRF grant awarded for NLP research in Afrikaans",
    excerpt:
      "Prof. J. van der Merwe's lab has secured a three-year NRF grant to develop transformer-based language models tailored to Afrikaans and other South African languages.",
    href: "#",
  },
  {
    category: "Event",
    date: "1 Mar 2026",
    title: "Annual CS open day — prospective students welcome",
    excerpt:
      "Curious about studying Computer Science at Stellenbosch? Join us for our open day campus tour, programme info sessions, and a Q&A with current students and lecturers.",
    href: "#",
  },
  {
    category: "Industry",
    date: "15 Feb 2026",
    title: "Partnership with Google DeepMind to fund PhD students",
    excerpt:
      "A new five-year agreement with Google DeepMind will provide full bursaries for up to eight PhD students annually, with co-supervision from DeepMind researchers.",
    href: "#",
  },
]

const VISIBLE = 3

export default function NewsSection() {
  const [start, setStart] = useState(0)
  const max = news.length - VISIBLE

  const prev = () => setStart((s) => Math.max(0, s - 1))
  const next = () => setStart((s) => Math.min(max, s + 1))
  const visible = news.slice(start, start + VISIBLE)

  return (
    <section id="news" className="bg-white py-24 border-t border-[#E2E2E2]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header row */}
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-0.5 bg-[#D22730]" aria-hidden="true" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#61223B]">
                News &amp; innovation
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#61223B] text-balance">
              Latest from the Department
            </h2>
          </div>

          {/* Carousel controls */}
          <div className="col-span-12 lg:col-span-4 flex items-end justify-start lg:justify-end gap-2">
            <button
              onClick={prev}
              disabled={start === 0}
              aria-label="Previous articles"
              className="w-9 h-9 border border-[#E2E2E2] flex items-center justify-center text-[#6B6B6B] hover:border-[#D22730] hover:text-[#D22730] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              disabled={start >= max}
              aria-label="Next articles"
              className="w-9 h-9 border border-[#E2E2E2] flex items-center justify-center text-[#6B6B6B] hover:border-[#D22730] hover:text-[#D22730] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={16} />
            </button>
            <Link
              href="#"
              className="ml-3 text-xs font-semibold text-[#D22730] hover:text-[#B01F28] transition-colors"
            >
              All news &rarr;
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-12 gap-6">
          {visible.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="col-span-12 md:col-span-6 lg:col-span-4 group flex flex-col bg-white border border-[#E2E2E2] hover:border-[#D22730] hover:shadow-md transition-all overflow-hidden"
            >
              {/* Science Red top accent bar */}
              <div className="h-1 bg-[#D22730] w-full flex-shrink-0" />

              <div className="flex flex-col flex-1 p-6">
                {/* Meta row */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center gap-1.5 text-[10px] font-bold text-[#61223B] uppercase tracking-wider">
                    <Tag size={10} />
                    {item.category}
                  </span>
                  <span className="text-[#E2E2E2]" aria-hidden="true">&bull;</span>
                  <span className="flex items-center gap-1.5 text-[10px] text-[#6B6B6B] font-medium">
                    <Calendar size={10} />
                    {item.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-[#2D2D2D] leading-snug mb-3 group-hover:text-[#61223B] transition-colors text-balance">
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-[#4D5356] leading-relaxed flex-1 font-medium">
                  {item.excerpt}
                </p>

                {/* Read more */}
                <div className="mt-5 flex items-center gap-1.5 text-xs text-[#D22730] font-semibold group-hover:gap-2.5 transition-all">
                  Read more
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Progress dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: max + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setStart(i)}
              aria-label={`Go to page ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === start
                  ? "w-6 bg-[#D22730]"
                  : "w-1.5 bg-[#E2E2E2] hover:bg-[#CAA258]"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
