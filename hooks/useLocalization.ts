
import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { Language } from '../types';
import { translations } from '../constants';

interface LocalizationContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

export const LocalizationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const storedLang = localStorage.getItem('medalo-lang') as Language;
    if (storedLang && ['en', 'ko'].includes(storedLang)) {
      setLanguageState(storedLang);
      document.documentElement.lang = storedLang;
    } else {
      const browserLang = navigator.language.split(/[-_]/)[0];
      const newLang = browserLang === 'ko' ? 'ko' : 'en';
      setLanguageState(newLang);
      document.documentElement.lang = newLang;
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('medalo-lang', lang);
    document.documentElement.lang = lang;
  };

  const t = useCallback((key: string): string => {
    return translations[key]?.[language] || key;
  }, [language]);

  return React.createElement(
    LocalizationContext.Provider,
    { value: { language, setLanguage, t } },
    children
  );
};

export const useLocalization = (): LocalizationContextType => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};
