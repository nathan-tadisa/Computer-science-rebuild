export default function ContactHero() {
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      {/* S-graphic background pattern */}
      <div className="absolute top-0 right-0 h-full opacity-10 pointer-events-none">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-01.svg" 
          alt="" 
          className="h-full w-auto object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-0.5 bg-[#D22730]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#61223B]">
              Get in touch
            </span>
            <div className="w-12 h-0.5 bg-[#D22730]" />
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-[#61223B] mb-6">
            Contact us
          </h1>
          
          <p className="text-xl text-[#4D5356] font-medium leading-relaxed">
            Get in touch with the Department of Computer Science. Whether you are a prospective student, a researcher, or an industry partner, we look forward to hearing from you.
          </p>
        </div>
      </div>
    </section>
  )
}
