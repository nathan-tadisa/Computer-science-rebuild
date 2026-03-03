"use client"

import { useState } from "react"
import AlumniFaculty from "./alumni-faculty"
import DoctoralGraduates from "./doctoral-graduates"
import MastersGraduates from "./masters-graduates"

export default function AlumniTabs() {
  const [activeTab, setActiveTab] = useState<"faculty" | "doctoral" | "masters">("faculty")

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      {/* S-graphic background pattern */}
      <div className="absolute top-0 right-0 h-full opacity-10 pointer-events-none">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-03.svg" 
          alt="" 
          className="h-full w-auto object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 border-b-2 border-[#E5E5E5]">
          <button
            onClick={() => setActiveTab("faculty")}
            className={`px-8 py-4 text-sm font-bold transition-colors relative ${
              activeTab === "faculty"
                ? "text-[#61223B]"
                : "text-[#4D5356] hover:text-[#61223B]"
            }`}
          >
            Alumni faculty
            {activeTab === "faculty" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D22730]" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("doctoral")}
            className={`px-8 py-4 text-sm font-bold transition-colors relative ${
              activeTab === "doctoral"
                ? "text-[#61223B]"
                : "text-[#4D5356] hover:text-[#61223B]"
            }`}
          >
            Doctoral graduates
            {activeTab === "doctoral" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D22730]" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("masters")}
            className={`px-8 py-4 text-sm font-bold transition-colors relative ${
              activeTab === "masters"
                ? "text-[#61223B]"
                : "text-[#4D5356] hover:text-[#61223B]"
            }`}
          >
            Master's graduates
            {activeTab === "masters" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D22730]" />
            )}
          </button>
        </div>
        
        {/* Tab Content */}
        <div>
          {activeTab === "faculty" && <AlumniFaculty />}
          {activeTab === "doctoral" && <DoctoralGraduates />}
          {activeTab === "masters" && <MastersGraduates />}
        </div>
      </div>
    </section>
  )
}
