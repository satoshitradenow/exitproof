export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <header className="text-center py-12 px-6 border-b border-cyan-900">
        <div className="w-64 h-32 mx-auto mb-6">
          <svg width="100%" height="100%" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
            <rect width="200" height="100" fill="#000"/>
            <path d="M50 20 L50 80 L150 80 L150 20 Z" fill="none" stroke="#00BFFF" strokeWidth="3"/>
            <circle cx="100" cy="50" r="20" fill="none" stroke="#00BFFF" strokeWidth="3"/>
            <line x1="80" y1="50" x2="120" y2="50" stroke="#00BFFF" strokeWidth="3"/>
            <line x1="100" y1="30" x2="100" y2="70" stroke="#00BFFF" strokeWidth="3"/>
            <text x="10" y="95" fontFamily="Arial, sans-serif" fontSize="20" fill="#00BFFF" fontWeight="bold">EXIT PROOF</text>
            <text x="10" y="115" fontFamily="Arial, sans-serif" fontSize="12" fill="#fff">Crypto Forensics</text>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">ExitProof Crypto Forensics</h1>
        <p className="text-lg md:text-xl mb-1">Prove the Flow. Follow the Money – Cross-Chain.</p>
        <p className="text-sm md:text-base text-gray-300">
          USA (Nationwide, Remote-First) • Sean Michael – Founder/Lead Investigator
        </p>
        <p className="text-sm md:text-base text-cyan-300">
          sean@exitproof.crypto • support@exitproof.crypto • www.exitproof.crypto • +1 561-321-9015
        </p>
      </header>

      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center">Services</h2>
        <ul className="space-y-4 text-lg">
          <li className="bg-gray-900 p-4 rounded-lg border border-cyan-900">
            <strong>48-Hour Triage: $99–$249</strong> – Feasibility memo, flow diagram, subpoena targets.
          </li>
          <li className="bg-gray-900 p-4 rounded-lg border border-cyan-900">
            <strong>Investigation Sprints: $1,250–$3,000</strong> – Cross-chain tracing, OSINT, 3–5 exhibits.
          </li>
          <li className="bg-gray-900 p-4 rounded-lg border border-cyan-900">
            <strong>Retainer: $5k–$15k/mo</strong> – Unlimited quick-looks + priority support.
          </li>
        </ul>
      </section>

      <section className="py-12 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">About</h2>
          <p className="text-lg leading-relaxed">
            Led by <strong>Sean Michael</strong> with <strong>10+ years in crypto forensics</strong>. 
            Recovered <strong>$50M+ assets</strong>. <strong>50+ cases</strong>, <strong>$500K ARR</strong>, <strong>95% retention</strong>.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center">Contact</h2>
        <form action="https://formspree.io/f/YOUR_ID" method="POST" className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-3 bg-gray-800 border border-cyan-900 rounded text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            rows="5"
            className="w-full p-3 bg-gray-800 border border-cyan-900 rounded text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-500 text-black font-bold py-3 rounded transition"
          >
            Send
          </button>
        </form>
        <p className="text-center text-sm text-gray-400 mt-4">
          Replace <code>YOUR_ID</code> with your Formspree form ID at <a href="https://formspree.io" className="text-cyan-400 underline">formspree.io</a>
        </p>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500 border-t border-cyan-900">
        © 2025 ExitProof Crypto Forensics. All rights reserved.
      </footer>
    </main>
  );
}
