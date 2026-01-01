import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Determine if we're on the home page (which has the hero)
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Menu', path: 'https://order.toasttab.com/online/daikon-vegan-sushi-more', external: true },
    { name: 'Reservation', path: 'https://tables.toasttab.com/restaurants/95c14348-a3ae-4de8-a7b2-15c5d41b0e11/findTime', external: true },
    { name: 'Gift Card', path: 'https://www.toasttab.com/daikon-vegan-sushi-more/giftcards', external: true },
    { name: 'Contact & FAQ', path: '#', hasDropdown: true },
  ];

  const contactFAQItems = [
    { name: 'Promotions', path: '/promotions', external: false },
    { name: 'Contact Us', path: '/contact', external: false },
    { name: 'FAQ', path: '/faq', external: false },
    { name: 'Blog', path: '/blog', external: false },
  ];


  // Navbar should be solid white on non-home pages, or when scrolled on home page
  const shouldBeWhite = !isHomePage || isScrolled;

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          shouldBeWhite
            ? 'bg-white shadow-lg py-4'
            : 'bg-transparent py-6'
        }`}
        aria-label="Primary navigation"
      >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/daikon-logo.svg"
              alt="Daikon Vegan Sushi"
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="relative">
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                      className={`font-body font-medium transition-all px-3 py-2 rounded-lg flex items-center ${
                        shouldBeWhite
                          ? 'text-dark-green hover:text-secondary-coral hover:bg-secondary-coral hover:bg-opacity-10'
                          : 'text-white hover:text-secondary-coral hover:bg-white hover:bg-opacity-10'
                      }`}
                    >
                      {link.name}
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === link.name && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                        {contactFAQItems.map((item) => (
                          item.external ? (
                            <a
                              key={item.path}
                              href={item.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-4 py-2 text-dark-green hover:bg-neutral-cream font-body font-medium"
                            >
                              {item.name}
                            </a>
                          ) : (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="block px-4 py-2 text-dark-green hover:bg-neutral-cream font-body font-medium"
                            >
                              {item.name}
                            </Link>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              
              return link.external ? (
                <a
                  key={link.path}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-body font-medium transition-all px-3 py-2 rounded-lg ${
                    shouldBeWhite
                      ? 'text-dark-green hover:text-secondary-coral hover:bg-secondary-coral hover:bg-opacity-10'
                      : 'text-white hover:text-secondary-coral hover:bg-white hover:bg-opacity-10'
                  }`}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-body font-medium transition-all px-3 py-2 rounded-lg ${
                    location.pathname === link.path
                      ? 'bg-secondary-coral text-white font-semibold'
                      : shouldBeWhite
                      ? 'text-dark-green hover:text-secondary-coral hover:bg-secondary-coral hover:bg-opacity-10'
                      : 'text-white hover:text-secondary-coral hover:bg-white hover:bg-opacity-10'
                  }`}
                  aria-current={location.pathname === link.path ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

            {/* Mobile Menu Button - Simplified */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              isMobileMenuOpen 
                ? 'bg-secondary-coral text-white' 
                : shouldBeWhite 
                  ? 'text-primary-green hover:bg-neutral-cream' 
                  : 'text-white hover:bg-white hover:bg-opacity-20'
            }`}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="primary-navigation"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu - Spa Style */}
        {isMobileMenuOpen && (
          <div
            id="primary-navigation"
            className="md:hidden mt-4 bg-white rounded-lg shadow-xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-100">
              <h3 className="text-lg font-heading font-bold text-primary-green">Daikon Vegan Sushi</h3>
              <p className="text-sm text-dark-green font-body">Award-winning plant-based Japanese cuisine</p>
            </div>
            {/* Navigation Links */}
            <div className="py-2">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div key={link.name}>
                      <div className="px-4 py-3 font-body font-semibold text-dark-green border-b border-gray-100 bg-neutral-cream">
                        {link.name}
                      </div>
                      {contactFAQItems.map((item) => (
                        item.external ? (
                          <a
                            key={item.path}
                            href={item.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-8 py-3 font-body font-medium text-dark-green hover:bg-neutral-cream border-b border-gray-50"
                          >
                            {item.name}
                          </a>
                        ) : (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-8 py-3 font-body font-medium text-dark-green hover:bg-neutral-cream border-b border-gray-50"
                          >
                            {item.name}
                          </Link>
                        )
                      ))}
                    </div>
                  );
                }
                
                return link.external ? (
                  <a
                    key={link.path}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 font-body font-medium text-dark-green hover:bg-neutral-cream border-b border-gray-50"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 font-body font-medium border-b border-gray-50 ${
                      location.pathname === link.path
                        ? 'text-white bg-secondary-coral'
                        : 'text-dark-green hover:bg-neutral-cream'
                    }`}
                    aria-current={location.pathname === link.path ? 'page' : undefined}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}

      </div>
      </nav>
    </>
  );
};

export default Navbar;
