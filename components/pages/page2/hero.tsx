import Navigation from "@/components/navigation"

export default function Hero2() {
  return (
    <section className="section-container pt-8 pb-16 hero-section">
            <Navigation />

      <div className="text-center max-w-6xl mx-auto mt-[80px]">
        <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 leading-tight">
          From Founder-Led Sales To <span className="text-emerald-500">$20M ARR</span> <br />Without The Burnout
        </h1>
        <p className="text-lg sm:text-xl text-slate-400 mb-8 leading-relaxed">
          Most teams get stuck between founder-led and scalable. I help you break through without breaking your culture
          or yourself.
        </p>
        <button className="btn-primary">Start Here</button>
      </div>
    </section>
  )
}
