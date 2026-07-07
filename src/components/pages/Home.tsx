import { Hero } from './Hero';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Contact } from './Contact';

export const Home = () => {
  return (
    <>
      {/* IDs let the header nav links scroll to each section */}
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
    </>
  );
};
