import { Mail, Phone, Globe, Shield, Zap, FileSearch, Lock } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO */}
      <header className="relative flex min-h-screen flex-col items-center justify-center gap-8 px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-black" />
        <div className="relative z-10">
          <div className="mb-8 flex justify-center">
            <Shield className="h-24 w-24 text-cyan-400" />
          </div>
          <h1 className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-6xl font-bold text-transparent md:text-8xl">
            ExitProof
          </h1>
          <p className="mt-4 text-2xl font-light text-cyan-200">
            Crypto Forensics
          </p>
          <p className="mt-6 text-lg text-gray-300">
            Prove the Flow. Follow the Money — Cross-Chain.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <Globe className="h-4 w-4" /> USA (Nationwide, Remote-First)
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> sean@exitproof.crypto
            </span>
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> +1 561-321-9015
            </span>
          </div>
          <a
            href="#contact"
            className="mt-10 inline-block rounded-full bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400"
          >
            Get a 48-Hour Triage
          </a>
        </div>
      </header>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold text-cyan-400">
            Judge-Ready in 48 Hours
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <Zap className="h-12 w-12 text-cyan-400" />,
                title: "48-Hour Triage",
                desc: "Feasibility memo • 1 flow diagram • Subpoena targets",
              },
              {
                icon: <FileSearch className="h-12 w-12 text-cyan-400" />,
                title: "Investigation Sprints",
                desc: "Cross-chain tracing • OSINT • 3–5 exhibits • CSV tables",
              },
              {
                icon: <Lock className="h-12 w-12 text-cyan-400" />,
                title: "Expert Reports",
                desc: "Declarations • Depo prep • Evidence binders",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-xl bg-gray-900 p-8 text-center shadow-2xl ring-1 ring-cyan-500/20 transition hover:ring-cyan-400"
              >
                {s.icon}
                <h3 className="mt-4 text-2xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-gray-950 py-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-12 text-4xl font-bold text-cyan-400">Pricing</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { name: "Triage", price: "$99–$249" },
              { name: "Sprint", price: "$1,250–$3,000" },
              { name: "Retainer", price: "$5k–$15k/mo" },
            ].map((p) => (
              <div
                key={p.name}
                className="rounded-lg bg-black p-8 ring-1 ring-cyan-500/30"
              >
                <h3 className="text-2xl font-bold">{p.name}</h3>
                <p className="mt-4 text-3xl font-bold text-cyan-400">
                  {p.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-8 text-4xl font-bold text-cyan-400">Contact Us</h2>
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-lg bg-gray-900 px-6 py-4 text-white placeholder-gray-500 ring-1 ring-cyan-500/30 focus:ring-cyan-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full rounded-lg bg-gray-900 px-6 py-4 text-white placeholder-gray-500 ring-1 ring-cyan-500/30 focus:ring-cyan-400"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Tell us about your case"
              required
              className="w-full rounded-lg bg-gray-900 px-6 py-4 text-white placeholder-gray-500 ring-1 ring-cyan-500/30 focus:ring-cyan-400"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-cyan-500 py-4 font-bold text-black transition hover:bg-cyan-400"
            >
              Send Message
            </button>
          </form>
          <p className="mt-8 text-gray-400">
            Or call <strong>+1 561-321-9015</strong>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-cyan-900/30 bg-black py-8 text-center text-sm text-gray-500">
        © 2025 ExitProof Crypto Forensics • All traces lead here.
      </footer>
    </div>
  );
}
