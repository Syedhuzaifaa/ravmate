export default function HowWeHelp() {
  const services = [
    {
      title: "Systems Setup",
      description:
        "Clean sales systems that actually stick. That follow your customers sales process and value exchange.",
    },
    {
      title: "Build Your Teams",
      description: "Hire proven winners. Compensation structures that keep your best people.",
    },
    {
      title: "Scale Without Breaking",
      description: "Control your narrative. Maintain your culture. Get systems that feel like YOU.",
    },
  ]

  return (
    <section className="section-container bg-gradient-to-b from-slate-900 to-slate-950">
      <h2 className="section-title text-center mb-4">
        How We <span className="text-emerald-500">Help</span>
      </h2>
      <p className="section-subtitle text-center mb-12 max-w-2xl mx-auto">
        One partnership. Everything you need to stop doing everything yourself.
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((service, idx) => (
          <div key={idx} className="bg-slate-800 border border-slate-700 rounded-lg p-8">
            <h3 className="font-bold text-lg mb-4">{service.title}</h3>
            <p className="text-slate-400">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-slate-300 max-w-2xl mx-auto mb-8">This isn't a quick fix. It's a partnership.</p>
      </div>
    </section>
  )
}
