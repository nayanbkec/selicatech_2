import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Award, FlaskRound as Flask, AlarmClock } from 'lucide-react';

const ResearchHighlights: React.FC = () => {
  const highlights = [
    {
      id: 1,
      title: 'Innovative Drug Delivery Systems',
      description: 'Our research team has developed new drug delivery systems that improve bioavailability and patient compliance.',
      icon: <Flask className="w-10 h-10 text-secondary-600" />,
    },
    {
      id: 2,
      title: 'Clinical Trials Excellence',
      description: 'MediPharm leads the industry with over 50 successful clinical trials across multiple therapeutic areas.',
      icon: <Award className="w-10 h-10 text-secondary-600" />,
    },
    {
      id: 3,
      title: 'Accelerated Development Timeline',
      description: 'Our streamlined development process brings life-saving medications to market faster without compromising safety.',
      icon: <AlarmClock className="w-10 h-10 text-secondary-600" />,
    },
    {
      id: 4,
      title: 'Market Growth Leadership',
      description: 'Our innovative products have consistently achieved double-digit market growth year over year.',
      icon: <TrendingUp className="w-10 h-10 text-secondary-600" />,
    },
  ];

  return (
    <section className="section-padding bg-gray-100">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Research & Development</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At MediPharm, we're committed to pushing the boundaries of pharmaceutical research to develop innovative solutions for patients worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 transition-all hover:shadow-lg"
            >
              <div className="flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link 
            to="/research" 
            className="btn btn-primary"
          >
            Explore Our Research
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResearchHighlights;