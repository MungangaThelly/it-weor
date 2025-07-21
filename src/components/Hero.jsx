const Hero = ({ title, subtitle, ctaText }) => (
  <section
    className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-20 px-6 text-center"
    aria-labelledby="hero-title"
  >
    <div className="max-w-4xl mx-auto">
      <h1 id="hero-title" className="text-4xl md:text-6xl font-bold mb-4">
        {title}
      </h1>
      <p className="text-lg md:text-2xl mb-8">{subtitle}</p>
      <a
        href="mailto:it.weor@gmail.com"
        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded shadow-lg transition-colors duration-200"
      >
        {ctaText}
      </a>
    </div>
  </section>
);

export default Hero;
