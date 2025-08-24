
import React, { useState, useEffect } from 'react';
import { useLocalization } from '../hooks/useLocalization';

const Hero: React.FC = () => {
  const { t } = useLocalization();
  const [variant, setVariant] = useState('A');

  useEffect(() => {
    let abVariant = localStorage.getItem('medalo-ab-variant');
    if (!abVariant) {
      abVariant = Math.random() < 0.5 ? 'A' : 'B';
      localStorage.setItem('medalo-ab-variant', abVariant);
    }
    setVariant(abVariant);
  }, []);

  const headline = variant === 'A' ? t('heroHeadlineA') : t('heroHeadlineB');
  const subline = variant === 'A' ? t('heroSublineA') : t('heroSublineB');

  return (
    <section id="home" className="relative bg-gray-50 pt-32 pb-20 lg:pt-48 lg:pb-28">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-teal-50/50 rounded-full blur-3xl opacity-40"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-1">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            {headline}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            {subline}
          </p>
          <div className="mt-10">
            <a
              href="#waitlist"
              className="inline-block bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-teal-700 transform hover:-translate-y-1 transition-all duration-300"
            >
              {t('heroCta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
