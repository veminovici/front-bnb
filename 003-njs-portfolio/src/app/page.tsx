import About from '@/components/section-about';
import SectionDivider from '@/components/section-divider';
import Intro from '@/components/section-intro';
import Projects from '@/components/section-projects';

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
    </main>
  );
}
