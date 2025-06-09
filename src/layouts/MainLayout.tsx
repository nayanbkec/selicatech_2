import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import CookieConsent from '../components/common/CookieConsent';
import LiveChat from '../components/common/LiveChat';

const MainLayout: React.FC = () => {
  const location = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
      <LiveChat />
    </div>
  );
};

export default MainLayout;