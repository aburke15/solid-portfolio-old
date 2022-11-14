import { createEffect } from 'solid-js';
import '../../styles/portfolio.css';
import Navbar from '~/components/Navbar';
import Title from '~/components/Title';
import Bio from '~/components/Bio';
import Skills from '~/components/Skills';
import Resume from '~/components/Resume';

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
    </main>
  );
}
