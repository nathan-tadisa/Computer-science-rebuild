"use client"

import { FileText, ExternalLink } from "lucide-react"

const publications = [
  {
    title: "Unsupervised State Encoding in Video Sequences Using β-Variational Autoencoders",
    authors: "Pretorius, A., van Biljon, E., Kroon, S.",
    year: "2024",
    venue: "International Conference on Machine Learning",
    abstract: "Novel approach to learning compact state representations from video data using variational autoencoders with β-regularisation for improved disentanglement.",
    url: "#"
  },
  {
    title: "Remove First Detect Later: A counter-intuitive approach for detecting radio frequency interference in radio sky imagery",
    authors: "Grobler, T., Becker, B., Christoph, M.",
    year: "2024",
    venue: "Astronomy & Astrophysics",
    abstract: "Innovative method for RFI detection in radio astronomy that reverses traditional detection pipelines, achieving superior performance on SKA precursor data.",
    url: "#"
  },
  {
    title: "A Comparison of Text Representation Techniques and Encoder-Decoder Implementations in a Deep Neural Network",
    authors: "Masakuna, J., Kroon, S.",
    year: "2023",
    venue: "Neural Computing and Applications",
    abstract: "Comprehensive evaluation of text encoding methods and neural architectures for natural language processing tasks, providing practical guidance for practitioners.",
    url: "#"
  }
]

export default function Publications() {
  return (
    <section className="bg-[#F5F5F5] py-20 relative overflow-hidden">
      {/* S-graphic background pattern */}
      <div className="absolute bottom-0 left-0 h-full opacity-10 pointer-events-none">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-05.svg" 
          alt="" 
          className="h-full w-auto object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-[#D22730]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#61223B]">
              Recent outputs
            </span>
            <div className="w-12 h-0.5 bg-[#D22730]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#61223B] mb-6">
            Highlighted publications
          </h2>
          <p className="text-lg text-[#4D5356] font-medium max-w-3xl mx-auto">
            Discover our latest research contributions published in leading international conferences and journals.
          </p>
        </div>
        
        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-white border-l-4 border-[#D22730] p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#61223B] flex items-center justify-center">
                  <FileText size={20} className="text-white" />
                </div>
                <div className="flex-grow">
                  <span className="text-xs font-bold text-[#CAA258]">{pub.year}</span>
                </div>
              </div>
              
              <h3 className="text-base font-bold text-[#2D2D2D] mb-3 leading-snug">
                {pub.title}
              </h3>
              
              <p className="text-xs text-[#4D5356] font-medium mb-2">
                {pub.authors}
              </p>
              
              <p className="text-xs text-[#61223B] font-bold mb-4">
                {pub.venue}
              </p>
              
              <p className="text-sm text-[#4D5356] font-medium leading-relaxed mb-4">
                {pub.abstract}
              </p>
              
              <a
                href={pub.url}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#D22730] hover:text-[#B01F28] transition-colors"
              >
                Read paper
                <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
        
        {/* View All CTA */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#61223B] text-white font-bold text-sm hover:bg-[#4E1A2F] transition-colors"
          >
            View all publications
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
