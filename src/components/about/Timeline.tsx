import React from 'react';

const Timeline: React.FC = () => {
  const milestones = [
    {
      year: 1995,
      title: 'Foundation',
      description: 'MediPharm was founded with a vision to revolutionize pharmaceutical research and development.',
    },
    {
      year: 2001,
      title: 'First Major Breakthrough',
      description: 'Development of our first groundbreaking medication for cardiovascular disease treatment.',
    },
    {
      year: 2008,
      title: 'International Expansion',
      description: 'Established presence in over 25 countries with regional headquarters in Europe and Asia.',
    },
    {
      year: 2013,
      title: 'R&D Innovation Hub',
      description: 'Opened state-of-the-art research facility dedicated to pioneering new drug delivery systems.',
    },
    {
      year: 2018,
      title: 'Major Acquisition',
      description: 'Acquired BioGenTech, expanding our capabilities in biotechnology and genomic medicine.',
    },
    {
      year: 2023,
      title: 'Sustainability Initiative',
      description: 'Launched comprehensive sustainability program to achieve carbon neutrality by 2030.',
    },
  ];

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
      <div className="relative">
        {/* Center line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>
        
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <div 
              key={milestone.year} 
              className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} relative`}
            >
              {/* Content box */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                <div 
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
                  data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                >
                  <h3 className="text-xl font-semibold text-primary-700">{milestone.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{milestone.year}</p>
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
              </div>
              
              {/* Center circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary-600 rounded-full border-4 border-white shadow flex items-center justify-center">
                <span className="text-white text-xs font-bold">{milestone.year}</span>
              </div>
              
              {/* Empty space for the other side */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;