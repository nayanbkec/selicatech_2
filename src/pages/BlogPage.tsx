import React from 'react';
import { Helmet } from 'react-helmet-async';

const BlogPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blog - TechSolutions</title>
        <meta name="description" content="Latest insights and articles from our technology experts." />
      </Helmet>
      
      <div className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto container-padding">
          <h1 className="text-4xl font-bold mb-8">Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Blog posts coming soon...
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogPage;