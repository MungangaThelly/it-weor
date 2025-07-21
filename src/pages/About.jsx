const About = () => {
  return (
    <div className="font-sans leading-relaxed px-6 py-10 max-w-7xl mx-auto">
      {/* Hero / Intro */}
      <section id="start" className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-2">Välkommen till IT-Weor AB</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Din partner inom IT-säkerhet och digitala lösningar.
        </p>
        <p className="mt-4 space-x-4">
          <a href="#om-oss" className="text-blue-400 hover:underline">Läs om oss</a>
          <a href="#tjanster" className="text-blue-400 hover:underline">Gå till tjänster</a>
          <a href="#varfor" className="text-blue-400 hover:underline">Varför välja oss?</a>
        </p>
      </section>

      {/* Om oss */}
      <section id="om-oss" className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Om oss</h2>
        <p className="mb-4">
          IT-Weor AB är ett svenskt IT-bolag grundat 2022. Vi förenklar teknik för både företag och privatpersoner,
          och kombinerar teknisk expertis med affärsförståelse för att leverera långsiktiga digitala lösningar.
        </p>
        <p>
          Med certifieringar inom Cisco, Microsoft och ITIL erbjuder vi allt från nätverkssäkerhet till molntjänster och strategisk rådgivning.
        </p>
      </section>

      {/* Tjänster */}
      <section id="tjanster" className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Tjänster vi levererar</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse text-left">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="p-2 font-semibold w-1/3">Tjänsteområde</th>
                <th className="p-2 font-semibold">Exempel på leverans</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-gray-200">
                <td className="p-2 align-top font-medium">1. Webb- & Applikationssäkerhet</td>
                <td className="p-2">
                  <strong>Frontend:</strong><br />
                  Säkerhetsgranskning av frontend (XSS, CSRF, CSP)<br />
                  Rådgivning inom säker kodning<br />
                  Penetrationstester för webbapplikationer<br /><br />
                  <strong>Backend:</strong><br />
                  Säkerhetsgranskning av backend (API, autentisering med JWT)<br />
                  Säker serverkodning<br />
                  Penetrationstester för backend- och API-tjänster
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 align-top font-medium">2. Microsoft 365 & Azure-säkerhet</td>
                <td className="p-2">
                  DLP, MFA och villkorsstyrd åtkomst<br />
                  Hotidentifiering med Defender & Sentinel<br />
                  Säker molnmigrering enligt Zero Trust
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 align-top font-medium">3. Nätverks- & Infrastruktursäkerhet</td>
                <td className="p-2">
                  Cisco-brandväggar, VPN & segmentering<br />
                  SIEM-lösningar och logganalys<br />
                  WAF-implementation
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 align-top font-medium">4. IT-strategi & Projektledning</td>
                <td className="p-2">
                  Cybersäkerhetsstrategi och ISO 27001-stöd<br />
                  Digital transformation<br />
                  Incident Response Planning
                </td>
              </tr>
              <tr>
                <td className="p-2 align-top font-medium">5. Kontinuerlig support & optimering</td>
                <td className="p-2">
                  24/7 övervakning via vår hostingplattform<br />
                  ITIL-baserad support<br />
                  Prestandaoptimering av webb- och molnapplikationer
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Varför oss */}
      <section id="varfor">
        <h2 className="text-2xl font-semibold mb-4">Varför välja oss?</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>Certifierade experter med praktisk erfarenhet</li>
          <li>Helhetslösningar från teknik till strategi</li>
          <li>Fokus på säkerhet – vi skyddar din data</li>
          <li>Skräddarsydda lösningar för små och stora organisationer</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
