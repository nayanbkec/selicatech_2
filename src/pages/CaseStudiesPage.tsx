import React from 'react';
import { Helmet } from 'react-helmet-async';

const CaseStudiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies - SelicaTech</title>
        <meta
          name="description"
          content="Success stories and case studies from our projects."
        />
      </Helmet>

      <div className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto container-padding">
          <h1 className="text-4xl font-bold mb-8">Case Studies</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Case studies coming soon...
          </p>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;