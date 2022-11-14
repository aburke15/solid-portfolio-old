import { createEffect } from 'solid-js';
import '../../styles/portfolio.css';
import Navbar from '~/components/Navbar';
import Title from '~/components/Title';
import Bio from '~/components/Bio';
import Skills from '~/components/Skills';
import Resume from '~/components/Resume';
import Projects from '~/components/Projects';
import Contact from '~/components/Contact';

export default function Home() {
  createEffect(() => {
    import('/node_modules/bootstrap/dist/css/bootstrap.min.css');
  });

  return (
    <main class="portfolio-font">
      <Navbar />
      <Title />
      <Bio />
      <Skills />
      <Resume />
      <Projects />
      <Contact />
    </main>
  );
}
