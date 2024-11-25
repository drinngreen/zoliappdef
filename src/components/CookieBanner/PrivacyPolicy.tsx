import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface PrivacyPolicyProps {
  onClose: () => void;
}

export default function PrivacyPolicy({ onClose }: PrivacyPolicyProps) {
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
        className="bg-white rounded-xl shadow-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto"
      >
        <div className="p-6 border-b border-gray-200 sticky top-0 bg-white">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-display font-bold">Informativa sulla Privacy</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <section>
            <h3 className="text-xl font-bold mb-4">1. Titolare del Trattamento</h3>
            <p>
              Drinn Green SCS<br />
              Corso Unione Sovietica 612/15/B<br />
              10135 Torino (TO)<br />
              P.IVA: 12318010019<br />
              Email: privacy@drinngreen.it
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">2. Tipologie di Dati raccolti</h3>
            <h4 className="font-bold mb-2">2.1 Dati di navigazione</h4>
            <p className="mb-4">
              I sistemi informatici e le procedure software preposte al funzionamento di questo sito web acquisiscono, 
              nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione è implicita nell'uso dei 
              protocolli di comunicazione di Internet.
            </p>
            <h4 className="font-bold mb-2">2.2 Dati forniti volontariamente</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>Dati di contatto (nome, email, telefono)</li>
              <li>Dati aziendali</li>
              <li>Informazioni relative ai servizi richiesti</li>
            </ul>
          </section>

          {/* ... Altri contenuti della privacy policy ... */}
          
          <section>
            <h3 className="text-xl font-bold mb-4">12. Contatti</h3>
            <p>
              Per esercitare i tuoi diritti o per qualsiasi informazione puoi contattare:<br />
              Drinn Green SCS<br />
              Email: privacy@drinngreen.it<br />
              Indirizzo: Corso Unione Sovietica 612/15/B, 10135 Torino (TO)
            </p>
          </section>
        </div>

        <div className="p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="w-full bg-amber-600 text-white py-2 px-4 rounded-full hover:bg-amber-700 transition-colors"
          >
            Ho capito
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}