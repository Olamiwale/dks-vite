export default function Hero() {
  return (
    <section className="bg-yellow-400 pt-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2">

        <div>
          <span className="text-sm uppercase tracking-[0.3em] text-red-900">
            Nigeria's Trusted Business Partner
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-red-900 md:text-7xl">
            Built for <span className="text-red-900">Commerce</span>.
            <br />
            Driven by <span className="text-red-900">Results</span>.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-red-900">
            DKS Kranes Nigeria Limited delivers end-to-end business solutions
            across trading, logistics, imports & exports, retail, printing and
            investment facilitation.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#services"
              className="rounded-md bg-red-900 px-6 py-3 text-white" >
              Our Services
            </a>

            <a
              href="#contact"
              className="rounded-md border border-red-900 px-6 py-3 text-white"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-red-900 bg-red-900 p-6">
            <h3 className="mb-2 text-lg font-semibold text-white">
              Import & Export
            </h3>
            <p className="text-slate-400">
              Global trade solutions connecting Nigeria to the world.
            </p>
          </div>

          <div className="rounded-xl border border-red-900 bg-red-900 p-6">
            <h3 className="mb-2 text-lg font-semibold text-white">
              Logistics & Trading
            </h3>
            <p className="text-slate-400">
              Efficient supply chain and commerce services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}



/*Yellow / Gold: Used for the crane hook block, the hoisting slings, and the large "DKS" letters.Maroon / Dark Red: Used for the horizontal rectangular banner, the outline details on the crane hook, and the "NIG. LTD." text.White: Used for the bold "KRANES"  */