import React from 'react';
import { Link } from 'react-router-dom';
import BlogPost from '../../components/BlogPost';

const EaterVegasDaikonFeature: React.FC = () => {
  const eaterUrl =
    'https://vegas.eater.com/2020/12/15/22176681/daikon-vegan-sushi-more-open-takeout-delivery';

  return (
    <BlogPost
      title="Eater Vegas Featured Daikon Vegan Sushi & More — What They Reported"
      publishedDate="2026-01-05T12:00:00-08:00"
      readTime="6 min read"
      featuredImage="/daikon_eater_blog.webp"
      featuredImageAlt="Daikon Vegan Sushi & More featured by Eater Vegas"
      url="/blog/eater-vegas-daikon-feature"
    >
      {/* SOURCE NOTICE */}
      <div className="blog-info-box">
        <p>
          <strong>Source & Attribution:</strong>{' '}
          This article summarizes reporting originally published by{' '}
          <a href={eaterUrl} target="_blank" rel="noopener noreferrer">
            Eater Vegas
          </a>{' '}
          on December 15, 2020. This page is written in our own words and links
          directly to the original article.
        </p>
      </div>

      <h2>What Eater Vegas Reported</h2>
      <p>
        In a December 15, 2020 article, Eater Vegas covered the opening of Daikon
        Vegan Sushi &amp; More on the west side of Las Vegas. The article
        introduced Daikon as a restaurant focused entirely on{' '}
        <strong>plant-based sushi, Asian-inspired dishes, and vegan comfort
        food</strong>.
      </p>

      <p>
        At the time of publication, Eater reported that the restaurant was
        operating as <strong>takeout and delivery only</strong>, with online
        ordering encouraged.
      </p>

      <img
        src="/daikon_eater_blog.webp"
        alt="Daikon Vegan Sushi & More exterior and dishes"
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

      <h2>Location Details Mentioned in the Article</h2>
      <p>
        According to Eater Vegas, Daikon Vegan Sushi &amp; More opened in a
        westside Las Vegas location near Whole Foods Marketplace. The article
        listed the restaurant’s address and contact information as:
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
        <h4>Important Context</h4>
        <p>
          These details reflect what was reported in December 2020. For current
          hours, services, and ordering options, please visit our{' '}
          <Link to="/contact">Contact & Locations</Link> page.
        </p>
      </div>

      <h2>Menu Highlights Referenced by Eater</h2>
      <p>
        Eater Vegas described Daikon’s menu as broad and creative, highlighting
        sushi, appetizers, and entrees designed to replicate familiar flavors
        using plant-based ingredients.
      </p>

      <h3>Examples Mentioned</h3>
      <ul>
        <li>Miso soup and stuffed jalapeño peppers</li>
        <li>
          Tempura-fried king oyster mushrooms described as a calamari-style dish
        </li>
        <li>Sushi rolls featuring pickled vegetables, tofu, and avocado</li>
        <li>Roasted yellow bell pepper nigiri</li>
        <li>Roe-style pockets made using carrot juice and algae</li>
        <li>Sesame-style “chicken” made with gluten</li>
        <li>Panko-fried tofu skin prepared in a tonkatsu style</li>
      </ul>

      <h2>Chef Mindy Lim Background</h2>
      <p>
        The Eater article also included background on Chef Mindy Lim, noting her
        previous restaurant experience in Boulder, Colorado, and her focus on
        ramen, noodle dishes, rice bowls, small plates, and fresh beverages.
      </p>

      <h2>Read the Original Article</h2>
      <p>
        For full details and original reporting, read the Eater Vegas article
        directly:{' '}
        <a href={eaterUrl} target="_blank" rel="noopener noreferrer">
          Vegan Sushi Arrives on the Westside for Takeout and Delivery Only, for
          Now
        </a>
        .
      </p>

      <div className="blog-cta" style={{ marginTop: '2rem' }}>
        <h3>Visit or Order</h3>
        <p>
          View our latest information on the{' '}
          <Link to="/contact">Contact & Locations</Link> page or order online
          anytime.
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
            Locations & Hours
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
          <Link to="/about">
            → Meet Chef Mindy: The Story Behind Daikon
          </Link>
        </p>
      </div>
    </BlogPost>
  );
};

export default EaterVegasDaikonFeature;
