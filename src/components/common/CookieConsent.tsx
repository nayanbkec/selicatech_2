import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-dark-800 border-t border-gray-200 dark:border-dark-700 shadow-lg"
        >
          <div className="container mx-auto container-padding py-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start space-x-3">
                <Cookie className="text-primary-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    We use cookies
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    We use cookies to enhance your browsing experience, serve personalized content, 
                    and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 flex-shrink-0">
                <button
                  onClick={declineCookies}
                  className="btn btn-ghost text-sm"
                >
                  Decline
                </button>
                <button
                  onClick={acceptCookies}
                  className="btn btn-primary text-sm"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;