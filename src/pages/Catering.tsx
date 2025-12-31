import React from 'react';
import { Link } from 'react-router-dom';

const Catering: React.FC = () => {
  return (
    <div className='min-h-screen pt-24 pb-20 bg-neutral-cream'>
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary-green mb-4">
              Vegan Catering Services
            </h1>
            <p className="text-xl text-dark-green font-body max-w-3xl mx-auto">
              Bring our award-winning plant-based cuisine to your next event. From intimate gatherings to large celebrations, we create memorable vegan catering experiences.
            </p>
          </div>

          {/* Catering Overview */}
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">
                  Award-Winning Vegan Catering
                </h2>
                <p className="text-dark-green font-body leading-relaxed mb-6">
                  As the home of PETA's 2024 Top 10 Vegan Sushi Roll, Daikon brings the same dedication to excellence to your special events. Our catering services feature the same high-quality, plant-based ingredients and expert preparation that have made us Las Vegas's premier vegan restaurant.
                </p>
                <p className="text-dark-green font-body leading-relaxed mb-8">
                  Whether you're planning a corporate event, wedding, birthday celebration, or any special occasion, we'll work with you to create a customized menu that impresses your guests while staying true to compassionate, plant-based values.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:7027493283"
                    className="inline-block bg-secondary-coral hover:bg-secondary-coral-dark text-white font-body font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                  >
                    Call (702) 749-3283
                  </a>
                  <a
                    href="mailto:daikonvegan01@gmail.com?subject=Catering Inquiry"
                    className="inline-block bg-primary-green hover:bg-opacity-90 text-white font-body font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                  >
                    Email Us
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src="/vegan-sushi-daikon-vegan.png"
                  alt="Award-winning vegan sushi platter for catering"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-accent-gold text-white px-4 py-2 rounded-lg font-heading font-bold text-sm">
                  PETA 2024 Top 10
                </div>
              </div>
            </div>
          </div>

          {/* Catering Packages */}
          <div className="mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary-green text-center mb-12">
              Catering Packages
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Small Group Package */}
              <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-neutral-cream hover:border-secondary-coral transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-heading font-bold text-primary-green mb-2">
                    Small Group
                  </h3>
                  <p className="text-dark-green font-body">4-8 people</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-secondary-coral-dark mr-3 mt-1">✓</span>
                    <span className="text-dark-green font-body">Sushi platter selection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-coral-dark mr-3 mt-1">✓</span>
                    <span className="text-dark-green font-body">Appetizer assortment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-coral-dark mr-3 mt-1">✓</span>
                    <span className="text-dark-green font-body">Dipping sauces & condiments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-coral-dark mr-3 mt-1">✓</span>
                    <span className="text-dark-green font-body">Eco-friendly serving ware</span>
                  </li>
                </ul>
                
                <div className="text-center">
                  <p className="text-primary-green font-heading font-bold text-xl mb-4">
                    Starting at $120
                  </p>
                  <a
                    href="tel:7027493283"
                    className="inline-block bg-secondary-coral hover:bg-secondary-coral-dark text-white font-body font-semibold px-6 py-3 rounded-lg transition-all duration-300 w-full text-center"
                  >
                    Get Quote
                  </a>
                </div>
              </div>

              {/* Medium Group Package */}
              <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-secondary-coral relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary-coral text-white px-4 py-2 rounded-full font-heading font-bold text-sm">
                    Most Popular
                  </span>
                </div>
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-heading font-bold text-primary-green mb-2">
                    Medium Group
                  </h3>
                  <p className="text-dark-green font-body">9-15 people</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-secondary-coral-dark mr-3 mt-1">✓</span>
                    <span className="text-dark-green font-body">Premium sushi selection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-coral-dark mr-3 mt-1">✓</span>
                    <span className="text-dark-green font-body">Hot appetizers & entrees</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-coral-dark mr-3 mt-1">✓</span>
                    <span className="text-dark-green font-body">Vegan ramen options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-coral-dark mr-3 mt-1">✓</span>
                    <span className="text-dark-green font-body">Custom menu consultation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-coral-dark mr-3 mt-1">✓</span>
                    <span className="text-dark-green font-body">Setup & breakdown service</span>
                  </li>
                </ul>
                
                <div className="text-center">
                  <p className="text-primary-green font-heading font-bold text-xl mb-4">
                    Starting at $280
                  </p>
                  <a
                    href="tel:7027493283"
                    className="inline-block bg-secondary-coral hover:bg-secondary-coral-dark text-white font-body font-semibold px-6 py-3 rounded-lg transition-all duration-300 w-full text-center"
                  >
                    Get Quote
                  </a>
                </div>
              </div>

              {/* Large Group Package */}
              <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-neutral-cream hover:border-secondary-coral transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-heading font-bold text-primary-green mb-2">
                    Large Group
                  </h3>
                  <p className="text-dark-green font-body">16+ people</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-secondary-coral-dark mr-3 mt-1">✓</span>
                    <span className="text-dark-green font-body">Full menu access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-coral-dark mr-3 mt-1">✓</span>
                    <span className="text-dark-green font-body">Custom menu creation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-coral-dark mr-3 mt-1">✓</span>
                    <span className="text-dark-green font-body">On-site chef service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-coral-dark mr-3 mt-1">✓</span>
                    <span className="text-dark-green font-body">Full service setup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-coral-dark mr-3 mt-1">✓</span>
                    <span className="text-dark-green font-body">Event coordination</span>
                  </li>
                </ul>
                
                <div className="text-center">
                  <p className="text-primary-green font-heading font-bold text-xl mb-4">
                    Custom Pricing
                  </p>
                  <a
                    href="tel:7027493283"
                    className="inline-block bg-secondary-coral hover:bg-secondary-coral-dark text-white font-body font-semibold px-6 py-3 rounded-lg transition-all duration-300 w-full text-center"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Special Events & Catering */}
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary-green text-center mb-12">
              Special Events & Catering
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-heading font-semibold text-primary-green mb-6">
                  Private Parties
                </h3>
                <p className="text-dark-green font-body leading-relaxed mb-6">
                  Daikon can accommodate private parties and special events. Contact the restaurant for:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-secondary-coral-dark mr-3 mt-1">•</span>
                    <span className="text-dark-green font-body">Birthday celebrations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-coral-dark mr-3 mt-1">•</span>
                    <span className="text-dark-green font-body">Business lunches</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-coral-dark mr-3 mt-1">•</span>
                    <span className="text-dark-green font-body">Team gatherings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-coral-dark mr-3 mt-1">•</span>
                    <span className="text-dark-green font-body">Anniversary dinners</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-heading font-semibold text-primary-green mb-6">
                  Catering for Summerlin Events
                </h3>
                <p className="text-dark-green font-body leading-relaxed mb-6">
                  Planning a Summerlin event? Daikon offers catering:
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-heading font-semibold text-primary-green mb-3">
                    Sushi Platters:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-dark-green font-body">4-6 people:</span>
                      <span className="text-primary-green font-body font-semibold">$85</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-dark-green font-body">6-8 people:</span>
                      <span className="text-primary-green font-body font-semibold">$125</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-dark-green font-body">10-12 people:</span>
                      <span className="text-primary-green font-body font-semibold">$155</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-heading font-semibold text-primary-green mb-3">
                    Entree Platters:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-dark-green font-body">Sesame "Chicken" (3-5 people):</span>
                      <span className="text-primary-green font-body font-semibold">$45</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-dark-green font-body">Basil Fried Rice (3-5 people):</span>
                      <span className="text-primary-green font-body font-semibold">$40</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="text-xl font-heading font-semibold text-primary-green mb-6 text-center">
                Perfect for:
              </h4>
              <div className="grid md:grid-cols-5 gap-4 text-center">
                <div className="bg-neutral-cream p-4 rounded-lg">
                  <span className="text-dark-green font-body font-medium">Office meetings</span>
                </div>
                <div className="bg-neutral-cream p-4 rounded-lg">
                  <span className="text-dark-green font-body font-medium">Home gatherings</span>
                </div>
                <div className="bg-neutral-cream p-4 rounded-lg">
                  <span className="text-dark-green font-body font-medium">Community events</span>
                </div>
                <div className="bg-neutral-cream p-4 rounded-lg">
                  <span className="text-dark-green font-body font-medium">Watch parties</span>
                </div>
                <div className="bg-neutral-cream p-4 rounded-lg">
                  <span className="text-dark-green font-body font-medium">Book clubs</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center bg-primary-green text-white p-6 rounded-lg">
              <p className="text-neutral-cream font-body mb-4">
                <strong>Contact:</strong> (702) 749-3283 or daikonvegan01@gmail.com
              </p>
              <p className="text-neutral-cream font-body">
                <strong>Advance Notice:</strong> 48-72 hours recommended
              </p>
            </div>
          </div>

          {/* Beyond Daikon: Vegan-Friendly Summerlin */}
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary-green text-center mb-12">
              Beyond Daikon: Vegan-Friendly Summerlin
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-heading font-semibold text-primary-green mb-6">
                  Grocery Shopping for Plant-Based Eating
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-secondary-coral pl-4">
                    <h4 className="text-lg font-heading font-semibold text-primary-green mb-2">
                      <a
                        href="https://www.yelp.com/biz/whole-foods-market-las-vegas-6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-secondary-coral transition-colors"
                      >
                        Whole Foods Market - Downtown Summerlin
                      </a>
                    </h4>
                    <p className="text-dark-green font-body text-sm mb-2">
                      Extensive vegan selection including prepared foods, mock meats, dairy alternatives, and organic produce.
                    </p>
                    <p className="text-dark-green font-body text-xs opacity-75">
                      2475 S Town Center Dr, Las Vegas, NV
                    </p>
                  </div>

                  <div className="border-l-4 border-secondary-coral pl-4">
                    <h4 className="text-lg font-heading font-semibold text-primary-green mb-2">
                      <a
                        href="https://locations.traderjoes.com/nv/las-vegas/284/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-secondary-coral transition-colors"
                      >
                        Trader Joe's - Summerlin
                      </a>
                    </h4>
                    <p className="text-dark-green font-body text-sm mb-2">
                      Budget-friendly vegan staples, unique plant-based products, affordable produce.
                    </p>
                    <p className="text-dark-green font-body text-xs opacity-75">
                      2315 Summa Dr, Ste 100, Las Vegas, NV
                    </p>
                  </div>

                  <div className="border-l-4 border-secondary-coral pl-4">
                    <h4 className="text-lg font-heading font-semibold text-primary-green mb-2">
                      <a
                        href="https://www.sprouts.com/store/nv/las-vegas/las-vegas-lake-mead/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-secondary-coral transition-colors"
                      >
                        Sprouts Farmers Market - Summerlin
                      </a>
                    </h4>
                    <p className="text-dark-green font-body text-sm mb-2">
                      Great produce section, bulk bins, natural and organic products, competitive prices.
                    </p>
                    <p className="text-dark-green font-body text-xs opacity-75">
                      7530 W Lake Mead Blvd, Las Vegas, NV
                    </p>
                  </div>

                  <div className="border-l-4 border-secondary-coral pl-4">
                    <h4 className="text-lg font-heading font-semibold text-primary-green mb-2">
                      <a
                        href="https://www.smithsfoodanddrug.com/stores/grocery/nv/las-vegas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-secondary-coral transition-colors"
                      >
                        Smith's/Kroger - Summerlin
                      </a>
                    </h4>
                    <p className="text-dark-green font-body text-sm mb-2">
                      Increasing vegan selection, Simple Truth organic line, convenient locations.
                    </p>
                    <p className="text-dark-green font-body text-xs opacity-75">
                      2211 N Rampart Blvd, Las Vegas, NV
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-heading font-semibold text-primary-green mb-6">
                  Summerlin Farmers Markets
                </h3>
                <p className="text-dark-green font-body leading-relaxed mb-6">
                  Check local listings for seasonal farmers markets in Downtown Summerlin and surrounding areas. Great for:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-secondary-coral-dark mr-3 mt-1">•</span>
                    <span className="text-dark-green font-body">Fresh, local produce</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-coral-dark mr-3 mt-1">•</span>
                    <span className="text-dark-green font-body">Artisan bread</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-coral-dark mr-3 mt-1">•</span>
                    <span className="text-dark-green font-body">Homemade hummus and dips</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-coral-dark mr-3 mt-1">•</span>
                    <span className="text-dark-green font-body">Vegan baked goods (varies by vendor)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="bg-primary-green text-white rounded-lg p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-heading font-bold text-center mb-8">
              Service Areas
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-heading font-semibold mb-4">
                  From Our Summerlin Location
                </h3>
                <ul className="space-y-2 text-neutral-cream font-body">
                  <li>• Summerlin</li>
                  <li>• Downtown Summerlin</li>
                  <li>• Centennial Hills</li>
                  <li>• West Las Vegas</li>
                  <li>• Red Rock area</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-semibold mb-4">
                  From Our Henderson Location
                </h3>
                <ul className="space-y-2 text-neutral-cream font-body">
                  <li>• Henderson</li>
                  <li>• Green Valley</li>
                  <li>• Anthem</li>
                  <li>• Seven Hills</li>
                  <li>• Southeast Las Vegas</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-neutral-cream font-body mb-4">
                Don't see your area? Contact us to discuss delivery options.
              </p>
              <a
                href="tel:7027493283"
                className="inline-block bg-secondary-coral hover:bg-secondary-coral-dark text-white font-body font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Call (702) 749-3283
              </a>
            </div>
          </div>

          {/* Booking Process */}
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary-green text-center mb-12">
              How to Book Your Catering
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-coral rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-heading font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-heading font-semibold text-primary-green mb-2">
                  Contact Us
                </h3>
                <p className="text-dark-green font-body text-sm">
                  Call or email with your event details and guest count
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-coral rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-heading font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-heading font-semibold text-primary-green mb-2">
                  Menu Planning
                </h3>
                <p className="text-dark-green font-body text-sm">
                  We'll create a custom menu based on your preferences
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-coral rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-heading font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-heading font-semibold text-primary-green mb-2">
                  Quote & Confirm
                </h3>
                <p className="text-dark-green font-body text-sm">
                  Receive a detailed quote and confirm your order
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-coral rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-heading font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-heading font-semibold text-primary-green mb-2">
                  Enjoy Your Event
                </h3>
                <p className="text-dark-green font-body text-sm">
                  We handle setup and delivery for a stress-free experience
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-neutral-cream p-8 md:p-12 rounded-lg">
            <h2 className="text-3xl font-heading font-bold text-primary-green mb-4">
              Ready to Plan Your Event?
            </h2>
            <p className="text-xl text-dark-green font-body mb-8 max-w-2xl mx-auto">
              Let us bring our award-winning vegan cuisine to your next celebration. 
              Contact us today to discuss your catering needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:7027493283"
                className="inline-block bg-secondary-coral hover:bg-secondary-coral-dark text-white font-body font-semibold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Call (702) 749-3283
              </a>
              <a
                href="mailto:daikonvegan01@gmail.com?subject=Catering Inquiry"
                className="inline-block bg-primary-green hover:bg-opacity-90 text-white font-body font-semibold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Email Us
              </a>
              <Link
                to="/contact"
                className="inline-block bg-white hover:bg-neutral-cream text-primary-green font-body font-semibold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-primary-green"
              >
                Visit Our Locations
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Catering;
