import Footer from "@/components/footer"
import Hero2 from "@/components/pages/page2/hero"
import WhoWeWorkWith from "@/components/pages/page2/who-we-work-with"
import HowWeHelp from "@/components/pages/page2/how-we-help"
import HowItWorks from "@/components/pages/page2/how-it-works"
import WhatYouGet from "@/components/pages/page2/what-you-get"
import FixIt from "@/components/pages/page2/fix-it"

export default function Page2() {
  return (
    <main className="bg-slate-950 min-h-screen">
      <Hero2 />
      <WhoWeWorkWith />
      <HowWeHelp />
      <HowItWorks />
      <WhatYouGet />
      <FixIt />
      <Footer />
    </main>
  )
}
