import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Info, Sparkles, Clock, Shield, Star } from 'lucide-react';

export default function Pricing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="prezzi" className="py-24 bg-gradient-to-b from-amber-50 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4">Investimento Trasparente</h2>
          <p className="text-xl text-gray-600">Un unico pacchetto completo per trasformare la tua visione in realtà</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8"
          >
            <div className="relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-600 text-white px-6 py-2 rounded-bl-lg font-medium">
                Risparmia il 50%
              </div>
              <div className="p-8 text-center border-b relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-50 to-transparent opacity-50"></div>
                <h3 className="text-2xl font-display font-bold mb-2 relative z-10">Pacchetto All-Inclusive</h3>
                <div className="flex justify-center items-baseline gap-3 mb-4 relative z-10">
                  <span className="text-6xl font-display font-bold text-amber-600">€399</span>
                  <span className="text-2xl text-gray-400 line-through">€799</span>
                </div>
                <p className="text-amber-800 font-medium mb-6 relative z-10">
                  <Clock className="inline-block w-5 h-5 mr-2 animate-pulse" />
                  Offerta valida per tempo limitato
                </p>
                <a 
                  href="#form"
                  className="relative z-10 w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-4 px-8 rounded-full text-lg font-medium hover:from-amber-700 hover:to-amber-800 transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Inizia Ora il Tuo Progetto
                  <Sparkles className="w-5 h-5" />
                </a>
              </div>
              <div className="p-8">
                <h4 className="font-display font-bold text-xl mb-6 flex items-center gap-2">
                  <Star className="w-6 h-6 text-amber-500" />
                  Tutto Incluso:
                </h4>
                <ul className="space-y-4">
                  {[
                    "Sviluppo completo iOS e Android",
                    "7 giorni di assistenza prioritaria",
                    "Supporto dedicato per la pubblicazione",
                    "Personalizzazione illimitata",
                    "Garanzia di soddisfazione 30 giorni"
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Additional Costs Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-br from-gray-50 to-amber-50/30 rounded-xl p-8 border border-amber-100"
          >
            <div className="flex items-start gap-3 mb-6">
              <Shield className="w-6 h-6 text-amber-600 flex-shrink-0" />
              <div>
                <h4 className="font-display font-bold text-xl mb-2">Costi di Pubblicazione Trasparenti</h4>
                <p className="text-gray-600">Costi una tantum richiesti direttamente da Apple e Google</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-amber-100">
                  <h5 className="font-display font-bold mb-2">App Store (iOS)</h5>
                  <p className="text-amber-600 font-medium">€99/anno</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-amber-100">
                  <h5 className="font-display font-bold mb-2">Google Play</h5>
                  <p className="text-amber-600 font-medium">€25 una tantum</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-amber-100">
                  <h5 className="font-display font-bold mb-2">Setup Iniziale</h5>
                  <p className="text-amber-600 font-medium">€59 una tantum</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}