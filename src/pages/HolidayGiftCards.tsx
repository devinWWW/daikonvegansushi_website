import React from 'react';

const HolidayGiftCards: React.FC = () => {
  return (
    <div className='min-h-screen pt-24 pb-20 bg-neutral-cream'>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-secondary-coral text-white px-6 py-2 rounded-full font-heading font-bold text-sm mb-4">
            LIMITED TIME HOLIDAY OFFER
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary-green mb-4">
            Holiday Gift Card Special
          </h1>
          <p className="text-2xl text-secondary-coral font-heading font-semibold mb-4">
            Give the Gift of Good Taste — and Get a Little Extra Too
          </p>
          <p className="text-xl text-dark-green font-body max-w-3xl mx-auto">
            Share plant-based sushi with friends and family this holiday season. Purchase gift cards and receive bonus value!
          </p>
        </div>

        {/* Bonus Structure */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center border-4 border-accent-gold hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-6xl font-heading font-bold text-primary-green mb-4">
              $50
            </div>
            <p className="text-dark-green font-body text-lg mb-4">
              Gift Card Purchase
            </p>
            <div className="bg-accent-gold text-white py-3 px-6 rounded-lg inline-block mb-6">
              <span className="text-3xl font-heading font-bold">+$10</span>
              <p className="text-sm font-body">Bonus Value</p>
            </div>
            <p className="text-dark-green font-body">
              20% Bonus Value
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center border-4 border-secondary-coral hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-6xl font-heading font-bold text-primary-green mb-4">
              $100
            </div>
            <p className="text-dark-green font-body text-lg mb-4">
              Gift Card Purchase
            </p>
            <div className="bg-secondary-coral text-white py-3 px-6 rounded-lg inline-block mb-6">
              <span className="text-3xl font-heading font-bold">+$20</span>
              <p className="text-sm font-body">Bonus Value</p>
            </div>
            <p className="text-dark-green font-body">
              20% Bonus Value
            </p>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-heading font-bold text-primary-green text-center mb-12">
            Why Choose Our Gift Cards?
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-4xl">⚡</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary-green mb-2">
                Instant Delivery
              </h3>
              <p className="text-dark-green font-body text-sm">
                Digital eGift cards delivered immediately to your email
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-secondary-coral rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-4xl">💝</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary-green mb-2">
                Bonus Value
              </h3>
              <p className="text-dark-green font-body text-sm">
                Receive up to $20 bonus with your purchase
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-4xl">🏪</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary-green mb-2">
                Flexible Use
              </h3>
              <p className="text-dark-green font-body text-sm">
                Usable in-store or online at both locations
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-4xl">📅</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary-green mb-2">
                3 Month Bonus
              </h3>
              <p className="text-dark-green font-body text-sm">
                Bonus value valid for 3 months from purchase
              </p>
            </div>
          </div>
        </div>

        {/* Purchase Sections */}
        <div className="mb-16">
          <h2 className="text-4xl font-heading font-bold text-primary-green text-center mb-12">
            Purchase Gift Cards
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Daikon Gift Cards */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="bg-primary-green text-white p-6">
                <h3 className="text-2xl font-heading font-bold mb-2">
                  Daikon Vegan Sushi & More
                </h3>
                <p className="text-neutral-cream font-body">
                  7210 W Lake Mead Blvd, Ste 1<br />
                  Las Vegas, NV 89128
                </p>
              </div>

              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-heading font-semibold text-primary-green mb-3">
                    Hours:
                  </h4>
                  <p className="text-dark-green font-body">
                    <strong>Mon-Sat:</strong> 11:00 AM – 9:00 PM<br />
                    <strong>Sunday:</strong> 3:00 PM – 9:00 PM
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-heading font-semibold text-primary-green mb-3">
                    Contact:
                  </h4>
                  <p className="text-dark-green font-body">
                    <strong>Phone:</strong> <a href="tel:7027493283" className="text-secondary-coral hover:underline">(702) 749-3283</a><br />
                    <strong>Email:</strong> <a href="mailto:daikonvegan01@gmail.com" className="text-secondary-coral hover:underline">daikonvegan01@gmail.com</a>
                  </p>
                </div>

                <a
                  href="https://www.toasttab.com/daikon-vegan-sushi-more/giftcards"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-primary-green hover:bg-opacity-90 text-white font-body font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  Purchase Daikon Gift Card
                </a>
              </div>
            </div>

            {/* Basil Gift Cards */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="bg-secondary-coral text-white p-6">
                <h3 className="text-2xl font-heading font-bold mb-2">
                  Basil Vegan Thai & Sushi
                </h3>
                <p className="text-neutral-cream font-body">
                  500 E Windmill Ln #145<br />
                  Las Vegas, NV 89123
                </p>
              </div>

              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-heading font-semibold text-primary-green mb-3">
                    Hours:
                  </h4>
                  <p className="text-dark-green font-body">
                    <strong>Mon-Sat:</strong> 11:30 AM – 9:30 PM<br />
                    <strong>Sunday:</strong> 3:00 PM – 9:30 PM
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-heading font-semibold text-primary-green mb-3">
                    Contact:
                  </h4>
                  <p className="text-dark-green font-body">
                    <strong>Phone:</strong> <a href="tel:7023573837" className="text-secondary-coral hover:underline">(702) 357-3837</a><br />
                    <strong>Email:</strong> <a href="mailto:basilveganthai01@gmail.com" className="text-secondary-coral hover:underline">basilveganthai01@gmail.com</a>
                  </p>
                </div>

                <a
                  href="https://www.toasttab.com/basil-vegan-thai/giftcards"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-secondary-coral hover:bg-secondary-coral-dark text-white font-body font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  Purchase Basil Gift Card
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-16">
          <h2 className="text-2xl font-heading font-bold text-primary-green mb-6">
            Terms & Conditions
          </h2>

          <ul className="space-y-3 text-dark-green font-body">
            <li className="flex items-start">
              <span className="text-secondary-coral-dark mr-3 mt-1">•</span>
              <span>Bonus value is valid for 3 months from the date of purchase</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary-coral-dark mr-3 mt-1">•</span>
              <span>Digital eGift cards are delivered instantly to your email</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary-coral-dark mr-3 mt-1">•</span>
              <span>Gift cards can be used in-store or for online orders</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary-coral-dark mr-3 mt-1">•</span>
              <span>This is a limited-time holiday offer available only during the holiday season</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary-coral-dark mr-3 mt-1">•</span>
              <span>Gift cards purchased at one location can be used at either Daikon or Basil</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary-coral-dark mr-3 mt-1">•</span>
              <span>No cash value; cannot be redeemed for cash</span>
            </li>
          </ul>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary-green text-white p-8 md:p-12 rounded-lg">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Perfect Gift for Plant-Based Food Lovers
          </h2>
          <p className="text-neutral-cream font-body text-lg mb-8 max-w-2xl mx-auto">
            Share the joy of compassionate, delicious vegan cuisine with your friends and family this holiday season.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.toasttab.com/daikon-vegan-sushi-more/giftcards"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white hover:bg-neutral-cream text-primary-green font-body font-semibold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Buy Daikon Gift Card
            </a>
            <a
              href="https://www.toasttab.com/basil-vegan-thai/giftcards"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary-coral hover:bg-secondary-coral-dark text-white font-body font-semibold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Buy Basil Gift Card
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolidayGiftCards;
