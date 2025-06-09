import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Cloud, 
  Brain, 
  Smartphone, 
  Settings, 
  Database,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions built with cutting-edge technologies and best practices.',
      features: [
        'Web Application Development',
        'Desktop Software Solutions',
        'API Development & Integration',
        'Legacy System Modernization',
        'Progressive Web Apps (PWA)',
        'Microservices Architecture'
      ],
      technologies: ['React', 'Node.js', 'Python', 'Java', '.NET', 'PHP'],
      link: '/services/software-development',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      features: [
        'Cloud Migration Strategy',
        'AWS/Azure/GCP Implementation',
        'Serverless Architecture',
        'Cloud Security & Compliance',
        'DevOps & CI/CD Pipelines',
        'Cloud Cost Optimization'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
      link: '/services/cloud-solutions',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by artificial intelligence and machine learning.',
      features: [
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Chatbots & Virtual Assistants',
        'Recommendation Systems',
        'Process Automation'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Scikit-learn', 'Pandas', 'NumPy'],
      link: '/services/ai-ml',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: [
        'iOS App Development',
        'Android App Development',
        'Cross-Platform Solutions',
        'Mobile UI/UX Design',
        'App Store Optimization',
        'Mobile Backend Services'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin', 'Ionic'],
      link: '/services/mobile-development',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      icon: Settings,
      title: 'DevOps & Infrastructure',
      description: 'Streamlined development operations and robust infrastructure management.',
      features: [
        'CI/CD Pipeline Setup',
        'Container Orchestration',
        'Infrastructure as Code',
        'Monitoring & Logging',
        'Security Implementation',
        'Performance Optimization'
      ],
      technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Ansible', 'Prometheus'],
      link: '/services/devops',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Comprehensive data solutions from collection to insights and visualization.',
      features: [
        'Data Warehouse Design',
        'ETL Pipeline Development',
        'Big Data Analytics',
        'Business Intelligence',
        'Data Visualization',
        'Real-time Data Processing'
      ],
      technologies: ['Apache Spark', 'Hadoop', 'Snowflake', 'Tableau', 'Power BI', 'Elasticsearch'],
      link: '/services/data-engineering',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - SelicaTech | IT Solutions & Development</title>
        <meta
          name="description"
          content="Comprehensive IT services including software development, cloud solutions, AI/ML, mobile development, DevOps, and data engineering. Transform your business with our expert team."
        />
        <link rel="canonical" href="https://SelicaTech.com/services" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Comprehensive IT solutions designed to accelerate your digital
              transformation and drive business growth through innovative
              technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="section-padding bg-white dark:bg-dark-900">
        <div className="container mx-auto container-padding">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Content */}
                  <div
                    className={isEven ? "lg:pr-8" : "lg:pl-8 lg:col-start-2"}
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mr-4">
                        <Icon size={32} className="text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Key Features:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <CheckCircle
                              className="text-secondary-500 mr-2 flex-shrink-0"
                              size={16}
                            />
                            <span className="text-gray-600 dark:text-gray-300 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Technologies:
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link to={service.link} className="btn btn-primary group">
                      Learn More
                      <ArrowRight
                        size={20}
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>

                  {/* Image */}
                  <div
                    className={isEven ? "lg:pl-8" : "lg:pr-8 lg:col-start-1"}
                  >
                    <div className="relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="rounded-2xl shadow-2xl w-full h-auto"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss your project requirements and how our services can
              help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-primary">
                Get Free Consultation
              </Link>
              <Link to="/case-studies" className="btn btn-outline">
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;