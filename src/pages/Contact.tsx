import React from 'react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  const locations = [
    {
      name: "Daikon Vegan Sushi & More",
      address: "7210 W Lake Mead Blvd, Ste 1",
      city: "Las Vegas, NV 89128",
      phone: "(702) 749-3283",
      email: "daikonvegan01@gmail.com",
      hours: {
        weekday: "Mon-Sat: 11:00 AM - 9:00 PM",
        weekend: "Sunday: 3:00 PM - 9:00 PM"
      },
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3218.2!2d-115.2489!3d36.1989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzYCsDExJzU2LjAiTiAxMTXCsDE0JzU2LjAiVw!5e0!3m2!1sen!2sus!4v1234567890",
    },
    {
      name: "Basil Vegan Thai & Sushi",
      address: "500 E Windmill Ln #145",
      city: "Las Vegas, NV 89123",
      phone: "(702) 357-3837",
      email: "basilveganthai01@gmail.com",
      hours: {
        weekday: "Mon-Sat: 11:30 AM - 9:30 PM",
        weekend: "Sunday: 3:00 PM - 9:30 PM"
      },
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.5!2d-115.1186!3d36.0396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzYCsDAyJzIyLjYiTiAxMTXCsDA3JzA3LjAiVw!5e0!3m2!1sen!2sus!4v1234567890",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary-green mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-dark-green font-body max-w-2xl mx-auto">
              Visit either of our Las Vegas locations or reach out for reservations, takeout, or catering inquiries.
            </p>
          </div>

        {/* Locations */}
        <div className="space-y-12">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                {/* Map */}
                <div className="h-96 md:h-auto">
                  <iframe
                    src={location.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '400px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${location.name}`}
                  ></iframe>
                </div>

                {/* Location Details */}
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl font-heading font-bold text-primary-green mb-6">
                    {location.name}
                  </h2>

                  <div className="space-y-6">
                    {/* Address */}
                    <div className="flex items-start">
                      <svg
                        className="w-6 h-6 text-secondary-coral mt-1 mr-4 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <div>
                        <p className="font-heading font-semibold text-dark-green mb-1">Address</p>
                        <p className="text-dark-green font-body">{location.address}</p>
                        <p className="text-dark-green font-body">{location.city}</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start">
                      <svg
                        className="w-6 h-6 text-secondary-coral mt-1 mr-4 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <div>
                        <p className="font-heading font-semibold text-dark-green mb-1">Phone</p>
                        <a
                          href={`tel:${location.phone.replace(/[^0-9]/g, '')}`}
                          className="text-dark-green font-body hover:text-secondary-coral transition-colors"
                        >
                          {location.phone}
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start">
                      <svg
                        className="w-6 h-6 text-secondary-coral mt-1 mr-4 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <div>
                        <p className="font-heading font-semibold text-dark-green mb-1">Email</p>
                        <a
                          href={`mailto:${location.email}`}
                          className="text-dark-green font-body hover:text-secondary-coral transition-colors"
                        >
                          {location.email}
                        </a>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start">
                      <svg
                        className="w-6 h-6 text-secondary-coral mt-1 mr-4 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div>
                        <p className="font-heading font-semibold text-dark-green mb-1">Hours</p>
                        <p className="text-dark-green font-body">{location.hours.weekday}</p>
                        <p className="text-dark-green font-body">{location.hours.weekend}</p>
                      </div>
                    </div>
                  </div>

                  {/* Get Directions Button */}
                  <div className="mt-8">
                    <a
                      href={`https://www.google.com/maps/dir//${location.address}, ${location.city}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-secondary-coral hover:bg-secondary-coral-dark text-white font-body font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-primary-green text-white rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Have Questions?
          </h2>
          <p className="text-xl font-body mb-6 opacity-90">
            Feel free to call or email us. We're here to help!
          </p>
          <p className="text-lg font-body mb-6 opacity-90">
            Learn more{' '}
            <Link to="/about" className="underline hover:text-accent-gold transition-colors font-semibold">
              about Chef Mindy's story
            </Link>, explore our{' '}
            <Link to="/blog/ultimate-guide-vegan-sushi-las-vegas" className="underline hover:text-accent-gold transition-colors font-semibold">
              award-winning vegan sushi
            </Link>, or discover our{' '}
            <Link to="/blog/vegan-ramen-las-vegas" className="underline hover:text-accent-gold transition-colors font-semibold">
              plant-based ramen options
            </Link>.
          </p>
          <p className="text-lg font-body opacity-80">
            We look forward to serving you soon at either of our Las Vegas locations!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
