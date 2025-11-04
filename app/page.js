export default function Home() {
  return (
    <>
      <header>
        <img src="/logo.svg" alt="ExitProof Logo" />
        <h1>ExitProof Crypto Forensics</h1>
        <p>Prove the Flow. Follow the Money – Cross-Chain.</p>
        <p>USA (Nationwide, Remote-First) • Sean Michael – Founder/Lead Investigator</p>
        <p>sean@exitproof.crypto • support@exitproof.crypto • www.exitproof.crypto • +1 561-321-9015</p>
      </header>

      <section className="services">
        <h2>Services</h2>
        <ul>
          <li>48-Hour Triage: $99–$249 – Feasibility memo, flow diagram, subpoena targets.</li>
          <li>Investigation Sprints: $1,250–$3,000 – Cross-chain tracing, OSINT, 3–5 exhibits.</li>
          <li>Retainer: $5k–$15k/mo – Unlimited quick-looks + priority support.</li>
        </ul>
      </section>

      <section className="about">
        <h2>About</h2>
        <p>Led by Sean Michael with 10+ years in crypto forensics. Recovered $50M+ assets. 50+ cases, $500K ARR, 95% retention.</p>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <form action="https://formspree.io/f/YOUR_ID" method="POST">
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
    </>
  );
}
