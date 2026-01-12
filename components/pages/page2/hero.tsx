import Navigation from "@/components/navigation"

export default function Hero2() {
  return (
    <section className="section-container pt-8 pb-16 hero-section">
      <Navigation />

      <div className="text-center max-w-6xl mx-auto mt-[80px]">
        <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 leading-tight">
          From Founder-Led Sales To <span className="text-emerald-500">$20M ARR</span> <br />Without The Burnout
        </h1>
        <p className=" mb-8 founder-text">
          Most founders think it’s one or the other: <br />
          Revenue or culture. Hit the number or keep your people. <br /><br />
          Wrong. <br /><br />
          You can have both, and that’s what we build together.
        </p>
        <button className="m-auto lets-talk-btn">Lets talk <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.08208 14.1639H21.8362M21.8362 14.1639L14.7542 7.08197M21.8362 14.1639L14.7542 21.2459" stroke="black" stroke-width="1.77049" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        </button>      </div>
    </section>
  )
}
