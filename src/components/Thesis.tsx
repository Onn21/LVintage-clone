import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Thesis() {
  const { t } = useLanguage();

  return (
    <section id="thesis" className="py-32 px-8 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">{t('thesis.title')}</h2>
          <p className="text-xl md:text-3xl text-white/60 max-w-4xl leading-relaxed">
            {t('thesis.desc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-white/5 border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute bottom-8 left-8 z-20">
              <h3 className="text-2xl font-bold mb-2">{t('thesis.layer1.title')}</h3>
              <p className="text-white/60">{t('thesis.layer1.desc')}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-white/5 border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516280440502-39c8eb0008fa?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80" />
            <div className="absolute bottom-8 left-8 z-20">
              <h3 className="text-2xl font-bold mb-2">{t('thesis.layer2.title')}</h3>
              <p className="text-white/60">{t('thesis.layer2.desc')}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
