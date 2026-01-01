import React, { useState, useEffect } from 'react';

type Slide = {
  alt: string;
  sources: {
    fallback: string;
    webp: string;
    width: number;
    height: number;
  };
};

const slides: Slide[] = [
  {
    alt: 'Beautiful vegan sushi platter with colorful rolls and garnishes',
    sources: {
      fallback: '/vegan-sushi-daikon-vegan.png',
      webp: '/vegan-sushi-daikon-vegan.webp',
      width: 500,
      height: 500
    }
  },
  {
    alt: 'Caterpillar vegan sushi roll topped with avocado and spicy sauce',
    sources: {
      fallback: '/caterpillar-roll.png',
      webp: '/caterpillar-roll.webp',
      width: 500,
      height: 500
    }
  },
  {
    alt: 'Steaming bowl of vegan tomato ramen with fresh vegetables',
    sources: {
      fallback: '/tomato-ramen.png',
      webp: '/tomato-ramen.webp',
      width: 500,
      height: 500
    }
  },
  {
    alt: 'Golden State vegan sushi roll with crispy tempura coating',
    sources: {
      fallback: '/golden-state.png',
      webp: '/golden-state.webp',
      width: 500,
      height: 500
    }
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance slides
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      } else if (e.key === 'ArrowRight') {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsPaused(!isPaused);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section 
      className="relative w-full overflow-hidden min-h-screen flex items-center justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slideshow Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              willChange: 'opacity',
              backfaceVisibility: 'hidden',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/40 z-10" />
            <picture className="absolute inset-0 block">
              <source srcSet={slide.sources.webp} type="image/webp" />
              <img
                src={slide.sources.fallback}
                alt={slide.alt}
                className="absolute inset-0 w-full h-full object-cover object-center"
                fetchPriority={index === 0 ? 'high' : 'low'}
                loading={index === 0 ? 'eager' : 'lazy'}
                width={slide.sources.width}
                height={slide.sources.height}
                decoding={index === 0 ? 'sync' : 'async'}
              />
            </picture>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden on mobile for cleaner look */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Play/Pause Button - Smaller on mobile */}
      <button
        onClick={() => setIsPaused(!isPaused)}
        className="absolute top-4 right-4 z-20 bg-black/30 hover:bg-black/50 text-white p-2 md:p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label={isPaused ? 'Resume slideshow' : 'Pause slideshow'}
      >
        {isPaused ? (
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        ) : (
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
          </svg>
        )}
      </button>

      {/* Content - Mobile Optimized */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Clean Award Recognition - Smaller on mobile */}
        <div className="mb-4 md:mb-8">
          <p className="text-white font-body font-light text-xs md:text-sm tracking-wide opacity-90">
            PETA 2024 Top 10 Vegan Sushi Roll
          </p>
        </div>

        {/* Headline - Responsive sizing */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-4 md:mb-6 leading-tight tracking-tight">
          Daikon Vegan Sushi
          <br />
          <span className="text-secondary-coral">Las Vegas</span>
        </h1>

        {/* Subheadline - Responsive sizing */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-body text-white mb-3 md:mb-4 max-w-2xl mx-auto leading-relaxed">
          Save the Sea, Eat Vegan Sushi
        </h2>
        
        {/* Supporting Description - Responsive sizing */}
        <p className="text-base sm:text-lg font-body text-white mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
          Plant-based Japanese cuisine crafted with compassion in Las Vegas
        </p>

        {/* Clear CTAs - Mobile optimized */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center justify-center">
          <a
            href="https://tables.toasttab.com/restaurants/95c14348-a3ae-4de8-a7b2-15c5d41b0e11/findTime"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-secondary-coral hover:bg-secondary-coral-dark text-white font-body font-semibold px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Make a Reservation
          </a>
          <a
            href="https://order.toasttab.com/online/daikon-vegan-sushi-more"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-primary-green font-body font-semibold px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105"
          >
            View Menu
          </a>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center text-white">
          <span className="text-sm font-body font-medium mb-2 tracking-wide">Scroll</span>
          <svg
            className="w-5 h-5 animate-bounce"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* Navigation Dots - Mobile optimized */}
      <div className="absolute bottom-16 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 md:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 ${
              index === currentSlide
                ? 'bg-white/20'
                : 'bg-white/10 hover:bg-white/20'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span
              aria-hidden="true"
              className={`block h-2 w-2 rounded-full transition-transform duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/70'
              }`}
            />
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-20">
        <div 
          className="h-full bg-secondary-coral transition-all duration-100 ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%` 
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
