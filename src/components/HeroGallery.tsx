import React from 'react';

type HighlightImage = {
  src: string;
  webp: string;
  alt: string;
  width: number;
  height: number;
};

const heroHighlights: HighlightImage[] = [
  {
    src: '/yellow-magic.png',
    webp: '/yellow-magic.webp',
    alt: 'Award-winning Yellow Magic vegan sushi roll garnished with sauces',
    width: 1024,
    height: 1024,
  },
  {
    src: '/tomato-ramen.png',
    webp: '/tomato-ramen.webp',
    alt: 'Steaming bowl of vegan tomato ramen with fresh vegetables',
    width: 500,
    height: 500,
  },
  {
    src: '/Kale-Tostada.jpeg',
    webp: '/Kale-Tostada.webp',
    alt: 'Kale Tostada with fresh toppings',
    width: 3019,
    height: 2251,
  },
  {
    src: '/sesame-chicken-basil.png',
    webp: '/sesame-chicken-basil.webp',
    alt: 'Steaming sesame "chicken" plate with broccoli and rice',
    width: 500,
    height: 500,
  },
  {
    src: '/katsu.png',
    webp: '/katsu.webp',
    alt: 'Golden vegan katsu slices plated with greens',
    width: 500,
    height: 500,
  },
  {
    src: '/basil-friend-rice.png',
    webp: '/basil-friend-rice.webp',
    alt: 'Basil fried rice with fresh vegetables and vegan sushi',
    width: 500,
    height: 500,
  },
  {
    src: '/golden-state.png',
    webp: '/golden-state.webp',
    alt: 'Golden State vegan sushi roll with crispy tempura coating',
    width: 500,
    height: 500,
  },
  {
    src: '/garlic-baked.png',
    webp: '/garlic-baked.webp',
    alt: 'Garlic baked vegan dish with savory sauce',
    width: 500,
    height: 500,
  },
];

const HeroGallery: React.FC = () => {

  return (
    <section className="bg-gradient-to-b from-neutral-cream to-white px-4 md:px-8 lg:px-16 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-green mb-4">
            Award-Winning Vegan Cuisine
          </h2>
          <p className="text-lg text-dark-green font-body max-w-2xl mx-auto">
            Discover our signature dishes crafted with passion and plant-based perfection
          </p>
        </div>

        {/* Gallery Grid - Mobile Square 2-Column Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {heroHighlights.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg group transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2"
              style={{
                willChange: 'transform',
                backfaceVisibility: 'hidden',
              }}
            >
              <picture>
                <source srcSet={item.webp} type="image/webp" />
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  width={item.width}
                  height={item.height}
                  className="w-full aspect-square sm:aspect-auto object-cover transition-transform duration-700 group-hover:scale-110 sm:h-48 md:h-56 lg:h-64 xl:h-72"
                  style={{
                    willChange: 'transform',
                    backfaceVisibility: 'hidden',
                  }}
                />
              </picture>
              {/* Overlay on hover - Hidden on mobile for better performance */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden sm:block"></div>
              
              {/* Hover effect indicator - Hidden on mobile */}
              <div 
                className="absolute top-2 right-2 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100 hidden sm:flex"
                style={{
                  willChange: 'transform, opacity',
                  backfaceVisibility: 'hidden',
                }}
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action - Mobile Optimized */}
        <div className="text-center mt-8 md:mt-12">
          <p className="text-dark-green font-body mb-4 md:mb-6 text-base md:text-lg">
            Ready to experience these delicious dishes?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href="https://order.toasttab.com/online/daikon-vegan-sushi-more"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-block bg-secondary-coral hover:bg-secondary-coral-dark text-white font-body font-semibold px-6 md:px-8 py-3 md:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base"
            >
              Order Online
            </a>
            <a
              href="https://tables.toasttab.com/restaurants/95c14348-a3ae-4de8-a7b2-15c5d41b0e11/findTime"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-block bg-primary-green hover:bg-opacity-90 text-white font-body font-semibold px-6 md:px-8 py-3 md:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base"
            >
              Make Reservation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroGallery;
