import Footer from "@/components/footer"
import Hero3 from "@/components/pages/page3/hero"
import WhereGrowthBreaks from "@/components/pages/page3/where-growth-breaks"
import CostOfGettingWrong from "@/components/pages/page3/cost-of-getting-wrong"
import HowWeBridgeIt from "@/components/pages/page3/how-we-bridge-it"
import WhyThisWorks from "@/components/pages/page3/why-this-works"
import WhatYouCanExpect from "@/components/pages/page3/what-you-can-expect"
import StillReading from "@/components/pages/page3/still-reading"

export default function Page3() {
  return (
    <main className="bg-slate-950 min-h-screen">
    
      <Hero3 />
      <WhereGrowthBreaks />
      <CostOfGettingWrong />
      <HowWeBridgeIt />
      <WhyThisWorks />
      <WhatYouCanExpect />
      <StillReading />
      <Footer />
    </main>
  )
}
