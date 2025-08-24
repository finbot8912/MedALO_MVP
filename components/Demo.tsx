
import React, { useState } from 'react';
import { useLocalization } from '../hooks/useLocalization';

const Demo: React.FC = () => {
  const { t } = useLocalization();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="demo" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {t('demoTitle')}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t('demoSubtitle')}
          </p>
        </div>
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative aspect-video bg-gray-900 rounded-2xl shadow-2xl overflow-hidden group">
            {/* Placeholder for video */}
            <img 
              src="https://picsum.photos/seed/medalo-demo/1280/720"
              alt="MedALO Demo Animation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="relative flex items-center justify-center h-20 w-20 bg-white bg-opacity-20 rounded-full backdrop-blur-sm border border-white border-opacity-30 text-white hover:bg-opacity-30 transition-all duration-300"
                aria-label={isPlaying ? t('pause') : t('play')}
              >
                {isPlaying ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 00-1 1v2a1 1 0 001 1h1a1 1 0 001-1V9a1 1 0 00-1-1H7zm5 0a1 1 0 00-1 1v2a1 1 0 001 1h1a1 1 0 001-1V9a1 1 0 00-1-1h-1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            </div>
            {isPlaying && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-900/50 text-white text-xs px-2 py-1 rounded">
                    {t('pause')}
                </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
