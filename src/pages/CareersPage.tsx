import React from 'react';
import { Helmet } from 'react-helmet-async';

const CareersPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Careers - TechSolutions</title>
        <meta name="description" content="Join our team and build the future of technology." />
      </Helmet>
      
      <div className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto container-padding">
          <h1 className="text-4xl font-bold mb-8">Careers</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Career opportunities coming soon...
          </p>
        </div>
      </div>
    </>
  );
};

export default CareersPage;