import React from 'react';
import Header from './Header';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import Features from './Features';
import Sectors from './Sectors';
import FAQ from './FAQ';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Sectors />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;