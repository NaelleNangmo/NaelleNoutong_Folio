import { I18nProvider } from '@/lib/i18n';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import DataLab from '@/components/sections/DataLab';
import Journey from '@/components/sections/Journey';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <I18nProvider>
      <div className="relative min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <DataLab />
          <Journey />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
