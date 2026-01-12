import Navigation from "@/components/navigation"

export default function Hero3() {
  return (
    <section className="section-container pt-8 pb-16 hero-section">
      <Navigation />
      <div className="text-center max-w-6xl m-auto mx-auto pt-8">
        <div className="startuptext max-w-3xl m-auto">6 Startups Scaled | $0→$20M+ ARR | 7+ years building Sales Orgs</div>
        <h1 className="text-4xl sm:text-5xl lg:text-[80px] font-bold mb-6 leading-tight pt-5">
          Growth Shouldn't Feel Like <br /> You're
          Breaking Your{" "} <span className="culture-text">Culture</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-400 mb-8 leading-relaxed hero-main-text">
          Systems that scale revenue and keep your best people <br />
          We help SaaS founders (pre-revenue to series B) build both <br />

          <strong> Hit $20M ARR without the burnout, churn, and chaos        </strong></p>
        <button className="m-auto lets-talk-btn">Lets talk <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.08208 14.1639H21.8362M21.8362 14.1639L14.7542 7.08197M21.8362 14.1639L14.7542 21.2459" stroke="black" stroke-width="1.77049" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        </button>
        <div className="sales">Scaled sales at:</div>
        <img src="/Group321316471.webp" alt="" className="m-auto pt-6" />
      </div>
    </section>
  )
}
