import React from 'react';
import { teamMembers } from '../../data/team';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const TeamSection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Meet the experienced professionals who guide our vision and drive our mission forward.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <div 
            key={member.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg"
          >
            <div className="h-64 bg-gray-200 overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-primary-600 mb-2">{member.position}</p>
              <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
              <div className="flex space-x-3">
                <a 
                  href={member.linkedin} 
                  className="text-gray-500 hover:text-primary-600 transition-colors"
                  aria-label={`${member.name}'s LinkedIn profile`}
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href={member.twitter} 
                  className="text-gray-500 hover:text-primary-600 transition-colors"
                  aria-label={`${member.name}'s Twitter profile`}
                >
                  <Twitter size={18} />
                </a>
                <a 
                  href={`mailto:${member.email}`} 
                  className="text-gray-500 hover:text-primary-600 transition-colors"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;