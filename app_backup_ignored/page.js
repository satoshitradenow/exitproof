import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark text-white">
      {/* Header */}
      <header className="text-center py-8 border-b border-neon/30">
        <div className="w-80 h-40 mx-auto mb-6">
          <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <rect width="200" height="100" fill="#000"/>
            <path d="M50 20 L50 80 L150 80 L150 20 Z" fill="none" stroke="#00BFFF" strokeWidth="3"/>
            <circle cx="100" cy="50" r="20" fill="none" stroke="#00BFFF" strokeWidth="3"/>
            <line x1="80" y1="50" x2="120" y2="50" stroke="#00BFFF" strokeWidth="3"/>
            <line x1="100" y1="30" x2="100" y2="70" stroke="#00BFFF" strokeWidth="3"/>
            <text x="10" y="95" fontFamily="Arial, sans-serif" fontSize="20" fill="#00BFFF" fontWeight="bold">EXIT PROOF</text>
            <text x="10" y="115" fontFamily="Arial, sans-serif" fontSize="12" fill="#fff">Crypto Forensics</text>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-neon mb-2">ExitProof Crypto Forensics</h1>
        <p className="text-lg">Prove the Flow. Follow the Money – Cross-Chain.</p>
        <p className="text-sm text-gray-400 mt-2">
          USA (Remote-First) • Sean Michael – Founder/Lead Investigator
        </p>
        <p className="text-neon text-sm mt-1">
          sean@exitproof.crypto • +1 561-321-9015
        </p>
        <nav className="mt-6">
          <Link href="/" className="text-neon font-bold mx-2">Home</Link> |
          <Link href="/about" className="text-neon font-bold mx-2">About</Link>
        </nav>
      </header>

      {/* Services */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-neon text-center mb-10">Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg border border-neon/50">
            <h3 className="text-xl font-bold text-neon">48-Hour Triage</h3>
            <p className="text-2xl font-bold my-2">$99–$249</p>
            <p className="text-sm text-gray-300">Feasibility memo, flow diagram, subpoena targets.</p>
            <a href="https://upwork.com" className="block mt-4 bg-neon text-black font-bold text-center py-2 rounded hover:bg-cyan-400 transition">Book on Upwork</a>
          </div>
          <div className="bg-card p-6 rounded-lg border border-neon/50">
            <h3 className="text-xl font-bold text-neon">Investigation Sprints</h3>
            <p className="text-2xl font-bold my-2">$1,250–$3,000</p>
            <p className="text-sm text-gray-300">Cross-chain tracing, OSINT, 3–5 exhibits.</p>
            <a href="https://upwork.com" className="block mt-4 bg-neon text-black font-bold text-center py-2 rounded hover:bg-cyan-400 transition">Book on Upwork</a>
          </div>
          <div className="bg-card p-6 rounded-lg border border-neon/50">
            <h3 className="text-xl font-bold text-neon">Retainer</h3>
            <p className="text-2xl font-bold my-2">$5k–$15k/mo</p>
            <p className="text-sm text-gray-300">Unlimited quick-looks + priority support.</p>
            <a href="https://upwork.com" className="block mt-4 bg-neon text-black font-bold text-center py-2 rounded hover:bg-cyan-400 transition">Book on Upwork</a>
          </div>
        </div>
      </section>

      {/* CIP Pitch */}
      <section className="bg-card py-12 px-6 text-center">
        <h2 className="text-2xl font-bold text-neon mb-4">Chainalysis-Backed via CIP Partners</h2>
        <p className="max-w-2xl mx-auto text-gray-300">Trusted by law firms. Real-time illicit flow tracking across Bitcoin, Ethereum, and 100+ chains.</p>
      </section>

      {/* Contact */}
      <section className="py-16 px-6 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-neon text-center mb-8">Contact</h2>
        <form action="https://formspree.io/f/YOUR_ID" method="POST" className="space-y-4">
          <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 bg-card border border-neon/50 rounded text-white placeholder-gray-500 focus:border-neon focus:outline-none" />
          <textarea name="message" placeholder="Your Message" required rows="5" className="w-full p-3 bg-card border border-neon/50 rounded text-white placeholder-gray-500 focus:border-neon focus:outline-none"></textarea>
          <button type="submit" className="w-full bg-neon text-black font-bold py-3 rounded hover:bg-cyan-400 transition">Send Message</button>
        </form>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500 border-t border-neon/30">
        © 2025 ExitProof Crypto Forensics. All rights reserved.
      </footer>
    </main>
  );
}
