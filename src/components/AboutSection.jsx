export default function AboutSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-bold text-slate-900">About Us</h2>
        <p className="mt-6 text-lg text-slate-600">
          DKS is founded in 2019 and incorporated in 2020 as a provider of heavy
          machinery and logistics company located in Lagos State, Nigeria.
        </p>
        <p className="mt-[10px]">
          We are equipment rental solution and rigging services company focused
          on providing wide range of equipment rental and sales solutions which
          includes lifting, material handling, port equipment, Logistics
          solutions.
        </p>

        <p className="mt-[10px]">
          {" "}
          Chaired by Daniel Kandi with over two-decade working in the industry
          we understand the equipment rental market and bringing to the industry
          (Our Customers and Partners), flexible rental solution through our
          established strong relationship with major equipment dealers and
          rental suppliers throughout the country.{" "}
        </p>

        <div className="grid gap-6 md:grid-cols-2 mt-[30px]">
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
