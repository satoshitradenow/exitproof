export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ExitProof Crypto Forensics</title>
        <meta name="description" content="Crypto Forensics: $99 Triage, $1,250 Sprints, $15k Retainers. Track Illicit Flows. Chainalysis-Backed via CIP." />
        <link rel="icon" href="/logo.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
