import React from 'react';

const Videos: React.FC = () => {
  const videos = [
    {
      id: 'jaadXBp2wE8',
      type: 'youtube',
      title: 'Daikon Vegan Sushi Experience',
      description: 'Discover the art of plant-based sushi at Daikon'
    },
    {
      id: '-N55koh0hps',
      type: 'youtube',
      title: 'Behind the Scenes at Daikon',
      description: 'See how we create our award-winning vegan dishes'
    }
  ];

  const instagramReels = [
    {
      id: 'DNpZUicu8uL',
      url: 'https://www.instagram.com/reel/DNpZUicu8uL/embed',
      title: 'Fresh Vegan Sushi Creation',
      description: 'Watch us craft our signature rolls'
    },
    {
      id: 'DJCfgHczFF5',
      url: 'https://www.instagram.com/reel/DJCfgHczFF5/embed',
      title: 'Plant-Based Artistry',
      description: 'The beauty of vegan cuisine'
    },
    {
      id: 'DBwnmFSx94s',
      url: 'https://www.instagram.com/reel/DBwnmFSx94s/embed',
      title: 'Golden State Roll',
      description: 'Customer Favorite Crunch Roll'
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-green mb-4">
            Experience Daikon
          </h2>
          <p className="text-xl text-dark-green font-body max-w-2xl mx-auto">
            Watch our culinary journey and discover the passion behind every dish
          </p>
        </div>

        {/* YouTube Videos Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {videos.map((video) => (
            <div key={video.id} className="bg-neutral-cream rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-heading font-semibold text-primary-green mb-2">
                  {video.title}
                </h3>
                <p className="text-dark-green font-body">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Reels Section */}
        <div className="border-t-2 border-primary-green border-opacity-20 pt-16">
          <h3 className="text-3xl font-heading font-bold text-primary-green mb-8 text-center">
            Follow Us on Instagram
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {instagramReels.map((reel) => (
              <div key={reel.id} className="bg-neutral-cream rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div
                  className="relative"
                  style={{ aspectRatio: '9 / 16', minHeight: '320px' }}
                >
                  <iframe
                    src={reel.url}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    loading="lazy"
                    title={reel.title}
                    className="absolute inset-0"
                  ></iframe>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-heading font-semibold text-primary-green mb-1">
                    {reel.title}
                  </h4>
                  <p className="text-sm text-dark-green font-body">
                    {reel.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.instagram.com/daikonvegansushi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-body font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Follow @daikonvegansushi
              </a>
              <a
                href="https://www.facebook.com/reel/1444815386839891/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-body font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Watch Facebook Reel
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;
