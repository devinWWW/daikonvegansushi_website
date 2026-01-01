import React from 'react';

const Locations: React.FC = () => {
  const locations = [
    {
      name: "Daikon Vegan Sushi & More",
      address: "7210 W Lake Mead Blvd, Ste 1",
      city: "Las Vegas, NV 89128",
      phone: "(702) 749-3283",
      email: "daikonvegan01@gmail.com",
      hours: {
        weekday: "Monday-Saturday: 11:00 AM - 9:00 PM",
        weekend: "Sunday: 3:00 PM - 9:00 PM"
      },
      serviceAreas: "West Las Vegas, Summerlin, Downtown Summerlin, Centennial Hills, Northwest Las Vegas",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3218.2!2d-115.2489!3d36.1989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzYCsDExJzU2LjAiTiAxMTXCsDE0JzU2LjAiVw!5e0!3m2!1sen!2sus!4v1234567890",
    },
    {
      name: "Basil Vegan Thai & Sushi",
      address: "500 E Windmill Ln #145",
      city: "Las Vegas, NV 89123",
      phone: "(702) 357-3837",
      email: "basilveganthai01@gmail.com",
      hours: {
        weekday: "Monday-Saturday: 11:30 AM - 9:30 PM",
        weekend: "Sunday: 3:00 PM - 9:30 PM"
      },
      serviceAreas: "Henderson, East Las Vegas, Green Valley, Southeast Las Vegas",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.5!2d-115.1186!3d36.0396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzYCsDAyJzIyLjYiTiAxMTXCsDA3JzA3LjAiVw!5e0!3m2!1sen!2sus!4v1234567890",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-neutral-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-green mb-4">
            Visit Us
          </h2>
          <p className="text-xl text-dark-green font-body">
            Two locations serving Las Vegas
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Map */}
              <div className="h-64 bg-gray-200">
                <iframe
                  src={location.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${location.name}`}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                ></iframe>
              </div>

              {/* Location Info */}
              <div className="p-8">
                <h3 className="text-2xl font-heading font-bold text-primary-green mb-4">
                  {location.name}
                </h3>

                <div className="space-y-3 text-dark-green font-body">
                  {/* Address */}
                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-secondary-coral mt-1 mr-3 flex-shrink-0"
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
                      <p>{location.address}</p>
                      <p>{location.city}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-secondary-coral mr-3 flex-shrink-0"
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
                    <a
                      href={`tel:${location.phone.replace(/[^0-9]/g, '')}`}
                      className="hover:text-secondary-coral transition-colors"
                    >
                      {location.phone}
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-secondary-coral mr-3 flex-shrink-0"
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
                    <a
                      href={`mailto:${location.email}`}
                      className="hover:text-secondary-coral transition-colors"
                    >
                      {location.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="font-heading font-semibold text-primary-green mb-2">Hours</p>
                  <p className="text-dark-green font-body">
                    {location.hours.weekday}<br />
                    {location.hours.weekend}
                  </p>
                </div>

                {/* Service Areas */}
                <div className="mt-4">
                  <p className="font-heading font-semibold text-primary-green mb-2">Serving</p>
                  <p className="text-dark-green font-body text-sm">
                    {location.serviceAreas}
                  </p>
                </div>

                {/* Reservation Button */}
                <div className="mt-6">
                  {location.name === "Basil Vegan Thai & Sushi" ? (
                    <button
                      type="button"
                      disabled
                      title="Reservations temporarily unavailable"
                      className="block w-full text-center bg-secondary-coral text-white font-body font-semibold px-6 py-3 rounded-lg transition-all duration-300 opacity-60 cursor-not-allowed"
                    >
                      Make a Reservation
                    </button>
                  ) : (
                    <a
                      href="https://tables.toasttab.com/restaurants/95c14348-a3ae-4de8-a7b2-15c5d41b0e11/findTime"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-secondary-coral hover:bg-secondary-coral-dark text-white font-body font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Reservations Unavailable
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
