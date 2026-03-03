"use client"

import { useState, useMemo } from "react"
import { Search, ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"

const mastersGraduates = [
  { year: 2024, name: "Miller, GD", topic: "Constructing a Knowledge Graph from an Institutional Repository" },
  { year: 2024, name: "Brand, K", topic: "Applied machine learning for radio galaxy classification and anomalous source detection" },
  { year: 2024, name: "Strelitz, BS", topic: "Particle swarm optimization for constrained multimodal function optimization" },
  { year: 2024, name: "Nakiranda, P", topic: "Building identification in aerial imagery using deep learning" },
  { year: 2024, name: "Lang, RD", topic: "Landscape analysis-based automated algorithm selection" },
  { year: 2024, name: "Kane, BR", topic: "Ergo: a gesture-based computer interaction device" },
  { year: 2024, name: "Du Toit, J", topic: "Hierarchical text classification with transformer-based language models" },
  { year: 2024, name: "Dewey, MG", topic: "Large language models and software testing" },
  { year: 2023, name: "Van Zyl, J-P", topic: "Rule Induction with Swarm Intelligence" },
  { year: 2023, name: "Van Zyl, C", topic: "Implementation of the Cavalieri Integral" },
  { year: 2023, name: "Mouton, J", topic: "Integrating Bayesian network structure into normalizing flows and variational autoencoders" },
  { year: 2023, name: "Jackson, J", topic: "Solidifying what is known about calibration artefacts and the development of an educational tool to assist in the teaching of interferometric imaging" },
  { year: 2023, name: "Dreyer, A", topic: "Using transformers to assign ICD codes to medical notes" },
  { year: 2022, name: "Van Litsenborgh, PS", topic: "An investigation into performance-related issues of regular expression matching" },
  { year: 2022, name: "Rossouw, CJ", topic: "Coverage directed algorithms for test suite construction from LR-automata" },
  { year: 2022, name: "Habeck, M", topic: "The generation of longest optimal box repetition-free words" },
  { year: 2022, name: "Burger, CN", topic: "An extension of the linear regression model for improved vessel trajectory prediction utilising a priori AIS Information" },
  { year: 2022, name: "Bekcer, AB", topic: "Application of statistical pattern recognition and deep learning for morphological classification in radio astronomy" },
  { year: 2021, name: "Mohamed, Z", topic: "Explaining neural networks used for modeling credit risk" },
  { year: 2021, name: "Steenkamp, C", topic: "Multi-guide particle swarm optimization for many-objective optimization problems" },
  { year: 2021, name: "Erwin, KH", topic: "Set-based particle swarm optimization for portfolio optimization" },
  { year: 2021, name: "Strydom, S", topic: "Automatic assignment of diagnosis codes to free-form text medical notes" },
  { year: 2021, name: "Van Biljon, E", topic: "Initialisation of noise-regularised neural networks" },
  { year: 2021, name: "Steyl, CC", topic: "A deep framework for predictive maintenance" },
  { year: 2021, name: "Du Toit, N", topic: "Concrete and symbolic linearisability checking of non-blocking concurrent data structures" },
  { year: 2020, name: "Christoph, M", topic: "Parallel Monte-Carlo tree search in distributed environments" },
  { year: 2020, name: "Leid, A", topic: "Testing smart contracts" },
  { year: 2020, name: "Berndt, J", topic: "Scaling the ConceptCloud browser to very large semi-structured data sets: architecture and data completion" },
  { year: 2019, name: "Taljaard, MH", topic: "Optimised constraint solving for real-world problems" },
  { year: 2018, name: "Martin, JJ", topic: "Creating 3D models using reconstruction techniques" },
  { year: 2018, name: "Schreiber, S", topic: "Texture synthesis with neural networks" },
  { year: 2018, name: "Thom, JD", topic: "Combining tree kernels and text embeddings for plagiarism detection" },
  { year: 2018, name: "Breytenbach, JA", topic: "Design and evaluation of a formula cache for SMT-based bounded model checking tools" },
  { year: 2018, name: "Wiehman, S", topic: "Investigating fully convolutional networks for bio-image segmentation" },
  { year: 2018, name: "Esterhuizen, MH", topic: "Test case generation for context free grammars" },
  { year: 2017, name: "Weideman, NH", topic: "Static Analysis of Regular Expressions" },
  { year: 2016, name: "Venter, DW", topic: "Detecting and Quantifying Resource Contention in Concurrent Programs" },
  { year: 2016, name: "Mwale, M", topic: "Modelling the Dynamics of the Bitcoin Blockchain" },
  { year: 2016, name: "Brand, DJ", topic: "Automatic Prediction of Comment Quality" },
  { year: 2015, name: "Jordaan, PJG", topic: "Impendulo: A Tool for Analysing Programmer Behaviour" },
  { year: 2015, name: "Fourie, R", topic: "A Parallel Cellular Automaton Simulation Framework Using CUDA" },
  { year: 2015, name: "Coetzee, AL", topic: "Combining Reverse Debugging and Live Programming Towards Visual Thinking in Computer Programming" },
  { year: 2015, name: "Babalola, OT", topic: "Automatic Recognition and Interpretation of Finite State Automata Diagrams" },
  { year: 2014, name: "Van Niekerk, F", topic: "Decision Forests for Computer Go Feature Learning" },
  { year: 2014, name: "Kruger, RP", topic: "Virtual World Accessibility: A Multitool Approach" },
  { year: 2014, name: "Dunaiski, MP", topic: "Analysing Ranking Algorithms and Publication Trends on Scholarly Citation Networks" },
  { year: 2013, name: "Uwimbabazi, A", topic: "Extended Probabilistic Symbolic Execution" },
  { year: 2013, name: "Theron, PJ", topic: "Criteria for the Evaluation of Private Cloud Computing" },
  { year: 2013, name: "Rajaona, SF", topic: "An Algebraic Framework for Reasoning About Security" },
  { year: 2013, name: "Durant, K", topic: "Investigating the Non-termination of Affine Loops" },
  { year: 2013, name: "De Villiers, PF", topic: "Constructing Topic-Based Twitter Lists" },
  { year: 2013, name: "Buys, JM", topic: "Probabilistic Tree Transducers for Grammatical Error Correction" },
  { year: 2013, name: "Bester, WHK", topic: "Bug-Finding and Test Case Generation for Java Programs by Symbolic Execution" },
  { year: 2012, name: "Venter, WJ", topic: "An Embodied Conversational Agent with Autistic Behaviour" },
  { year: 2012, name: "Redelinghuys, GJ-W", topic: "Symbolic String Execution" },
  { year: 2012, name: "Kruger, PJH", topic: "Cellphone Banking at the Bottom of the Pyramid" },
  { year: 2012, name: "Huysamen, NF", topic: "FATKID: A Finite Automaton Toolkit" },
  { year: 2012, name: "Goldberg, AS", topic: "Investigating Credit Based Mechanisms for Enhancing Performance in Wireless Ad Hoc Networks" },
  { year: 2012, name: "Botha, SG", topic: "The Effect of Evolutionary Rate Estimation Methods on Correlations Observed Between Substitution Rates in Models of Evolution" },
  { year: 2012, name: "Bezuidenhout, JA", topic: "Automated Program Generation: Bridging the Gap Between Model and Implementation" },
  { year: 2011, name: "Msiska, MF", topic: "A Visual Programming Environment for Authoring ASD Therapy Tools" },
  { year: 2011, name: "Minoarivelo, HO", topic: "Probabilistic Modelling of the Evolution of Ecological Interaction Networks" },
  { year: 2011, name: "Kassa, DF", topic: "Analytic Models of TCP Performance" },
  { year: 2011, name: "Hayward, PJ", topic: "Parallel Likelihood Calculations for Phylogenetic Trees" },
  { year: 2011, name: "Botha, LW", topic: "Modeling Online Social Networks Using Quasi-Clique Communities" },
  { year: 2011, name: "Bergh, JR", topic: "Ontology Comprehension" },
  { year: 2011, name: "Adams, RC", topic: "Implementation of Cell Clustering in Cellular Automata" },
  { year: 2010, name: "Schulze, W", topic: "A Formal Language Theory Approach to Music Generation" },
  { year: 2010, name: "Odendaal, MJ", topic: "Business Process Modelling Using Model Checking and the Theory of Constraints" },
  { year: 2010, name: "Fath Elrahman, TM", topic: "QoS Routing in IP Networks Using Multi-Constrained Computational Methods" },
  { year: 2010, name: "Fasan, MO", topic: "Distributed Binary Decision Diagrams" },
  { year: 2010, name: "Boulkaibet, I", topic: "Modelling Collaborative Motion in Mobile Ad Hoc Networks" },
  { year: 2009, name: "Stapelberg, D", topic: "Link Failure Recovery Among Dynamic Routes in Telecommunication Networks" },
  { year: 2009, name: "Kriek, AM", topic: "RoboCup Formation Modeling" },
  { year: 2009, name: "Greeff, GJ", topic: "Interactive Voxel Terrain Design Using Procedural Techniques" },
  { year: 2009, name: "Fourie, JF", topic: "Reducing Communication in Distributed Model Checking" },
  { year: 2009, name: "Crous, CB", topic: "Autonomous Robot Path Planning" },
  { year: 2009, name: "Chamberlain, ME", topic: "A 3D Virtual Environment Development Platform for ASD Therapy Tools" },
  { year: 2008, name: "Taha, MAMS", topic: "Regulated Rewriting in Formal Language Theory" },
  { year: 2008, name: "Smal, E", topic: "Automated Brick Sculpture Construction" },
  { year: 2008, name: "Lusilao-Zodi, G-A", topic: "A Bandwidth Market in an IP Network" },
  { year: 2008, name: "Du Preez, H", topic: "GrailKnights: An Automaton Mass Manipulation Package for Enhanced Pattern Analysis" },
  { year: 2007, name: "Welgemoed, Johan", topic: "A Prototype System for Machine Translation from English to South African Sign Language Using Synchronous Tree Adjoining Grammars" },
  { year: 2007, name: "Seotsanyana, M", topic: "Formal Specification and Verification of Safety Interlock Systems: A Comparative Case Study" },
  { year: 2007, name: "Mazandu, GK", topic: "Traffic Engineering Using Multipath Routing Approaches" },
  { year: 2007, name: "Gerber, DB", topic: "A Model Checker for the LF System" },
  { year: 2007, name: "Baruani, AJ", topic: "Network Engineering Using Multi-Objective Evolutionary Algorithms" },
  { year: 2006, name: "Raitt, LA", topic: "Random Generation of Finite Automata Over the Domain of the Regular Languages" },
  { year: 2006, name: "Müller, G", topic: "Minimization of Symmetric Difference Finite Automata" },
  { year: 2006, name: "Louw, F", topic: "A Program Slicer for LF" },
  { year: 2006, name: "Grobler, LD", topic: "A Kernel to Support Computer-Aided Verification of Embedded Software" },
  { year: 2006, name: "Grift, W", topic: "Visualizing QoS in Networks" },
  { year: 2005, name: "Combrink, AJ", topic: "A Preprocessor for an English-to-Sign Language Machine Translation System" },
  { year: 2005, name: "Barker, DD", topic: "Computer Facial Animation for Sign Language Visualization" },
  { year: 2004, name: "Swart, R", topic: "A Language to Support Verification of Embedded Software" },
  { year: 2004, name: "De Jongh, AB", topic: "Neural Network Ensembles" },
  { year: 2004, name: "Connan, J", topic: "Collection, Evaluation and Selection of Scientific Literature: Machine Learning, Bibliometrics and the World Wide Web" },
  { year: 2004, name: "Combrink, JJ", topic: "A Bandwidth Market for Traffic Engineering in Telecommunication Networks" },
  { year: 2004, name: "Botha, M", topic: "Online Traffic Engineering for MPLS Networks" },
  { year: 2003, name: "Snyders, S", topic: "Inductive Machine Learning Bias in Knowledge-Based Neurocomputing" },
  { year: 2003, name: "Myburgh, WD", topic: "Development of a Tool to Test Computer Protocols" },
  { year: 2003, name: "Müller, KE", topic: "MPLS-Based Recovery" },
  { year: 2003, name: "Kruger, AF", topic: "Machine Learning, Data Mining, and the World Wide Web: Design of Special-Purpose Search Engines" },
  { year: 2003, name: "Kroon, RS", topic: "Support Vector Machines, Generalization Bounds, and Transduction" },
  { year: 2003, name: "Hakl, HM", topic: "Computer-Controlled Human Body Coordination" },
  { year: 2003, name: "Bull, JJD", topic: "A Comparison of Two Different Model Checking Techniques" },
  { year: 2003, name: "Andrag, WH", topic: "Reinforcement Learning for Routing in Communication Networks" },
  { year: 2002, name: "De Kock, JM", topic: "Optimal Management of MPLS Networks" },
  { year: 2001, name: "Wessels, T", topic: "Hidden Markov Models for On-Line Signature Verification" },
  { year: 2001, name: "Walsh, DA", topic: "Automatic Detection of Image Orientation Using Support Vector Machines" },
  { year: 2001, name: "Wahabi, AR", topic: "Resource Management in IP Networks" },
  { year: 2001, name: "Van Zyl, J", topic: "Modelling Chaotic Systems with Neural Networks: Application to Seismic Event Predicting in Gold Mines" },
  { year: 2001, name: "Van Riet, FA", topic: "LF: A Language for Reliable Embedded Systems" },
  { year: 2001, name: "Esterhuyse, E", topic: "On Providing an Efficient and Reliable Virtual Block Storage Service" },
  { year: 2001, name: "Eloff, JJ", topic: "A Software Restructuring Tool for Oberon" },
  { year: 2001, name: "Du Toit, C", topic: "The Use of Temporal Context in the Generation of Strings" },
  { year: 2001, name: "Bagula, BA", topic: "Traffic Engineering Label Switched Paths" },
  { year: 2000, name: "Loubser, JJ", topic: "Device Drivers: A Comparison of Different Development Strategies" },
  { year: 1999, name: "Inggs, CP", topic: "An LTL Verification System Based on Automata Theory" },
  { year: 1999, name: "Inggs, AM", topic: "Efficient Call Management in Broadband Networks" },
  { year: 1999, name: "Geldenhuys, J", topic: "Efficiency Issues in the Design of a Model Checker" },
  { year: 1999, name: "De Villiers, JA", topic: "Micro-Kernel Support for a Lightweight Extensible Workstation Operating System" },
  { year: 1998, name: "De Wet, MJdV", topic: "A Development Environment for Reactive Systems" },
  { year: 1996, name: "Staven, S", topic: "Entropy Maximized Queueing Networks" },
  { year: 1996, name: "Keyser, PW", topic: "Transaction Management in Multidatabase Systems" },
  { year: 1995, name: "Winckler, CJ", topic: "A Comprehensive Framework for SQL Query Execution in Distributed Multidatabase Systems" },
  { year: 1995, name: "Phillips, GP", topic: "Transient Models For Queueing Networks" },
  { year: 1995, name: "Lockley, GJ", topic: "The Design of a Specification Language Suitable for the Generation of Compilers" },
  { year: 1995, name: "Kriel, CF", topic: "Order Independent Multiclass Queues: A New Class of Quasi-Reversible Queues" },
  { year: 1994, name: "Zimmerman, AD", topic: "Parallelizing a Bi-Directional Chart Parser for a Multicomputer" },
  { year: 1994, name: "Muller, PJ", topic: "An Environment for Distributed Programming on a Multicomputer" },
  { year: 1993, name: "Visser, WC", topic: "A Run-Time Environment for a Validation Language" },
  { year: 1993, name: "Van der Poel, E", topic: "Visualizing Neural Networks" },
  { year: 1993, name: "Howard, WT", topic: "An Efficient Resilient Page Store" },
  { year: 1993, name: "Engelbrecht, AP", topic: "Modelling Algorithms for the South African Telephone Network" },
  { year: 1993, name: "Ackerman, MC", topic: "Kernel Support for Embedded Reactive Systems" },
  { year: 1993, name: "Ackerman, CC", topic: "Providing Mechanical Support for Program Development in a Weakest Precondition Calculus" },
  { year: 1992, name: "Viktor, HL", topic: "A Comparative Study of Distributed Database Recovery Techniques" },
  { year: 1991, name: "Meumann, MD", topic: "The Design and Implementation of a Communication Kernel for a Distributed Database System" },
  { year: 1991, name: "Ludik, J", topic: "'n Meerdoelige Simulasie Omgewing vir die Ontwikkeling van Neurale Netwerke" },
  { year: 1991, name: "Fouche, W", topic: "An Efficient Kernel to Support the Client-Server Model" },
  { year: 1991, name: "Deacon, AE", topic: "Concurrency Control Mechanisms for Multidatabase Systems" },
  { year: 1991, name: "Barnard, DC", topic: "Reducing the State Explosion Problem During Model Checking" },
  { year: 1990, name: "Theron, H", topic: "A Survey and Comparison of Well-Known Concept Induction Algorithms" },
  { year: 1990, name: "Lamprecht, SM", topic: "A Comparative Study of Distributed Query Optimization Methods" },
  { year: 1990, name: "Harmse, MFP", topic: "The Analytic Modelling of DASD Subsystems" },
  { year: 1990, name: "Greeff, J", topic: "Derivation and Implementation of an Extended Entity-Relationship Data Model" },
  { year: 1990, name: "Crosby, SA", topic: "Queueing Networks with Blocking and Simultaneous Resource Possession" }
]

type SortField = "year" | "name" | "topic"
type SortOrder = "asc" | "desc"

export default function MastersGraduates() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortField, setSortField] = useState<SortField>("year")
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortOrder(field === "year" ? "desc" : "asc")
    }
    setCurrentPage(1)
  }

  const filteredAndSortedData = useMemo(() => {
    let filtered = mastersGraduates

    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(
        grad =>
          grad.name.toLowerCase().includes(term) ||
          grad.topic.toLowerCase().includes(term) ||
          grad.year.toString().includes(term)
      )
    }

    return filtered.sort((a, b) => {
      let comparison = 0
      if (sortField === "year") {
        comparison = a.year - b.year
      } else if (sortField === "name") {
        comparison = a.name.localeCompare(b.name)
      } else {
        comparison = a.topic.localeCompare(b.topic)
      }
      return sortOrder === "asc" ? comparison : -comparison
    })
  }, [searchTerm, sortField, sortOrder])

  const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage)
  const paginatedData = filteredAndSortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return null
    return sortOrder === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />
  }

  return (
    <div>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-[#61223B] mb-4">
          Master's graduates
        </h3>
        <p className="text-base text-[#4D5356] font-medium max-w-3xl mx-auto mb-6">
          Honouring our Master's graduates who have developed expertise through focused research across diverse areas of computer science.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4D5356]" size={20} />
            <input
              type="text"
              placeholder="Search by name, topic, or year..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setCurrentPage(1)
              }}
              className="w-full pl-12 pr-4 py-3 border-2 border-[#E5E5E5] focus:border-[#61223B] focus:outline-none text-sm font-medium text-[#2D2D2D] placeholder:text-[#9B9B9B]"
            />
          </div>
        </div>
      </div>

      {/* Results info */}
      <div className="mb-4 text-sm text-[#4D5356] font-medium">
        Showing {paginatedData.length} of {filteredAndSortedData.length} graduates
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white border-2 border-[#E5E5E5] mb-6">
        <table className="w-full">
          <thead className="bg-[#F5F5F5] border-b-2 border-[#E5E5E5]">
            <tr>
              <th
                onClick={() => handleSort("year")}
                className="px-6 py-4 text-left text-xs font-bold text-[#61223B] uppercase tracking-wider cursor-pointer hover:bg-[#E5E5E5] transition-colors"
              >
                <div className="flex items-center gap-2">
                  Year
                  <SortIcon field="year" />
                </div>
              </th>
              <th
                onClick={() => handleSort("name")}
                className="px-6 py-4 text-left text-xs font-bold text-[#61223B] uppercase tracking-wider cursor-pointer hover:bg-[#E5E5E5] transition-colors"
              >
                <div className="flex items-center gap-2">
                  Graduate name
                  <SortIcon field="name" />
                </div>
              </th>
              <th
                onClick={() => handleSort("topic")}
                className="px-6 py-4 text-left text-xs font-bold text-[#61223B] uppercase tracking-wider cursor-pointer hover:bg-[#E5E5E5] transition-colors"
              >
                <div className="flex items-center gap-2">
                  Research topic
                  <SortIcon field="topic" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E5E5E5]">
            {paginatedData.map((grad, index) => (
              <tr key={index} className="hover:bg-[#F5F5F5] transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#2D2D2D]">
                  {grad.year}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-[#4D5356]">
                  {grad.name}
                </td>
                <td className="px-6 py-4 text-sm text-[#4D5356] font-medium">
                  {grad.topic}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-2 border-2 border-[#E5E5E5] hover:border-[#61223B] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="flex items-center gap-1">
            {Array.from({ length: Math.min(totalPages, 10) }, (_, i) => {
              if (totalPages <= 10) return i + 1
              if (currentPage <= 5) return i + 1
              if (currentPage >= totalPages - 4) return totalPages - 9 + i
              return currentPage - 5 + i
            }).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 text-sm font-bold transition-colors ${
                  currentPage === page
                    ? "bg-[#61223B] text-white"
                    : "border-2 border-[#E5E5E5] text-[#4D5356] hover:border-[#61223B]"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-2 border-2 border-[#E5E5E5] hover:border-[#61223B] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  )
}
