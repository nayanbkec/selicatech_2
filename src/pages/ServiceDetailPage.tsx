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
    "software-development": {
      title: "Software Development",
      description:
        "Custom software solutions built with cutting-edge technologies and best practices.",
      longDescription:
        "Our software development services encompass the entire development lifecycle, from initial concept and design to deployment and ongoing maintenance. We specialize in creating scalable, secure, and user-friendly applications that drive business growth and operational efficiency.",
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "Custom Web Application Development",
        "Enterprise Software Solutions",
        "API Development & Integration",
        "Legacy System Modernization",
        "Progressive Web Apps (PWA)",
        "Microservices Architecture",
        "Database Design & Optimization",
        "Third-party Integrations",
      ],
      benefits: [
        "Increased operational efficiency",
        "Reduced manual processes",
        "Improved data accuracy",
        "Enhanced user experience",
        "Scalable architecture",
        "Cost-effective solutions",
      ],
      process: [
        {
          step: 1,
          title: "Discovery & Planning",
          description:
            "We analyze your requirements and create a comprehensive project plan.",
        },
        {
          step: 2,
          title: "Design & Architecture",
          description:
            "Our team designs the system architecture and user interface.",
        },
        {
          step: 3,
          title: "Development",
          description:
            "Agile development with regular updates and feedback cycles.",
        },
        {
          step: 4,
          title: "Testing & QA",
          description:
            "Comprehensive manual testing, automation testing, and performance testing to ensure quality and reliability.",
        },
        {
          step: 5,
          title: "Deployment",
          description: "Smooth deployment with minimal downtime.",
        },
        {
          step: 6,
          title: "Support & Maintenance",
          description: "Ongoing support and regular updates.",
        },
      ],
      technologies: [
        "React",
        "Node.js",
        "Python",
        "Java",
        ".NET",
        "PHP",
        "MongoDB",
        "PostgreSQL",
      ],
      stats: [
        { number: "200+", label: "Projects Delivered" },
        { number: "98%", label: "Client Satisfaction" },
        { number: "50+", label: "Technologies" },
        { number: "24/7", label: "Support" },
      ],
    },
    "cloud-solutions": {
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and migration services for modern businesses.",
      longDescription:
        "Our Cloud Solutions empower your business with scalable, secure, and cost-effective cloud infrastructure. We specialize in seamless cloud migration, robust architecture design, and ongoing optimization to ensure your business leverages the full potential of AWS, Azure, or Google Cloud. Our team ensures compliance, security, and operational efficiency at every step.",
      image:
        "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "Cloud Migration Strategy",
        "AWS/Azure/GCP Implementation",
        "Serverless Architecture",
        "Cloud Security & Compliance",
        "DevOps & CI/CD Pipelines",
        "Cloud Cost Optimization",
      ],
      benefits: [
        "Seamless migration with minimal downtime",
        "Enhanced scalability and flexibility",
        "Improved security and compliance",
        "Reduced infrastructure costs",
        "Faster deployment cycles",
        "Expert support and monitoring",
      ],
      process: [
        {
          step: 1,
          title: "Assessment & Planning",
          description:
            "We evaluate your current infrastructure and define a tailored cloud migration strategy.",
        },
        {
          step: 2,
          title: "Architecture Design",
          description:
            "Our experts design a scalable and secure cloud architecture aligned with your business goals.",
        },
        {
          step: 3,
          title: "Migration & Implementation",
          description:
            "We execute the migration and implement cloud services with minimal disruption.",
        },
        {
          step: 4,
          title: "Optimization & Automation",
          description:
            "Continuous optimization and automation for performance, security, and cost savings.",
        },
        {
          step: 5,
          title: "Monitoring & Support",
          description:
            "Ongoing monitoring, support, and compliance management for your cloud environment.",
        },
      ],
      technologies: [
        "AWS",
        "Azure",
        "Google Cloud",
        "Docker",
        "Kubernetes",
        "Terraform",
      ],
      stats: [
        { number: "100+", label: "Cloud Migrations" },
        { number: "99.99%", label: "Uptime Achieved" },
        { number: "30%", label: "Average Cost Savings" },
        { number: "24/7", label: "Cloud Support" },
      ],
    },
    // ...existing code...
    "ai-ml": {
      title: "AI & Machine Learning",
      description:
        "Intelligent solutions powered by artificial intelligence and machine learning.",
      longDescription:
        "Our AI & Machine Learning services deliver intelligent solutions that transform your business. From predictive analytics and natural language processing to computer vision and automation, we leverage advanced algorithms and data-driven insights to solve complex challenges and unlock new opportunities.",
      image:
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Chatbots & Virtual Assistants",
        "Recommendation Systems",
        "Process Automation",
      ],
      benefits: [
        "Data-driven decision making",
        "Enhanced customer experiences",
        "Automated business processes",
        "Improved operational efficiency",
        "Competitive business insights",
        "Scalable AI-powered solutions",
      ],
      process: [
        {
          step: 1,
          title: "Discovery & Data Assessment",
          description:
            "We analyze your business needs and assess available data sources.",
        },
        {
          step: 2,
          title: "Model Design & Prototyping",
          description:
            "Our experts design and prototype AI/ML models tailored to your objectives.",
        },
        {
          step: 3,
          title: "Development & Training",
          description:
            "We develop, train, and validate models using industry best practices.",
        },
        {
          step: 4,
          title: "Integration & Deployment",
          description:
            "Seamless integration of AI/ML solutions into your existing systems.",
        },
        {
          step: 5,
          title: "Monitoring & Optimization",
          description:
            "Continuous monitoring and optimization to ensure peak performance.",
        },
      ],
      technologies: [
        "TensorFlow",
        "PyTorch",
        "OpenAI",
        "Scikit-learn",
        "Pandas",
        "NumPy",
      ],
      stats: [
        { number: "50+", label: "AI Projects Delivered" },
        { number: "95%", label: "Model Accuracy Achieved" },
        { number: "20+", label: "Industries Served" },
        { number: "24/7", label: "AI Support" },
      ],
    },
    // ...existing code...
    "mobile-development": {
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android.",
      longDescription:
        "Our Mobile Development services deliver high-quality native and cross-platform apps for iOS and Android. We focus on intuitive UI/UX, robust performance, and seamless integration to ensure your mobile solution stands out in the marketplace.",
      image:
        "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "iOS App Development",
        "Android App Development",
        "Cross-Platform Solutions",
        "Mobile UI/UX Design",
        "App Store Optimization",
        "Mobile Backend Services",
      ],
      benefits: [
        "Reach a wider audience on iOS and Android",
        "Faster time-to-market with cross-platform tools",
        "Engaging and intuitive user experiences",
        "Optimized app performance and reliability",
        "Expert guidance through app store submission",
        "Scalable and secure mobile backends",
      ],
      process: [
        {
          step: 1,
          title: "Requirement Analysis",
          description:
            "We gather your business needs and define the app’s core features.",
        },
        {
          step: 2,
          title: "UI/UX Design",
          description:
            "Our designers craft engaging and user-friendly mobile interfaces.",
        },
        {
          step: 3,
          title: "Development",
          description:
            "We build robust mobile apps using the latest native and cross-platform technologies.",
        },
        {
          step: 4,
          title: "Testing & QA",
          description:
            "Comprehensive testing ensures your app is reliable and bug-free.",
        },
        {
          step: 5,
          title: "Deployment & Launch",
          description:
            "We handle app store submissions and ensure a smooth launch.",
        },
        {
          step: 6,
          title: "Support & Updates",
          description:
            "Ongoing support and updates to keep your app competitive.",
        },
      ],
      technologies: [
        "React Native",
        "Flutter",
        "Swift",
        "Kotlin",
        "Xamarin",
        "Ionic",
      ],
      stats: [
        { number: "80+", label: "Mobile Apps Delivered" },
        { number: "4.8★", label: "Average App Rating" },
        { number: "20+", label: "Industries Served" },
        { number: "100K+", label: "App Downloads" },
      ],
    },
    // ...existing code...
    devops: {
      title: "DevOps & Infrastructure",
      description:
        "Streamlined development operations and robust infrastructure management.",
      longDescription:
        "Our DevOps & Infrastructure services help you accelerate software delivery and ensure system reliability. We implement CI/CD pipelines, automate infrastructure, and provide continuous monitoring and optimization for secure, high-performing environments.",
      image:
        "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "CI/CD Pipeline Setup",
        "Container Orchestration",
        "Infrastructure as Code",
        "Monitoring & Logging",
        "Security Implementation",
        "Performance Optimization",
      ],
      benefits: [
        "Faster and more reliable deployments",
        "Automated and consistent infrastructure",
        "Improved system scalability and resilience",
        "Enhanced security and compliance",
        "Proactive monitoring and troubleshooting",
        "Reduced operational costs",
      ],
      process: [
        {
          step: 1,
          title: "Assessment & Planning",
          description:
            "We evaluate your current processes and define a DevOps strategy.",
        },
        {
          step: 2,
          title: "Pipeline & Automation",
          description:
            "We set up CI/CD pipelines and automate infrastructure provisioning.",
        },
        {
          step: 3,
          title: "Containerization & Orchestration",
          description:
            "We containerize applications and manage them with orchestration tools.",
        },
        {
          step: 4,
          title: "Monitoring & Security",
          description:
            "We implement monitoring, logging, and security best practices.",
        },
        {
          step: 5,
          title: "Optimization & Support",
          description:
            "Continuous optimization and support for your DevOps environment.",
        },
      ],
      technologies: [
        "Jenkins",
        "GitLab CI",
        "Docker",
        "Kubernetes",
        "Ansible",
        "Prometheus",
      ],
      stats: [
        { number: "150+", label: "Pipelines Deployed" },
        { number: "99.9%", label: "Deployment Success Rate" },
        { number: "40%", label: "Faster Release Cycles" },
        { number: "24/7", label: "Ops Support" },
      ],
    },
    // ...existing code...
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