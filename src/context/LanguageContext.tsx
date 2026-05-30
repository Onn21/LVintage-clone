import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type Language = 'es' | 'en';

const translations = {
  es: {
    'nav.thesis': 'Estudio',
    'nav.partners': 'Artistas',
    'nav.team': 'Team',
    'nav.careers': 'Reservas',
    'nav.contact': 'Contacto',
    
    'hero.badge': 'Sonido Profesional',
    'hero.title1': 'Define',
    'hero.title2': 'Tu Sonido',
    'hero.desc': 'Instalaciones y equipos para llevar tu producción musical al más alto nivel.',
    
    'thesis.title': 'Estudio',
    'thesis.desc': 'Diseñado acústicamente a la perfección. Nuestro estudio combina la calidez del equipo analógico clásico con la precisión digital moderna.',
    'thesis.layer1.title': 'Sala de Control',
    'thesis.layer1.desc': 'Monitoreo de alta fidelidad y consolas premium.',
    'thesis.layer2.title': 'Live Room',
    'thesis.layer2.desc': 'Acústica inigualable para captura en vivo.',
    
    'partners.title': 'Artistas y Sellos',
    
    'team.title': 'Team',
    'team.role.gp': 'Productor Principal',
    'team.role.principal': 'Ingeniero de Mezcla',
    'team.role.vp': 'Ingeniero de Masterización',
    
    'careers.title': 'Reserva tu Sesión',
    'careers.desc': '¿Listo para grabar tu próximo proyecto? Ponte en contacto con nosotros para conocer tarifas y disponibilidad.',
    'careers.button': 'Agendar Sesión',
  },
  en: {
    'nav.thesis': 'The Studio',
    'nav.partners': 'Artists',
    'nav.team': 'Team',
    'nav.careers': 'Booking',
    'nav.contact': 'Contact Us',
    
    'hero.badge': 'Professional Sound',
    'hero.title1': 'Define',
    'hero.title2': "Your Sound",
    'hero.desc': 'Facilities and gear to elevate your music production to the highest level.',
    
    'thesis.title': 'Our Facilities',
    'thesis.desc': 'Acoustically designed to perfection. Our studio blends the warmth of classic analog gear with modern digital precision.',
    'thesis.layer1.title': 'Control Room',
    'thesis.layer1.desc': 'High-fidelity monitoring and premium consoles.',
    'thesis.layer2.title': 'Live Room',
    'thesis.layer2.desc': 'Unmatched acoustics for live tracking.',
    
    'partners.title': 'Artists & Labels',
    
    'team.title': 'Team',
    'team.role.gp': 'Head Producer',
    'team.role.principal': 'Mixing Engineer',
    'team.role.vp': 'Mastering Engineer',
    
    'careers.title': 'Book a Session',
    'careers.desc': "Ready to record your next project? Get in touch with us for rates and availability.",
    'careers.button': 'Schedule Session',
  }
};

type TranslationKey = keyof typeof translations['es'];

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es'); // Español por defecto

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const t = (key: TranslationKey) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
