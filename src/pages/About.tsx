import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OptimizedImage from '../components/OptimizedImage';

const About: React.FC = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  return (
    <div className="min-h-screen pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary-green mb-6">
              About Daikon Vegan Sushi & Chef Mindy Lim
            </h1>
            <p className="text-2xl font-heading text-secondary-coral-dark mb-4">
              Peace on a Plate - A Story of Compassion & Culinary Excellence
            </p>
          </div>

        {/* Video Section */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-heading font-bold text-primary-green mb-6 text-center">
            Chef Mindy Lim's Story
          </h2>
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl bg-black/20">
              {isVideoVisible ? (
                <>
                  {!isVideoReady && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white font-body text-sm z-10">
                      Loading video…
                    </div>
                  )}
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                    poster="/chef-mindy-new.jpg"
                    onCanPlay={() => setIsVideoReady(true)}
                    loading="lazy"
                  >
                    <source src="/storyu-of-chef-mindy-lim.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsVideoVisible(true)}
                  className="relative w-full h-full"
                  aria-label="Play Chef Mindy Lim's story video"
                >
                  <OptimizedImage
                    src="/chef-mindy-new.jpg"
                    alt="Chef Mindy Lim smiling in the kitchen"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="w-16 h-16 md:w-20 md:h-20 bg-white/80 text-primary-green rounded-full flex items-center justify-center shadow-lg">
                      <svg
                        className="w-6 h-6 md:w-8 md:h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </div>
                </button>
              )}
            </div>
          </div>
          <p className="text-center text-lg text-dark-green font-body max-w-3xl mx-auto">
            Discover the inspiring journey of Chef Mindy Lim—from a profound dream that changed everything
            to creating Las Vegas's premier vegan sushi destination. Experience her story of compassion,
            culinary innovation, and unwavering dedication to plant-based excellence.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <OptimizedImage
                src="/chef-mindy-with-yellow-magic.png"
                alt="Chef Mindy Lim with Award-Winning Yellow Magic Roll"
                className="rounded-lg shadow-lg w-full"
                width={1200}
                height={900}
              />
            </div>
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary-green mb-4">
                Chef Mindy Lim's Vision
              </h2>
              <div className="space-y-4 text-lg text-dark-green font-body leading-relaxed">
                <p>
                  Chef Mindy Lim's journey began with a powerful dream in 2014—a moment of profound
                  empathy that sparked her transformation from managing three restaurants to pioneering
                  Las Vegas's premier vegan sushi destination.
                </p>
                <p>
                  Drawing on over two decades of culinary expertise, Chef Mindy dedicated six years to
                  perfecting plant-based alchemy. Her mission: create "compassionate food that sacrificed
                  none of the flavor"—proving that ethical eating can be both artful and accessible.
                </p>
                <p>
                  Her dedication has earned multiple recognitions: the{' '}
                  <a
                    href="https://www.peta.org/living/food/vegan-sushi-rolls/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-green hover:text-secondary-coral underline font-semibold transition-colors"
                  >
                    PETA 2024 Top 10 Vegan Sushi Roll
                  </a>
                  {' '}award for the Yellow Magic Roll,{' '}
                  <a
                    href="https://www.restaurantji.com/nv/las-vegas/daikon-vegan-sushi-and-more-/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-green hover:text-secondary-coral underline font-semibold transition-colors"
                  >
                    Restaurantji Recommended 2025
                  </a>
                  {' '}status, and exceptional{' '}
                  <a
                    href="https://www.yelp.com/biz/daikon-vegan-sushi-las-vegas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-green hover:text-secondary-coral underline font-semibold transition-colors"
                  >
                    4.9★ ratings on Yelp
                  </a>
                  {' '}and{' '}
                  <a
                    href="https://www.google.com/maps/search/Daikon+Vegan+Sushi+7210+W+Lake+Mead+Blvd+Las+Vegas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-green hover:text-secondary-coral underline font-semibold transition-colors"
                  >
                    Google
                  </a>.
                </p>
                <p>
                  Learn more about Chef Mindy's inspiring story in her{' '}
                  <Link
                    to="/blog/mindy-lim-bold-journey-interview"
                    className="text-primary-green hover:text-secondary-coral underline font-semibold transition-colors"
                  >
                    Bold Journey Magazine interview
                  </Link>
                  , where she shares the pivotal dream that changed everything and the three essential skills that define her success. You can also read the{' '}
                  <a
                    href="https://boldjourney.com/meet-mindy-lim/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-green hover:text-secondary-coral underline font-semibold transition-colors"
                  >
                    original Bold Journey feature article
                  </a>
                  {' '}directly on their magazine platform.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="border-t-2 border-primary-green border-opacity-20 pt-12 mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-xl text-dark-green font-body leading-relaxed text-center max-w-4xl mx-auto mb-8">
              We believe in "Peace on a Plate" — creating compassionate, sustainable cuisine that
              nourishes the body, delights the senses, and honors all living beings.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary-green mb-3">
                100% Plant-Based
              </h3>
              <p className="text-dark-green font-body">
                Every dish is crafted entirely from plants, with no animal products whatsoever.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary-green mb-3">
                Compassionate Cuisine
              </h3>
              <p className="text-dark-green font-body">
                We believe great food should never come at the expense of animals or the planet.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary-green mb-3">
                Culinary Excellence
              </h3>
              <p className="text-dark-green font-body">
                Six years of recipe development ensures every dish is a masterpiece.
              </p>
            </div>
          </div>

          {/* Awards & Recognition Section */}
          <div className="bg-accent-gold bg-opacity-20 border-2 border-accent-gold rounded-lg p-8">
            <h3 className="text-2xl font-heading font-bold text-primary-green mb-6 text-center">
              Awards & Recognition
            </h3>

            {/* Awards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <a
                href="https://www.peta.org/living/food/vegan-sushi-rolls/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <img src="/logos/peta-logo.svg" alt="PETA" className="h-10 w-auto mx-auto mb-2" loading="lazy" />
                <p className="font-heading font-bold text-primary-green text-sm">PETA 2024</p>
                <p className="text-xs text-dark-green">Top 10 Vegan Sushi</p>
              </a>
              <a
                href="https://www.restaurantji.com/nv/las-vegas/daikon-vegan-sushi-and-more-/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <img src="/logos/daikon-best-2025.png" alt="Restaurantji" className="h-12 w-auto mx-auto mb-2" loading="lazy" />
                <p className="font-heading font-bold text-primary-green text-sm">Restaurantji</p>
                <p className="text-xs text-dark-green">Recommended 2025</p>
              </a>
              <a
                href="https://www.yelp.com/biz/daikon-vegan-sushi-las-vegas"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <img src="/logos/yelp-logo.png" alt="Yelp" className="h-8 w-auto mx-auto mb-3" loading="lazy" />
                <p className="font-heading font-bold text-primary-green text-sm">4.9★ Yelp</p>
                <p className="text-xs text-dark-green">Exceptional Reviews</p>
              </a>
              <a
                href="https://www.google.com/maps/search/Daikon+Vegan+Sushi+7210+W+Lake+Mead+Blvd+Las+Vegas"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <img src="/logos/google-logo.png" alt="Google" className="h-8 w-auto mx-auto mb-3" loading="lazy" />
                <p className="font-heading font-bold text-primary-green text-sm">4.9★ Google</p>
                <p className="text-xs text-dark-green">Top Rated</p>
              </a>
            </div>

            {/* Certificate Display */}
            <div className="flex justify-center mb-8">
              <a
                href="https://www.restaurantji.com/nv/las-vegas/daikon-vegan-sushi-and-more-/"
                target="_blank"
                rel="noopener noreferrer"
                className="block max-w-sm hover:scale-105 transition-transform duration-300"
              >
                <img
                  src="/Daikon-Vegan-Sushi.png"
                  alt="Restaurantji Certificate of Excellence 2025 - Daikon Vegan Sushi"
                  className="w-full h-auto rounded-lg shadow-xl"
                  loading="lazy"
                />
              </a>
            </div>

            <p className="text-lg text-dark-green font-body mb-6 text-center max-w-3xl mx-auto">
              Chef Mindy's signature{' '}
              <Link to="/blog/ultimate-guide-vegan-sushi-las-vegas" className="text-primary-green hover:text-secondary-coral underline font-semibold transition-colors">
                Yellow Magic Roll
              </Link>{' '}
              earned national recognition from PETA. Read her{' '}
              <Link
                to="/blog/mindy-lim-bold-journey-interview"
                className="text-primary-green hover:text-secondary-coral underline font-semibold transition-colors"
              >
                Bold Journey Magazine interview
              </Link>{' '}
              to discover the story behind the award-winning cuisine.
            </p>

            <div className="text-center">
              <Link
                to="/blog/ultimate-guide-vegan-sushi-las-vegas"
                className="inline-block bg-primary-green hover:bg-opacity-90 text-white font-body font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore Our Award-Winning Menu
              </Link>
            </div>
          </div>
        </div>

        {/* Two Locations */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-heading font-bold text-primary-green mb-8 text-center">
            Two Locations Serving Las Vegas
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="text-center">
              <h3 className="text-2xl font-heading font-semibold text-secondary-coral-dark mb-3">
                Daikon Vegan Sushi & More
              </h3>
              <p className="text-dark-green font-body mb-3">
                Our flagship location specializing in innovative{' '}
                <Link to="/blog/ultimate-guide-vegan-sushi-las-vegas" className="text-primary-green hover:text-secondary-coral underline transition-colors">
                  vegan sushi creations
                </Link>
              </p>
              <p className="text-dark-green font-body text-sm">
                Summerlin / West Las Vegas
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-heading font-semibold text-secondary-coral-dark mb-3">
                Basil Vegan Thai & Sushi
              </h3>
              <p className="text-dark-green font-body mb-3">
                Our sister restaurant offering authentic Thai cuisine alongside{' '}
                <Link to="/blog/vegan-ramen-las-vegas" className="text-primary-green hover:text-secondary-coral underline transition-colors">
                  sushi and ramen favorites
                </Link>
              </p>
              <p className="text-dark-green font-body text-sm">
                Henderson
              </p>
            </div>
          </div>
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-block bg-secondary-coral hover:bg-secondary-coral-dark text-white font-body font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Locations, Hours & Directions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
