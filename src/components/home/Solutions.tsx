import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, ShoppingCart, Heart, GraduationCap, Banknote, Factory } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Solutions: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const solutions = [
    {
      icon: Building2,
      title: 'Enterprise Resource Planning',
      description: 'Comprehensive ERP solutions to streamline your business operations and improve efficiency.',
      benefits: ['Integrated Workflows', 'Real-time Analytics', 'Scalable Architecture', 'Custom Modules'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/solutions/erp',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Platforms',
      description: 'Powerful e-commerce solutions that drive sales and enhance customer experience.',
      benefits: ['Mobile Responsive', 'Payment Integration', 'Inventory Management', 'SEO Optimized'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/solutions/ecommerce',
    },
    {
      icon: Heart,
      title: 'Healthcare Solutions',
      description: 'Digital health platforms that improve patient care and operational efficiency.',
      benefits: ['HIPAA Compliant', 'Telemedicine', 'Electronic Health Records', 'Patient Portal'],
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/solutions/healthcare',
    },
    {
      icon: GraduationCap,
      title: 'Education Technology',
      description: 'Innovative EdTech solutions for modern learning and educational management.',
      benefits: ['Learning Management', 'Virtual Classrooms', 'Student Analytics', 'Mobile Learning'],
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/solutions/education',
    },
    {
      icon: Banknote,
      title: 'Financial Services',
      description: 'Secure fintech solutions for banking, payments, and financial management.',
      benefits: ['Blockchain Integration', 'Fraud Detection', 'Regulatory Compliance', 'Real-time Processing'],
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/solutions/fintech',
    },
    {
      icon: Factory,
      title: 'Manufacturing & IoT',
      description: 'Smart manufacturing solutions with IoT integration and predictive analytics.',
      benefits: ['IoT Sensors', 'Predictive Maintenance', 'Supply Chain Optimization', 'Quality Control'],
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/solutions/manufacturing',
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-white dark:bg-dark-900">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Industry Solutions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tailored technology solutions designed for specific industries and business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card card-hover overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Icon size={24} className="text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {solution.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-3" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={solution.link}
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 group-hover:translate-x-1 transition-all duration-300"
                  >
                    Explore solution
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
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
          <Link to="/solutions" className="btn btn-primary">
            View All Solutions
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;