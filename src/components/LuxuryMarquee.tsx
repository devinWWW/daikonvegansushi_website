import React from 'react';

const LuxuryMarquee: React.FC = () => {
  const marqueeItems = [

    "🏆 PETA Award-Winning Yellow Magic Roll",
    "🌟 Premium Plant-Based Japanese Cuisine",
    "💎 Member Rewards Program - Sign Up Today",
    "👑 Las Vegas' Premier Vegan Sushi Experience",
    "💫 Chef Mindy's Signature Creations",
    "🍣 Two Locations - Daikon & Basil"
  ];

  /* Inactive Marquee Items:
    "🦃 Thanksgiving Vegan Feast $45 - Set Menu Available Now",
    "🎁 Holiday Gift Cards - Get Up to $20 Bonus Value",
    "⭐ Join Rewards - FREE Thai Iced Tea + Golden State Roll",
    "🥥 FREE CocoBanana Smoothie with $40+ Uber Eats Order",
  */

  return (
    <div className="luxury-marquee relative overflow-hidden bg-gradient-to-r from-primary-green via-secondary-coral to-primary-green py-3">
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent-gold to-transparent"></div>
      
      {/* Marquee Container */}
      <div className="flex animate-scroll whitespace-nowrap">
        {/* First set of items */}
        <div className="flex items-center space-x-8 mr-8">
          {marqueeItems.map((item, index) => (
            <div key={`first-${index}`} className="flex items-center space-x-2 text-white font-body font-medium text-sm md:text-base">
              <span className="text-accent-gold font-bold">✦</span>
              <span>{item}</span>
              <span className="text-accent-gold font-bold">✦</span>
            </div>
          ))}
        </div>
        
        {/* Duplicate set for seamless loop */}
        <div className="flex items-center space-x-8 mr-8">
          {marqueeItems.map((item, index) => (
            <div key={`second-${index}`} className="flex items-center space-x-2 text-white font-body font-medium text-sm md:text-base">
              <span className="text-accent-gold font-bold">✦</span>
              <span>{item}</span>
              <span className="text-accent-gold font-bold">✦</span>
            </div>
          ))}
        </div>
        
        {/* Third set for extra smoothness */}
        <div className="flex items-center space-x-8 mr-8">
          {marqueeItems.map((item, index) => (
            <div key={`third-${index}`} className="flex items-center space-x-2 text-white font-body font-medium text-sm md:text-base">
              <span className="text-accent-gold font-bold">✦</span>
              <span>{item}</span>
              <span className="text-accent-gold font-bold">✦</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent-gold to-transparent"></div>
      
      {/* Luxury shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white via-transparent opacity-10 animate-shine"></div>
    </div>
  );
};

export default LuxuryMarquee;
