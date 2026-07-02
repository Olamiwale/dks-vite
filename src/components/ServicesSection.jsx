import { services } from '../data/services';

export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12">
          <span className="text-sm uppercase tracking-[0.3em] text-amber-400">
            Services
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Services Across Every Commercial Dimension
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border p-6 transition hover:shadow-lg"
            >
              <div className="mb-4 text-3xl">{service.icon}</div>

              <h3 className="mb-2 text-xl font-semibold">
                {service.title}
              </h3>

              <p className="text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
