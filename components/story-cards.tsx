"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const stories = [
  {
    id: 1,
    category: "University",
    title: "Where knowledge meets opportunity",
    description: "Our commitment to education extends beyond graduation",
    image: "/images/su-campus-day.jpg",
    tag: "Read story"
  },
  {
    id: 2,
    category: "Lifestyle",
    title: "Embrace the journey of lifelong learning with our e-learning",
    description: "Flexible learning options for working professionals",
    image: "/images/su-campus.jpg",
    tag: "Read story"
  },
  {
    id: 3,
    category: "Education",
    title: "Our commitment to education extends beyond graduation",
    description: "Supporting students throughout their academic journey",
    image: "/images/su-campus-day.jpg",
    tag: "Read story"
  }
]

export default function StoryCards() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const next = () => setCurrentIndex((prev) => (prev + 1) % stories.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length)
  
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 lg:col-span-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold tracking-widest uppercase text-[#61223B]">
                01
              </span>
              <div className="flex-1 h-px bg-[#E2E2E2]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#61223B]">
                02 03 04 05
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2D2D2D] mb-4">
              Where knowledge meets opportunity
            </h2>
          </div>
          
          <div className="col-span-12 lg:col-span-6 flex items-end justify-start lg:justify-end gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 border-2 border-[#61223B] flex items-center justify-center text-[#61223B] hover:bg-[#61223B] hover:text-white transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 border-2 border-[#61223B] flex items-center justify-center text-[#61223B] hover:bg-[#61223B] hover:text-white transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        {/* Cards */}
        <div className="grid grid-cols-12 gap-6">
          {stories.map((story, index) => (
            <div
              key={story.id}
              className={`col-span-12 md:col-span-6 lg:col-span-4 group cursor-pointer ${
                index === 0 ? 'lg:col-span-6' : ''
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-4">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 px-4 py-2 bg-white text-[#61223B] text-xs font-bold uppercase">
                  {story.tag}
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-xs font-bold tracking-widest uppercase text-[#D22730]">
                  {story.category}
                </p>
                <h3 className="text-xl font-bold text-[#2D2D2D] group-hover:text-[#61223B] transition-colors">
                  {story.title}
                </h3>
                <p className="text-sm text-[#4D5356] font-medium">
                  {story.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
