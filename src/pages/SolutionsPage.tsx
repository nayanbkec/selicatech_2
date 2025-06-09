import React from 'react';
import { Helmet } from 'react-helmet-async';

const SolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Solutions - SelicaTech</title>
        <meta
          name="description"
          content="Industry-specific solutions for various business needs."
        />
      </Helmet>

      <div className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto container-padding">
          <h1 className="text-4xl font-bold mb-8">Solutions</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Industry-specific solutions coming soon...
          </p>
        </div>
      </div>
    </>
  );
};

export default SolutionsPage;