import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const CaseStudyDetailPage: React.FC = () => {
  const { caseStudyId } = useParams();

  return (
    <>
      <Helmet>
        <title>Case Study Detail - SelicaTech</title>
        <meta name="description" content="Detailed case study information." />
      </Helmet>

      <div className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto container-padding">
          <h1 className="text-4xl font-bold mb-8">Case Study: {caseStudyId}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Case study details coming soon...
          </p>
        </div>
      </div>
    </>
  );
};

export default CaseStudyDetailPage;