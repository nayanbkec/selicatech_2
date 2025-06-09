import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Globe,
  Lightbulb,
  Shield,
  Zap,
  CheckCircle
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.',
    },
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'Our clients success is our success. We build lasting partnerships based on trust and results.',
    },
    {
      icon: Shield,
      title: 'Quality & Security',
      description: 'We maintain the highest standards of quality and security in everything we deliver.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and transparent communication.',
    },
    {
      icon: Zap,
      title: 'Agility',
      description: 'We adapt quickly to changing requirements and market conditions.',
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'We bring international best practices to serve clients worldwide.',
    },
  ];

  const team = [
    {
      name: 'John Smith',
      position: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      bio: '15+ years in technology leadership, former VP at Microsoft.',
    },
    {
      name: 'Sarah Johnson',
      position: 'CTO',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      bio: 'Expert in cloud architecture and AI, PhD in Computer Science.',
    },
    {
      name: 'Michael Chen',
      position: 'Head of Engineering',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      bio: 'Full-stack development expert with 12+ years experience.',
    },
    {
      name: 'Emily Rodriguez',
      position: 'Head of Design',
      image: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      bio: 'UX/UI design specialist focused on user-centered design.',
    },
  ];

  const achievements = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Countries Served' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - TechSolutions | Leading IT Company</title>
        <meta 
          name="description" 
          content="Learn about TechSolutions - a leading IT company providing innovative software development, cloud solutions, and digital transformation services worldwide." 
        />
        <link rel="canonical" href="https://techsolutions.com/about" />
      </Helmet>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 pb-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About TechSolutions
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              We are a leading IT company dedicated to transforming businesses through innovative 
              technology solutions, expert development teams, and strategic digital transformation services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="card p-8">
                <div className="flex items-center mb-6">
                  <Target className="text-primary-600 mr-4" size={32} />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  To empower businesses worldwide with innovative technology solutions that drive growth, 
                  efficiency, and competitive advantage. We are committed to delivering exceptional value 
                  through cutting-edge software development, strategic consulting, and reliable support.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="card p-8">
                <div className="flex items-center mb-6">
                  <Eye className="text-primary-600 mr-4" size={32} />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  To be the global leader in IT solutions, recognized for our innovation, quality, and 
                  client success. We envision a future where technology seamlessly integrates with 
                  business processes to create unprecedented opportunities for growth and transformation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These principles guide everything we do and shape our culture of excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card p-6 text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client success.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={valuesInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {achievement.number}
                </div>
                <div className="text-blue-100">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section ref={teamRef} className="section-padding bg-white dark:bg-dark-900">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Meet the experienced professionals who guide our vision and drive our success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 text-center group"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={teamInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Why Choose TechSolutions?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                We combine technical expertise with business acumen to deliver solutions that drive real results.
              </p>

              <div className="space-y-4">
                {[
                  'Proven track record with 500+ successful projects',
                  'Expert team with diverse technical skills',
                  'Agile development methodology',
                  'Comprehensive post-launch support',
                  'Competitive pricing and transparent communication',
                  'Global presence with local expertise',
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={teamInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="text-secondary-500 mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-700 dark:text-gray-300">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={teamInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-dark-800 p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <Award className="text-primary-600" size={32} />
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">ISO 27001</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Certified</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;