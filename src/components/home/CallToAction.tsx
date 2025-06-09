import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, PhoneCall } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Careers CTA */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/15 transition-all">
            <div className="flex items-center mb-4">
              <div className="bg-white/20 p-3 rounded-full mr-4">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold">Join Our Team</h3>
            </div>
            <p className="mb-6 text-blue-100">
              We're looking for talented individuals who are passionate about making a difference in healthcare. Explore our career opportunities.
            </p>
            <Link to="/careers" className="btn bg-white text-primary-700 hover:bg-gray-100">
              View Careers
            </Link>
          </div>

          {/* Contact CTA */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/15 transition-all">
            <div className="flex items-center mb-4">
              <div className="bg-white/20 p-3 rounded-full mr-4">
                <PhoneCall className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold">Contact Us</h3>
            </div>
            <p className="mb-6 text-blue-100">
              Have questions about our products or services? Our team is ready to provide the information and support you need.
            </p>
            <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;