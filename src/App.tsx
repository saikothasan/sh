import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import TeamSection from './components/team/TeamSection';
import ContactSection from './components/contact/ContactSection';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  return (
    <div className="bg-[#1A1F3C]">
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
        <Services />
        <Portfolio />
        <TeamSection />
        <ContactSection />
      </Suspense>
    </div>
  );
}

export default App;