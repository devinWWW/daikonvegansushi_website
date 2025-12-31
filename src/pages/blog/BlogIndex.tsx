import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    title: 'Meet Mindy Lim - Bold Journey Magazine Interview',
    excerpt:
      'Chef Mindy Lim shares her inspiring 20-year journey from traditional chef to vegan cuisine pioneer. Discover the dream that changed everything.',
    to: '/blog/mindy-lim-bold-journey-interview',
    image: '/chef-mindy-cover.webp',
    imageAlt: 'Chef Mindy Lim, owner and head chef of Daikon Vegan Sushi',
    readTime: '10 min read',
    publishedDate: 'October 15, 2025',
  },
  {
    title: 'The Ultimate Guide to Vegan Sushi in Las Vegas',
    excerpt:
      'Explore PETA\'s Top 10 Yellow Magic Roll, 100% plant-based nigiri, and why Daikon leads Las Vegas in vegan sushi innovation.',
    to: '/blog/ultimate-guide-vegan-sushi-las-vegas',
    image: '/vegan-sushi-daikon-vegan.png',
    imageAlt: 'Daikon Vegan Sushi Yellow Magic roll on a plate',
    readTime: '8 min read',
    publishedDate: 'September 15, 2024',
  },
  {
    title: '5 Reasons to Try Vegan Ramen in Las Vegas',
    excerpt:
      'Discover rich tomato and sesame broths, gluten-free options, and plant-powered comfort food at Daikon Vegan Sushi.',
    to: '/blog/vegan-ramen-las-vegas',
    image: '/tomato-ramen.png',
    imageAlt: 'Plant-based tomato ramen bowl with vegetables',
    readTime: '7 min read',
    publishedDate: 'September 20, 2024',
  },
];

const BlogIndex: React.FC = () => {
  return (
    <div className='pt-24 pb-20 bg-neutral-cream min-h-screen'>

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-green mb-4">
            Daikon Vegan Sushi Blog
          </h1>
          <p className="text-lg md:text-xl text-dark-green font-body max-w-2xl mx-auto">
            Guides, stories, and plant-powered inspiration from Chef Mindy Lim and the Daikon team.
          </p>
        </header>

        <div className="grid gap-10 md:grid-cols-2" role="list">
          {blogPosts.map((post) => (
            <article
              key={post.to}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl focus-within:shadow-xl focus-within:-translate-y-1 hover:-translate-y-1"
              role="listitem"
            >
              <Link to={post.to} className="block focus:outline-none focus-visible:ring-4 focus-visible:ring-secondary-coral/40">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-6 flex flex-col gap-4">
                  <div className="text-sm font-body text-dark-green/80 flex items-center gap-3">
                    <span>{post.publishedDate}</span>
                    <span aria-hidden="true">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-heading font-semibold text-primary-green">
                    {post.title}
                  </h2>
                  <p className="text-dark-green font-body leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-secondary-coral-dark font-semibold">
                    Read more
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogIndex;
