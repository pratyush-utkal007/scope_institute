/**
 * enquiryService.js
 * Dedicated service module handling student admission and course enquiries.
 * Ready for future backend REST API integration.
 */

export const submitEnquiry = async (formData) => {
  // Validate client-side payload
  const { fullName, mobileNumber, email, course, message } = formData;

  if (!fullName || !fullName.trim()) {
    throw new Error("Full name is required.");
  }

  // 10-digit Indian mobile validation (starts with 6, 7, 8, or 9)
  const cleanMobile = mobileNumber ? mobileNumber.replace(/[\s-]/g, "") : "";
  const indianMobileRegex = /^[6-9]\d{9}$/;
  if (!indianMobileRegex.test(cleanMobile)) {
    throw new Error("Please enter a valid 10-digit Indian mobile number (e.g., 9876543210).");
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email.trim())) {
    throw new Error("Please enter a valid email address.");
  }

  if (!course || !course.trim()) {
    throw new Error("Please select a course of interest.");
  }

  // Simulate network request latency (ready for API integration)
  return new Promise((resolve) => {
    setTimeout(() => {
      // Structure of payload prepared for backend
      const enquiryPayload = {
        id: `ENQ-${Date.now()}`,
        fullName: fullName.trim(),
        mobileNumber: cleanMobile,
        email: email.trim().toLowerCase(),
        course: course.trim(),
        message: message ? message.trim() : "",
        submittedAt: new Date().toISOString(),
        status: "RECEIVED"
      };

      // In production, replace with:
      // return fetch('/api/enquiries', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(enquiryPayload)
      // }).then(res => res.json());

      resolve({
        success: true,
        message: "Your enquiry has been received! Our admissions counsellor will contact you shortly.",
        data: enquiryPayload
      });
    }, 750);
  });
};
