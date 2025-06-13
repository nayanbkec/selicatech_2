import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Code, Cloud, Brain, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const floatingElements = [
    { icon: Code, delay: 0, position: 'top-1/4 left-1/4' },
    { icon: Cloud, delay: 0.2, position: 'top-1/3 right-1/4' },
    { icon: Brain, delay: 0.4, position: 'bottom-1/3 left-1/3' },
    { icon: Smartphone, delay: 0.6, position: 'bottom-1/4 right-1/3' },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-dark-900 via-primary-900 to-dark-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {floatingElements.map((element, index) => {
          const Icon = element.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.1, scale: 1 }}
              transition={{ delay: element.delay, duration: 1 }}
              className={`absolute ${element.position} text-white`}
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Icon size={64} strokeWidth={1} />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

      {/* Content */}
      <div className="container mx-auto container-padding relative z-10 pt-16 lg:pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              {t("hero.title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                to="/contact"
                className="btn btn-primary group text-lg px-8 py-4"
              >
                {t("hero.cta")}
                <ArrowRight
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <button className="btn btn-outline text-lg px-8 py-4 group border-white text-white hover:bg-white hover:text-dark-900">
                <Play
                  size={20}
                  className="mr-2 group-hover:scale-110 transition-transform"
                />
                Watch Demo
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-3 gap-8"
            >
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-secondary-400 mb-2">
                  500+
                </div>
                <div className="text-sm text-gray-300">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-secondary-400 mb-2">
                  50+
                </div>
                <div className="text-sm text-gray-300">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-secondary-400 mb-2">
                  99%
                </div>
                <div className="text-sm text-gray-300">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image/Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Visual Element */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-96 h-96 mx-auto relative"
              >
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-primary-400/30" />

                {/* Middle Ring */}
                <motion.div
                  animate={{
                    rotate: [360, 0],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-8 rounded-full border-2 border-secondary-400/40"
                />

                {/* Inner Circle */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-16 rounded-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 backdrop-blur-sm flex items-center justify-center"
                >
                  <Code size={80} className="text-white" strokeWidth={1} />
                </motion.div>

                {/* Floating Dots */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2,
                    }}
                    className="absolute w-4 h-4 bg-accent-400 rounded-full"
                    style={{
                      top: "50%",
                      left: "50%",
                      transformOrigin: `${120 + i * 20}px 0px`,
                      transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                    }}
                  />
                ))}
              </motion.div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-radial from-primary-500/20 via-transparent to-transparent rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;