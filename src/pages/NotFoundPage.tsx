import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - TechSolutions</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen pt-24 pb-16 flex items-center">
        <div className="container mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-8xl md:text-9xl font-bold text-primary-600 mb-4">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-md mx-auto mb-8">
              The page you are looking for might have been removed, had its name changed, 
              or is temporarily unavailable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/" 
                className="btn btn-primary group"
              >
                <Home size={18} className="mr-2" />
                Back to Home
              </Link>
              
              <button 
                onClick={() => window.history.back()}
                className="btn btn-outline group"
              >
                <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                Go Back
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;