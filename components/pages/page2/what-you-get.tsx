export default function WhatYouGet() {
  return (
    <section className="section-container bg-gradient-to-b from-slate-900 to-slate-950">
      <h2 className="section-title text-center mb-4">
        What You <span className="text-emerald-500">Get</span>
      </h2>
      <p className="section-subtitle text-center mb-12 max-w-2xl mx-auto">
        Month to month. As core changes take shape.
      </p>

      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
          <h3 className="font-bold text-lg text-emerald-500 mb-4">Month 1: Org Audit & Discovery</h3>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li className="flex gap-2">
              <span className="text-emerald-500">✓</span>
              <span>Customer interviews & sales deep-dive</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-500">✓</span>
              <span>Team health assessment</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-500">✓</span>
              <span>Current comp structure review</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-500">✓</span>
              <span>90-day roadmap creation</span>
            </li>
          </ul>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
          <h3 className="font-bold text-lg text-emerald-500 mb-4">Months 2-4: Systems Build</h3>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li className="flex gap-2">
              <span className="text-emerald-500">✓</span>
              <span>Sales playbook creation</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-500">✓</span>
              <span>Compensation model redesign</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-500">✓</span>
              <span>Team structure refinement</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-500">✓</span>
              <span>Regular check-ins and adjustments</span>
            </li>
          </ul>
        </div>

        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-8">
          <h3 className="font-bold text-lg text-emerald-500 mb-4">Ongoing: Strategy & Support</h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li className="flex gap-2">
              <span className="text-emerald-500">→</span>
              <span>Monthly strategy sessions</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-500">→</span>
              <span>Real-time problem-solving</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-500">→</span>
              <span>Team coaching on execution</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-500">→</span>
              <span>Progress tracking and course correction</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
