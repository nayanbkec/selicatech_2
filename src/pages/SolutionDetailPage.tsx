import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const SolutionDetailPage: React.FC = () => {
  const { solutionId } = useParams();

  return (
    <>
      <Helmet>
        <title>Solution Detail - TechSolutions</title>
        <meta name="description" content="Detailed information about our solutions." />
      </Helmet>
      
      <div className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto container-padding">
          <h1 className="text-4xl font-bold mb-8">Solution: {solutionId}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Solution details coming soon...
          </p>
        </div>
      </div>
    </>
  );
};

export default SolutionDetailPage;