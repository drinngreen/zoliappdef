import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface CookiePreferencesProps {
  preferences: {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
  };
  setPreferences: React.Dispatch<React.SetStateAction<{
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
  }>>;
  onSave: () => void;
  onClose: () => void;
}

export default function CookiePreferences({
  preferences,
  setPreferences,
  onSave,
  onClose
}: CookiePreferencesProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
      >
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-display font-bold">Preferenze Cookie</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Cookie tecnici necessari</h3>
                <p className="text-sm text-gray-600">Sempre attivi per il funzionamento del sito</p>
              </div>
              <input
                type="checkbox"
                checked={preferences.necessary}
                disabled
                className="h-5 w-5 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Cookie analitici</h3>
                <p className="text-sm text-gray-600">Per analizzare l'utilizzo del sito</p>
              </div>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) => setPreferences(prev => ({ ...prev, analytics: e.target.checked }))}
                className="h-5 w-5 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Cookie di marketing</h3>
                <p className="text-sm text-gray-600">Per personalizzare la tua esperienza</p>
              </div>
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={(e) => setPreferences(prev => ({ ...prev, marketing: e.target.checked }))}
                className="h-5 w-5 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
              />
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200">
          <button
            onClick={onSave}
            className="w-full bg-amber-600 text-white py-2 px-4 rounded-full hover:bg-amber-700 transition-colors"
          >
            Salva Preferenze
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}