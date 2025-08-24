
import React, { useState } from 'react';
import { useLocalization } from '../hooks/useLocalization';
import { FAQ_DATA } from '../constants';
import { ChevronDownIcon } from './icons/ChevronDownIcon';
import { FaqItem } from '../types';

const FaqItemComponent: React.FC<{ item: FaqItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLocalization();

  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-gray-900">{item.q[language]}</span>
        <ChevronDownIcon
          className={`h-6 w-6 text-gray-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="mt-4 pr-12 text-gray-600">
          <p>{item.a[language]}</p>
        </div>
      )}
    </div>
  );
};

const Faq: React.FC = () => {
  const { t } = useLocalization();
  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight text-center">
            {t('faqTitle')}
          </h2>
          <div className="mt-12">
            {FAQ_DATA.map((item, index) => (
              <FaqItemComponent key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
