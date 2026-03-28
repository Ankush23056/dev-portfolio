import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import GithubSection from './components/GithubSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  return (
    <div className="min-h-screen bg-grid font-body text-ink selection:bg-yellow selection:text-ink">
      <ScrollProgress />
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 space-y-32">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
