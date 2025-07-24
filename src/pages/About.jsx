import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="font-sans leading-relaxed px-6 py-10 max-w-7xl mx-auto">
      {/* Hero / Intro */}
      <section id="start" className="text-center mb-12">
        <p className="text-lg max-w-2xl mx-auto">
          Din partner inom IT-säkerhet och digitala lösningar.
        </p>
        <p className="mt-4 space-x-4">
          <a href="#om-oss" className="text-blue-400 hover:underline">Läs om oss</a>
          <a href="#varfor" className="text-blue-400 hover:underline">Varför välja oss?</a>
          <Link to="/services" className="text-blue-400 hover:underline">Gå till tjänster</Link>
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
