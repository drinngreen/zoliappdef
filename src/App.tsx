import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import TypeForm from './components/TypeForm';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner/CookieBanner';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Pricing />
      <TypeForm />
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;