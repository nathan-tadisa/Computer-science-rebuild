"use client"

import { FileText, ExternalLink } from "lucide-react"

const publications = [
  {
    title: "Insights Into Low-Resource Language Modelling: Improving Model Performances for South African Languages",
    authors: "Visser, R., Grobler, T.L., Dunaiski, M.",
    year: "2024",
    venue: "The Journal of Universal Computer Science (JUCS), 30(13)",
    abstract: "Research into improving language model performance for South African languages, addressing challenges in low-resource language processing and developing techniques to enhance model accuracy for underrepresented languages.",
    url: "https://doi.org/10.3897/jucs.118889"
  },
  {
    title: "Is transformer-based attention agnostic of the pretraining language and task?",
    authors: "Martin, R., Dunaiski, M.",
    year: "2024",
    venue: "South African Computer Science and Information Systems Research Trends, SAICSIT 2024",
    abstract: "Investigation into whether transformer attention mechanisms are independent of pretraining language and task, examining the transferability of learned attention patterns across different linguistic contexts.",
    url: "https://doi.org/10.1007/978-3-031-64881-6_6"
  },
  {
    title: "Prompt tuning discriminative language models for hierarchical text classification",
    authors: "du Toit, J., Dunaiski, M.",
    year: "2024",
    venue: "Natural Language Processing, Cambridge University Press",
    abstract: "Novel approach to hierarchical text classification using prompt tuning techniques for discriminative language models, demonstrating improved performance on complex classification tasks.",
    url: "https://doi.org/10.1017/nlp.2024.51"
  },
  {
    title: "Dengue virus importation risks in Africa: a modelling study",
    authors: "Poongavanan et al. (includes SU contributors)",
    year: "2024",
    venue: "The Lancet Planetary Health, 8(12)",
    abstract: "Comprehensive modelling study examining dengue virus importation risks across Africa, providing critical insights for public health planning and disease prevention strategies.",
    url: "https://doi.org/10.1016/S2542-5196(24)00272-9"
  },
  {
    title: "Hierarchical Text Classification Using Language Models with Global Label-Wise Attention Mechanisms",
    authors: "du Toit, J., Dunaiski, M.",
    year: "2023",
    venue: "Artificial Intelligence Research, SACAIR '23",
    abstract: "Development of global label-wise attention mechanisms for hierarchical text classification, improving classification accuracy through enhanced label relationship modelling.",
    url: "https://doi.org/10.1007/978-3-031-49002-6_18"
  },
  {
    title: "Managing and assembling population-scale data streams, tools and workflows to plan for future pandemics within the INFORM-Africa Consortium",
    authors: "Poongavanan et al.",
    year: "2023",
    venue: "South African Journal of Science, 113(5-6)",
    abstract: "Framework for managing population-scale data streams and workflows to support pandemic preparedness planning across Africa, developed within the INFORM-Africa Consortium.",
    url: "http://dx.doi.org/10.17159/sajs.2023/14659"
  }
]

export default function Publications() {
  return (
    <section className="bg-[#F5F5F5] py-20 relative overflow-hidden">
      {/* S-graphic background pattern */}
      <div className="absolute bottom-0 left-0 h-full w-auto max-w-[40%] opacity-10 pointer-events-none">
        <img 
          src="/images/s-graphic/S_Graphic_Grid_A4_RGB-05.svg" 
          alt="" 
          className="h-full w-auto object-cover object-left"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-0.5 bg-[#D22730]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#61223B]">
              Recent outputs
            </span>
            <div className="w-12 h-0.5 bg-[#D22730]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#61223B] mb-6">
            Highlighted publications
          </h2>
          <p className="text-base sm:text-lg text-[#4D5356] font-medium max-w-3xl mx-auto">
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
            href="https://scholar.sun.ac.za/"
            target="_blank"
            rel="noopener noreferrer"
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
