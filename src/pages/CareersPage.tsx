import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Award, Briefcase, Globe, CheckCircle } from "lucide-react";

const jobOpenings = [
  {
    title: "Full Stack Developer",
    location: "Bengaluru, India (Hybrid)",
    type: "Full Time",
    description:
      "Work with modern web technologies to build scalable applications. Collaborate with cross-functional teams to deliver high-quality solutions.",
    requirements: [
      "2+ years experience in React, Node.js",
      "Familiarity with cloud platforms (AWS/Azure)",
      "Strong problem-solving skills",
      "Good communication and teamwork",
    ],
  },
  {
    title: "Cloud Solutions Architect",
    location: "Remote",
    type: "Full Time",
    description:
      "Design and implement cloud architectures for global clients. Lead migration and optimization projects.",
    requirements: [
      "5+ years experience with AWS/Azure/GCP",
      "Experience in DevOps and automation",
      "Excellent client-facing skills",
    ],
  },
  {
    title: "UI/UX Designer",
    location: "Bengaluru, India",
    type: "Full Time",
    description:
      "Create intuitive and engaging user interfaces for web and mobile applications.",
    requirements: [
      "Portfolio of design projects",
      "Proficiency in Figma/Adobe XD",
      "Strong sense of aesthetics and usability",
    ],
  },
];

const perks = [
  {
    icon: Award,
    title: "Growth & Learning",
    description: "Access to training, certifications, and mentorship programs.",
  },
  {
    icon: Globe,
    title: "Global Projects",
    description: "Work with clients and teams from around the world.",
  },
  {
    icon: Briefcase,
    title: "Flexible Work",
    description: "Hybrid and remote opportunities for work-life balance.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Supportive, diverse, and inclusive team environment.",
  },
];

const CareersPage: React.FC = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [perksRef, perksInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [jobsRef, jobsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <Helmet>
        <title>Careers at SelicaTech | Join Our Team</title>
        <meta
          name="description"
          content="Explore exciting career opportunities at SelicaTech. Join our innovative team and help shape the future of technology."
        />
        <link rel="canonical" href="https://SelicaTech.com/careers" />
      </Helmet>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="pt-24 pb-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white"
      >
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Careers at SelicaTech
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Ready to make an impact? Join our team of innovators, creators,
              and problem-solvers. Grow your career while building technology
              that matters.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Perks & Culture */}
      <section
        ref={perksRef}
        className="section-padding bg-white dark:bg-dark-900"
      >
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={perksInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              At SelicaTech, we believe in empowering our people. Enjoy a
              collaborative culture, continuous learning, and opportunities to
              work on global projects.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <motion.div
                  key={perk.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={perksInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="card p-6 text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {perk.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {perk.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section
        ref={jobsRef}
        className="section-padding bg-gray-50 dark:bg-dark-800"
      >
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={jobsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Current Openings
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our open positions and find your next career move.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobOpenings.map((job, idx) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                animate={jobsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="card p-8 flex flex-col"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-primary-700 dark:text-primary-400 mb-2">
                    {job.title}
                  </h3>
                  <div className="flex items-center text-gray-500 dark:text-gray-300 text-sm mb-2">
                    <Briefcase className="mr-2" size={18} />
                    {job.type}
                    <Globe className="ml-4 mr-2" size={18} />
                    {job.location}
                  </div>
                  <p className="mb-3 text-gray-700 dark:text-gray-200">
                    {job.description}
                  </p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4">
                    {job.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
                <a
                  href="mailto:recruit@selicatech.com?subject=Application for {job.title} from careers page"
                  className="mt-auto inline-flex items-center px-6 py-2 bg-primary-600 text-white font-semibold rounded-lg shadow hover:bg-primary-700 transition"
                >
                  Apply Now
                  <CheckCircle className="justify-right ml-2" size={20} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CareersPage;
