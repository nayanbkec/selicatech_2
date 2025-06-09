import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const JobDetailPage: React.FC = () => {
  const { jobId } = useParams();

  return (
    <>
      <Helmet>
        <title>Job Detail - SelicaTech</title>
        <meta
          name="description"
          content="Job details and application information."
        />
      </Helmet>

      <div className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto container-padding">
          <h1 className="text-4xl font-bold mb-8">Job: {jobId}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Job details coming soon...
          </p>
        </div>
      </div>
    </>
  );
};

export default JobDetailPage;