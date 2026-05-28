import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Team() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const teamMembers = [
    { name: "Leo V.", role: t('team.role.gp'), image: "https://res.cloudinary.com/dk3laapco/image/upload/v1779939923/LEOV_surwsc.webp" },
    { name: "Miles Dyson", role: t('team.role.gp'), image: "https://placehold.co/400x400/111111/39FF14?text=Foto" },
    { name: "John Smith", role: t('team.role.principal'), image: "https://placehold.co/400x400/111111/39FF14?text=Foto" },
    { name: "Jane Doe", role: t('team.role.vp'), image: "https://placehold.co/400x400/111111/39FF14?text=Foto" },
  ];

  const handleInteraction = (index: number) => {
    setActiveIndex(index);
    setTimeout(() => {
      setActiveIndex(current => current === index ? null : current);
    }, 2000);
  };

  return (
    <section id="team" className="py-32 px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 border-b border-white/10 pb-8"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold">{t('team.title')}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                tabIndex={0}
                onClick={() => handleInteraction(index)}
              >
                <div className={`relative aspect-[3/4] mb-6 overflow-hidden rounded-2xl bg-white/5 border transition-colors duration-500 ${isActive ? 'border-neon-purple/50' : 'border-white/10 group-hover:border-neon-purple/50'}`}>
                  <img 
                    src={member.image} 
                    alt={`Foto de ${member.name}`} 
                    className={`w-full h-full object-cover transition-opacity duration-500 ${isActive ? 'opacity-90' : 'opacity-50 group-hover:opacity-90'}`} 
                  />
                  {/* Hover overlay */}
                  <div className={`absolute inset-0 bg-white/10 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                </div>
                <h3 className={`text-2xl font-bold transition-colors ${isActive ? 'text-neon-purple' : 'text-white group-hover:text-neon-purple'}`}>{member.name}</h3>
                <p className="text-white/60">{member.role}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
