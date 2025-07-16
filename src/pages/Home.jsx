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
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-2">{t('home.welcome')}</h1>
      <p className="text-lg mb-8">{t('home.intro')}</p>

      <Hero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        ctaText={t('hero.cta')}
      />
      <Features features={features} />
    </div>
  );
};

export default Home;
