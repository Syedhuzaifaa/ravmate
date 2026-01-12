import Navigation from "@/components/navigation"


export default function Hero() {
  return (
    <section className="section-container hero-section pt-8 pb-16">
      <Navigation />
      <div className="text-center max-w-5xl mx-auto pt-[60px]">
        <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight ">
          You Didn't Build Great Teams By <br /> Pushing Harder. You Built Them By <br /> Getting The<span className="culture-text"> System And Culture Right. </span>
        </h1>
        <p className="max-w-4xl m-auto text-lg sm:text-xl text-slate-400 mb-8 leading-relaxed page2text">
          I learned this the hard way – not in a boardroom, but in the ring and on the ice. As a <br /> professional fighter and part of the Olympic Bobsled team, I discovered what <br /> drives peak performance: loving what you do and trusting who you're doing it with.
          <br /><br />
          Then I spent 7+ years scaling SaaS startups. I saw the opposite: teams hitting <br /> targets but hating their jobs. After burning out at a unicorn, I built RevMate to <br /> prove there's a better way.
        </p>
        <div className="text-2xl sm:text-2xl lg:text-4xl font-bold mb-6 leading-tight  mt-8">
          <span className="culture-text"> Systems + Culture = Growth That Stays </span>
        </div>
      </div>
    </section>
  )
}
