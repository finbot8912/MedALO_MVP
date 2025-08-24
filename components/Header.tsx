
import React from 'react';
import { useLocalization } from '../hooks/useLocalization';
import { GlobeAltIcon } from './icons/GlobeAltIcon';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLocalization();

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ko' : 'en';
    setLanguage(newLang);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-10 bg-transparent py-4 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800 tracking-wider">
          {t('logo')}
        </div>
        <button
          onClick={toggleLanguage}
          className="flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors duration-200"
        >
          <GlobeAltIcon className="h-5 w-5" />
          <span>{t('languageToggle')}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
