import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import CookiePreferences from './CookiePreferences';
import PrivacyPolicy from './PrivacyPolicy';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    setPreferences({ necessary: true, analytics: true, marketing: true });
    localStorage.setItem('cookie-consent', 'all');
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    setPreferences({ necessary: true, analytics: false, marketing: false });
    localStorage.setItem('cookie-consent', 'necessary');
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowPreferences(false);
  };

  if (!showBanner && !showPreferences && !showPrivacyPolicy) return null;

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 p-6 border-t border-gray-200"
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="text-gray-700 mb-4">
                    🍪 Questo sito utilizza cookie tecnici e, previo tuo consenso, cookie di profilazione, 
                    per migliorare la tua esperienza di navigazione. Utilizzando il nostro sito, acconsenti all'uso dei cookie.
                  </p>
                  <div className="space-x-4">
                    <button
                      onClick={() => setShowPrivacyPolicy(true)}
                      className="text-amber-600 hover:underline"
                    >
                      Privacy Policy
                    </button>
                    <button
                      onClick={() => setShowPreferences(true)}
                      className="text-amber-600 hover:underline"
                    >
                      Cookie Policy
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setShowPreferences(true)}
                    className="px-4 py-2 border border-amber-600 text-amber-600 rounded-full hover:bg-amber-50"
                  >
                    Personalizza
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50"
                  >
                    Rifiuta Tutti
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="px-4 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700"
                  >
                    Accetta Tutti
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPreferences && (
          <CookiePreferences
            preferences={preferences}
            setPreferences={setPreferences}
            onSave={handleSavePreferences}
            onClose={() => setShowPreferences(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPrivacyPolicy && (
          <PrivacyPolicy onClose={() => setShowPrivacyPolicy(false)} />
        )}
      </AnimatePresence>
    </>
  );
}