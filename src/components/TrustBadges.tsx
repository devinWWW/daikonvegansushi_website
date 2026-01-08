import React from 'react';

interface LogoBadge {
  src: string;
  alt: string;
  href: string;
  className?: string;
}

const TrustBadges: React.FC = () => {
  const logos: LogoBadge[] = [
    {
      src: '/logos/peta-logo.svg',
      alt: 'PETA - Top 10 Vegan Sushi 2024',
      href: 'https://www.peta.org/features/top-10-vegan-sushi-rolls-2024/'
    },
    {
      src: '/logos/daikon-best-2025.png',
      alt: 'Restaurantji Recommends Daikon Vegan Sushi',
      href: 'https://www.restaurantji.com/nv/las-vegas/daikon-vegan-sushi-and-more-/'
    },
    {
      src: '/logos/yelp-logo.png',
      alt: 'Yelp - 4.9 Star Rating',
      href: 'https://www.yelp.com/biz/daikon-vegan-sushi-las-vegas'
    },
    {
      src: '/logos/google-logo.png',
      alt: 'Google Reviews - 4.9 Star Rating',
      href: 'https://www.google.com/maps/search/Daikon+Vegan+Sushi+7210+W+Lake+Mead+Blvd+Las+Vegas'
    },
    {
      src: '/logos/doordash-logo.png',
      alt: 'DoorDash - Order Daikon Vegan Sushi',
      href: 'https://www.doordash.com/store/daikon-vegan-sushi-&-more-las-vegas-33987551/'
    },
    {
      src: '/logos/ubereat-logo.png',
      alt: 'Uber Eats - Order Daikon Vegan Sushi',
      href: 'https://www.ubereats.com/store/daikon-vegan-sushi-%26-more/a2Hn0W8uUfGnFzkZdi41ZA'
    },
    {
      src: '/logos/toast-logo.png',
      alt: 'Toast - Order Online',
      href: 'https://order.toasttab.com/online/daikon-vegan-sushi-more'
    },
    {
      src: '/logos/cropped-BoldJourney-logo.png',
      alt: 'Bold Journey Magazine Feature',
      href: '/blog/mindy-lim-bold-journey-interview'
    }
  ];

  return (
    <section className="py-10 md:py-14 px-4 bg-neutral-cream">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <p className="text-center text-xs font-body uppercase tracking-widest text-primary-green/60 mb-8">
          As Featured In & Order From
        </p>

        {/* Logo Cloud */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <a
              key={index}
              href={logo.href}
              target={logo.href.startsWith('/') ? '_self' : '_blank'}
              rel={logo.href.startsWith('/') ? undefined : 'noopener noreferrer'}
              className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-110"
              aria-label={logo.alt}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                decoding="async"
                className={`h-10 md:h-12 w-auto object-contain ${logo.className || ''}`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
