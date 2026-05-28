'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, X } from 'lucide-react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Small delay to avoid flash on page load
      setTimeout(() => {
        setShowBanner(true);
      }, 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
  };

  const handleClose = () => {
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 lg:hidden"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Cookie Banner */}
      <div
        className="fixed bottom-0 left-0 right-0 lg:bottom-6 lg:left-6 lg:right-auto lg:max-w-md z-50 animate-in slide-in-from-bottom duration-500"
        role="dialog"
        aria-live="polite"
        aria-label="Cookie consent banner"
      >
        <div className="bg-white border-t-4 border-[#0a5c57] lg:border lg:border-gray-200 lg:rounded-lg shadow-2xl mx-0 lg:mx-0">
          {/* Header */}
          <div className="flex items-start justify-between p-4 lg:p-6 pb-3">
            <div className="flex items-center gap-3">
              <div className="shrink-0 w-10 h-10 bg-[#eef7f6] rounded-full flex items-center justify-center">
                <Cookie className="w-5 h-5 text-[#0a5c57]" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Cookie Notice</h3>
            </div>
            <button
              onClick={handleClose}
              className="lg:hidden text-gray-400 hover:text-gray-600 p-1 rounded focus:outline-none focus:ring-2 focus:ring-[#0a5c57]"
              aria-label="Close cookie banner"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          {/* Content */}
          <div className="px-4 lg:px-6 pb-4">
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              We use cookies to enhance your browsing experience, analyze site traffic, and improve our services.
              By clicking "Accept All", you consent to our use of cookies.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-3">
              <button
                onClick={handleAccept}
                className="flex-1 bg-[#0a5c57] hover:bg-[#084844] text-white px-4 py-2.5 rounded text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#0a5c57] focus:ring-offset-2"
              >
                Accept All
              </button>
              <button
                onClick={handleReject}
                className="flex-1 bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-4 py-2.5 rounded text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#0a5c57] focus:ring-offset-2"
              >
                Reject All
              </button>
            </div>

            <div className="text-center">
              <Link
                href="/cookie-policy"
                className="text-xs text-[#0a5c57] hover:underline font-medium focus:outline-none focus:ring-2 focus:ring-[#0a5c57] rounded px-1"
              >
                Learn more about our cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
