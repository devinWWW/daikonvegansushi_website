import React from 'react';

const QuickStats: React.FC = () => {
  const nigiriHighlights = [
    {
      src: '/Garlic _Albacore.png',
      alt: 'Garlic Albacore nigiri with seared plant-based fish and scallions',
      title: 'Garlic Albacore',
      description: 'Seared plant-based fish with scallions'
    },
    {
      src: '/Dynamite Pockets.png',
      alt: 'Dynamite Pockets - spicy vegan seafood salad in fried tofu skin',
      title: 'Dynamite Pockets',
      description: 'Spicy vegan seafood salad in fried tofu skin'
    },
    {
      src: '/Salmon_ Nigiri.png',
      alt: 'Salmon Nigiri - plant-based salmon on sushi rice with sesame seeds',
      title: 'Salmon Nigiri',
      description: 'Plant-based salmon on sushi rice with sesame seeds'
    },
    {
      src: '/Spicy _Tuna_ Pocket.png',
      alt: 'Spicy Tuna Pocket - spicy vegan tuna salad in inari pocket',
      title: 'Spicy Tuna Pocket',
      description: 'Spicy vegan tuna salad in inari pocket'
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-primary-green">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Signature Nigiri & Inari
          </h2>
          <p className="text-lg text-white text-opacity-90 font-body max-w-2xl mx-auto">
            Experience our creative plant-based nigiri and inari pockets, crafted with authentic Japanese techniques
          </p>
        </div>

        {/* Nigiri Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {nigiriHighlights.map((item, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="relative mb-4 transition-transform duration-300 group-hover:scale-105">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-48 object-contain"
                />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-white text-opacity-90 font-body text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickStats;
