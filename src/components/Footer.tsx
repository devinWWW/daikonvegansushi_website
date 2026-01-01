import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-primary-green text-neutral-cream py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            {/* About */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-heading font-bold mb-4 text-white">Daikon Vegan Sushi</h3>
              <p className="font-body text-neutral-cream text-opacity-90 mb-4 leading-relaxed">
                Award-winning plant-based Japanese cuisine at two Las Vegas locations. 
                Experience authentic vegan sushi and ramen crafted with passion.
              </p>
              <div className="space-y-2">
                <a
                  href="https://www.peta.org/living/food/vegan-sushi-rolls/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-body text-neutral-cream text-opacity-80 flex items-center hover:text-white transition-colors"
                >
                  <span className="inline-block w-2 h-2 bg-accent-gold rounded-full mr-2"></span>
                  PETA 2024 Top 10 Vegan Sushi Roll
                </a>
                <a
                  href="https://www.restaurantji.com/nv/las-vegas/daikon-vegan-sushi-and-more-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-body text-neutral-cream text-opacity-80 flex items-center hover:text-white transition-colors"
                >
                  <span className="inline-block w-2 h-2 bg-accent-gold rounded-full mr-2"></span>
                  Restaurantji Recommended 2025
                </a>
              </div>
            </div>

            {/* Order Online */}
            <div>
              <h4 className="text-xl font-heading font-semibold mb-4 text-white">Order Online</h4>
              <nav className="space-y-3 font-body text-sm">
                <a
                  href="https://order.toasttab.com/online/daikon-vegan-sushi-more"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block text-neutral-cream hover:text-white transition-colors"
                  aria-label="Order online via Toast"
                >
                  Toast Ordering
                </a>
                <a
                  href="https://www.doordash.com/store/daikon-vegan-sushi-&-more-las-vegas-33987551/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block text-neutral-cream hover:text-white transition-colors group"
                  aria-label="DoorDash - 4.9 star rating"
                >
                  DoorDash
                  <span className="text-xs text-neutral-cream text-opacity-70 ml-1">(4.9★)</span>
                </a>
                <a
                  href="https://www.ubereats.com/store/daikon-vegan-sushi-%26-more/a2Hn0W8uUfGnFzkZdi41ZA"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block text-neutral-cream hover:text-white transition-colors group"
                  aria-label="Uber Eats - 4.9 star rating"
                >
                  Uber Eats
                  <span className="text-xs text-neutral-cream text-opacity-70 ml-1">(4.9★)</span>
                </a>
              </nav>
            </div>

            {/* Reviews & Media */}
            <div>
              <h4 className="text-xl font-heading font-semibold mb-4 text-white">Reviews & Press</h4>
              <nav className="space-y-3 font-body text-sm">
                <a
                  href="https://www.yelp.com/biz/daikon-vegan-sushi-las-vegas"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block text-neutral-cream hover:text-white transition-colors group"
                  aria-label="Yelp reviews - 4.9 star rating"
                >
                  Yelp Reviews
                  <span className="text-xs text-neutral-cream text-opacity-70 ml-1">(4.9★)</span>
                </a>
                <a
                  href="https://www.google.com/maps/search/Daikon+Vegan+Sushi+7210+W+Lake+Mead+Blvd+Las+Vegas"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block text-neutral-cream hover:text-white transition-colors group"
                  aria-label="Google Maps location - 4.9 star rating"
                >
                  Google Maps
                  <span className="text-xs text-neutral-cream text-opacity-70 ml-1">(4.9★)</span>
                </a>
                <a
                  href="https://vegas.eater.com/2020/12/15/22176681/daikon-vegan-sushi-more-open-takeout-delivery"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block text-neutral-cream hover:text-white transition-colors"
                  aria-label="Vegas Eater feature"
                >
                  Vegas Eater
                  <span className="text-xs text-neutral-cream text-opacity-80 ml-1">(Feature)</span>
                </a>
                <a
                  href="https://963kklz.com/listicle/3-vegas-vegan-restaurants-you-are-sleeping-on/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block text-neutral-cream hover:text-white transition-colors"
                  aria-label="96.3 KKLZ Radio feature"
                >
                  96.3 KKLZ Radio
                  <span className="text-xs text-neutral-cream text-opacity-80 ml-1">(Radio)</span>
                </a>
                <a
                  href="https://www.reddit.com/r/VeganFoodPorn/comments/1lcl0mr/daikon_vegan_sushi_las_vegas/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block text-neutral-cream hover:text-white transition-colors"
                  aria-label="Reddit community feature"
                >
                  Reddit Feature
                  <span className="text-xs text-neutral-cream text-opacity-80 ml-1">(Community)</span>
                </a>
                <a
                  href="https://boldjourney.com/meet-mindy-lim/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-neutral-cream hover:text-white transition-colors"
                  aria-label="Bold Journey Magazine interview with Chef Mindy Lim"
                >
                  Bold Journey Magazine
                  <span className="text-xs text-neutral-cream text-opacity-80 ml-1">(Interview)</span>
                </a>
                <a
                  href="https://www.restaurantji.com/nv/las-vegas/daikon-vegan-sushi-and-more-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-neutral-cream hover:text-white transition-colors"
                  aria-label="Restaurantji Recommended Restaurant"
                >
                  Restaurantji
                  <span className="text-xs text-neutral-cream text-opacity-80 ml-1">(Recommended)</span>
                </a>
              </nav>
            </div>

            {/* Site Navigation */}
            <div>
              <h4 className="text-xl font-heading font-semibold mb-4 text-white">Site Navigation</h4>
              <nav className="space-y-3 font-body text-sm">
                <Link
                  to="/"
                  className="block text-neutral-cream hover:text-white transition-colors"
                  aria-label="Go to home page"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block text-neutral-cream hover:text-white transition-colors"
                  aria-label="Learn about Daikon Vegan Sushi"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="block text-neutral-cream hover:text-white transition-colors"
                  aria-label="Contact us and get directions"
                >
                  Contact & Locations
                </Link>
                <Link
                  to="/blog"
                  className="block text-neutral-cream hover:text-white transition-colors"
                  aria-label="Read our blog"
                >
                  Blog
                </Link>
                <Link
                  to="/faq"
                  className="block text-neutral-cream hover:text-white transition-colors"
                  aria-label="Frequently asked questions"
                >
                  FAQ
                </Link>
                <a
                  href="https://www.waze.com/live-map/directions/us/nv/las-vegas/daikon-vegan-sushi?to=place.ChIJXWYxWrzByIART9zTSe0W0Cs"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block text-neutral-cream hover:text-white transition-colors"
                  aria-label="Get directions via Waze"
                >
                  Waze Directions
                </a>
                <a
                  href="https://www.findmeglutenfree.com/biz/daikon-vegan-sushi-and-more/6350658402385920"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block text-neutral-cream hover:text-white transition-colors"
                  aria-label="View on Find Me Gluten Free"
                >
                  Find Me Gluten Free
                </a>
              </nav>
            </div>

            {/* Social & Connect */}
            <div>
              <h4 className="text-xl font-heading font-semibold mb-4 text-white">Connect</h4>
              
              {/* Social Media Icons */}
              <div className="flex space-x-3 mb-6" role="group" aria-label="Social media links">
                <a
                  href="https://www.instagram.com/daikonvegansushi/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="w-11 h-11 bg-secondary-coral rounded-full flex items-center justify-center hover:bg-white hover:text-secondary-coral transition-all duration-300 transform hover:scale-110"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                <a
                  href="https://www.facebook.com/p/Daikon-Vegan-Sushi-100040406419140/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="w-11 h-11 bg-secondary-coral rounded-full flex items-center justify-center hover:bg-white hover:text-secondary-coral transition-all duration-300 transform hover:scale-110"
                  aria-label="Follow us on Facebook"
                >
                  <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                <a
                  href="https://www.tiktok.com/tag/daikonvegansushi"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="w-11 h-11 bg-secondary-coral rounded-full flex items-center justify-center hover:bg-white hover:text-secondary-coral transition-all duration-300 transform hover:scale-110"
                  aria-label="Follow us on TikTok"
                >
                  <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </a>
              </div>

              {/* Contact Information */}
              <div className="text-sm font-body space-y-3">
                <div className="space-y-2">
                  <h5 className="font-heading font-semibold text-white text-xs uppercase tracking-wide">Summerlin Location</h5>
                  <a 
                    href="https://www.daikonvegansushi.com" 
                    target="_blank" 
                    rel="noopener noreferrer nofollow" 
                    className="block text-neutral-cream underline decoration-accent-gold decoration-2 underline-offset-4 hover:text-white transition-colors font-semibold"
                    aria-label="Visit Daikon Vegan Sushi website"
                  >
                    Daikon Vegan Sushi
                  </a>
                  <a href="tel:7027493283" className="block text-neutral-cream hover:text-white transition-colors">
                    (702) 749-3283
                  </a>
                  <a 
                    href="https://www.google.com/maps/search/Daikon+Vegan+Sushi+7210+W+Lake+Mead+Blvd+Las+Vegas" 
                    target="_blank" 
                    rel="noopener noreferrer nofollow" 
                    className="block text-neutral-cream hover:text-white transition-colors leading-relaxed"
                    aria-label="Get directions to Summerlin location"
                  >
                    7210 W Lake Mead Blvd, Ste 1<br />
                    Las Vegas, NV 89128
                  </a>
                </div>
                
                <div className="space-y-2 pt-2">
                  <h5 className="font-heading font-semibold text-white text-xs uppercase tracking-wide">Henderson Location</h5>
                  <a 
                    href="https://basilveganthai.com" 
                    target="_blank" 
                    rel="noopener noreferrer nofollow" 
                    className="block text-neutral-cream underline decoration-accent-gold decoration-2 underline-offset-4 hover:text-white transition-colors font-semibold"
                    aria-label="Visit Basil Vegan Thai & Sushi website"
                  >
                    Basil Vegan Thai & Sushi
                  </a>
                  <a href="tel:7023573837" className="block text-neutral-cream hover:text-white transition-colors">
                    (702) 357-3837
                  </a>
                  <a 
                    href="https://www.google.com/maps/search/Basil+Vegan+Thai+500+E+Windmill+Ln+Las+Vegas" 
                    target="_blank" 
                    rel="noopener noreferrer nofollow" 
                    className="block text-neutral-cream hover:text-white transition-colors leading-relaxed"
                    aria-label="Get directions to Henderson location"
                  >
                    500 E Windmill Ln #145<br />
                    Las Vegas, NV 89123
                  </a>
                </div>
              </div>
            </div>
        </div>

          {/* Logo Cloud Row */}
          <div className="border-t border-neutral-cream border-opacity-20 pt-8 pb-6">
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              <a href="https://www.peta.org/living/food/vegan-sushi-rolls/" target="_blank" rel="noopener noreferrer" aria-label="PETA" className="opacity-60 hover:opacity-100 transition-opacity">
                <img src="/logos/peta-logo.svg" alt="PETA" className="h-6 md:h-8 w-auto " loading="lazy" />
              </a>
              <a href="https://www.restaurantji.com/nv/las-vegas/daikon-vegan-sushi-and-more-/" target="_blank" rel="noopener noreferrer" aria-label="Restaurantji" className="opacity-60 hover:opacity-100 transition-opacity">
                <img src="/logos/daikon-best-2025.png" alt="Restaurantji Recommends" className="h-8 md:h-10 w-auto " loading="lazy" />
              </a>
              <a href="https://www.yelp.com/biz/daikon-vegan-sushi-las-vegas" target="_blank" rel="noopener noreferrer" aria-label="Yelp" className="opacity-60 hover:opacity-100 transition-opacity">
                <img src="/logos/yelp-logo.png" alt="Yelp" className="h-6 md:h-8 w-auto " loading="lazy" />
              </a>
              <a href="https://www.google.com/maps/search/Daikon+Vegan+Sushi+7210+W+Lake+Mead+Blvd+Las+Vegas" target="_blank" rel="noopener noreferrer" aria-label="Google" className="opacity-60 hover:opacity-100 transition-opacity">
                <img src="/logos/google-logo.png" alt="Google" className="h-6 md:h-8 w-auto " loading="lazy" />
              </a>
              <a href="https://www.doordash.com/store/daikon-vegan-sushi-&-more-las-vegas-33987551/" target="_blank" rel="noopener noreferrer" aria-label="DoorDash" className="opacity-60 hover:opacity-100 transition-opacity">
                <img src="/logos/doordash-logo.png" alt="DoorDash" className="h-5 md:h-6 w-auto " loading="lazy" />
              </a>
              <a href="https://www.ubereats.com/store/daikon-vegan-sushi-%26-more/a2Hn0W8uUfGnFzkZdi41ZA" target="_blank" rel="noopener noreferrer" aria-label="Uber Eats" className="opacity-60 hover:opacity-100 transition-opacity">
                <img src="/logos/ubereat-logo.png" alt="Uber Eats" className="h-5 md:h-6 w-auto " loading="lazy" />
              </a>
            </div>
          </div>

          {/* Legal & Copyright */}
          <div className="border-t border-neutral-cream border-opacity-20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="font-body text-sm text-neutral-cream text-opacity-80">
                  &copy; {new Date().getFullYear()} Daikon Vegan Sushi & More. All rights reserved.
                </p>
              </div>
              
              <nav className="flex flex-wrap justify-center md:justify-end gap-3 text-sm">
                <Link
                  to="/privacy-policy"
                  className="inline-flex min-h-[2.75rem] min-w-[2.75rem] items-center justify-center rounded-lg px-4 py-2 text-neutral-cream text-opacity-80 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/70"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms-of-service"
                  className="inline-flex min-h-[2.75rem] min-w-[2.75rem] items-center justify-center rounded-lg px-4 py-2 text-neutral-cream text-opacity-80 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/70"
                >
                  Terms of Service
                </Link>
                <Link
                  to="/accessibility"
                  className="inline-flex min-h-[2.75rem] min-w-[2.75rem] items-center justify-center rounded-lg px-4 py-2 text-neutral-cream text-opacity-80 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/70"
                >
                  Accessibility
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex min-h-[2.75rem] min-w-[2.75rem] items-center justify-center rounded-lg px-4 py-2 text-neutral-cream text-opacity-80 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/70"
                >
                  Contact Us
                </Link>
              </nav>
            </div>
            
            <div className="mt-4 pt-4 border-t border-neutral-cream border-opacity-10 text-center">
              <p className="text-xs text-neutral-cream text-opacity-60 font-body">
                Serving Las Vegas with award-winning vegan Japanese cuisine since 2020 •
                <a href="https://www.peta.org/living/food/vegan-sushi-rolls/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">PETA 2024 Top 10</a>
                {' '}•{' '}
                <a href="https://www.restaurantji.com/nv/las-vegas/daikon-vegan-sushi-and-more-/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Restaurantji Recommended 2025</a>
                {' '}• 4.9★ on{' '}
                <a href="https://www.yelp.com/biz/daikon-vegan-sushi-las-vegas" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Yelp</a>
                {' '}& {' '}
                <a href="https://www.google.com/maps/search/Daikon+Vegan+Sushi+7210+W+Lake+Mead+Blvd+Las+Vegas" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Google</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
