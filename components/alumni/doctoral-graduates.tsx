"use client"

import { useState, useMemo } from "react"
import { Search, ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"

const doctoralGraduates = [
  { year: 2025, name: "Erwin, W", topic: "Landscape aware algorithm selection for feature selection" },
  { year: 2025, name: "Baker Effendi, S", topic: "An Approach to Modern Static Analysis with Property Graphs" },
  { year: 2023, name: "Werner, W", topic: "Landscape aware algorithm selection for feature selection" },
  { year: 2023, name: "Moeketsi, RI", topic: "Fault Localization and Repair for Grammarware" },
  { year: 2022, name: "Omomule, TG", topic: "Mixtures of heterogeneous experts" },
  { year: 2020, name: "Masakuna, JF", topic: "Active strategies for coordination of solitary robots" },
  { year: 2019, name: "Pretorius, A", topic: "On noise regularised neural networks: initialisation, learning and inference" },
  { year: 2019, name: "Dunaiski, MP", topic: "Using test data to evaluate rankings of entities in large scholarly citation networks" },
  { year: 2018, name: "Marais, L", topic: "Generalised acceptance conditions for symmetric difference nondeterministic finite automata" },
  { year: 2017, name: "Greene, GJ", topic: "Concept-Based Exploration of Rich Semi-Structured Data Collections" },
  { year: 2017, name: "Botha, H-M", topic: "Verifying Android Applications Using Java PathFinder" },
  { year: 2012, name: "Murrell, BS", topic: "Improved Models of Biological Sequence Evolution" },
  { year: 1999, name: "Viktor, HL", topic: "Learning by Cooperation: An Approach to Rule Induction and Knowledge Fusion" },
  { year: 1999, name: "Theron, PZ", topic: "Automatic Acquisition of Two-Level Morphological Rules" },
  { year: 1999, name: "Ewert, SG", topic: "Random Context Picture Grammars" },
  { year: 1999, name: "Engelbrecht, AP", topic: "Sensitivity Analysis of Multilayer Neural Networks" },
  { year: 1999, name: "De Villiers, PJA", topic: "Validation of a Microkernel: A Case Study" },
  { year: 1997, name: "Van Zijl, L", topic: "Generalized Nondeterminism and the Succinct Representation of Regular Languages" },
  { year: 1997, name: "Van der Poel, E", topic: "A Generalization of the Hopfield Single-Layer Recurrent Neural Network" },
  { year: 1994, name: "Ludik, J", topic: "Training, Dynamics, and Complexity of Architecture-Specific Recurrent Neural Networks" },
  { year: 1994, name: "Theron, H", topic: "Specialization by Exclusion: An Approach to Concept Learning" }
]

type SortField = "year" | "name" | "topic"
type SortOrder = "asc" | "desc"

export default function DoctoralGraduates() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortField, setSortField] = useState<SortField>("year")
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 15

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
    let filtered = doctoralGraduates

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
          Doctoral graduates
        </h3>
        <p className="text-base text-[#4D5356] font-medium max-w-3xl mx-auto mb-6">
          Celebrating our PhD graduates who have contributed original research to advance computer science.
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
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
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
