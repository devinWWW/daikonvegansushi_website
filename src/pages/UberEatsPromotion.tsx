import React from 'react';

const UberEatsPromotion: React.FC = () => {
  return (
    <div className='min-h-screen pt-24 pb-20 bg-neutral-cream'>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-accent-gold text-white px-6 py-2 rounded-full font-heading font-bold text-sm mb-4">
            UBER EATS EXCLUSIVE
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary-green mb-4">
            FREE CocoBanana Smoothie
          </h1>
          <p className="text-2xl text-secondary-coral font-heading font-semibold mb-4">
            Spend $40+ on Uber Eats
          </p>
          <p className="text-xl text-dark-green font-body max-w-3xl mx-auto">
            Order from either location and enjoy a complimentary tropical smoothie with your meal!
          </p>
        </div>

        {/* Hero Image/Visual Section */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-16 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-8xl mb-6">🥥🍌</div>
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-4">
              Sweet Deal Alert!
            </h2>
            <p className="text-dark-green font-body text-lg leading-relaxed">
              Order your favorite vegan sushi or Thai dishes on Uber Eats, and we'll add a delicious CocoBanana Smoothie to your order absolutely FREE when you spend $40 or more.
            </p>
          </div>
        </div>

        {/* Two Location Offers */}
        <div className="mb-16">
          <h2 className="text-4xl font-heading font-bold text-primary-green text-center mb-12">
            Choose Your Location
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Daikon Offer */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-primary-green text-white p-6">
                <h3 className="text-2xl font-heading font-bold mb-2">
                  Daikon Vegan Sushi
                </h3>
                <p className="text-neutral-cream font-body">
                  Roll into flavor and top it off with sweetness
                </p>
              </div>

              <div className="p-8">
                <div className="mb-6">
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-6xl">🍣</span>
                  </div>
                  <h4 className="text-xl font-heading font-semibold text-primary-green mb-3 text-center">
                    Spend $40+ on Uber Eats
                  </h4>
                  <p className="text-dark-green font-body text-center">
                    Order your favorite vegan sushi rolls, ramen, and more!
                  </p>
                </div>

                <div className="bg-neutral-cream rounded-lg p-6 mb-6">
                  <div className="text-center">
                    <p className="text-dark-green font-body font-semibold mb-2">
                      Get Your FREE
                    </p>
                    <p className="text-3xl font-heading font-bold text-secondary-coral">
                      CocoBanana Smoothie
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.ubereats.com/store/daikon-vegan-sushi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-primary-green hover:bg-opacity-90 text-white font-body font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  Order from Daikon on Uber Eats
                </a>

                <p className="text-dark-green font-body text-xs text-center mt-4 opacity-75">
                  Available only via Uber Eats. Limited time.
                </p>
              </div>
            </div>

            {/* Basil Offer */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-secondary-coral text-white p-6">
                <h3 className="text-2xl font-heading font-bold mb-2">
                  Basil Vegan Thai & Sushi
                </h3>
                <p className="text-neutral-cream font-body">
                  Spice it up, then chill with a tropical treat
                </p>
              </div>

              <div className="p-8">
                <div className="mb-6">
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-6xl">🌶️</span>
                  </div>
                  <h4 className="text-xl font-heading font-semibold text-primary-green mb-3 text-center">
                    Order $40+ on Uber Eats
                  </h4>
                  <p className="text-dark-green font-body text-center">
                    Enjoy authentic Thai cuisine and creative sushi rolls!
                  </p>
                </div>

                <div className="bg-neutral-cream rounded-lg p-6 mb-6">
                  <div className="text-center">
                    <p className="text-dark-green font-body font-semibold mb-2">
                      Claim Your FREE
                    </p>
                    <p className="text-3xl font-heading font-bold text-secondary-coral">
                      CocoBanana Smoothie
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.ubereats.com/store/basil-vegan-thai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-secondary-coral hover:bg-secondary-coral-dark text-white font-body font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  Order from Basil on Uber Eats
                </a>

                <p className="text-dark-green font-body text-xs text-center mt-4 opacity-75">
                  Uber Eats exclusive. While supplies last.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-heading font-bold text-primary-green text-center mb-12">
            How to Get Your FREE Smoothie
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-heading font-bold text-2xl">1</span>
              </div>
              <h3 className="text-lg font-heading font-semibold text-primary-green mb-2">
                Open Uber Eats
              </h3>
              <p className="text-dark-green font-body text-sm">
                Search for Daikon or Basil on the Uber Eats app
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-secondary-coral rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-heading font-bold text-2xl">2</span>
              </div>
              <h3 className="text-lg font-heading font-semibold text-primary-green mb-2">
                Order $40+
              </h3>
              <p className="text-dark-green font-body text-sm">
                Add your favorite items to reach $40 minimum
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-heading font-bold text-2xl">3</span>
              </div>
              <h3 className="text-lg font-heading font-semibold text-primary-green mb-2">
                Auto Applied
              </h3>
              <p className="text-dark-green font-body text-sm">
                Free smoothie automatically added to your order
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-heading font-bold text-2xl">4</span>
              </div>
              <h3 className="text-lg font-heading font-semibold text-primary-green mb-2">
                Enjoy!
              </h3>
              <p className="text-dark-green font-body text-sm">
                Savor your meal with a refreshing smoothie
              </p>
            </div>
          </div>
        </div>

        {/* Why CocoBanana? */}
        <div className="bg-primary-green text-white rounded-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-heading font-bold text-center mb-8">
            Why CocoBanana Smoothie?
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl mb-3">🥥</div>
                <h3 className="font-heading font-semibold text-xl mb-2">
                  Creamy Coconut
                </h3>
                <p className="text-neutral-cream font-body text-sm">
                  Rich, tropical coconut flavor
                </p>
              </div>

              <div>
                <div className="text-4xl mb-3">🍌</div>
                <h3 className="font-heading font-semibold text-xl mb-2">
                  Sweet Banana
                </h3>
                <p className="text-neutral-cream font-body text-sm">
                  Natural sweetness and smooth texture
                </p>
              </div>

              <div>
                <div className="text-4xl mb-3">🌱</div>
                <h3 className="font-heading font-semibold text-xl mb-2">
                  100% Vegan
                </h3>
                <p className="text-neutral-cream font-body text-sm">
                  Plant-based perfection
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Terms */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-16">
          <h3 className="text-2xl font-heading font-bold text-primary-green mb-6">
            Offer Details
          </h3>

          <ul className="space-y-3 text-dark-green font-body">
            <li className="flex items-start">
              <span className="text-secondary-coral-dark mr-3 mt-1">•</span>
              <span>Minimum order of $40 required (before taxes and fees)</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary-coral-dark mr-3 mt-1">•</span>
              <span>Available exclusively through Uber Eats orders</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary-coral-dark mr-3 mt-1">•</span>
              <span>Limited time offer - while supplies last</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary-coral-dark mr-3 mt-1">•</span>
              <span>One free smoothie per qualifying order</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary-coral-dark mr-3 mt-1">•</span>
              <span>Cannot be combined with other offers</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary-coral-dark mr-3 mt-1">•</span>
              <span>Valid at both Daikon Vegan Sushi and Basil Vegan Thai & Sushi</span>
            </li>
          </ul>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-neutral-cream p-8 md:p-12 rounded-lg">
          <h2 className="text-3xl font-heading font-bold text-primary-green mb-4">
            Ready to Order?
          </h2>
          <p className="text-xl text-dark-green font-body mb-8 max-w-2xl mx-auto">
            Choose your location and start building your $40+ order to claim your FREE CocoBanana Smoothie!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.ubereats.com/store/daikon-vegan-sushi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-green hover:bg-opacity-90 text-white font-body font-semibold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Order from Daikon
            </a>
            <a
              href="https://www.ubereats.com/store/basil-vegan-thai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary-coral hover:bg-secondary-coral-dark text-white font-body font-semibold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Order from Basil
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UberEatsPromotion;
