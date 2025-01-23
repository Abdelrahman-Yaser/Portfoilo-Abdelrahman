import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/pages/Hero';
import { Projects } from './components/pages/Projects';
import { Skills } from './components/pages/Skills';
import { Contact } from './components/pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;