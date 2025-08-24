
import React from 'react';
import { useLocalization } from '../hooks/useLocalization';
import { CheckIcon } from './icons/CheckIcon';

const AiAccuracy: React.FC = () => {
  const { t } = useLocalization();

  const features = [
    { title: t('accuracyMetricTitle'), description: t('accuracyMetricDesc') },
    { title: t('calibrationCardTitle'), description: t('calibrationCardDesc') },
    { title: t('hybridProcessingTitle'), description: t('hybridProcessingDesc') },
  ];

  return (
    <section id="accuracy" className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              {t('aiAccuracyTitle')}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('aiAccuracySubtitle')}
            </p>
            <div className="mt-10 space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-teal-600 text-white">
                      <CheckIcon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                    <p className="mt-1 text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img 
              src="https://picsum.photos/id/12/500/500" 
              alt="AI Technology Visualization"
              className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiAccuracy;
