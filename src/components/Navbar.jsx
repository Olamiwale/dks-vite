export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-900/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500 font-bold text-slate-900">
            DKS
          </div>

          <div>
            <p className="font-semibold text-white">
              DKS Kranes Nigeria Limited
            </p>
            <p className="text-xs text-slate-400">
              Registered in Nigeria
            </p>
          </div>
        </a>

        {/* <div className="hidden gap-8 md:flex">
          <a href="/about" className="text-slate-300 hover:text-white">
            About
          </a>
          <a href="/services" className="text-slate-300 hover:text-white">
            Services
          </a>
          <a href="/contact" className="text-slate-300 hover:text-white">
            Contact
          </a>
        </div> */}

        <a
          href="#contact"
          className="rounded-md bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
        >
          Get In Touch
        </a>
      </div>
    </nav>
  );
}
