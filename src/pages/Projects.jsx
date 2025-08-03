import React from 'react';

const projects = [
  {
    title: "Molnsäkerhetslösning för Aktier Bolag",
    description: "Design och implementering av en ny säker webbplats för IT-Weor AB är under utveckling. Fokus ligger på molnbaserad säkerhet, skalbarhet och användarvänlig design.",
    year: 2025,
  },
  {
    title: "React chat webapp med inloggning",
    description: "lösenordsskyddad vid inloggningsförfarande, Visa endast Registrera & Login sidorna när man är utloggad, Felmeddelanden översättas, så länge budskapet framgår",
    year: 2025,
  },
  {
    title: "🛡️ Monitoring Platform",
    description: "A full-stack application to visualize system metrics and logs, with authentication and role-based access. building by IT-Weor AB / STI DN, Africa innovation",
    year: 2005,

  },
  {
    title: "🛡️ Mining Fraud Detection Dashboard",
    description: "A full-stack AI tool for detecting fraud in mining transactions — builing by IT-Weor AB / STI Diaspora Network, African innovation.",
    year: 2025,
  },
  {
    title: "Microsoft 365-säkerhet för utbildningssektor",
    description: "Implementering av MFA och DLP för universitetets 20 000 användare.",
    year: 2025,
  },
  {
    title: "Brother MFC-L8690CDW AIO för Förening",
    description: "Implementering av ny FÄRG LASERSKRIVARE och Wi-Fi FELSÖKNING för teosofiska samfundet, Stockholm.",
    year: 2024,
  },


];

const Projects = () => (
  <section className="py-12 px-6 max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-white mb-8">Våra Projekt</h2>
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project, index) => (
        <div key={index} className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-xl text-yellow-600 font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-700 mb-1">{project.description}</p>
          <span className="text-sm text-gray-500">{project.year}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
