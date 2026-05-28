import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Team() {
  const { t } = useLanguage();

  const teamMembers = [
    { name: "Leo V.", role: t('team.role.gp'), image: "https://res.cloudinary.com/dk3laapco/image/upload/v1779939923/LEOV_surwsc.webp" },
    { name: "Miles Dyson", role: t('team.role.gp'), image: "https://placehold.co/400x400/111111/39FF14?text=Foto" },
    { name: "John Smith", role: t('team.role.principal'), image: "https://placehold.co/400x400/111111/39FF14?text=Foto" },
    { name: "Jane Doe", role: t('team.role.vp'), image: "https://placehold.co/400x400/111111/39FF14?text=Foto" },
  ];

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
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="aspect-square bg-white/5 rounded-xl mb-6 overflow-hidden relative">
                {/* Image Placeholder */}
                <img 
                  src={member.image} 
                  alt={`Foto de ${member.name}`} 
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-90 transition-opacity duration-500" 
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/20 to-neon-magenta/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-2xl font-bold group-hover:text-neon-purple transition-colors">{member.name}</h3>
              <p className="text-white/60">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
