const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-center sm:text-left">
          © {new Date().getFullYear()} IT-Weor AB. Alla rättigheter förbehållna.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-0 text-sm text-center sm:text-right">
          <a href="mailto:info@it-weor.se" className="hover:underline">it.weor@gmail.com</a>
          <a href="/contact" className="hover:underline">Kontakta oss</a>
          <a href="https://it-weor.se" target="_blank" rel="noopener noreferrer" className="hover:underline">it-weor.se</a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/in/thelly660" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
          <span className="block sm:inline">Mobil: +46 70 481 03 77</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
