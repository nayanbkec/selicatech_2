import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';

// Context Providers
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

// Layout
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import SolutionsPage from './pages/SolutionsPage';
import SolutionDetailPage from './pages/SolutionDetailPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CaseStudyDetailPage from './pages/CaseStudyDetailPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import CareersPage from './pages/CareersPage';
import JobDetailPage from './pages/JobDetailPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';
import NotFoundPage from './pages/NotFoundPage';

// Components
import ScrollToTop from './components/common/ScrollToTop';
import LoadingSpinner from './components/common/LoadingSpinner';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <Router>
            <div className="App">
              <Routes>
                <Route path="/" element={<MainLayout />}>
                  <Route index element={<HomePage />} />
                  <Route path="about" element={<AboutPage />} />
                  <Route path="services" element={<ServicesPage />} />
                  <Route path="services/:serviceId" element={<ServiceDetailPage />} />
                  <Route path="solutions" element={<SolutionsPage />} />
                  <Route path="solutions/:solutionId" element={<SolutionDetailPage />} />
                  <Route path="case-studies" element={<CaseStudiesPage />} />
                  <Route path="case-studies/:caseStudyId" element={<CaseStudyDetailPage />} />
                  <Route path="blog" element={<BlogPage />} />
                  <Route path="blog/:postId" element={<BlogPostPage />} />
                  <Route path="careers" element={<CareersPage />} />
                  <Route path="careers/:jobId" element={<JobDetailPage />} />
                  <Route path="contact" element={<ContactPage />} />
                  <Route path="admin" element={<AdminPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Route>
              </Routes>
              <ScrollToTop />
              <Toaster 
                position="top-right"
                toastOptions={{
                  duration: 4000,
                  style: {
                    background: 'var(--toast-bg)',
                    color: 'var(--toast-color)',
                  },
                }}
              />
            </div>
          </Router>
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;