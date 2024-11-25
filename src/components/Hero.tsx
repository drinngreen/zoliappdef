import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

const Logo = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mr-2"
  >
    {/* Phone base */}
    <rect x="100" y="50" width="200" height="300" rx="20" fill="#F97316" />
    
    {/* Screen */}
    <rect x="120" y="80" width="160" height="220" rx="10" fill="white" />
    
    {/* App grid */}
    <rect x="140" y="100" width="50" height="50" rx="10" fill="#F97316" opacity="0.3" />
    <rect x="200" y="100" width="50" height="50" rx="10" fill="#F97316" opacity="0.3" />
    <rect x="140" y="160" width="50" height="50" rx="10" fill="#F97316" opacity="0.3" />
    <rect x="200" y="160" width="110" height="50" rx="10" fill="#F97316" opacity="0.3" />
    
    {/* Hard hat */}
    <path
      d="M180 40 L320 40 C340 40 350 60 350 80 L150 80 C150 60 160 40 180 40"
      fill="#F97316"
    />
    <path
      d="M170 35 L310 35 C330 35 340 55 340 75 L140 75 C140 55 150 35 170 35"
      fill="black"
    />
    
    {/* Text on hat */}
    <text
      x="200"
      y="65"
      fontSize="24"
      fill="white"
      textAnchor="middle"
      fontFamily="Arial"
      fontWeight="bold"
      transform="rotate(-10, 200, 65)"
    >
      Zoli App
    </text>
  </svg>
);

const FloatingPhone = () => (
  <motion.div
    animate={{ 
      y: [-10, 10, -10],
      rotate: [-2, 2, -2]
    }}
    transition={{ 
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="absolute -left-32 top-0 hidden md:block"
    style={{ zIndex: 1 }}
  >
    <svg
      width="100"
      height="200"
      viewBox="0 0 120 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-xl"
    >
      {/* Phone frame */}
      <rect
        x="2"
        y="2"
        width="116"
        height="236"
        rx="20"
        fill="white"
        stroke="#F59E0B"
        strokeWidth="4"
      />
      
      {/* Screen */}
      <rect
        x="8"
        y="8"
        width="104"
        height="224"
        rx="16"
        fill="#FAFAFA"
      />
      
      {/* Screen content lines */}
      <rect x="16" y="32" width="88" height="8" rx="4" fill="#F59E0B" fillOpacity="0.2" />
      <rect x="16" y="48" width="72" height="8" rx="4" fill="#F59E0B" fillOpacity="0.2" />
      <rect x="16" y="80" width="88" height="48" rx="8" fill="#F59E0B" fillOpacity="0.1" />
      <rect x="16" y="140" width="88" height="48" rx="8" fill="#F59E0B" fillOpacity="0.1" />
      
      {/* Home button */}
      <circle 
        cx="60" 
        cy="216" 
        r="12" 
        stroke="#F59E0B"
        strokeWidth="2"
        fill="white"
      />
      
      {/* Speaker */}
      <rect 
        x="48" 
        y="12" 
        width="24" 
        height="4" 
        rx="2" 
        fill="#F59E0B"
        fillOpacity="0.3" 
      />
    </svg>
  </motion.div>
);

export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 via-white to-amber-50/30 overflow-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-amber-100"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              className="flex items-center text-2xl font-display font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Logo />
              ZoliApp
            </motion.div>
            <div className="hidden md:flex gap-8 items-center">
              <NavLink href="#funzionalita">Funzionalità</NavLink>
              <NavLink href="#prezzi">Prezzi</NavLink>
              <NavLink href="#form">Contatti</NavLink>
              <motion.a 
                href="#form"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-6 py-2.5 rounded-full font-medium hover:bg-amber-900 transition-colors"
              >
                Prova Gratuita
              </motion.a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="max-w-6xl mx-auto px-4 pt-20">
        <div className="text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span className="text-amber-800 font-medium">Offerta limitata: App completa a soli €399</span>
          </motion.div>

          <div className="relative">
            <FloatingPhone />
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-display font-bold mb-8 bg-gradient-to-r from-gray-900 via-amber-950 to-amber-800 bg-clip-text text-transparent max-w-4xl mx-auto"
            >
              Crea la Tua App
              <br />
              in Soli 7 Giorni
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            Sviluppo di app veloce, conveniente e intuitivo a portata di mano
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <motion.a
              href="#form"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-amber-700 hover:to-amber-800 transition-all shadow-lg hover:shadow-xl"
            >
              Inizia a creare l'app dei tuoi sogni
            </motion.a>
            
            <motion.a
              href="#funzionalita"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-amber-600 hover:text-amber-700 transition-colors font-medium flex items-center gap-2"
            >
              Perché Scegliere ZoliApp?
              <ChevronDown className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </header>
  );
}

// Navigation Link Component
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      className="text-gray-600 hover:text-amber-600 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}