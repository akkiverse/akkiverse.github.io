import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ScrollProgressBar } from '@/components/ui/ScrollProgressBar';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

/**
 * Root application component.
 * Uses HashRouter for GitHub Pages static hosting compatibility.
 */
const HomePage: React.FC = () => (
  <main>
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Projects />
    <Contact />
  </main>
);

const App: React.FC = () => (
  <HashRouter>
    {/* Animated aurora background — fixed, behind all content */}
    <div className="aurora-bg" aria-hidden="true" />
    <div className="aurora-mid" aria-hidden="true" />

    <ScrollProgressBar />
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
    <Footer />
  </HashRouter>
);

export default App;
