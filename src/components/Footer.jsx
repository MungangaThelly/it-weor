const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-center sm:text-left">
          © {new Date().getFullYear()} IT-Weor AB. Alla rättigheter förbehållna.
        </p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a href="mailto:info@it-weor.se" className="hover:underline">it.weor@gmail.com</a>
          <a href="/contact" className="hover:underline">Kontakta oss</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;