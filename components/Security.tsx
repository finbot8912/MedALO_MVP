
import React from 'react';
import { useLocalization } from '../hooks/useLocalization';
import { LockIcon } from './icons/LockIcon';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';
import { UserGroupIcon } from './icons/UserGroupIcon';


const Security: React.FC = () => {
  const { t } = useLocalization();

  const securityPoints = [
    { title: t('encryptionTitle'), description: t('encryptionDesc'), icon: <LockIcon className="h-8 w-8 text-teal-600" /> },
    { title: t('anonymizationTitle'), description: t('anonymizationDesc'), icon: <UserGroupIcon className="h-8 w-8 text-teal-600" /> },
    { title: t('controlTitle'), description: t('controlDesc'), icon: <ShieldCheckIcon className="h-8 w-8 text-teal-600" /> },
  ];

  return (
    <section id="security" className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {t('securityTitle')}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t('securitySubtitle')}
          </p>
        </div>
        <div className="mt-16 max-w-4xl mx-auto grid gap-8 md:grid-cols-3">
          {securityPoints.map((point, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="flex justify-center items-center mb-4">{point.icon}</div>
              <h3 className="text-lg font-bold text-gray-900">{point.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Security;
