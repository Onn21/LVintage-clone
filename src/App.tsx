import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Thesis from './components/Thesis';
import Partners from './components/Partners';
import Team from './components/Team';
import Careers from './components/Careers';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="relative bg-black min-h-screen text-white font-sans selection:bg-neon-pink selection:text-black">
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <Thesis />
          <Partners />
          <Team />
          <Careers />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
