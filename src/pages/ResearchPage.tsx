import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Beaker, Microscope, FlaskRound as Flask, FileText, Brain, LineChart } from 'lucide-react';
import { researchProjects } from '../data/research';

const ResearchPage: React.FC = () => {
  const researchAreas = [
    {
      icon: <Beaker size={32} className="text-primary-600" />,
      title: 'Drug Discovery',
      description: 'Identifying novel compounds with therapeutic potential through advanced screening and molecular design.',
    },
    {
      icon: <Microscope size={32} className="text-primary-600" />,
      title: 'Preclinical Development',
      description: 'Rigorous testing of drug candidates in laboratory and animal models to evaluate safety and efficacy.',
    },
    {
      icon: <Flask size={32} className="text-primary-600" />,
      title: 'Formulation Science',
      description: 'Developing innovative drug delivery systems to optimize therapeutic effects and patient convenience.',
    },
    {
      icon: <FileText size={32} className="text-primary-600" />,
      title: 'Clinical Research',
      description: 'Conducting comprehensive clinical trials to demonstrate safety and efficacy in human subjects.',
    },
    {
      icon: <Brain size={32} className="text-primary-600" />,
      title: 'Translational Medicine',
      description: 'Bridging the gap between laboratory research and clinical application for faster development of therapies.',
    },
    {
      icon: <LineChart size={32} className="text-primary-600" />,
      title: 'Health Economics',
      description: 'Analyzing the economic impact of our treatments to ensure value for patients and healthcare systems.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Research & Development</h1>
            <p className="text-lg text-blue-100">
              Driving innovation through scientific excellence and breakthrough discoveries.
            </p>
          </div>
        </div>
      </section>

      {/* Research Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Pioneering the Future of Medicine</h2>
              <p className="text-gray-700 mb-4">
                At MediPharm, our research and development efforts are focused on addressing unmet medical needs and improving patient outcomes through scientific innovation.
              </p>
              <p className="text-gray-700 mb-4">
                With state-of-the-art facilities and a team of world-class scientists, we're committed to developing breakthrough therapies that transform lives and advance healthcare worldwide.
              </p>
              <p className="text-gray-700 mb-6">
                Our R&D approach combines cutting-edge technologies with deep therapeutic expertise to accelerate the discovery and development of novel treatments.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary-600">250+</p>
                  <p className="text-sm text-gray-600">Scientists</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary-600">$500M+</p>
                  <p className="text-sm text-gray-600">Annual R&D Investment</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary-600">30+</p>
                  <p className="text-sm text-gray-600">Ongoing Projects</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Research Laboratory" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Research Focus Areas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We concentrate our research efforts in key therapeutic areas where we can make the most significant impact on patient health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <div className="mb-4">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Current Research Projects</h2>
              <p className="text-gray-600 max-w-2xl">
                Explore our ongoing research initiatives aimed at addressing critical healthcare challenges.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {researchProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                        project.phase === 'Preclinical' ? 'bg-blue-100 text-blue-800' :
                        project.phase === 'Phase I' ? 'bg-purple-100 text-purple-800' :
                        project.phase === 'Phase II' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {project.phase}
                      </span>
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <a 
                        href="#" 
                        className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                        onClick={(e) => {
                          e.preventDefault();
                          // Handle learn more click
                          alert(`Learn more about ${project.title}`);
                        }}
                      >
                        Learn more
                        <ArrowRight size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                  <p className="mt-3 text-gray-600">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Scientific Publications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our researchers regularly publish their findings in peer-reviewed journals to contribute to scientific knowledge.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="divide-y divide-gray-200">
              {[
                {
                  title: 'Novel Approach to Targeted Drug Delivery Using Nanoparticle Technology',
                  authors: 'Johnson K, Smith L, et al.',
                  journal: 'Journal of Pharmaceutical Sciences',
                  year: 2023,
                },
                {
                  title: 'Clinical Outcomes of a New Treatment Regimen for Chronic Inflammatory Conditions',
                  authors: 'Williams R, Chen H, Davis P, et al.',
                  journal: 'New England Journal of Medicine',
                  year: 2022,
                },
                {
                  title: 'Advances in Biomarker Identification for Personalized Medicine Applications',
                  authors: 'Taylor M, Rodriguez J, et al.',
                  journal: 'Nature Biotechnology',
                  year: 2022,
                },
                {
                  title: 'Computational Methods for Drug Repurposing in Rare Diseases',
                  authors: 'Anderson T, Kumar S, et al.',
                  journal: 'Scientific Reports',
                  year: 2021,
                },
              ].map((pub, index) => (
                <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                  <h3 className="font-semibold text-lg mb-2">{pub.title}</h3>
                  <p className="text-gray-600 mb-2">{pub.authors}</p>
                  <p className="text-sm text-gray-500">
                    <span>{pub.journal}</span>
                    <span className="mx-2">•</span>
                    <span>{pub.year}</span>
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center mt-2 text-primary-600 hover:text-primary-700 text-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      // Handle publication click
                      alert(`View publication: ${pub.title}`);
                    }}
                  >
                    View publication
                    <ArrowRight size={14} className="ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <a 
              href="#" 
              className="btn btn-outline"
              onClick={(e) => {
                e.preventDefault();
                // Handle view all publications
                alert('View all publications');
              }}
            >
              View All Publications
              <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchPage;