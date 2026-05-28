import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 md:px-8 py-4 md:py-6 backdrop-blur-md bg-dark-bg/60 border-b border-white/5"
    >
      <div className="text-lg md:text-2xl font-display font-bold tracking-tighter truncate max-w-[150px] sm:max-w-none">
        Leo Vintage Studio
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium text-white/70">
        <a href="#thesis" className="hover:text-neon-green transition-colors">{t('nav.thesis')}</a>
        <a href="#partners" className="hover:text-neon-green transition-colors">{t('nav.partners')}</a>
        <a href="#team" className="hover:text-neon-green transition-colors">{t('nav.team')}</a>
        <a href="#careers" className="hover:text-neon-green transition-colors">{t('nav.careers')}</a>
      </div>
      <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
        <button 
          onClick={toggleLanguage}
          className="text-xs md:text-sm font-medium text-white/60 hover:text-white transition-colors uppercase"
        >
          {language === 'es' ? 'EN' : 'ES'}
        </button>
        <a 
          href="https://wa.me/525512191031?text=Hola,%20me%20interesa%20agendar%20una%20sesión%20en%20el%20estudio."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-3 py-1.5 md:px-5 md:py-2 border border-white/20 rounded-full text-xs md:text-sm font-medium hover:bg-white hover:text-black transition-colors whitespace-nowrap"
        >
          {t('nav.contact')}
        </a>
      </div>
    </motion.nav>
  );
}
