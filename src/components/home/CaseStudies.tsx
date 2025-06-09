import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Calendar, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CaseStudies: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform Transformation',
      client: 'RetailGiant Inc.',
      industry: 'Retail',
      description: 'Complete digital transformation of a traditional retail business into a modern e-commerce platform.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      results: ['300% increase in online sales', '50% reduction in operational costs', '99.9% uptime achieved'],
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB'],
      duration: '6 months',
      link: '/case-studies/ecommerce-transformation',
    },
    {
      id: 2,
      title: 'Healthcare Management System',
      client: 'MedCare Solutions',
      industry: 'Healthcare',
      description: 'HIPAA-compliant healthcare management system with telemedicine capabilities.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      results: ['40% improvement in patient satisfaction', '60% reduction in paperwork', 'HIPAA compliance achieved'],
      technologies: ['Angular', 'Python', 'PostgreSQL', 'Docker'],
      duration: '8 months',
      link: '/case-studies/healthcare-system',
    },
    {
      id: 3,
      title: 'AI-Powered Analytics Platform',
      client: 'DataTech Corp',
      industry: 'Technology',
      description: 'Machine learning platform for predictive analytics and business intelligence.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      results: ['85% accuracy in predictions', '70% faster decision making', '200% ROI in first year'],
      technologies: ['Python', 'TensorFlow', 'Kubernetes', 'Redis'],
      duration: '10 months',
      link: '/case-studies/ai-analytics-platform',
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
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped businesses across industries achieve their digital transformation goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card card-hover overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                    {study.industry}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {study.title}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 text-sm mb-3">
                  {study.client}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {study.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-2">
                    Key Results:
                  </h4>
                  <ul className="space-y-1">
                    {study.results.slice(0, 2).map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {study.duration}
                  </div>
                  <div className="flex items-center">
                    <Tag size={14} className="mr-1" />
                    {study.technologies.length} technologies
                  </div>
                </div>

                <Link
                  to={study.link}
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 group-hover:translate-x-1 transition-all duration-300"
                >
                  Read case study
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/case-studies" className="btn btn-primary">
            View All Case Studies
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;