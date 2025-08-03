import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('i18nextLng', lang);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex flex-wrap items-center justify-between">
      <div className="flex gap-4">
        <Link to="/" className="hover:underline">{t('nav.home')}</Link>
        <Link to="/about" className="hover:underline">{t('nav.about')}</Link>
        <Link to="/services" className="hover:underline">{t('nav.services')}</Link>
        <Link to="/contact" className="hover:underline">{t('nav.contact')}</Link>
        <Link to="/Projects" className="hover:underline">{t('nav.projects')}</Link>
        <Link to="/Testimonials" className="hover:underline">{t('nav.testimonials')}</Link>
      </div>
      <div className="flex gap-2 text-sm mt-2 sm:mt-0">
        <button onClick={() => changeLang('sv')}>🇸🇪</button>
        <button onClick={() => changeLang('en')}>🇬🇧</button>
        <button onClick={() => changeLang('fr')}>🇫🇷</button>
      </div>
    </nav>
  );
};

export default Navbar;