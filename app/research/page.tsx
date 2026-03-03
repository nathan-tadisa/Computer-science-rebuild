import Navbar from "@/components/navbar"
import ResearchHero from "@/components/research/hero"
import ResearchGroups from "@/components/research/research-groups"
import Publications from "@/components/research/publications"
import Facilities from "@/components/research/facilities"
import StudentOpportunities from "@/components/research/student-opportunities"
import Footer from "@/components/footer"

export const metadata = {
  title: 'Research | Computer Science | Stellenbosch University',
  description: 'Explore world-class research in computer science at Stellenbosch University, from theoretical foundations to applied machine learning and software verification.',
}

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <ResearchHero />
      <ResearchGroups />
      <Publications />
      <Facilities />
      <StudentOpportunities />
      <Footer />
    </main>
  )
}
