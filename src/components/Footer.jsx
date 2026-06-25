export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-[50px] w-[50px] items-center justify-center rounded font-bold text-slate-900">
                 <img src="../logo1.png" />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  DKS Kranes Nigeria Limited
                </h3>
                <p className="text-xs text-slate-500">
                  Registered in Nigeria
                </p>
              </div>
            </div>

            <p>
              A diversified Nigerian enterprise delivering trusted
              commercial, logistics, retail and investment services.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">
              Services
            </h4>

            <ul className="space-y-2">
              <li>General Contracts</li>
              <li>Trading & Merchandise</li>
              <li>Imports & Exports</li>
              <li>Haulage & Logistics</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">
              Company
            </h4>

            <ul className="space-y-2">
              <li>About Us</li>
              <li>Why Choose Us</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">
              Contact
            </h4>

            <ul className="space-y-2">
              <li>info.dkskranesng@gmail.com</li>
              <li>+234 802 4983 235</li>
              <li>Nigeria</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center">
          © 2025 DKS Kranes Nigeria Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}