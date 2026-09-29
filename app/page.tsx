import AboutUs from '@/components/AboutUs';
import Contact from '@/components/Contact';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Workflow from '@/components/Workflow';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Gallery />
      <Workflow />
      <AboutUs />
      <Contact />
    </main>
  );
}
