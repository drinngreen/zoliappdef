import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Lock, Code, Smartphone, Gift, Zap } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: "Sviluppo Semplificato",
    description: "Un'interfaccia user-friendly che trasforma le tue idee in realtà, senza necessità di competenze tecniche avanzate"
  },
  {
    icon: Lock,
    title: "Sicurezza Garantita",
    description: "Protezione dei dati e della proprietà intellettuale con i più alti standard di sicurezza del settore"
  },
  {
    icon: Smartphone,
    title: "Presenza Universale",
    description: "La tua app disponibile ovunque, con un'esperienza fluida su iOS e Android per raggiungere il massimo del pubblico"
  },
  {
    icon: Zap,
    title: "Lancio Assistito",
    description: "Ti guidiamo passo dopo passo nel processo di pubblicazione sugli store, garantendo una presenza professionale"
  }
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="funzionalita" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4">Perché Scegliere ZoliApp?</h2>
          <p className="text-xl text-gray-600">Trasforma la tua idea in un'app di successo con un partner tecnologico affidabile</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-amber-100"
            >
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl shadow-lg">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="#prezzi"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-amber-700 hover:to-amber-800 transition-all shadow-lg hover:shadow-xl"
          >
            Scopri i Nostri Prezzi
            <Sparkles className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}