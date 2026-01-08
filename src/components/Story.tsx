import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Story: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-20 px-4 md:px-8 lg:px-16 bg-neutral-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image - Mobile Optimized */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{
              willChange: 'transform, opacity',
              backfaceVisibility: 'hidden',
            }}
          >
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/chef-mindy-cover.webp"
                alt="Chef Mindy Lim"
                className="w-full h-64 sm:h-80 md:h-auto object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Story Text */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{
              willChange: 'transform, opacity',
              backfaceVisibility: 'hidden',
            }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary-green mb-4 md:mb-6">
              Meet Chef Mindy Lim
            </h2>
            <div className="space-y-4 md:space-y-5 text-base sm:text-lg text-dark-green font-body leading-relaxed">
              <p>
                <Link to="/about" className="text-primary-green hover:text-secondary-coral underline font-semibold transition-colors">
                  Chef Mindy Lim's
                </Link> journey to plant-based cuisine began with a transformative dream in 2014.
                While managing three restaurants with over 20 years of culinary expertise, she had a powerful
                vision of a fish looking into her eyes and crying as she prepared it. This profound moment
                led her to become vegetarian immediately and set her on a
                <span className="font-semibold text-primary-green"> six-year path of recipe development and culinary innovation</span>.
              </p>
              <p>
                After six years of perfecting plant-based recipes and techniques, Chef Lim opened
                <span className="font-semibold text-primary-green"> Daikon Vegan Sushi in late 2020</span>, transforming
                vegetables, fruits, and mushrooms into exquisite{' '}
                <Link to="/blog/ultimate-guide-vegan-sushi-las-vegas" className="text-primary-green hover:text-secondary-coral underline transition-colors">
                  Japanese vegan cuisine
                </Link> using tofu, yuba, seitan, and
                whole foods. Her compassionate approach proves that plant-based dining can be both innovative
                and delicious, appealing to vegans and omnivores alike.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                Chef Mindy's dedication has earned multiple recognitions: her
                <span className="font-semibold text-secondary-coral-dark"> Yellow Magic Roll was named to PETA's 2024 Top 10 Vegan Sushi Rolls</span>,
                Daikon is a <span className="font-semibold text-secondary-coral-dark">Restaurantji Recommended</span> restaurant,
                and maintains <span className="font-semibold text-secondary-coral-dark">4.9★ ratings</span> across Yelp, Google, DoorDash, and Uber Eats.
                Today, Daikon stands as Las Vegas's premier vegan sushi destination at{' '}
                <Link to="/contact" className="text-primary-green hover:text-secondary-coral underline transition-colors">
                  two convenient locations
                </Link>.
              </p>
            </div>

            {/* CTA Buttons - Enhanced Mobile Layout */}
            <div className="mt-6 md:mt-8 flex flex-col gap-4">
              <Link
                to="/about"
                className="w-full inline-block bg-secondary-coral hover:bg-secondary-coral-dark text-white font-body font-bold px-6 py-4 rounded-xl text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-center"
              >
                Meet the Chef Behind PETA's Top Vegan Sushi Roll
              </Link>
              <Link
                to="/blog/ultimate-guide-vegan-sushi-las-vegas"
                className="w-full inline-block border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-white font-body font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 text-center text-base"
              >
                Taste the Future of Vegan Sushi
              </Link>
            </div>

            {/* Awards Grid */}
            <div className="mt-8 grid grid-cols-2 gap-3 max-w-md mx-auto md:mx-0">
              <div className="bg-accent-gold bg-opacity-30 border-2 border-accent-gold rounded-xl px-4 py-3 text-center">
                <p className="text-primary-green font-heading font-bold text-sm leading-tight">
                  PETA 2024
                </p>
                <p className="text-dark-green font-body text-xs mt-1">Top 10 Vegan Sushi</p>
              </div>
              <div className="bg-accent-gold bg-opacity-30 border-2 border-accent-gold rounded-xl px-4 py-3 text-center">
                <p className="text-primary-green font-heading font-bold text-sm leading-tight">
                  Restaurantji
                </p>
                <p className="text-dark-green font-body text-xs mt-1">Recommended 2025</p>
              </div>
              <div className="bg-accent-gold bg-opacity-30 border-2 border-accent-gold rounded-xl px-4 py-3 text-center">
                <p className="text-primary-green font-heading font-bold text-sm leading-tight">
                  4.9★ Rating
                </p>
                <p className="text-dark-green font-body text-xs mt-1">Yelp & Google</p>
              </div>
              <div className="bg-accent-gold bg-opacity-30 border-2 border-accent-gold rounded-xl px-4 py-3 text-center">
                <p className="text-primary-green font-heading font-bold text-sm leading-tight">
                  Bold Journey
                </p>
                <p className="text-dark-green font-body text-xs mt-1">Magazine Feature</p>
              </div>
            </div>

            {/* Award Logos */}
            <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a href="https://www.peta.org/features/top-10-vegan-sushi-rolls-2024/" target="_blank" rel="noopener noreferrer" aria-label="PETA Award">
                <img src="/logos/peta-logo.svg" alt="PETA" className="h-10 sm:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" loading="lazy" decoding="async" />
              </a>
              <a href="https://www.restaurantji.com/nv/las-vegas/daikon-vegan-sushi-and-more-/" target="_blank" rel="noopener noreferrer" aria-label="Restaurantji Recommends">
                <img src="/logos/daikon-best-2025.png" alt="Restaurantji Recommends" className="h-12 sm:h-14 w-auto opacity-70 hover:opacity-100 transition-opacity" loading="lazy" decoding="async" />
              </a>
              <a href="https://www.yelp.com/biz/daikon-vegan-sushi-las-vegas" target="_blank" rel="noopener noreferrer" aria-label="Yelp Reviews">
                <img src="/logos/yelp-logo.png" alt="Yelp" className="h-8 sm:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" loading="lazy" decoding="async" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
