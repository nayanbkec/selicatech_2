import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Solutions from '../components/home/Solutions';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import CaseStudies from '../components/home/CaseStudies';
import Blog from '../components/home/Blog';
import Partners from '../components/home/Partners';
import CTA from '../components/home/CTA';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>TechSolutions - Innovative IT Solutions & Services</title>
        <meta 
          name="description" 
          content="Leading IT company providing innovative software development, cloud solutions, AI services, and digital transformation for global businesses." 
        />
        <meta 
          name="keywords" 
          content="IT solutions, software development, cloud services, AI, digital transformation, ERP, CRM" 
        />
        <link rel="canonical" href="https://techsolutions.com/" />
      </Helmet>

      <div className="space-y-section">
        <Hero />
        <Services />
        <Solutions />
        <Stats />
        <CaseStudies />
        <Testimonials />
        <Partners />
        <Blog />
        <CTA />
      </div>
    </>
  );
};

export default HomePage;