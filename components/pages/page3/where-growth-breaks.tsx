export default function WhereGrowthBreaks() {
  return (
    <section className="section-container bg-white from-slate-900 to-slate-950">
      <h2 className="section-title text-center  text-black text-6xl">
        Where <span className="text-growth">Growth</span> Breaks Down
      </h2>
      <p className="text-growth-semi m-auto text-center mb-12">
        You’ve proven PMF. Deals are closing. Revenue is growing. Then you hit
        one <br /> of these walls, and what worked yesterday stops working
        tomorrow.
      </p>

      <div className=" max-w-5xl mx-auto mb-12 growth-section">
        <div className="grid md:grid-cols-2 gap-3">
          <div className="bg-growth-box rounded-lg p-8">
            <div className=" mb-4">
              <span className=""><img src="/Mask group (1).webp" alt="" /></span>
            </div>
            <h3 className="growth-box-text font-bold text-lg mb-3">The founder dependency trap</h3>
            <p className="growth-box-text-p text-sm">
              Every deal needs you in the room. Your reps can’t close without you. You’re working 70-hour weeks just to keep revenue growing and it’s not sustainable.
            </p>
          </div>

          <div className="bg-growth-box rounded-lg p-8">
            <div className=" mb-4">
              <span className=""><img src="/Mask group.webp" alt="" /></span>
            </div>
            <h3 className="growth-box-text font-bold text-lg mb-3">
              The wrong <br /> playbook problem
            </h3>
            <p className="growth-box-text-p text-sm">
              You hire a sales leader from a unicorn. They bring MEDDIC, complex forecasting, and processes built for large teams. None of it fits your startup. Deals slow down. Reps get frustrated.
            </p>
          </div>

          <div className="bg-growth-box rounded-lg p-8">
            <div className=" mb-4">
              <span className=""><img src="/Mask group.webp" alt="" /></span>
            </div>
            <h3 className="growth-box-text font-bold text-lg mb-3">The “just hire more <br /> reps” Mistake</h3>
            <p className="growth-box-text-p text-sm">
              You think more people = more revenue. But without systems or culture, you’re just scaling chaos – reps churn and deals drag. Your best early hires leave because there’s no clear path
              to success.
            </p>
          </div>

          <div className="bg-growth-box rounded-lg p-8">
            <div className=" mb-4">
              <span className=""><img src="/Mask group (2).webp" alt="" /></span>
            </div>
            <h3 className="growth-box-text font-bold text-lg mb-3">the culture <br /> Sacrifice</h3>
            <p className="growth-box-text-p text-sm">
              You hit the number, but at what cost? Burnout, high turnover, a team that is falling out of love with the role and the company. The result = revenue growth that isn’t sustainable.
            </p>
          </div>
        </div>
        <div className=""> 
          <div className="gap-text pt-10 m-0 p-0">
            The gap isn’t about working harder
          </div>
          <div className="gap-text-p m-0 p-0">It’s about building systems and culture that scale together</div>
        </div>
      </div>

      {/* <div className="bg-slate-900 border border-slate-700 rounded-lg p-8 text-center max-w-2xl mx-auto">
        <p className="text-slate-300 font-semibold">
          THE OUTCOME ISN'T WHAT YOU'D EXPECT
        </p>
        <p className="text-slate-400 mt-3">
          Instead of gaining pace, you lose efficiency. Instead of keeping your
          best people, they leave. Instead of building something great, you're
          just trying to keep it together.
        </p>
      </div> */}
    </section>
  );
}
