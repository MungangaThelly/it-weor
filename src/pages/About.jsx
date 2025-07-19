const About = () => (
  <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', padding: '2rem' }}>
    
    {/* Hero / Intro */}
    <section id="start" style={{ textAlign: 'center', marginBottom: '3rem' }}>
      <h1><strong>Välkommen till IT-Weor AB</strong></h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
        Din partner inom IT-säkerhet och digitala lösningar.
      </p>
      <p>
        <a href="#om-oss">Läs om oss</a> | <a href="#tjanster">Gå till tjänster</a> | <a href="#varfor">Varför välja oss?</a>
      </p>
    </section>

    {/* Om oss */}
    <section id="om-oss" style={{ marginBottom: '2rem' }}>
      <h2>Om oss</h2>
      <p>
        IT-Weor AB är ett svenskt IT-bolag grundat 2022. Vi förenklar teknik för både företag och privatpersoner,
        och kombinerar teknisk expertis med affärsförståelse för att leverera långsiktiga digitala lösningar.
      </p>
      <p>
        Med certifieringar inom Cisco, Microsoft och ITIL erbjuder vi allt från nätverkssäkerhet till molntjänster och strategisk rådgivning.
      </p>
    </section>

    {/* Tjänster */}
    <section id="tjanster" style={{ marginBottom: '2rem' }}>
      <h2>Tjänster vi levererar</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '2px solid #ccc', padding: '0.5rem' }}>Tjänsteområde</th>
            <th style={{ borderBottom: '2px solid #ccc', padding: '0.5rem' }}>Exempel på leverans</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ verticalAlign: 'top', padding: '0.5rem' }}>
              <strong>1. Webb- & Applikationssäkerhet</strong>
            </td>
            <td style={{ padding: '0.5rem' }}>
              <strong>Frontend:</strong><br />
              Säkerhetsgranskning av frontend (XSS, CSRF, CSP)<br />
              Rådgivning inom säker kodning<br />
              Penetrationstester för webbapplikationer<br /><br />
              <strong>Backend:</strong><br />
              Säkerhetsgranskning av backend (t.ex. API-säkerhet, autentisering med JWT)<br />
              Rådgivning inom säker serverkodning<br />
              Penetrationstester för backend- och API-tjänster
            </td>
          </tr>
          <tr>
            <td style={{ verticalAlign: 'top', padding: '0.5rem' }}>
              <strong>2. Microsoft 365 & Azure-säkerhet</strong>
            </td>
            <td style={{ padding: '0.5rem' }}>
              DLP, MFA och villkorsstyrd åtkomst<br />
              Hotidentifiering med Defender & Sentinel<br />
              Säker molnmigrering enligt Zero Trust
            </td>
          </tr>
          <tr>
            <td style={{ verticalAlign: 'top', padding: '0.5rem' }}>
              <strong>3. Nätverks- & Infrastruktursäkerhet</strong>
            </td>
            <td style={{ padding: '0.5rem' }}>
              Cisco-brandväggar, VPN & segmentering<br />
              SIEM-lösningar och logganalys<br />
              WAF-implementation
            </td>
          </tr>
          <tr>
            <td style={{ verticalAlign: 'top', padding: '0.5rem' }}>
              <strong>4. IT-strategi & Projektledning</strong>
            </td>
            <td style={{ padding: '0.5rem' }}>
              Cybersäkerhetsstrategi och ISO 27001-stöd<br />
              Digital transformation<br />
              Incident Response Planning
            </td>
          </tr>
          <tr>
            <td style={{ verticalAlign: 'top', padding: '0.5rem' }}>
              <strong>5. Kontinuerlig support & optimering</strong>
            </td>
            <td style={{ padding: '0.5rem' }}>
              24/7 övervakning via vår hostingplattform<br />
              ITIL-baserad support<br />
              Prestandaoptimering av webb- och molnapplikationer
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    {/* Varför oss */}
    <section id="varfor">
      <h2>Varför välja oss?</h2>
      <ul>
        <li>Certifierade experter med praktisk erfarenhet</li>
        <li>Helhetslösningar från teknik till strategi</li>
        <li>Fokus på säkerhet – vi skyddar din data</li>
        <li>Skräddarsydda lösningar för små och stora organisationer</li>
      </ul>
    </section>
  </div>
);

export default About;
