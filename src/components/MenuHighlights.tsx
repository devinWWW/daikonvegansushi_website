import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { menuData } from '../data/menuData';
import OptimizedImage from './OptimizedImage';

const MenuHighlights: React.FC = () => {
  // Featured items and popular categories for landing page
  const featuredItems = useMemo(() => {
    const featured = menuData.filter(item => item.featured);
    const popular = [
      ...menuData.filter(item => item.category === 'Specialty Rolls').slice(0, 3),
      ...menuData.filter(item => item.category === 'Entrees').slice(0, 2),
      ...menuData.filter(item => item.category === 'Ramen & Noodle Soups').slice(0, 2),
    ];
    return [...featured, ...popular.filter(item => !item.featured)];
  }, []);

  // Show only first 6 items
  const filteredItems = useMemo(() => {
    return featuredItems.slice(0, 6);
  }, [featuredItems]);

  const groupedItems = filteredItems.reduce((acc, item) => {
    const category = 'Featured Items';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {} as Record<string, typeof menuData>);

  return (
    <section id="menu-highlights" className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Mobile Optimized */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary-green mb-3 md:mb-4">
            Our Menu Highlights
          </h2>
          <p className="text-lg sm:text-xl text-dark-green font-body max-w-2xl mx-auto mb-3 md:mb-4">
            Award-Winning 100% Plant-Based Japanese Cuisine
          </p>
          <p className="text-base sm:text-lg text-dark-green font-body max-w-3xl mx-auto mb-6 md:mb-8">
            Discover our{' '}
            <Link to="/blog/ultimate-guide-vegan-sushi-las-vegas" className="text-primary-green hover:text-secondary-coral underline font-semibold transition-colors">
              PETA award-winning vegan sushi rolls
            </Link>, authentic{' '}
            <Link to="/blog/vegan-ramen-las-vegas" className="text-primary-green hover:text-secondary-coral underline font-semibold transition-colors">
              plant-based ramen
            </Link>, and creative Japanese entrees.
          </p>
        </div>


        {/* Menu Items by Category - Mobile Optimized */}
        <div className="space-y-8 md:space-y-12">
          {Object.entries(groupedItems).map(([category, items]) => (
            <div key={category} className="border-b border-neutral-cream pb-6 md:pb-8 last:border-b-0">
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-primary-green pb-2 md:pb-3 border-b-2 border-secondary-coral">
                  {category}
                </h3>
                {items.length > 0 && (
                  <span className="text-xs sm:text-sm font-body text-white bg-primary-green px-2 sm:px-3 py-1 rounded-full">
                    {items.length} item{items.length !== 1 ? 's' : ''}
                  </span>
                )}
              </div>
              
              {items.length === 0 ? (
                <div className="text-center py-8 md:py-12">
                  <p className="text-dark-green font-body text-base md:text-lg">
                    No items found for "{searchTerm}" in {category}
                  </p>
                  <button
                    onClick={() => setSearchTerm('')}
                    className="mt-3 md:mt-4 text-primary-green hover:text-secondary-coral font-body font-semibold underline transition-colors text-sm md:text-base"
                  >
                    Clear search
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="group hover:bg-neutral-cream p-3 sm:p-4 md:p-6 rounded-lg transition-all duration-300 border border-transparent hover:border-secondary-coral hover:border-opacity-20 hover:shadow-lg"
                    >
                      {/* Mobile: Square image first, then text */}
                      <div className="flex flex-col">
                        {item.image && (
                          <div className="mb-2 md:mb-3 order-1">
                            <OptimizedImage
                              src={item.image}
                              alt={item.name}
                              width={500}
                              height={500}
                              className="w-full aspect-square object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                          </div>
                        )}
                        
                        {/* Text content */}
                        <div className="order-2">
                          <div className="flex justify-between items-start mb-1 md:mb-2">
                            <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-heading font-semibold text-primary-green group-hover:text-secondary-coral transition-colors leading-tight">
                              {item.name}
                            </h4>
                          </div>
                          <p className="text-dark-green font-body leading-relaxed text-xs sm:text-sm hidden sm:block">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://order.toasttab.com/online/daikon-vegan-sushi-more"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-body font-semibold px-10 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg bg-secondary-coral text-white hover:bg-secondary-coral-dark"
            >
              Order Online
            </a>
            <a
              href="https://tables.toasttab.com/restaurants/95c14348-a3ae-4de8-a7b2-15c5d41b0e11/findTime"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-body font-semibold px-10 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg bg-primary-green text-white hover:bg-opacity-90"
            >
              Make a Reservation
            </a>
          </div>
          
          {/* Full Menu Link */}
          <div className="bg-neutral-cream p-6 rounded-lg">
            <h4 className="text-xl font-heading font-semibold text-primary-green mb-2">
              Want to see our complete menu?
            </h4>
            <p className="text-dark-green font-body mb-4">
              Browse our complete menu with all dishes and categories
            </p>
            <a
              href="https://order.toasttab.com/online/daikon-vegan-sushi-more"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-body font-semibold px-8 py-3 rounded-lg transition-all duration-300 bg-primary-green text-white hover:bg-opacity-90 hover:scale-105"
            >
              View Full Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
