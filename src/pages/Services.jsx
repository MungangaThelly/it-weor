const Services = () => (
  <div className="px-6 py-10 max-w-4xl mx-auto font-sans leading-relaxed">
    <h2 className="text-3xl font-bold mb-6">Våra Tjänster</h2>

    <section className="mb-8">
      <h3 className="text-xl font-semibold mb-2">IT-tjänster <span className="text-gray-500 text-sm">(SNI 62090)</span></h3>
      <ul className="list-disc list-inside space-y-2 text-sm">
        <li>Systemunderhåll och drift</li>
        <li>IT-support och teknisk hjälp</li>
        <li>Hosting och systemövervakning</li>
      </ul>
    </section>

    <section>
      <h3 className="text-xl font-semibold mb-2">Datakonsultverksamhet <span className="text-gray-500 text-sm">(SNI 62020)</span></h3>
      <ul className="list-disc list-inside space-y-2 text-sm">
        <li>IT-strategi och rådgivning</li>
        <li>Systemdesign och implementering</li>
        <li>Affärssystem & projektledning</li>
      </ul>
    </section>
  </div>
);

export default Services;
