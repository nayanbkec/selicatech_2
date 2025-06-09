import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Award, Globe, Clock } from 'lucide-react';

const Stats: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Happy Clients',
      description: 'Businesses trust us worldwide',
    },
    {
      icon: Award,
      number: '1000+',
      label: 'Projects Completed',
      description: 'Successful deliveries',
    },
    {
      icon: Globe,
      number: '50+',
      label: 'Countries Served',
      description: 'Global presence',
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Support Available',
      description: 'Round-the-clock assistance',
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our track record speaks for itself. We've helped hundreds of companies 
            achieve their digital transformation goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={40} className="text-white" />
                </div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  className="text-4xl md:text-5xl font-bold mb-2"
                >
                  {stat.number}
                </motion.div>
                
                <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                <p className="text-blue-100">{stat.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;