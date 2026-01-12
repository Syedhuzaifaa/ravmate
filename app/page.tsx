import Footer from "@/components/footer"
import Hero from "@/components/pages/page1/hero"
import WhyWrongSection from "@/components/pages/page1/why-wrong"
import RevMateWay from "@/components/pages/page1/revmate-way"
import MyStory from "@/components/pages/page1/my-story"
import WhyWorkWithMe from "@/components/pages/page1/why-work-with-me"
import FinalCta from "@/components/pages/page1/final-cta"

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen">
      
      <Hero />
      <WhyWrongSection />
      <RevMateWay />
      <MyStory />
      <WhyWorkWithMe />
      <FinalCta />
      <Footer />
    </main>
  )
}
