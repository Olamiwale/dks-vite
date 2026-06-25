export default function ContactSection() {
  return (
    <section id="contact" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-12 lg:grid-cols-2">

          <div>
            <span className="text-sm uppercase tracking-widest text-blue-600">
              Contact Us
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Let's Do Business Together
            </h2>

            <p className="mt-4 text-slate-600">
              Reach out to discuss a contract, request a quote,
              or explore a partnership opportunity.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <p className="font-semibold">📍 Location</p>
                <p>Nigeria</p>
              </div>

              <div>
                <p className="font-semibold">📧 Email</p>
                <p>info@dkskranes.com.ng</p>
              </div>

              <div>
                <p className="font-semibold">📞 Phone</p>
                <p>+234 000 000 0000</p>
              </div>

              <div>
                <p className="font-semibold">🕐 Business Hours</p>
                <p>Monday – Friday, 8am – 5pm WAT</p>
              </div>
            </div>
          </div>

          <form className="space-y-4 rounded-2xl bg-white p-8 shadow">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Full Name"
                className="rounded-lg border p-3"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="rounded-lg border p-3"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-lg border p-3"
            />

            <select className="w-full rounded-lg border p-3">
              <option>Select a service...</option>
              <option>General Contracts</option>
              <option>Investment Services</option>
              <option>General Merchandise</option>
              <option>Boutique & Retail</option>
              <option>Imports & Exports</option>
              <option>Haulage & Logistics</option>
              <option>Commission Agency</option>
              <option>Supply of Goods</option>
              <option>Printing Services</option>
            </select>

            <textarea
              rows={5}
              placeholder="Tell us about your requirement..."
              className="w-full rounded-lg border p-3"
            />

            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}