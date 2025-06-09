import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es' | 'fr' | 'de' | 'zh' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translation data (in a real app, this would come from translation files)
const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.solutions': 'Solutions',
    'nav.caseStudies': 'Case Studies',
    'nav.blog': 'Blog',
    'nav.careers': 'Careers',
    'nav.contact': 'Contact',
    'hero.title': 'Innovative IT Solutions for Global Success',
    'hero.subtitle': 'Transform your business with cutting-edge technology solutions, expert development teams, and strategic digital transformation services.',
    'hero.cta': 'Get Started',
    'hero.learnMore': 'Learn More',
    'footer.company': 'Company',
    'footer.services': 'Services',
    'footer.resources': 'Resources',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.services': 'Servicios',
    'nav.solutions': 'Soluciones',
    'nav.caseStudies': 'Casos de Estudio',
    'nav.blog': 'Blog',
    'nav.careers': 'Carreras',
    'nav.contact': 'Contacto',
    'hero.title': 'Soluciones IT Innovadoras para el Éxito Global',
    'hero.subtitle': 'Transforma tu negocio con soluciones tecnológicas de vanguardia, equipos de desarrollo expertos y servicios de transformación digital estratégica.',
    'hero.cta': 'Comenzar',
    'hero.learnMore': 'Saber Más',
    'footer.company': 'Empresa',
    'footer.services': 'Servicios',
    'footer.resources': 'Recursos',
    'footer.contact': 'Contacto',
    'footer.rights': 'Todos los derechos reservados.',
  },
  // Add more languages as needed
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && Object.keys(translations).includes(savedLanguage)) {
      return savedLanguage;
    }
    
    // Detect browser language
    const browserLanguage = navigator.language.split('-')[0] as Language;
    if (Object.keys(translations).includes(browserLanguage)) {
      return browserLanguage;
    }
    
    return 'en';
  });

  const t = (key: string): string => {
    const translation = translations[language]?.[key as keyof typeof translations[typeof language]];
    return translation || key;
  };

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const value = {
    language,
    setLanguage: handleSetLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};