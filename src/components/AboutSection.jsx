export default function AboutSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-bold text-slate-900">About Us</h2>
        <p className="mt-6 text-lg text-slate-600">
          DKS Kranes Nigeria Limited is a leading business solutions provider with expertise
          in trading, logistics, imports & exports, retail, printing and investment facilitation.
        </p>
      <div className="grid gap-6 md:grid-cols-2">
  <img
    src="/image02.png"
    alt="Logistics"
    className="h-72 w-full rounded-xl object-cover shadow-lg"
  />

  <img
    src="/image03.png"
    alt="Business Operations"
    className="h-72 w-full rounded-xl object-cover shadow-lg"
  />
</div>
        
      </div>
    </section>
  );
}
