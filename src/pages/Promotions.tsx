import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getActivePromotions, getFeaturedPromotions, Promotion } from '../data/promotionsData';

const Promotions: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'seasonal' | 'daily' | 'special' | 'limited-time'>('all');

  const allPromotions = getActivePromotions();
  const featuredPromotions = getFeaturedPromotions();

  const filteredPromotions = filter === 'all'
    ? allPromotions
    : allPromotions.filter(promo => promo.category === filter);

  const getLocationBadge = (locations: Promotion['locations']) => {
    if (locations.includes('both')) {
      return (
        <span className="inline-block bg-accent-gold text-white px-3 py-1 rounded-full text-xs font-heading font-semibold">
          Both Locations
        </span>
      );
    }
    return locations.map(loc => (
      <span key={loc} className="inline-block bg-primary-green text-white px-3 py-1 rounded-full text-xs font-heading font-semibold mr-2">
        {loc === 'basil' ? 'Basil Thai & Sushi' : 'Daikon Sushi'}
      </span>
    ));
  };

  const PromotionCard = ({ promotion, featured = false }: { promotion: Promotion; featured?: boolean }) => (
    <div className={`bg-white rounded-lg shadow-xl overflow-hidden ${featured ? 'md:col-span-2' : ''} hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}>
      {promotion.featured && (
        <div className="bg-secondary-coral text-white text-center py-2 font-heading font-bold text-sm">
          FEATURED PROMOTION
        </div>
      )}
      <div className={`${featured ? 'md:flex' : ''}`}>
        <div className={`${featured ? 'md:w-1/2' : ''}`}>
          <img
            src={promotion.image}
            alt={promotion.imageAlt}
            className="w-full h-64 object-cover"
          />
        </div>
        <div className={`p-8 ${featured ? 'md:w-1/2' : ''}`}>
          <div className="flex flex-wrap gap-2 mb-4">
            {getLocationBadge(promotion.locations)}
          </div>

          <h3 className={`font-heading font-bold text-primary-green mb-2 ${featured ? 'text-3xl' : 'text-2xl'}`}>
            {promotion.title}
          </h3>

          {promotion.subtitle && (
            <p className="text-secondary-coral font-heading text-lg mb-3">
              {promotion.subtitle}
            </p>
          )}

          {promotion.price && (
            <p className="text-accent-gold font-heading font-bold text-2xl mb-4">
              {promotion.price}
            </p>
          )}

          <p className="text-dark-green font-body mb-6 leading-relaxed">
            {promotion.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {promotion.tags.map(tag => (
              <span key={tag} className="bg-neutral-cream text-dark-green px-3 py-1 rounded-full text-xs font-body">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to={promotion.ctaLink}
              className="inline-block bg-secondary-coral hover:bg-secondary-coral-dark text-white font-body font-semibold px-8 py-3 rounded-lg transition-all duration-300 text-center"
            >
              {promotion.ctaText}
            </Link>
            {promotion.locations.includes('basil') || promotion.locations.includes('both') ? (
              <a
                href="https://rewards.vegansushilv.com/book/basil"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary-green hover:bg-opacity-90 text-white font-body font-semibold px-8 py-3 rounded-lg transition-all duration-300 text-center"
              >
                Book Basil
              </a>
            ) : null}
            {promotion.locations.includes('daikon') || promotion.locations.includes('both') ? (
              <a
                href="https://rewards.vegansushilv.com/book/daikon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary-green hover:bg-opacity-90 text-white font-body font-semibold px-8 py-3 rounded-lg transition-all duration-300 text-center"
              >
                Book Daikon
              </a>
            ) : null}
          </div>

          <p className="text-dark-green font-body text-xs mt-4 opacity-75">
            Limited Offer
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className='min-h-screen pt-24 pb-20 bg-neutral-cream'>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary-green mb-4">
            Current Promotions & Special Offers
          </h1>
          <p className="text-xl text-dark-green font-body max-w-3xl mx-auto">
            Discover our latest vegan dining experiences, seasonal menus, and exclusive offers at Daikon Vegan Sushi and Basil Vegan Thai & Sushi.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-3 rounded-lg font-body font-semibold transition-all duration-300 ${
              filter === 'all'
                ? 'bg-primary-green text-white shadow-lg'
                : 'bg-white text-dark-green hover:bg-neutral-cream'
            }`}
          >
            All Promotions
          </button>
          <button
            onClick={() => setFilter('seasonal')}
            className={`px-6 py-3 rounded-lg font-body font-semibold transition-all duration-300 ${
              filter === 'seasonal'
                ? 'bg-primary-green text-white shadow-lg'
                : 'bg-white text-dark-green hover:bg-neutral-cream'
            }`}
          >
            Seasonal
          </button>
          <button
            onClick={() => setFilter('daily')}
            className={`px-6 py-3 rounded-lg font-body font-semibold transition-all duration-300 ${
              filter === 'daily'
                ? 'bg-primary-green text-white shadow-lg'
                : 'bg-white text-dark-green hover:bg-neutral-cream'
            }`}
          >
            Daily Specials
          </button>
          <button
            onClick={() => setFilter('limited-time')}
            className={`px-6 py-3 rounded-lg font-body font-semibold transition-all duration-300 ${
              filter === 'limited-time'
                ? 'bg-primary-green text-white shadow-lg'
                : 'bg-white text-dark-green hover:bg-neutral-cream'
            }`}
          >
            Limited Time
          </button>
        </div>

        {/* Featured Promotions */}
        {filter === 'all' && featuredPromotions.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-8 text-center">
              Featured Offers
            </h2>
            <div className="grid gap-8">
              {featuredPromotions.map(promo => (
                <PromotionCard key={promo.id} promotion={promo} featured={true} />
              ))}
            </div>
          </div>
        )}

        {/* All Promotions Grid */}
        {filteredPromotions.length > 0 ? (
          <div>
            {filter === 'all' && featuredPromotions.length > 0 && (
              <h2 className="text-3xl font-heading font-bold text-primary-green mb-8 text-center">
                More Promotions
              </h2>
            )}
            <div className="grid md:grid-cols-2 gap-8">
              {filteredPromotions
                .filter(promo => !promo.featured || filter !== 'all')
                .map(promo => (
                  <PromotionCard key={promo.id} promotion={promo} />
                ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-dark-green font-body">
              No promotions available in this category at the moment.
            </p>
          </div>
        )}

        {/* Stay Updated CTA */}
        <div className="mt-16 bg-primary-green text-white rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Stay Updated on Our Latest Offers
          </h2>
          <p className="text-neutral-cream font-body text-lg mb-8 max-w-2xl mx-auto">
            Follow us on social media or join our rewards program to be the first to know about new promotions, seasonal menus, and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/daikonvegansushi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary-coral hover:bg-secondary-coral-dark text-white font-body font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Follow on Instagram
            </a>
            <Link
              to="/contact"
              className="inline-block bg-white hover:bg-neutral-cream text-primary-green font-body font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Visit Our Locations
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
