import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Partners: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const partners = [
    {
      name: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/200px-Microsoft_logo.svg.png',
    },
    {
      name: 'Amazon Web Services',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/200px-Amazon_Web_Services_Logo.svg.png',
    },
    {
      name: 'Google Cloud',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/200px-Google_Cloud_logo.svg.png',
    },
    {
      name: 'Docker',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/200px-Docker_%28container_engine%29_logo.svg.png',
    },
    {
      name: 'Kubernetes',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/200px-Kubernetes_logo_without_workmark.svg.png',
    },
    {
      name: 'MongoDB',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/200px-MongoDB_Logo.svg.png',
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Technology Partners
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We partner with industry leaders to deliver cutting-edge solutions using the latest technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center justify-center p-4 bg-white dark:bg-dark-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;