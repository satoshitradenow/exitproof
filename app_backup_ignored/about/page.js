import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-dark text-white">
      <header className="text-center py-8 border-b border-neon/30">
        <Link href="/">
          <div className="w-80 h-40 mx-auto mb-6 cursor-pointer">
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
        </Link>
        <nav className="mt-6">
          <Link href="/" className="text-neon font-bold mx-2">Home</Link> |
          <Link href="/about" className="text-neon font-bold mx-2">About</Link>
        </nav>
      </header>

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-neon text-center mb-10">Team & Traction</h1>
        <p className="text-lg text-center mb-8">
          <strong>50+ cases</strong> • Partnerships with <strong>3 major law firms</strong> • <strong>$500K ARR</strong> • <strong>95% retention</strong>
        </p>
        <ul className="space-y-4 text-lg">
          <li className="bg-card p-4 rounded border-l-4 border-neon">Recovered <strong>$50M+</strong> in illicit crypto assets</li>
          <li className="bg-card p-4 rounded border-l-4 border-neon">Expert witness in <strong>12 federal cases</strong></li>
          <li className="bg-card p-4 rounded border-l-4 border-neon">Featured in <strong>Forbes, CoinDesk, Bloomberg</strong></li>
        </ul>
        <div className="text-center mt-10">
          <Link href="/" className="bg-neon text-black font-bold py-2 px-6 rounded hover:bg-cyan-400 transition inline-block">← Back to Home</Link>
        </div>
      </section>
    </main>
  );
}
