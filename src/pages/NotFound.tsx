import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-cream to-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-heading font-bold text-primary-green opacity-20">
            404
          </h1>
        </div>

        {/* Main Message */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-green mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-dark-green font-body leading-relaxed">
            Oops! It looks like this page has rolled away. Don't worry, our delicious vegan sushi is still here waiting for you.
          </p>
        </div>

        {/* Decorative Sushi Icon */}
        <div className="mb-8">
          <svg
            className="w-24 h-24 mx-auto text-secondary-coral opacity-60"
            viewBox="0 0 100 100"
            fill="currentColor"
            aria-hidden="true"
          >
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="3"/>
            <ellipse cx="50" cy="50" rx="30" ry="20" fill="currentColor" opacity="0.3"/>
            <rect x="35" y="40" width="30" height="20" rx="3" fill="currentColor" opacity="0.5"/>
          </svg>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-block bg-secondary-coral hover:bg-secondary-coral-dark text-white font-body font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Return Home
          </Link>
          <Link
            to="/contact"
            className="inline-block bg-primary-green hover:bg-opacity-90 text-white font-body font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Contact Us
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-neutral-cream">
          <p className="text-dark-green font-body mb-4">Looking for something specific?</p>
          <nav className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/about" className="text-primary-green hover:text-secondary-coral transition-colors font-body">
              About Us
            </Link>
            <Link to="/blog" className="text-primary-green hover:text-secondary-coral transition-colors font-body">
              Blog
            </Link>
            <Link to="/faq" className="text-primary-green hover:text-secondary-coral transition-colors font-body">
              FAQ
            </Link>
            <Link to="/catering" className="text-primary-green hover:text-secondary-coral transition-colors font-body">
              Catering
            </Link>
            <a
              href="https://order.toasttab.com/online/daikon-vegan-sushi-more"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-green hover:text-secondary-coral transition-colors font-body"
            >
              Order Online
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
