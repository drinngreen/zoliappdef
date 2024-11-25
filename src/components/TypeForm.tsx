import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function TypeForm() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="form" className="py-24 bg-gradient-to-b from-white to-amber-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="w-full max-w-[640px] aspect-[640/854] rounded-xl shadow-lg overflow-hidden bg-white">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSc743ZQ61Weae6pD8ksoNE1Qu6JS-A-l3fZfhD3-KtgxuXL2Q/viewform?embedded=true" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              className="w-full h-full"
              title="Contact Form"
            >
              Loading…
            </iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}