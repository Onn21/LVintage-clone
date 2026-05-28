import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { PixelCanvas } from './ui/pixel-canvas';

export default function Careers() {
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="careers" className="py-32 px-8 bg-[#050505]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="bg-white/[0.02] border border-neon-green/20 rounded-3xl p-12 relative overflow-hidden group cursor-pointer"
        >
          {/* Animated Pixel Canvas Background */}
          <PixelCanvas 
            colors={['#00FFFF', '#39FF14', '#FFFF00']} 
            gap={6} 
            speed={35} 
            isHovered={isHovered}
          />
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 relative z-10 transition-colors duration-500 group-hover:text-white group-hover:drop-shadow-[0_0_15px_rgba(0,0,0,1)]">
            {t('careers.title')}
          </h2>
          <p className="text-xl text-white/70 mb-10 relative z-10 transition-colors duration-500 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(0,0,0,1)]">
            {t('careers.desc')}
          </p>
          
          <a 
            href="https://wa.me/525512191031?text=Hola,%20me%20interesa%20agendar%20una%20sesión%20en%20el%20estudio."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block relative z-10 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neon-cyan hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            {t('careers.button')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
