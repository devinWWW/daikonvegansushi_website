import React from 'react';

const MemberRewards: React.FC = () => {
  return (
    <div className='min-h-screen pt-24 pb-20 bg-neutral-cream'>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-accent-gold text-white px-6 py-2 rounded-full font-heading font-bold text-sm mb-4">
            LOYALTY REWARDS PROGRAM
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary-green mb-4">
            Member Rewards Program
          </h1>
          <p className="text-2xl text-secondary-coral font-heading font-semibold mb-4">
            Join & Start Earning Free Food Today
          </p>
          <p className="text-xl text-dark-green font-body max-w-3xl mx-auto">
            Register with your phone number and unlock exclusive rewards at both Daikon Vegan Sushi and Basil Vegan Thai & Sushi.
          </p>
        </div>

        {/* Main Offers */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* New Member Offer */}
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center border-4 border-secondary-coral hover:transform hover:scale-105 transition-all duration-300">
            <div className="inline-block bg-secondary-coral text-white px-4 py-2 rounded-full font-heading font-bold text-xs mb-6">
              NEW MEMBER WELCOME
            </div>
            <div className="text-6xl mb-6">🥤</div>
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-4">
              FREE CocoBanana Smoothie
            </h2>
            <p className="text-dark-green font-body text-lg mb-4">
              New Members at Both Locations
            </p>
            <div className="bg-neutral-cream rounded-lg p-6 mb-4">
              <p className="text-dark-green font-body mb-2">
                With Purchase of
              </p>
              <p className="text-5xl font-heading font-bold text-secondary-coral">
                $25
              </p>
            </div>
            <div className="bg-accent-gold/20 rounded-lg p-3 mb-4">
              <p className="text-dark-green font-body font-semibold">
                Toast Code: <span className="text-secondary-coral font-bold">COCO25</span>
              </p>
            </div>
            <p className="text-dark-green font-body text-sm">
              Sign up and get your welcome reward on your first visit!
            </p>
          </div>

          {/* Daikon Exclusive Offer */}
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center border-4 border-primary-green hover:transform hover:scale-105 transition-all duration-300">
            <div className="inline-block bg-primary-green text-white px-4 py-2 rounded-full font-heading font-bold text-xs mb-6">
              DAIKON EXCLUSIVE
            </div>
            <div className="text-6xl mb-6">🍜</div>
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-4">
              FREE Tomato Ramen
            </h2>
            <p className="text-dark-green font-body text-lg mb-6">
              Daikon Location Only
            </p>
            <div className="bg-neutral-cream rounded-lg p-6 mb-6">
              <p className="text-dark-green font-body mb-2">
                When You Spend
              </p>
              <p className="text-5xl font-heading font-bold text-primary-green">
                $50
              </p>
            </div>
            <p className="text-dark-green font-body text-sm">
              Warm up with our delicious plant-based ramen!
            </p>
          </div>
        </div>

        {/* How to Join */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-heading font-bold text-primary-green text-center mb-12">
            How to Join & Start Earning
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-heading font-bold text-2xl">1</span>
              </div>
              <h3 className="text-lg font-heading font-semibold text-primary-green mb-2">
                Visit Restaurant
              </h3>
              <p className="text-dark-green font-body text-sm">
                Come to Daikon or Basil in person
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-secondary-coral rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-heading font-bold text-2xl">2</span>
              </div>
              <h3 className="text-lg font-heading font-semibold text-primary-green mb-2">
                Scan QR Code
              </h3>
              <p className="text-dark-green font-body text-sm">
                Use your phone to scan the rewards QR code
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-heading font-bold text-2xl">3</span>
              </div>
              <h3 className="text-lg font-heading font-semibold text-primary-green mb-2">
                Register Phone
              </h3>
              <p className="text-dark-green font-body text-sm">
                Enter your phone number to create account
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-heading font-bold text-2xl">4</span>
              </div>
              <h3 className="text-lg font-heading font-semibold text-primary-green mb-2">
                Start Earning!
              </h3>
              <p className="text-dark-green font-body text-sm">
                Get your welcome reward immediately
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://www.toasttab.com/daikon-vegan-sushi-more/rewardsSignup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-green hover:bg-opacity-90 text-white font-body font-semibold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Register for Rewards
            </a>
            <p className="text-dark-green font-body text-sm mt-4 opacity-75">
              Or scan the QR code at either restaurant location
            </p>
          </div>
        </div>

        {/* Program Benefits */}
        <div className="bg-primary-green text-white rounded-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">
            Member Benefits
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎁</div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                Welcome Rewards
              </h3>
              <p className="text-neutral-cream font-body">
                Get a free CocoBanana Smoothie with your first $25 purchase as a new member
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                Earn as You Spend
              </h3>
              <p className="text-neutral-cream font-body">
                Accumulate rewards points with every purchase at both locations
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                Exclusive Offers
              </h3>
              <p className="text-neutral-cream font-body">
                Access members-only deals and special promotions throughout the year
              </p>
            </div>
          </div>
        </div>

        {/* Reward Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* CocoBanana Smoothie Details */}
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h3 className="text-2xl font-heading font-bold text-secondary-coral mb-4">
              About CocoBanana Smoothie
            </h3>
            <p className="text-dark-green font-body leading-relaxed mb-4">
              Our signature CocoBanana Smoothie is a creamy, tropical blend of coconut and banana. The perfect refreshing treat to complement your meal at either location.
            </p>
            <ul className="space-y-2 text-dark-green font-body">
              <li className="flex items-start">
                <span className="text-secondary-coral-dark mr-3 mt-1">✓</span>
                <span>100% vegan & dairy-free</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary-coral-dark mr-3 mt-1">✓</span>
                <span>Tropical coconut & banana blend</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary-coral-dark mr-3 mt-1">✓</span>
                <span>Available at both locations</span>
              </li>
            </ul>
          </div>

          {/* Tomato Ramen Details */}
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h3 className="text-2xl font-heading font-bold text-primary-green mb-4">
              About Tomato Ramen
            </h3>
            <p className="text-dark-green font-body leading-relaxed mb-4">
              Our hearty Tomato Ramen features a rich, savory tomato-based broth with fresh vegetables and perfectly prepared noodles. A warming comfort dish exclusive to Daikon.
            </p>
            <ul className="space-y-2 text-dark-green font-body">
              <li className="flex items-start">
                <span className="text-primary-green mr-3 mt-1">✓</span>
                <span>Rich plant-based broth</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-green mr-3 mt-1">✓</span>
                <span>Daikon exclusive dish</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-green mr-3 mt-1">✓</span>
                <span>Full bowl, not just a sample</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Both Locations */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-heading font-bold text-primary-green text-center mb-12">
            Join at Either Location
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-heading font-semibold text-primary-green mb-4">
                Daikon Vegan Sushi & More
              </h3>
              <p className="text-dark-green font-body mb-2">
                <strong>Address:</strong><br />
                7210 W Lake Mead Blvd, Ste 1<br />
                Las Vegas, NV 89128
              </p>
              <p className="text-dark-green font-body mb-2">
                <strong>Hours:</strong><br />
                Mon-Sat: 11:00 AM – 9:00 PM<br />
                Sunday: 3:00 PM – 9:00 PM
              </p>
              <p className="text-dark-green font-body mb-4">
                <strong>Phone:</strong> <a href="tel:7027493283" className="text-secondary-coral hover:underline">(702) 749-3283</a>
              </p>
              <a
                href="https://tables.toasttab.com/restaurants/95c14348-a3ae-4de8-a7b2-15c5d41b0e11/findTime"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary-green hover:bg-opacity-90 text-white font-body font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-md"
              >
                Visit Daikon
              </a>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-2xl font-heading font-semibold text-secondary-coral mb-4">
                Basil Vegan Thai & Sushi
              </h3>
              <p className="text-dark-green font-body mb-2">
                <strong>Address:</strong><br />
                500 E Windmill Ln #145<br />
                Las Vegas, NV 89123
              </p>
              <p className="text-dark-green font-body mb-2">
                <strong>Hours:</strong><br />
                Mon-Sat: 11:30 AM – 9:30 PM<br />
                Sunday: 3:00 PM – 9:30 PM
              </p>
              <p className="text-dark-green font-body mb-4">
                <strong>Phone:</strong> <a href="tel:7023573837" className="text-secondary-coral hover:underline">(702) 357-3837</a>
              </p>
              <a
                href="https://www.toasttab.com/basil-vegan-thai/rewardsSignup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-secondary-coral hover:bg-secondary-coral-dark text-white font-body font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-md"
              >
                Visit Basil
              </a>
            </div>
          </div>
        </div>

        {/* Terms */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-16">
          <h3 className="text-2xl font-heading font-bold text-primary-green mb-6">
            Program Terms & Conditions
          </h3>

          <ul className="space-y-3 text-dark-green font-body">
            <li className="flex items-start">
              <span className="text-secondary-coral-dark mr-3 mt-1">•</span>
              <span>Must register with a valid phone number to participate</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary-coral-dark mr-3 mt-1">•</span>
              <span>FREE CocoBanana Smoothie offer valid only for new members with a minimum $25 purchase (Toast Code: COCO25)</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary-coral-dark mr-3 mt-1">•</span>
              <span>FREE Tomato Ramen earned with $50 spend at Daikon location only</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary-coral-dark mr-3 mt-1">•</span>
              <span>CocoBanana Smoothie reward valid at both Daikon Vegan Sushi and Basil Vegan Thai & Sushi locations</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary-coral-dark mr-3 mt-1">•</span>
              <span>One account per phone number</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary-coral-dark mr-3 mt-1">•</span>
              <span>Rewards cannot be combined with other offers unless specified</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary-coral-dark mr-3 mt-1">•</span>
              <span>Management reserves the right to modify or cancel the program at any time</span>
            </li>
          </ul>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-neutral-cream p-8 md:p-12 rounded-lg">
          <h2 className="text-3xl font-heading font-bold text-primary-green mb-4">
            Ready to Start Earning Rewards?
          </h2>
          <p className="text-xl text-dark-green font-body mb-8 max-w-2xl mx-auto">
            Join thousands of members already enjoying free food and exclusive offers. Sign up takes less than a minute!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.toasttab.com/daikon-vegan-sushi-more/rewardsSignup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-green hover:bg-opacity-90 text-white font-body font-semibold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Join Rewards Program
            </a>
            <a
              href="https://tables.toasttab.com/restaurants/95c14348-a3ae-4de8-a7b2-15c5d41b0e11/findTime"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary-coral hover:bg-secondary-coral-dark text-white font-body font-semibold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book a Table
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberRewards;
