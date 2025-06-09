import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Star, Users, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams();

  // This would typically come from an API or database
  const serviceData = {
    'software-development': {
      title: 'Software Development',
      description: 'Custom software solutions built with cutting-edge technologies and best practices.',
      longDescription: 'Our software development services encompass the entire development lifecycle, from initial concept and design to deployment and ongoing maintenance. We specialize in creating scalable, secure, and user-friendly applications that drive business growth and operational efficiency.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: [
        'Custom Web Application Development',
        'Enterprise Software Solutions',
        'API Development & Integration',
        'Legacy System Modernization',
        'Progressive Web Apps (PWA)',
        'Microservices Architecture',
        'Database Design & Optimization',
        'Third-party Integrations'
      ],
      benefits: [
        'Increased operational efficiency',
        'Reduced manual processes',
        'Improved data accuracy',
        'Enhanced user experience',
        'Scalable architecture',
        'Cost-effective solutions'
      ],
      process: [
        {
          step: 1,
          title: 'Discovery & Planning',
          description: 'We analyze your requirements and create a comprehensive project plan.'
        },
        {
          step: 2,
          title: 'Design & Architecture',
          description: 'Our team designs the system architecture and user interface.'
        },
        {
          step: 3,
          title: 'Development',
          description: 'Agile development with regular updates and feedback cycles.'
        },
        {
          step: 4,
          title: 'Testing & QA',
          description: 'Comprehensive testing to ensure quality and performance.'
        },
        {
          step: 5,
          title: 'Deployment',
          description: 'Smooth deployment with minimal downtime.'
        },
        {
          step: 6,
          title: 'Support & Maintenance',
          description: 'Ongoing support and regular updates.'
        }
      ],
      technologies: ['React', 'Node.js', 'Python', 'Java', '.NET', 'PHP', 'MongoDB', 'PostgreSQL'],
      stats: [
        { number: '200+', label: 'Projects Delivered' },
        { number: '98%', label: 'Client Satisfaction' },
        { number: '50+', label: 'Technologies' },
        { number: '24/7', label: 'Support' }
      ]
    }
    // Add more service data as needed
  };

  const service = serviceData[serviceId as keyof typeof serviceData];

  if (!service) {
    return (
      <div className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto container-padding text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services" className="btn btn-primary">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{service.title} - SelicaTech</title>
        <meta name="description" content={service.description} />
        <link
          rel="canonical"
          href={`https://SelicaTech.com/services/${serviceId}`}
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                {service.longDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="btn bg-white text-primary-700 hover:bg-gray-100"
                >
                  Get Started
                </Link>
                <button className="btn bg-transparent border-2 border-white text-white hover:bg-white/10">
                  View Portfolio
                </button>
              </div>
            </div>
            <div>
              <img
                src={service.image}
                alt={service.title}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white dark:bg-dark-900">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {service.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                What We Offer
              </h2>
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle
                      className="text-secondary-500 mr-3 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Key Benefits
              </h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <Star
                      className="text-accent-500 mr-3 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-gray-700 dark:text-gray-300">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project
              delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We leverage the latest technologies to build robust and scalable
              solutions.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {service.technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-700 px-6 py-3 rounded-full shadow-md text-gray-700 dark:text-gray-300 font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss your requirements and create a solution that drives
              your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn bg-white text-primary-700 hover:bg-gray-100"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/case-studies"
                className="btn bg-transparent border-2 border-white text-white hover:bg-white/10"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailPage;