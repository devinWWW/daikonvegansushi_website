import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PromotionPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if popup was already dismissed using requestIdleCallback to avoid blocking
    const checkAndShow = () => {
      const dismissed = localStorage.getItem('promotion-popup-dismissed');
      if (!dismissed) {
        // Show popup after 3 seconds
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 3000);
        return () => clearTimeout(timer);
      }
    };

    if ('requestIdleCallback' in window) {
      const idleCallback = requestIdleCallback(checkAndShow, { timeout: 2000 });
      return () => cancelIdleCallback(idleCallback);
    } else {
      // Fallback for browsers without requestIdleCallback
      return checkAndShow();
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    // Remember dismissal for 24 hours
    localStorage.setItem('promotion-popup-dismissed', 'true');
    setTimeout(() => {
      localStorage.removeItem('promotion-popup-dismissed');
    }, 24 * 60 * 60 * 1000); // 24 hours
  };

  const handleViewPromotions = () => {
    handleDismiss();
  };

  if (!isVisible || isDismissed) {
    return null;
  }

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300"
        onClick={handleDismiss}
      />
      
      {/* Popup */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 transform transition-all duration-300 scale-100">
          {/* Close Button */}
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
            aria-label="Close promotion"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="p-6 pt-8">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="text-4xl mb-2">🎉</div>
              <h2 className="text-2xl font-heading font-bold text-primary-green mb-2">
                Special Offers Available Now!
              </h2>
              <p className="text-dark-green font-body text-sm leading-relaxed">
                Check out our latest promotions and member rewards
              </p>
            </div>

            {/* Promotions List */}
            <div className="space-y-4 mb-6">
              {/* Thanksgiving */}
              <div className="border-2 border-accent-gold rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🦃</span>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-primary-green mb-1">
                      Thanksgiving Vegan Feast
                    </h3>
                    <p className="text-dark-green font-body text-xs">
                      $45 per person set menu with harvest starters, seasonal rolls, entrées & desserts
                    </p>
                  </div>
                </div>
              </div>

              {/* Member Rewards */}
              <div className="border-2 border-secondary-coral rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">⭐</span>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-primary-green mb-1">
                      New Member Welcome
                    </h3>
                    <p className="text-dark-green font-body text-xs">
                      FREE CocoBanana Smoothie w/ $25 purchase + FREE Tomato Ramen at Daikon w/ $50 spend
                    </p>
                  </div>
                </div>
              </div>

              {/* Holiday Gift Cards */}
              <div className="border-2 border-primary-green rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🎁</span>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-primary-green mb-1">
                      Holiday Gift Cards
                    </h3>
                    <p className="text-dark-green font-body text-xs">
                      Get up to $20 bonus value when you purchase gift cards
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-3">
              <Link
                to="/promotions"
                onClick={handleViewPromotions}
                className="block w-full bg-primary-green hover:bg-opacity-90 text-white font-body font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
              >
                View All Promotions
              </Link>

              <a
                href="https://rewards.vegansushilv.com/scan"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDismiss}
                className="block w-full bg-secondary-coral hover:bg-secondary-coral-dark text-white font-body font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
              >
                Join Rewards Program
              </a>
            </div>

            {/* Footer */}
            <div className="mt-4 text-center">
              <button
                onClick={handleDismiss}
                className="text-gray-500 hover:text-gray-700 font-body text-xs underline transition-colors"
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromotionPopup;
