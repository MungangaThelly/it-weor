import React from 'react';

const testimonials = [
  {
    name: "Monica, SG at Teosofiska Samfundet",
    quote: "Tjänsterna överträffade våra förväntningar. Säkra, snabba och professionella.",
  },
  {
    name: "Telli Vogelmann, IT-chef på STI",
    quote: "Ett team du kan lita på- kunnig och alltid redo att levererar.",
  },
  {
    name: "Johan Lind, IT-chef på EduCloud",
    quote: "Ett pålitligt team som förstår säkerhet på djupet.",
  },
];

const Testimonials = () => (
  <section className="py-12 px-6 max-w-4xl mx-auto text-white">
    <h2 className="text-3xl font-bold mb-8">Vad Våra Kunder Säger</h2>
    <div className="space-y-6">
      {testimonials.map((t, index) => (
        <div key={index} className="bg-blue-800 p-6 rounded-lg shadow">
          <p className="italic mb-2">“{t.quote}”</p>
          <p className="text-sm text-gray-300">— {t.name}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
