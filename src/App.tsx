
import { Header } from './components/Header';
import { Hero } from './components/pages/Hero';
import { Projects } from './components/pages/Projects';
import { Skills } from './components/pages/Skills';
import { Contact } from './components/pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Header />
      <main>
        {/* إضافة معرفات ID لكل قسم ليتمكن الهيدر من الانتقال إليها */}
        <section id="hero">
          <Hero />
        </section>
                <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        

        
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;