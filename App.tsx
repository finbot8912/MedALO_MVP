
import React from 'react';
import { LocalizationProvider } from './hooks/useLocalization';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import AiAccuracy from './components/AiAccuracy';
import Demo from './components/Demo';
import Security from './components/Security';
import Faq from './components/Faq';
import Waitlist from './components/Waitlist';
import Footer from './components/Footer';


const App: React.FC = () => {
  return (
    <LocalizationProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <HowItWorks />
          <AiAccuracy />
          <Demo />
          <Security />
          <Faq />
          <Waitlist />
        </main>
        <Footer />
      </div>
    </LocalizationProvider>
  );
};

export default App;
