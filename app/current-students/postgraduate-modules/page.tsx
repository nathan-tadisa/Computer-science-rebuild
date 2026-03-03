import Navbar from "@/components/navbar"
import ModulesHero from "@/components/current-students/modules-hero"
import ModuleCatalog from "@/components/current-students/module-catalog"
import Footer from "@/components/footer"

export default function PostgraduateModulesPage() {
  return (
    <main>
      <Navbar />
      <ModulesHero />
      <ModuleCatalog />
      <Footer />
    </main>
  )
}
