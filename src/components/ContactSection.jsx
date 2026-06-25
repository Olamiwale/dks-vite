export default function ContactSection() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-bold">Get In Touch</h2>
        <form className="mt-12 max-w-2xl">
          <div className="mb-6">
            <label className="block text-sm font-medium">Name</label>
            <input type="text" className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-2 text-white" />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium">Email</label>
            <input type="email" className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-2 text-white" />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium">Message</label>
            <textarea className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-2 text-white"></textarea>
          </div>
          <button type="submit" className="rounded-md bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
