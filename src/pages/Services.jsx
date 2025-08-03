import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Webb- & Applikationssäkerhet",
      items: [
        {
          category: "Frontend",
          examples: [
            "Säkerhetsgranskning av frontend (XSS, CSRF, CSP)",
            "Rådgivning inom säker kodning",
            "Penetrationstester för webbapplikationer"
          ]
        },
        {
          category: "Backend",
          examples: [
            "Säkerhetsgranskning av backend (API, autentisering med JWT)",
            "Säker serverkodning",
            "Penetrationstester för backend- och API-tjänster"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Microsoft 365 & Azure-säkerhet",
      items: [
        {
          examples: [
            "DLP, MFA och villkorsstyrd åtkomst",
            "Hotidentifiering med Defender & Sentinel",
            "Säker molnmigrering enligt Zero Trust"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Nätverks- & Infrastruktursäkerhet",
      items: [
        {
          examples: [
            "Cisco-brandväggar, VPN & segmentering",
            "SIEM-lösningar och logganalys",
            "WAF-implementation"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "IT-strategi & Projektledning",
      items: [
        {
          examples: [
            "Cybersäkerhetsstrategi och ISO 27001-stöd",
            "Digital transformation",
            "Incident Response Planning"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Kontinuerlig support & optimering",
      items: [
        {
          examples: [
            "24/7 övervakning via vår hostingplattform",
            "ITIL-baserad support",
            "Prestandaoptimering av webb- och molnapplikationer"
          ]
        }
      ]
    }
  ];

  return (
    <div className="px-6 py-10 max-w-6xl mx-auto font-sans leading-relaxed">
      <h1 className="text-4xl font-bold text-white-800 mb-10">Våra Tjänster:</h1>

      <div className="space-y-8">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {service.id}. {service.title}
              </h2>

              <div className="space-y-6">
                {service.items.map((item, index) => (
                  <div key={index}>
                    {item.category && (
                      <h3 className="font-medium text-gray-700 mb-2">
                        {item.category}:
                      </h3>
                    )}
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {item.examples.map((example, i) => (
                        <li key={i}>{example}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-yellow-400">
          Intresserad av våra tjänster?{' '}
          <a href="/contact" className="text-blue-600 hover:underline">
            Kontakta oss
          </a>{' '}
          för en konsultation.
        </p>
      </div>
    </div>
  );
};

export default Services;
