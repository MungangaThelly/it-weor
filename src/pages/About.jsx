import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="font-sans leading-relaxed px-6 py-10 max-w-7xl mx-auto">
      {/* Hero / Intro */}
      <section id="start" className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">WEOR: Din IT-framtid, Redefinierad</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Sedan september 2022 har vi bevisat att traditionell IT är död
        </p>
        <p className="mt-4 space-x-4">
          <a href="#weor" className="text-blue-400 hover:underline">Vår filosofi</a>
          <a href="#om-oss" className="text-blue-400 hover:underline">Om oss</a>
          <Link to="/services" className="text-blue-400 hover:underline">Våra tjänster</Link>
        </p>
      </section>

      {/* WEOR Philosophy */}
      <section id="weor" className="mb-12 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Vår WEOR-filosofi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              letter: "W",
              title: "Work",
              desc: "Förenklar arbete genom smart automatisering och intuitiva lösningar",
              color: "border-blue-600 text-blue-600"
            },
            {
              letter: "E",
              title: "Experience", 
              desc: "Certifierade experter med praktisk erfarenhet",
              color: "border-green-600 text-green-600"
            },
            {
              letter: "O",
              title: "Occupation",
              desc: "Skräddarsyr IT-roller för en föränderlig arbetsmarknad",
              color: "border-red-600 text-red-600"
            },
            {
              letter: "R",
              title: "Revolution",
              desc: "Utmanar traditioner med Zero Trust och proaktiv säkerhet",
              color: "border-amber-600 text-amber-600"
            }
          ].map((item) => (
            <div key={item.letter} className={`border-l-4 ${item.color} pl-4 bg-white rounded-r shadow-sm`}>
              <h3 className={`text-xl font-medium mb-2 ${item.color}`}>
                <span className="font-bold">{item.letter}</span> · {item.title}
              </h3>
              <p className="text-gray-800">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 bg-white p-6 rounded border">
          <h3 className="font-medium mb-2 text-gray-800">Vår framgångsresa på bara 3 år</h3>
          <p className="text-sm text-gray-700 mb-4">
            WEOR-principerna i praktik: Resultat som talar för sig själva.
          </p>
          <div className="text-sm space-y-2 text-gray-800">
            <p>🚀 <strong className="font-semibold">2022 Q3:</strong> Grundades med WEOR i DNAt</p>
            <p>✅ <strong className="font-semibold">2023:</strong> Certifierade team (Cisco CCST-Cyber Security/MSCI/ITIL)</p>
            <p>📈 <strong className="font-semibold">2024:</strong> Har etablerat långsiktiga partnerskap med flera nöjda kunder</p>
            <p>💡 <strong className="font-semibold">2025:</strong> Fortsatt satsning på innovativa lösningar</p>
          </div>
        </div>
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
          <li>Fokus på säkerhet - vi skyddar din data</li>
          <li>Skräddarsydda lösningar för små och stora organisationer</li>
        </ul>
      </section>
    </div>
  );
};

export default About;