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

      {/* Partners & Sponsors */}
      <div className="max-w-6xl mx-auto px-4 mt-10 text-center">
        <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">Partners & Sponsorer</h4>
        <div className="flex flex-wrap justify-center gap-8">
          {/* S4D4C */}
          <div className="flex flex-col items-center">
            <a
              href="https://www.s4d4c.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="/partners/s4d4c-logo.png"
                alt="S4D4C Logo"
                className="h-10"
              />
            </a>
            <span className="text-xs mt-2">S4D4C</span>
          </div>

          {/* ANAPI */}
          <div className="flex flex-col items-center">
            <a
              href="https://anapi.cd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="/partners/anapi-logo.svg"
                alt="ANAPI Logo"
                className="h-10"
              />
            </a>
            <span className="text-xs mt-2">ANAPI</span>
          </div>

          {/* RDC Embassy */}
          <div className="flex flex-col items-center">
            <a
              href="https://ambardcstockholm.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-white"
            >
              <img
                src="/partners/ambard-sthlm.webp"
                alt="AMBARD Logo"
                className="h-10"
              />
              <span className="text-sm font-medium">RDC Ambassaden i Stockholm</span>
            </a>
          </div>

          {/* IST Diaspora Network */}
          <div className="flex flex-col items-center">
            <a
              href="https://www.linkedin.com/in/thelly660"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-white"
            >
              <span className="text-sm font-medium">IST Diaspora Network</span>
            </a>
          </div>

          {/* Symbol för ursprung och hållbarhet image - Okapi */}
          <div className="mt-8 text-center opacity-80">
            <img
              src="/images/okapi.jpg"
              alt="Okapi - ett djur från Kongo"
              className="mx-auto h-16 rounded shadow-sm"
            />
            <p className="text-xs text-gray-300 mt-2 italic">
              Okapi - Symbol för ursprung och hållbarhet
            </p>
          </div>





        </div>
      </div>
    </footer>
  );
};

export default Footer;
