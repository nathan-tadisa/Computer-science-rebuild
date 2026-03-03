import Navbar from "@/components/navbar"
import ProgrammeGuideHero from "@/components/current-students/programme-guide-hero"
import ProgrammeGuideIntro from "@/components/current-students/programme-guide-intro"
import FullCSProgrammes from "@/components/current-students/full-cs-programmes"
import PartialCSProgrammes from "@/components/current-students/partial-cs-programmes"
import CurriculumPathway from "@/components/current-students/curriculum-pathway"
import ProgrammeGuideFooter from "@/components/current-students/programme-guide-footer"
import Footer from "@/components/footer"

export default function ProgrammeGuidePage() {
  return (
    <main>
      <Navbar />
      <ProgrammeGuideHero />
      <ProgrammeGuideIntro />
      <FullCSProgrammes />
      <PartialCSProgrammes />
      <CurriculumPathway />
      <ProgrammeGuideFooter />
      <Footer />
    </main>
  )
}
