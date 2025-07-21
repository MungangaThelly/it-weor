import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import Features from '../components/Features';

const Home = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: '🔒',
      title: t('features.security.title'),
      description: t('features.security.description'),
    },
    {
      icon: '⚙️',
      title: t('features.customSolutions.title'),
      description: t('features.customSolutions.description'),
    },
    {
      icon: '🚀',
      title: t('features.support.title'),
      description: t('features.support.description'),
    },
  ];

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto font-sans text-center text-gray-100">
      {/* Page Intro */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">{t('home.welcome')}</h1>
        <p className="text-lg text-cyan-400 max-w-xl mx-auto">{t('home.intro')}</p>
      </header>

      {/* Hero Section */}
      <section className="mb-16">
        <Hero
          title={t('hero.title')}
          subtitle={t('hero.subtitle')}
          ctaText={t('hero.cta')}
        />
      </section>

      {/* Features Section */}
      <section>
        <Features features={features} />
      </section>
    </div>
  );
};

export default Home;
