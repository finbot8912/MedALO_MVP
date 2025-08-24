
import React from 'react';
import { useLocalization } from '../hooks/useLocalization';

const HowItWorks: React.FC = () => {
  const { t } = useLocalization();

  const steps = [
    { title: t('step1Title'), description: t('step1Desc'), icon: '📸' },
    { title: t('step2Title'), description: t('step2Desc'), icon: '🔬' },
    { title: t('step3Title'), description: t('step3Desc'), icon: '📈' },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {t('howItWorksTitle')}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t('howItWorksSubtitle')}
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="text-center p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center h-16 w-16 mx-auto bg-teal-100 rounded-full text-3xl">
                {step.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
