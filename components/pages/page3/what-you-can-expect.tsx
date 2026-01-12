export default function WhereGrowthBreaks() {
  return (
    <section className="section-container bg-white from-slate-900 to-slate-950">
      <h2 className="section-title text-center  text-black text-6xl">
        what you can  <span className="text-wrong">expect</span>
      </h2>
      <p className="text-[35px] m-auto text-center mb-12">
        Here’s what changes when systems and culture grow together:
      </p>

      <div className=" max-w-7xl mx-auto mb-12 growth-section">
        <div className="grid md:grid-cols-2 gap-3">
          <div className="bg-growth-box rounded-lg p-8">
            <div className=" mb-4">
              <span className=""><img src="/Mask group13.png" alt="" width={78} height={78} /></span>
            </div>
            <h3 className="growth-box-text font-bold text-lg mb-3">Repeatable Systems</h3>
            <p className="growth-box-text-p text-sm">
              A founding team (CEO, CTO, CMO, CFO) had a great product and strong market fit, but none of them knew how to sell. See More            </p>
          </div>

          <div className="bg-growth-box rounded-lg p-8">
            <div className=" mb-4">
              <span className=""><img src="/Mask group4.png" alt="" width={78} height={78} /></span>
            </div>
            <h3 className="growth-box-text font-bold text-lg mb-3">
              Scalable Growth            </h3>
            <p className="growth-box-text-p text-sm">
              A pre-seed startup with strong product and market interest relied entirely on organic growth – no system, no process. See More            </p>
          </div>

          <div className="bg-growth-box rounded-lg p-8">
            <div className=" mb-4">
              <span className=""><img src="/Mask group2.png" alt="" width={78} height={78} /></span>
            </div>
            <h3 className="growth-box-text font-bold text-lg mb-3">Founder Freedom </h3>
            <p className="growth-box-text-p text-sm">
              A B2B SaaS startup was 100% founder dependent on every deal. We built their first sales pod, set up KPIs, See More
            </p>
          </div>

          <div className="bg-growth-box rounded-lg p-8">
            <div className=" mb-4">
              <span className=""><img src="/Mask group1.png" alt="" width={78} height={78} /></span>
            </div>
            <h3 className="growth-box-text font-bold text-lg mb-3">Culture that scales</h3>
            <p className="growth-box-text-p text-sm">
              A scaling startup was losing their best reps and the magic that got them there. Pressure from investors See More            </p>
          </div>
        </div>
      </div>
        <div className="max-w-7xl mx-auto mb-12">
          <img src="/Group132131653021.png" alt="" className="quote1" />
          <div className="max-w-5xl mx-auto quotes-text m-0 p-0">These aren’t one-off wins. This is what happens when you stop choosing between hitting the number and keeping your culture, and start building both together.</div>
          <img src="/Group13213165302.png" alt="" className="quote2" />
        </div>
    </section>
  );
}
