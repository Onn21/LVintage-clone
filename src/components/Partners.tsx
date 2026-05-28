import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { PixelCanvas } from './ui/pixel-canvas';

const partners = [
  "Sony Music", "Universal", "Warner", "Def Jam",
  "Roc Nation", "Interscope", "Abbey Road", "OVO Sound"
];

export default function Partners() {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="partners" className="py-32 px-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">{t('partners.title')}</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative h-32 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-center overflow-hidden cursor-pointer group"
            >
              {/* Animated Pixel Canvas Background */}
              <PixelCanvas 
                colors={['#A200FF', '#FF00FF', '#FFFF00', '#00FFFF']} 
                gap={5} 
                speed={35} 
                isHovered={hoveredIndex === index}
              />

              <span className="relative z-10 text-xl font-bold text-white/80 md:text-white/40 group-hover:text-white transition-colors duration-500 drop-shadow-[0_0_10px_rgba(0,0,0,1)] md:drop-shadow-none md:group-hover:drop-shadow-[0_0_10px_rgba(0,0,0,1)]">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
