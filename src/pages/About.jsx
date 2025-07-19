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

      <h3>1. Webb- & Applikationssäkerhet</h3>
      <ul>
        <li>Säkerhetsgranskning av frontend (XSS, CSRF, CSP)</li>
        <li>Rådgivning inom säker kodning</li>
        <li>Penetrationstester för webbapplikationer</li>
      </ul>

      <h3>2. Microsoft 365 & Azure-säkerhet</h3>
      <ul>
        <li>DLP, MFA och villkorsstyrd åtkomst</li>
        <li>Hotidentifiering med Defender & Sentinel</li>
        <li>Säker molnmigrering enligt Zero Trust</li>
      </ul>

      <h3>3. Nätverks- & Infrastruktursäkerhet</h3>
      <ul>
        <li>Cisco-brandväggar, VPN & segmentering</li>
        <li>SIEM-lösningar och logganalys</li>
        <li>WAF-implementation</li>
      </ul>

      <h3>4. IT-strategi & Projektledning</h3>
      <ul>
        <li>Cybersäkerhetsstrategi och ISO 27001-stöd</li>
        <li>Digital transformation</li>
        <li>Incident Response Planning</li>
      </ul>

      <h3>5. Kontinuerlig support & optimering</h3>
      <ul>
        <li>24/7 övervakning via vår hostingplattform</li>
        <li>ITIL-baserad support</li>
        <li>Prestandaoptimering av webb- och molnapplikationer</li>
      </ul>
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
