import React from 'react';
import { useLocalization } from '../hooks/useLocalization';

const Footer: React.FC = () => {
  const { t } = useLocalization();

  return (
    <footer className="bg-gray-800 text-gray-400">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm">{t('footerRights')}</p>
          <div className="mt-8 max-w-3xl mx-auto text-xs text-gray-500">
            <p>{t('footerDisclaimer')}</p>
          </div>
          <div className="mt-8 flex justify-center space-x-6">
            <a href="/privacy.html" className="text-sm hover:text-white transition-colors">
              {t('privacyPolicy')}
            </a>
            <a href="/terms.html" className="text-sm hover:text-white transition-colors">
              {t('termsOfService')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
