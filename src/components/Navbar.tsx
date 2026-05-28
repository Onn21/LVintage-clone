import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 py-6 backdrop-blur-md bg-dark-bg/60 border-b border-white/5"
    >
      <div className="text-2xl font-display font-bold tracking-tighter">
        Leo Vintage Studio
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium text-white/70">
        <a href="#thesis" className="hover:text-neon-green transition-colors">{t('nav.thesis')}</a>
        <a href="#partners" className="hover:text-neon-green transition-colors">{t('nav.partners')}</a>
        <a href="#team" className="hover:text-neon-green transition-colors">{t('nav.team')}</a>
        <a href="#careers" className="hover:text-neon-green transition-colors">{t('nav.careers')}</a>
      </div>
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleLanguage}
          className="text-sm font-medium text-white/60 hover:text-white transition-colors uppercase"
        >
          {language === 'es' ? 'EN' : 'ES'}
        </button>
        <button className="px-5 py-2 border border-white/20 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-colors">
          {t('nav.contact')}
        </button>
      </div>
    </motion.nav>
  );
}
