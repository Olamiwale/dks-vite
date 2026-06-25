export default function WhyChooseUs() {
  const reasons = [
    {
      icon: "🏛️",
      title: "Legally Registered & Compliant",
      description:
        "Fully incorporated under Nigerian law with all required registrations and statutory compliance in place.",
    },
    {
      icon: "🔗",
      title: "Multi-Sector Capability",
      description:
        "A single call covers trading, logistics, retail, printing, and more.",
    },
    {
      icon: "⚡",
      title: "Speed & Reliability",
      description:
        "We understand Nigerian timelines and market realities.",
    },
    {
      icon: "🤲",
      title: "Client-First Approach",
      description:
        "Every engagement is tailored to the client's specific needs.",
    },
  ];

  return (
    <section className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm uppercase tracking-widest text-amber-400">
              Why Choose Us
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              One Partner. Total Business Coverage.
            </h2>

            <p className="mt-6 text-slate-300">
              In a complex market like Nigeria, working with a single,
              versatile partner reduces friction, cost and risk.
            </p>
          </div>

          <div className="space-y-4">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-xl border border-slate-700 bg-slate-800 p-6"
              >
                <div className="mb-2 text-2xl">{reason.icon}</div>
                <h3 className="font-semibold">{reason.title}</h3>
                <p className="mt-2 text-sm text-slate-300">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}