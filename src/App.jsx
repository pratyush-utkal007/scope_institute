import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { EnquiryProvider } from './hooks/useEnquiry';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import FloatingEnquiryBtn from './components/FloatingEnquiryBtn';

import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';

// Scroll to top helper on every page route change & trigger AOS refresh for mobile/desktop
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Refresh AOS animations on route transition
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 60);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: 'ease-out-cubic',
      offset: 40, // low offset triggers promptly on mobile viewports as well as desktop
      disable: false // explicitly enabled on BOTH mobile and desktop screens!
    });
  }, []);

  return (
    <EnquiryProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased font-sans">
          {/* Main Navigation */}
          <Navbar />

          {/* Primary Page Content */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/contact" element={<Contact />} />
              {/* Fallback route */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>

          {/* Main Footer */}
          <Footer />

          {/* Global Enquiry Modal */}
          <EnquiryModal />

          {/* Floating Enquire Now Button */}
          <FloatingEnquiryBtn />

          {/* Toast Notifications */}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#041934',
                color: '#FFFFFF',
                borderRadius: '14px',
                padding: '14px 18px',
                fontSize: '14px',
                border: '1px solid rgba(211, 155, 58, 0.3)',
                boxShadow: '0 12px 30px -5px rgba(4, 25, 52, 0.35)'
              },
              success: {
                iconTheme: {
                  primary: '#D39B3A',
                  secondary: '#041934'
                }
              },
              error: {
                iconTheme: {
                  primary: '#EF4444',
                  secondary: '#FFFFFF'
                }
              }
            }}
          />
        </div>
      </Router>
    </EnquiryProvider>
  );
}
