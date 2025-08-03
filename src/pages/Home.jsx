import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import Features from '../components/Features';

const Home = () => {
  const { t } = useTranslation();

  // Memoize features to prevent unnecessary re-renders
  const features = useMemo(() => [
    {
      icon: '🔒',
      title: t('features.security.title'),
      description: t('features.security.description'),
      ariaLabel: t('features.security.ariaLabel', 'Security features'),
    },
    {
      icon: '⚙️',
      title: t('features.customSolutions.title'),
      description: t('features.customSolutions.description'),
      ariaLabel: t('features.customSolutions.ariaLabel', 'Custom solutions'),
    },
    {
      icon: '🚀',
      title: t('features.support.title'),
      description: t('features.support.description'),
      ariaLabel: t('features.support.ariaLabel', 'Support services'),
    },
  ], [t]);

  return (
    <main className="px-6 py-10 max-w-7xl mx-auto font-sans text-center text-gray-100">
      {/* Page Intro */}
      <header className="mb-12" aria-labelledby="main-heading">
        <h1 
          id="main-heading"
          className="text-4xl font-bold text-white mb-4"
        >
          {t('home.welcome')}
        </h1>
        <p className="text-lg text-cyan-400 max-w-xl mx-auto">
          {t('home.intro')}
        </p>
      </header>

      {/* Hero Section */}
      <section 
        className="mb-16" 
        aria-label={t('hero.ariaLabel', 'Main hero section')}
      >
        <Hero
          title={t('hero.title')}
          subtitle={t('hero.subtitle')}
          ctaText={t('hero.cta')}
        />
      </section>

      {/* Features Section */}
      <section aria-labelledby="features-heading">
        <h2 id="features-heading" className="sr-only">
          {t('features.heading', 'Our Features')}
        </h2>
        <Features features={features} />
      </section>
    </main>
  );
};

export default React.memo(Home);