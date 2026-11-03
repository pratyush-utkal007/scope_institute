import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import toast from 'react-hot-toast';
import { submitEnquiry } from '../services/enquiryService';

const EnquiryContext = createContext(null);

export function EnquiryProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openEnquiryModal = useCallback((courseName = '') => {
    setSelectedCourse(courseName);
    setIsOpen(true);
  }, []);

  const closeEnquiryModal = useCallback(() => {
    if (isSubmitting) return; // Prevent closing while processing
    setIsOpen(false);
  }, [isSubmitting]);

  // Handle escape key and prevent body scroll when open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen && !isSubmitting) {
        closeEnquiryModal();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, isSubmitting, closeEnquiryModal]);

  const handleEnquirySubmit = async (formData) => {
    setIsSubmitting(true);
    const loadingToast = toast.loading('Submitting your enquiry...');
    try {
      const response = await submitEnquiry(formData);
      toast.dismiss(loadingToast);
      toast.success(response.message || 'Enquiry submitted successfully!', {
        duration: 5000,
        icon: '🎓'
      });
      setIsOpen(false);
      return { success: true };
    } catch (err) {
      toast.dismiss(loadingToast);
      const errMsg = err?.message || 'Failed to submit enquiry. Please try again.';
      toast.error(errMsg, { duration: 4000 });
      return { success: false, error: errMsg };
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <EnquiryContext.Provider
      value={{
        isOpen,
        selectedCourse,
        isSubmitting,
        openEnquiryModal,
        closeEnquiryModal,
        handleEnquirySubmit
      }}
    >
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error('useEnquiry must be used within an EnquiryProvider');
  }
  return context;
}
