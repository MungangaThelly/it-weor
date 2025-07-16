const Features = ({ features }) => (
  <section className="py-16 px-6 bg-gray-900 text-gray-200 max-w-7xl mx-auto">
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
      {features.map(({ icon, title, description }, i) => (
        <div key={i}>
          <div className="text-5xl mb-4">{icon}</div>
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <p>{description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
