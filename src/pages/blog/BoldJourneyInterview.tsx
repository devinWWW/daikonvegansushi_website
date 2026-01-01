import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/blog.css';
import '../../styles/bold-journey.css';

const BoldJourneyInterview = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articleUrl = '/blog/mindy-lim-bold-journey-interview';
  const currentUrl = `https://www.daikonvegansushi.com${articleUrl}`;
  const publishedDate = '2025-01-15T12:00:00-08:00';

const handleShare = (_platform: string) => {
    // Share action - no tracking
  };

  return (
    <div className="blog-container bold-journey-article" role="region" aria-labelledby="article-heading">
      {/* Back navigation link */}
      <Link to="/blog" className="back-to-blog" aria-label="Return to blog listing">
        ← Back to Blog
      </Link>

      {/* Main article container */}
      <article className="blog-article">
        {/* Publication badge - distinguishes magazine feature from regular blog posts */}
        <div className="publication-badge" role="banner">
          <span className="badge-text">BOLD JOURNEY MAGAZINE</span>
        </div>

        {/* Article header with title, subtitle, and metadata */}
        <header className="bold-journey-header">
          <h1 id="article-heading" className="bold-journey-title">
            Meet Mindy Lim
          </h1>
          <p className="bold-journey-subtitle">
            Bold Journey Magazine Interview
          </p>

          {/* Article metadata with publishing date and read time */}
          <div className="blog-meta" role="contentinfo">
            <span className="blog-meta-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
              </svg>
              <time dateTime={publishedDate}>
                {new Date(publishedDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </span>
            <span className="blog-meta-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
              </svg>
              10 min read
            </span>
          </div>
        </header>

        {/* Hero image - not lazy loaded for LCP optimization */}
        <figure className="bold-journey-hero">
          <img
            src="/chef-mindy-cover.webp"
            alt="Chef Mindy Lim, owner and head chef of Daikon Vegan Sushi, pioneering plant-based cuisine in Las Vegas"
            className="bold-journey-hero-image"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </figure>

        {/* Main article content */}
        <div className="blog-content bold-journey-content">

          {/* Source Attribution */}
          <aside className="source-attribution" role="complementary" aria-label="Article source information">
            <p className="source-note">
              <strong>Originally featured in:</strong> This interview was originally published on{' '}
              <a
                href="https://boldjourney.com/meet-mindy-lim/"
                target="_blank"
                rel="noopener noreferrer"
                className="source-link"
              >
                Bold Journey Magazine
              </a>
              . Read the{' '}
              <a
                href="https://boldjourney.com/meet-mindy-lim/"
                target="_blank"
                rel="noopener noreferrer"
                className="source-link"
              >
                original Bold Journey interview with Chef Mindy Lim
              </a>
              {' '}for the complete feature.
            </p>
          </aside>

          {/* Section 1: Background & Transformation */}
          <section aria-labelledby="background-heading">
            <h2 id="background-heading">A Dream That Changed Everything</h2>
            <p>
              For over 20 years, Mindy Lim built her reputation as a skilled traditional chef, managing three restaurants and mastering the culinary arts. But in 2014, a vivid dream would alter the course of her career forever.
            </p>
            <p>
              "I had a dream about a fish in pain," Chef Mindy recalls. "It was so vivid, so real. I woke up and couldn't shake the feeling. That dream made me see the animals I was preparing in a completely different light."
            </p>

            {/* Pull quote for emphasis and visual interest */}
            <blockquote className="bold-journey-pullquote">
              "That dream made me see the animals I was preparing in a completely different light. I knew I had to make a change."
              <cite>— Chef Mindy Lim</cite>
            </blockquote>

            <p>
              The impact was immediate and profound. Chef Mindy closed her restaurants and embarked on a six-year journey of discovery, dedicating herself entirely to mastering plant-based cuisine. It wasn't a quick pivot—it was a complete transformation rooted in empathy and driven by an unwavering commitment to compassionate cooking.
            </p>
            <p>
              In late 2020, after years of research, experimentation, and refinement, she opened Daikon Vegan Sushi in Las Vegas. Her mission: to prove that plant-based dining could be just as flavorful, artistic, and satisfying as traditional cuisine—without any compromise.
            </p>
          </section>

          {/* Section 2: Three Essential Skills */}
          <section aria-labelledby="skills-heading">
            <h2 id="skills-heading">Three Essential Skills That Define Her Success</h2>
            <p>
              When asked about the skills that have been most instrumental in her journey, Chef Mindy identifies three core competencies that continue to shape her work:
            </p>

            {/* Skill 1 */}
            <div className="skill-card">
              <h3>1. Deep Traditional Culinary Expertise</h3>
              <p>
                "You can't innovate effectively without understanding the foundations," she explains. With over two decades of experience in traditional kitchens, Chef Mindy brings a depth of knowledge that few plant-based chefs possess. Her understanding of flavor profiles, cooking techniques, and presentation standards allows her to create vegan dishes that resonate with both vegans and omnivores alike.
              </p>
              <p>
                This expertise is evident in every roll, every sauce, and every plate that leaves Daikon's kitchen. The precision, the balance, the artistry—these are skills honed over years of professional training and real-world experience.
              </p>
            </div>

            {/* Skill 2 */}
            <div className="skill-card">
              <h3>2. Unwavering Conviction Born from Empathy</h3>
              <p>
                Making the transition from traditional to plant-based cooking wasn't just a career move—it was a calling. "The dream showed me something I couldn't unsee," Chef Mindy shares. "Once you truly see animals as sentient beings deserving of compassion, you can't go back."
              </p>
              <p>
                This deep-rooted empathy fuels her persistence through challenges. When recipes don't work, when ingredients disappoint, when critics doubt—her conviction keeps her moving forward. It's this authenticity that customers feel when they dine at Daikon. They're not just eating vegan food; they're experiencing cuisine created with genuine care and ethical purpose.
              </p>
            </div>

            {/* Skill 3 */}
            <div className="skill-card">
              <h3>3. Technical Problem-Solving and Innovation</h3>
              <p>
                Creating plant-based alternatives to seafood requires more than good intentions—it demands technical skill and creative problem-solving. How do you replicate the texture of tuna? The flavor of salmon? The visual appeal of traditional sushi?
              </p>
              <p>
                Chef Mindy approaches these challenges with a scientist's curiosity and an artist's vision. She experiments with roasting techniques, marinades, and combinations that unlock the potential of vegetables, mushrooms, and other plant-based ingredients. Each successful recipe is the result of countless trials, adjustments, and refinements.
              </p>
            </div>
          </section>

          {/* Supporting image - lazy loaded */}
          <figure className="article-figure">
            <img
              src="/chef-mindy-with-yellow-magic.png"
              alt="Chef Mindy Lim presenting the PETA award-winning Yellow Magic Roll"
              loading="lazy"
              decoding="async"
              className="article-image"
            />
            <figcaption>Chef Mindy with the award-winning Yellow Magic Roll</figcaption>
          </figure>

          {/* Section 3: Innovative Approach */}
          <section aria-labelledby="innovation-heading">
            <h2 id="innovation-heading">Revolutionary Plant-Based Techniques</h2>
            <p>
              What sets Daikon apart isn't just the absence of fish—it's the presence of innovation. Chef Mindy has developed proprietary techniques for transforming vegetables into convincing seafood alternatives:
            </p>

            <h3>Signature Plant-Based Substitutes</h3>
            <ul>
              <li>
                <strong>Roasted Tomato for Tuna:</strong> By slow-roasting tomatoes with specific seasonings, she creates a texture and umami profile remarkably similar to tuna. The natural acidity and meaty texture of tomatoes make them an ideal canvas for this transformation.
              </li>
              <li>
                <strong>Orange Bell Pepper for Salmon:</strong> The natural sweetness and vibrant color of roasted orange bell peppers capture the essence of salmon without any fish. The preparation technique brings out oils and flavors that mirror the richness of traditional salmon nigiri.
              </li>
              <li>
                <strong>King Oyster Mushrooms for Calamari:</strong> The meaty texture of king oyster mushrooms, when sliced and prepared correctly, creates a remarkably convincing calamari alternative. Tempura-fried and seasoned with salt and pepper, it's a customer favorite.
              </li>
            </ul>

            <p>
              These aren't imitations—they're innovations. Each substitute stands on its own merits, offering unique flavors while evoking the experience of traditional sushi.
            </p>
          </section>

          {/* Section 4: Awards & Recognition */}
          <section aria-labelledby="award-heading">
            <h2 id="award-heading">Awards & Recognition</h2>

            {/* PETA Award */}
            <div className="peta-award-box">
              <div className="award-badge">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#D4AF37" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="sr-only">Award</span>
              </div>
              <div className="award-content">
                <h3>PETA's 2024 Top 10 Vegan Sushi Roll</h3>
                <p>
                  In September 2024, Daikon's Yellow Magic Roll earned national recognition from PETA as one of the Top 10 Vegan Sushi Rolls in the United States. This prestigious award celebrates restaurants creating exceptional plant-based sushi that proves compassion and culinary excellence go hand in hand.
                </p>
              </div>
            </div>

            {/* Restaurantji Award */}
            <div className="peta-award-box" style={{ marginTop: '1.5rem' }}>
              <div className="award-badge">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="#D4AF37"/>
                </svg>
                <span className="sr-only">Award</span>
              </div>
              <div className="award-content">
                <h3>Restaurantji Recommended 2025</h3>
                <p>
                  Daikon has been recognized as a <a href="https://www.restaurantji.com/nv/las-vegas/daikon-vegan-sushi-and-more-/" target="_blank" rel="noopener noreferrer" className="source-link">Restaurantji Recommended</a> restaurant in 2025, joining an elite group of establishments selected for their exceptional quality, customer satisfaction, and outstanding reviews. The restaurant also maintains 4.9-star ratings across Yelp, Google, DoorDash, and Uber Eats.
                </p>
              </div>
            </div>

            <h3>The Yellow Magic Roll: A Masterpiece</h3>
            <p>
              So what makes this roll award-winning? It's a harmonious composition of flavors and textures:
            </p>
            <ul>
              <li><strong>Base:</strong> Pickled carrots, creamy avocado, and jackfruit salad</li>
              <li><strong>Topping:</strong> Roasted yellow bell peppers that mimic salmon</li>
              <li><strong>Sauce:</strong> Bright, tropical pineapple sauce</li>
              <li><strong>Finish:</strong> Furikake seasoning for umami depth</li>
            </ul>

            <p>
              The combination creates a multi-sensory experience: the crunch of pickled vegetables, the creaminess of avocado, the tender texture of jackfruit, all brought together by the sweet-savory pineapple sauce. It's not just vegan sushi—it's exceptional sushi, period.
            </p>

            {/* Yellow Magic Roll image */}
            <figure className="article-figure featured">
              <img
                src="/winning-award-yellow-magic.png"
                alt="PETA award-winning Yellow Magic Roll featuring roasted yellow peppers, avocado, jackfruit, and pineapple sauce"
                loading="lazy"
                decoding="async"
                className="article-image"
              />
              <figcaption>The award-winning Yellow Magic Roll</figcaption>
            </figure>

            <p>
              "The recognition from PETA validates what we've known all along," Chef Mindy says. "Plant-based cuisine isn't about sacrifice—it's about celebration. We're celebrating flavors, celebrating creativity, and celebrating compassion."
            </p>
          </section>

          {/* Section 5: Mission-Driven Focus */}
          <section aria-labelledby="mission-heading">
            <h2 id="mission-heading">Beyond the Plate: A Mission-Driven Restaurant</h2>
            <p>
              For Chef Mindy, Daikon is more than a business—it's a platform for positive change. Her mission extends beyond serving delicious food to creating systemic impact:
            </p>

            <h3>Commitment to Sustainability</h3>
            <div className="sustainability-card">
              <h4>Plastic-Free Packaging</h4>
              <p>
                Daikon offers plastic-free packaging options, recognizing that environmental responsibility extends beyond plant-based ingredients. Every detail, from containers to utensils, is considered through the lens of sustainability.
              </p>
            </div>

            <div className="sustainability-card">
              <h4>Whole Food Focus</h4>
              <p>
                While many vegan restaurants rely heavily on processed meat alternatives, Chef Mindy prioritizes whole foods. Her substitutes are made from vegetables, mushrooms, and minimally processed ingredients. "If I can make it from scratch, I will," she emphasizes.
              </p>
            </div>

            <div className="sustainability-card">
              <h4>Accessibility and Education</h4>
              <p>
                One of Chef Mindy's core goals is making plant-based dining accessible and approachable. "Not everyone will become vegan overnight," she acknowledges, "but if I can show them that plant-based food can be this good, maybe they'll choose it more often. Every meal matters."
              </p>
            </div>

            <p>
              This educational mission is why Daikon welcomes everyone—vegans, vegetarians, and curious omnivores. There's no judgment, just an invitation to experience something exceptional.
            </p>
          </section>

          {/* Section 6: Collaboration Opportunities */}
          <section aria-labelledby="collaboration-heading">
            <h2 id="collaboration-heading">Looking Ahead: Collaboration and Growth</h2>
            <p>
              As Daikon continues to grow with two Las Vegas locations—<Link to="/contact">one in West Las Vegas serving Summerlin</Link> and another in Henderson offering Thai-sushi fusion—Chef Mindy remains open to collaborations that align with her values.
            </p>
            <p>
              "I'm always interested in connecting with others who are passionate about plant-based cuisine, sustainability, and compassionate business practices," she shares. Whether it's other chefs, suppliers committed to ethical sourcing, or organizations promoting plant-based eating, Chef Mindy sees collaboration as key to expanding the impact of vegan dining.
            </p>

            {/* Pull quote about collaboration */}
            <blockquote className="bold-journey-pullquote">
              "Every partnership, every collaboration, is an opportunity to reach more people and show them the possibilities of plant-based cuisine."
              <cite>— Chef Mindy Lim</cite>
            </blockquote>
          </section>

          {/* Contact information section */}
          <section aria-labelledby="connect-heading" className="connect-section">
            <h2 id="connect-heading">Connect with Chef Mindy and Daikon</h2>
            <p>
              Want to experience award-winning vegan sushi or discuss collaboration opportunities?
            </p>
            <div className="connect-info">
              <div className="connect-item">
                <strong>Website:</strong> <a href="https://www.daikonvegansushi.com" target="_blank" rel="noopener noreferrer">daikonvegansushi.com</a>
              </div>
              <div className="connect-item">
                <strong>Instagram:</strong> <a href="https://instagram.com/daikonvegansushi" target="_blank" rel="noopener noreferrer">@daikonvegansushi</a> | <a href="https://instagram.com/basilvegan" target="_blank" rel="noopener noreferrer">@basilvegan</a>
              </div>
              <div className="connect-item">
                <strong>Address:</strong> 7210 W Lake Mead Blvd, Las Vegas, NV 89128
              </div>
              <div className="connect-item">
                <strong>Phone:</strong> <a href="tel:+17027493283">(702) 749-3283</a>
              </div>
            </div>
          </section>

          {/* Closing statement */}
          <section className="article-conclusion">
            <p>
              Chef Mindy Lim's journey from traditional chef to vegan pioneer is a testament to the power of conviction, the importance of technical skill, and the transformative potential of empathy. Through Daikon Vegan Sushi, she's not just serving meals—she's changing minds, one exceptional dish at a time.
            </p>
            <p>
              Her story reminds us that it's never too late to align your career with your values, that mastery takes time and dedication, and that the best innovations come from a place of genuine care.
            </p>
          </section>
        </div>
      </article>

      {/* Call-to-Action Section */}
      <div className="blog-cta bold-journey-cta">
        <h3>Experience Award-Winning Vegan Sushi</h3>
        <p>
          Visit Daikon Vegan Sushi to taste the Yellow Magic Roll and explore Chef Mindy's complete menu of innovative plant-based creations.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a
            href="https://tables.toasttab.com/restaurants/95c14348-a3ae-4de8-a7b2-15c5d41b0e11/findTime"
            className="blog-cta-button"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleShare('reservation')}
          >
            Make a Reservation
          </a>
          <Link to="/contact" className="blog-cta-button">
            View Locations & Hours
          </Link>
        </div>
      </div>

      {/* Related Articles Section */}
      <div className="blog-related-posts">
        <h3>Related Articles</h3>
        <div className="blog-related-grid">
          <Link to="/blog/ultimate-guide-vegan-sushi-las-vegas" className="blog-related-card">
            <h4>Ultimate Guide to Vegan Sushi in Las Vegas</h4>
            <p>
              Discover everything you need to know about Daikon's award-winning vegan sushi, menu highlights, and what makes our plant-based approach exceptional.
            </p>
          </Link>
          <Link to="/about" className="blog-related-card">
            <h4>Chef Mindy's Full Story</h4>
            <p>
              Learn more about Chef Mindy Lim's complete journey, philosophy, and vision for compassionate, sustainable dining.
            </p>
          </Link>
          <Link to="/blog/vegan-ramen-las-vegas" className="blog-related-card">
            <h4>5 Reasons to Try Vegan Ramen</h4>
            <p>
              Explore Daikon's exceptional vegan ramen offerings, from tomato-based to spicy sesame varieties.
            </p>
          </Link>
        </div>
      </div>

      {/* Social Share Section */}
      <div className="blog-share">
        <h4>Share This Article</h4>
        <div className="blog-share-buttons">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-share-button facebook"
            aria-label="Share on Facebook"
            onClick={() => handleShare('facebook')}
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
            </svg>
            Facebook
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Meet Chef Mindy Lim - Bold Journey Magazine Interview')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-share-button twitter"
            aria-label="Share on Twitter"
            onClick={() => handleShare('twitter')}
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15" />
            </svg>
            Twitter
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-share-button linkedin"
            aria-label="Share on LinkedIn"
            onClick={() => handleShare('linkedin')}
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default BoldJourneyInterview;
