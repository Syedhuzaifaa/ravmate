export default function WhoWeWorkWith() {
  return (
    <section className="section-container">
      <h2 className="section-title text-center mb-4">
        Who we <span className="text-emerald-500">work with</span>
      </h2>
      <p className="section-subtitle text-center mb-12 max-w-2xl mx-auto">
        Some industries I work in successfully. Usually, we're best together if you have authority, execution speed and
        understand the value of.
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-8">
          <h3 className="font-bold text-lg mb-2 text-emerald-500">Product-Market Fit</h3>
          <p className="text-slate-400 text-sm mb-4">
            You have done your basic job and created a strong product-market fit.
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex gap-2">
              <span className="text-emerald-500">→</span>
              <span>Now it's time to scale</span>
            </li>
          </ul>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
          <h3 className="font-bold text-lg mb-2">Market-Ready Teams</h3>
          <p className="text-slate-400 text-sm mb-4">Your team is in place and knows the product inside out.</p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex gap-2">
              <span className="text-emerald-500">→</span>
              <span>Now build authority across 2-3 customers</span>
            </li>
          </ul>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
          <h3 className="font-bold text-lg mb-2">Founder Mentality Needed</h3>
          <p className="text-slate-400 text-sm mb-4">You want a strategic partner who gets the founder experience.</p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex gap-2">
              <span className="text-emerald-500">→</span>
              <span>And won't give you generic fluff</span>
            </li>
          </ul>
        </div>

        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-8">
          <h3 className="font-bold text-lg mb-2 text-emerald-500">Revenue Accelaration</h3>
          <p className="text-slate-400 text-sm mb-4">You understand great talent mixed with revenue driving impact.</p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex gap-2">
              <span className="text-emerald-500">→</span>
              <span>A guide to the right moves at crucial points</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
