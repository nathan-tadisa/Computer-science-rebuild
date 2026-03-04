import Navbar              from "@/components/navbar"
import HeroSection         from "@/components/hero-section"
import StatsBar            from "@/components/stats-bar"
import DepartmentOverview  from "@/components/department-overview"
import NewsEvents          from "@/components/news-events"
import AcademicProgrammes  from "@/components/academic-programmes"
import ResearchExcellence  from "@/components/research-excellence"
import StudentSupport      from "@/components/student-support"
import PongGame            from "@/components/pong-game"
import Footer              from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <DepartmentOverview />
      <NewsEvents />
      <AcademicProgrammes />
      <ResearchExcellence />
      <StudentSupport />
      <PongGame />
      <Footer />
    </main>
  )
}
