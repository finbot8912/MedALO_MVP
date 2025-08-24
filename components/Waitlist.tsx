import React, { useState } from 'react';
import { useLocalization } from '../hooks/useLocalization';

const Waitlist: React.FC = () => {
  const { t, language } = useLocalization();
  const [email, setEmail] = useState('');
  const [platform, setPlatform] = useState({ ios: false, android: false });
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [waitlistLoading, setWaitlistLoading] = useState(false);
  const [showBetaForm, setShowBetaForm] = useState(false);

  // Beta Form State
  const [betaEmail, setBetaEmail] = useState('');
  const [deviceModel, setDeviceModel] = useState('');
  const [osVersion, setOsVersion] = useState('');
  const [frequency, setFrequency] = useState('weekly');
  const [area, setArea] = useState({ crown: false, hairline: false, other: false });
  const [cardConsent, setCardConsent] = useState(false);
  const [betaConsent, setBetaConsent] = useState(false);
  const [betaError, setBetaError] = useState('');
  const [betaSuccess, setBetaSuccess] = useState('');
  const [betaLoading, setBetaLoading] = useState(false);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!validateEmail(email)) {
      setError(t('invalidEmail'));
      return;
    }
    if (!consent) {
      setError(t('consentRequired'));
      return;
    }
    setWaitlistLoading(true);
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          platform_interest: Object.keys(platform).filter(p => platform[p as keyof typeof platform]),
          marketing_consent: consent,
          language: language,
        }),
      });

      if (response.ok) {
        setSuccess(t('waitlistSuccess'));
        setEmail('');
        setPlatform({ ios: false, android: false });
        setConsent(false);
      } else if (response.status === 409) {
        setError('This email address has already been registered.');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    } catch (err) {
      setError('Failed to connect to the server. Please check your connection.');
    } finally {
      setWaitlistLoading(false);
    }
  };

  const handleBetaSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBetaError('');
    setBetaSuccess('');
    if (!validateEmail(betaEmail)) {
        setBetaError(t('invalidEmail'));
        return;
    }
    if (!deviceModel) {
        setBetaError(t('deviceModelRequired'));
        return;
    }
    if (!betaConsent) {
        setBetaError(t('consentRequired'));
        return;
    }
    setBetaLoading(true);
    try {
      const response = await fetch('/api/beta', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: betaEmail,
          device_model: deviceModel,
          os_version: osVersion,
          frequency,
          areas_of_interest: Object.keys(area).filter(a => area[a as keyof typeof area]),
          calibration_card_consent: cardConsent,
          marketing_consent: betaConsent,
          language: language,
        }),
      });

      if (response.ok) {
        setBetaSuccess(t('betaSuccess'));
        // Optionally reset form
      } else {
        setBetaError('An error occurred with your application. Please try again.');
      }
    } catch (err) {
      setBetaError('Failed to connect to the server. Please check your connection.');
    } finally {
      setBetaLoading(false);
    }
  };

  return (
    <section id="waitlist" className="py-20 lg:py-28 bg-teal-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{t('waitlistTitle')}</h2>
          <p className="mt-4 text-lg text-teal-100">{t('waitlistSubtitle')}</p>
          
          <form onSubmit={handleWaitlistSubmit} className="mt-10 space-y-6 bg-white p-8 rounded-lg shadow-xl text-left text-gray-800">
            <div>
              <label htmlFor="email-waitlist" className="sr-only">{t('emailPlaceholder')}</label>
              <input
                id="email-waitlist"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('emailPlaceholder')}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                required
              />
            </div>
            
            <fieldset>
              <legend className="text-sm font-medium text-gray-700">{t('platformInterest')}</legend>
              <div className="mt-2 flex items-center space-x-6">
                <div className="flex items-center">
                  <input id="ios" name="platform" type="checkbox" checked={platform.ios} onChange={(e) => setPlatform({...platform, ios: e.target.checked})} className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"/>
                  <label htmlFor="ios" className="ml-2 block text-sm text-gray-900">iOS</label>
                </div>
                <div className="flex items-center">
                  <input id="android" name="platform" type="checkbox" checked={platform.android} onChange={(e) => setPlatform({...platform, android: e.target.checked})} className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"/>
                  <label htmlFor="android" className="ml-2 block text-sm text-gray-900">Android</label>
                </div>
              </div>
            </fieldset>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="consent" name="consent" type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500" required />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="consent" className="font-medium text-gray-700">{t('consent')}</label>
              </div>
            </div>
            
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-600 text-sm">{success}</p>}

            <button type="submit" disabled={waitlistLoading} className="w-full bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-300 disabled:bg-teal-400 disabled:cursor-not-allowed">
              {waitlistLoading ? 'Submitting...' : t('joinWaitlistCta')}
            </button>
          </form>

          <div className="mt-12 pt-10 border-t border-teal-600">
            <h3 className="text-xl font-bold">{t('applyForBeta')}</h3>
            <p className="mt-2 text-teal-100">{t('fillBetaForm')}</p>
            <button onClick={() => setShowBetaForm(!showBetaForm)} className="mt-6 inline-block bg-white text-teal-700 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors">
              {showBetaForm ? t('closeBetaForm') : t('openBetaForm')}
            </button>
          </div>
        </div>

        {showBetaForm && (
            <div className="max-w-2xl mx-auto mt-8 bg-white p-8 rounded-lg shadow-xl text-left text-gray-800 transition-all duration-500 ease-in-out">
                <h3 className="text-2xl font-bold text-center mb-6">{t('betaFormTitle')}</h3>
                <form onSubmit={handleBetaSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="beta-email" className="block text-sm font-medium text-gray-700">{t('emailPlaceholder')}</label>
                        <input id="beta-email" type="email" value={betaEmail} onChange={e => setBetaEmail(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"/>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                          <label htmlFor="device-model" className="block text-sm font-medium text-gray-700">{t('deviceModel')}</label>
                          <input id="device-model" type="text" value={deviceModel} onChange={e => setDeviceModel(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"/>
                      </div>
                      <div>
                          <label htmlFor="os-version" className="block text-sm font-medium text-gray-700">{t('osVersion')}</label>
                          <input id="os-version" type="text" value={osVersion} onChange={e => setOsVersion(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"/>
                      </div>
                    </div>
                    <div>
                        <label htmlFor="frequency" className="block text-sm font-medium text-gray-700">{t('photoFrequency')}</label>
                        <select id="frequency" value={frequency} onChange={e => setFrequency(e.target.value)} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md">
                            <option value="weekly">{t('weekly')}</option>
                            <option value="biweekly">{t('biweekly')}</option>
                            <option value="monthly">{t('monthly')}</option>
                        </select>
                    </div>
                     <fieldset>
                        <legend className="text-sm font-medium text-gray-700">{t('hairLossArea')}</legend>
                        <div className="mt-2 space-y-2">
                           <div className="flex items-center"><input id="crown" type="checkbox" checked={area.crown} onChange={e => setArea({...area, crown: e.target.checked})} className="h-4 w-4 text-teal-600 rounded border-gray-300 focus:ring-teal-500"/><label htmlFor="crown" className="ml-2 text-sm">{t('crown')}</label></div>
                           <div className="flex items-center"><input id="hairline" type="checkbox" checked={area.hairline} onChange={e => setArea({...area, hairline: e.target.checked})} className="h-4 w-4 text-teal-600 rounded border-gray-300 focus:ring-teal-500"/><label htmlFor="hairline" className="ml-2 text-sm">{t('hairline')}</label></div>
                           <div className="flex items-center"><input id="other-area" type="checkbox" checked={area.other} onChange={e => setArea({...area, other: e.target.checked})} className="h-4 w-4 text-teal-600 rounded border-gray-300 focus:ring-teal-500"/><label htmlFor="other-area" className="ml-2 text-sm">{t('other')}</label></div>
                        </div>
                    </fieldset>
                    <div className="flex items-start"><div className="flex items-center h-5"><input id="card-consent" type="checkbox" checked={cardConsent} onChange={e => setCardConsent(e.target.checked)} className="h-4 w-4 text-teal-600 rounded border-gray-300 focus:ring-teal-500"/></div><div className="ml-3 text-sm"><label htmlFor="card-consent" className="font-medium">{t('calibrationCardConsent')}</label></div></div>
                    <div className="flex items-start"><div className="flex items-center h-5"><input id="beta-consent" type="checkbox" checked={betaConsent} onChange={e => setBetaConsent(e.target.checked)} required className="h-4 w-4 text-teal-600 rounded border-gray-300 focus:ring-teal-500"/></div><div className="ml-3 text-sm"><label htmlFor="beta-consent" className="font-medium">{t('consent')}</label></div></div>
                    
                    {betaError && <p className="text-red-500 text-sm">{betaError}</p>}
                    {betaSuccess && <p className="text-green-600 text-sm">{betaSuccess}</p>}
                    
                    <button type="submit" disabled={betaLoading} className="w-full bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-teal-700 transition-colors disabled:bg-teal-400 disabled:cursor-not-allowed">
                      {betaLoading ? 'Submitting...' : t('submitApplication')}
                    </button>
                </form>
            </div>
        )}
      </div>
    </section>
  );
};

export default Waitlist;
