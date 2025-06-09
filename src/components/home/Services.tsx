import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Cloud, Brain, Smartphone, Settings, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions built with cutting-edge technologies and best practices.',
      features: ['Web Applications', 'Desktop Software', 'API Development', 'Legacy Modernization'],
      link: '/services/software-development',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      features: ['Cloud Migration', 'AWS/Azure/GCP', 'Serverless Architecture', 'Cloud Security'],
      link: '/services/cloud-solutions',
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by artificial intelligence and machine learning.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Automation'],
      link: '/services/ai-ml',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter'],
      link: '/services/mobile-development',
    },
    {
      icon: Settings,
      title: 'DevOps & Infrastructure',
      description: 'Streamlined development operations and robust infrastructure management.',
      features: ['CI/CD Pipelines', 'Container Orchestration', 'Infrastructure as Code', 'Monitoring'],
      link: '/services/devops',
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Comprehensive data solutions from collection to insights and visualization.',
      features: ['Data Warehousing', 'ETL Pipelines', 'Big Data Analytics', 'Business Intelligence'],
      link: '/services/data-engineering',
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
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to accelerate your digital transformation 
            and drive business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card card-hover p-8 group"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={service.link}
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn more
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link to="/services" className="btn btn-primary">
            View All Services
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;