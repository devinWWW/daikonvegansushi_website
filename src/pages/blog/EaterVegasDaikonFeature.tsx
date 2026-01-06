import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogPost from '../../components/BlogPost';

const EaterVegasDaikonFeature = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Original source (link + attribution)
  const eaterUrl =
    'https://vegas.eater.com/2020/12/15/22176681/daikon-vegan-sushi-more-open-takeout-delivery';

  return (
    <BlogPost
      title="Eater Vegas Featured Daikon Vegan Sushi — What They Reported"
      publishedDate="2026-01-05T12:00:00-08:00"
      readTime="6 min read"
      featuredImage="/daikon_eater_blog.webp"
      featuredImageAlt="Daikon Vegan Sushi featured by Eater Vegas"
      url="/blog/eater-vegas-daikon-feature"
    >
      {/* Back link (matches other blog pages UX) */}
      <p>
        <Link to="/blog" className="back-to-blog" aria-label="Return to blog listing">
          ← Back to Blog
        </Link>
      </p>

      {/* Source / citation notice */}
      <div className="blog-info-box">
        <p>
          <strong>Source &amp; Attribution:</strong> This page summarizes (in our own words) an Eater
          Vegas article published on <strong>December 15, 2020</strong>. We link to the original
          reporting here:{' '}
          <a href={eaterUrl} target="_blank" rel="noopener noreferrer">
            Eater Vegas — “Vegan Sushi Arrives on the Westside for Takeout and Delivery Only, for Now”
          </a>
          .
        </p>
      </div>

      <h2>What Eater Vegas Reported</h2>
      <p>
        Eater Vegas covered the opening of <strong>Daikon Vegan Sushi &amp; More</strong> as a
        restaurant specializing in <strong>100% vegan sushi and entrees</strong>. The story
        described Daikon’s concept as a plant-based, Asian-fusion style menu that includes sushi as
        well as drinks like pressed juices and smoothies.
      </p>

      <p>
        In that coverage, Eater noted that Daikon was operating as{' '}
        <strong>takeout and delivery only</strong> at the time.
      </p>

      <img
        src="/daikon_eater_blog.webp"
        alt="Daikon Vegan Sushi featured image for our Eater Vegas recap"
        width="800"
        height="600"
        loading="lazy"
        decoding="async"
        style={{
          maxWidth: '100%',
          height: 'auto',
          borderRadius: '12px',
          margin: '2rem 0',
        }}
      />

      <h2>Where Eater Said We Opened</h2>
      <p>
        Eater wrote that Daikon took over a space at the <strong>Whole Foods Marketplace</strong> on
        the west side of Las Vegas, and included the restaurant’s address and phone number:
      </p>

      <ul>
        <li>
          <strong>7210 W. Lake Mead Blvd, Ste 1</strong>
        </li>
        <li>
          <strong>Las Vegas, NV 89128</strong>
        </li>
        <li>
          <strong>Phone:</strong> (702) 749-3283
        </li>
      </ul>

      <div className="blog-success-box">
        <h4>Quick note</h4>
        <p>
          The details above reflect what was reported in <strong>December 2020</strong>. For the
          most up-to-date info, visit our <Link to="/contact">Contact &amp; Locations</Link> page.
        </p>
      </div>

      <h2>Menu Items Eater Mentioned</h2>
      <p>
        Eater highlighted that Daikon’s menu included a range of plant-based dishes—from soup and
        appetizers to creative sushi and entrees designed to recreate familiar flavors using vegan
        ingredients.
      </p>

      <h3>Examples referenced in the article</h3>
      <ul>
        <li>Miso soup and stuffed jalapeño peppers</li>
        <li>Tempura-fried king oyster mushrooms described as a calamari-style appetizer</li>
        <li>Sushi options using items like pickled vegetables, spicy tofu, and avocado</li>
        <li>Roasted yellow bell pepper nigiri</li>
        <li>Roe-style “pockets” made using carrot juice and algae</li>
        <li>Sesame-style “chicken” made with gluten chunks</li>
        <li>A tonkatsu-style dish using panko-fried tofu skin</li>
      </ul>

      <h2>Chef Mindy Lim Background Mentioned</h2>
      <p>
        The story also included background on Chef Mindy Lim and referenced prior restaurant
        experience in Boulder, Colorado, along with a focus on Japanese comfort food categories
        like ramen, noodle dishes, and rice bowls—plus fresh beverages.
      </p>

      <h2>Read the Original Reporting</h2>
      <p>
        If you want the exact wording and full context, read the original Eater Vegas article here:{' '}
        <a href={eaterUrl} target="_blank" rel="noopener noreferrer">
          Vegan Sushi Arrives on the Westside for Takeout and Delivery Only, for Now
        </a>
        .
      </p>

      <div className="blog-cta" style={{ marginTop: '2rem' }}>
        <h3>Visit or Order</h3>
        <p>
          View our latest location info on the <Link to="/contact">Contact &amp; Locations</Link>{' '}
          page, or order online anytime.
        </p>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <a
            href="https://order.toasttab.com/online/daikon-vegan-sushi-more"
            className="blog-cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Order Online
          </a>
          <Link to="/contact" className="blog-cta-button">
            Locations &amp; Hours
          </Link>
        </div>
      </div>

      <div className="blog-cta" style={{ marginTop: '2rem' }}>
        <h3>Related Articles</h3>
        <p>
          <Link to="/blog/ultimate-guide-vegan-sushi-las-vegas">
            → The Ultimate Guide to Vegan Sushi in Las Vegas
          </Link>
        </p>
        <p style={{ marginTop: '1rem' }}>
          <Link to="/about">→ Meet Chef Mindy: The Story Behind Daikon</Link>
        </p>
      </div>

      <div className="blog-info-box" style={{ marginTop: '2rem' }}>
        <h4>Sources</h4>
        <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
          <li>
            <a href={eaterUrl} target="_blank" rel="noopener noreferrer">
              Eater Vegas (Dec 15, 2020): Vegan Sushi Arrives on the Westside for Takeout and Delivery Only, for Now
            </a>
          </li>
        </ul>
      </div>
    </BlogPost>
  );
};

export default EaterVegasDaikonFeature;
