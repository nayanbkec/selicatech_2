import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sun, Moon, Globe, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { 
      name: t('nav.services'), 
      path: '/services',
      dropdown: [
        { name: 'Software Development', path: '/services/software-development' },
        { name: 'Cloud Solutions', path: '/services/cloud-solutions' },
        { name: 'AI & Machine Learning', path: '/services/ai-ml' },
        { name: 'Mobile Development', path: '/services/mobile-development' },
        { name: 'DevOps & Infrastructure', path: '/services/devops' },
      ]
    },
    { 
      name: t('nav.solutions'), 
      path: '/solutions',
      dropdown: [
        { name: 'ERP Systems', path: '/solutions/erp' },
        { name: 'CRM Solutions', path: '/solutions/crm' },
        { name: 'E-commerce Platforms', path: '/solutions/ecommerce' },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare' },
        { name: 'Education Technology', path: '/solutions/education' },
      ]
    },
    { name: t('nav.caseStudies'), path: '/case-studies' },
    { name: t('nav.blog'), path: '/blog' },
    { name: t('nav.careers'), path: '/careers' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-dark-900/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 z-50">
            <Logo className="h-10 w-10" />
            <span
              className={`text-xl font-bold transition-colors ${
                isScrolled ? "text-gray-900 dark:text-white" : "text-white"
              }`}
            >
              SelicaTech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                {link.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        location.pathname.startsWith(link.path)
                          ? "text-primary-600 bg-primary-50 dark:bg-primary-900/20"
                          : isScrolled
                          ? "text-gray-700 dark:text-gray-300 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20"
                          : "text-white hover:text-primary-200"
                      }`}
                    >
                      {link.name}
                      <ChevronDown size={16} className="ml-1" />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-dark-800 rounded-xl shadow-xl border border-gray-100 dark:border-dark-700 py-2"
                        >
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 transition-colors"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "text-[#2252CE] dark:text-white bg-primary-50 dark:bg-primary-900"
                          : isScrolled
                          ? "text-gray-700 dark:text-gray-300 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20"
                          : "text-white hover:text-primary-200"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <button
              className={`p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "text-gray-600 dark:text-gray-400 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20"
                  : "text-white hover:text-primary-200"
              }`}
            >
              <Search size={20} />
            </button>

            {/* Language Switcher */}
            <div className="relative group">
              <button
                className={`flex items-center p-2 rounded-lg transition-colors ${
                  isScrolled
                    ? "text-gray-600 dark:text-gray-400 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20"
                    : "text-white hover:text-primary-200"
                }`}
              >
                <Globe size={20} />
              </button>

              <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-dark-800 rounded-xl shadow-xl border border-gray-100 dark:border-dark-700 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as any)}
                    className={`w-full flex items-center px-4 py-2 text-sm transition-colors ${
                      language === lang.code
                        ? "text-primary-600 bg-primary-50 dark:bg-primary-900/20"
                        : "text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20"
                    }`}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "text-gray-600 dark:text-gray-400 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20"
                  : "text-white hover:text-primary-200"
              }`}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* CTA Button */}
            <Link to="/contact" className="btn btn-primary">
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors z-50 ${
              isScrolled ? "text-gray-600 dark:text-gray-400" : "text-white"
            }`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-dark-700 overflow-hidden"
          >
            <nav className="container mx-auto container-padding py-4 space-y-2">
              {navLinks.map((link) => (
                <div key={link.path}>
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(link.name)}
                        className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                      >
                        {link.name}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            activeDropdown === link.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-4 mt-2 space-y-1 overflow-hidden"
                          >
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                className="block px-3 py-2 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 transition-colors"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `block px-3 py-2 rounded-lg transition-colors ${
                          isActive
                            ? "text-primary-600 bg-primary-50 dark:bg-primary-900/20"
                            : "text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  )}
                </div>
              ))}

              {/* Mobile Actions */}
              <div className="pt-4 border-t border-gray-200 dark:border-dark-700 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Theme
                  </span>
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                  >
                    {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
                </div>

                <Link
                  to="/contact"
                  className="btn btn-primary w-full justify-center"
                >
                  Get Quote
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;