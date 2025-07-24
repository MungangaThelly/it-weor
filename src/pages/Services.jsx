const Services = () => (
  <div className="px-6 py-10 max-w-4xl mx-auto font-sans leading-relaxed">
    <h2 className="text-3xl font-bold mb-6">Våra Tjänster</h2>

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
  </div>
);

export default Services;
