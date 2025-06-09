import React from 'react';
import { Helmet } from 'react-helmet-async';

const AdminPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Admin Panel - TechSolutions</title>
        <meta name="description" content="Admin panel for content management." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto container-padding">
          <h1 className="text-4xl font-bold mb-8">Admin Panel</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Admin functionality coming soon...
          </p>
        </div>
      </div>
    </>
  );
};

export default AdminPage;