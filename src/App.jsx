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

// Scroll to top helper on every page route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 650,
      once: true,
      easing: 'ease-out-cubic',
      offset: 50,
      disable: 'mobile' // ensure smooth performance on low-end mobile devices while keeping animations on tablet/desktop
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
              {/* <Route path="/about" element={<About />} /> */}
              {/* <Route path="/courses" element={<Courses />} /> */}
              {/* <Route path="/contact" element={<Contact />} /> */}
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
                background: '#102A43',
                color: '#FFFFFF',
                borderRadius: '12px',
                padding: '12px 16px',
                fontSize: '14px',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.25)'
              },
              success: {
                iconTheme: {
                  primary: '#38BDF8',
                  secondary: '#102A43'
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
