import Navbar from "@/components/navbar"
import PostgraduateHero from "@/components/postgraduate/hero"
import PostgraduateProgrammes from "@/components/postgraduate/programmes"
import ApplicationProcess from "@/components/postgraduate/application-process"
import FundingSupport from "@/components/postgraduate/funding-support"
import StudyModes from "@/components/postgraduate/study-modes"
import ModulePrerequisites from "@/components/postgraduate/module-prerequisites"
import Footer from "@/components/footer"

export const metadata = {
  title: 'Postgraduate Programmes | Computer Science | Stellenbosch University',
  description: 'Advance your expertise through Honours, Master\'s, or PhD studies in Computer Science at Stellenbosch University. Join our vibrant research community.',
}

export default function PostgraduatePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <PostgraduateHero />
      <PostgraduateProgrammes />
      <ApplicationProcess />
      <FundingSupport />
      <StudyModes />
      <ModulePrerequisites />
      <Footer />
    </main>
  )
}
