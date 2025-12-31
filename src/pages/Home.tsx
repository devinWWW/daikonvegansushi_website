import React, { Suspense, lazy } from 'react';
import Hero from '../components/Hero';
import TrustBadges from '../components/TrustBadges';
import LuxuryMarquee from '../components/LuxuryMarquee';
import LazySection from '../components/LazySection';

const HeroGallery = lazy(() => import('../components/HeroGallery'));
const QuickStats = lazy(() => import('../components/QuickStats'));
const Story = lazy(() => import('../components/Story'));
const MenuHighlights = lazy(() => import('../components/MenuHighlights'));
const Videos = lazy(() => import('../components/Videos'));
const Locations = lazy(() => import('../components/Locations'));

const SectionFallback: React.FC<{ label: string; minHeight?: number }> = ({ label, minHeight = 200 }) => (
  <div
    className="flex items-center justify-center text-primary-green/80 font-body text-sm"
    style={{ minHeight }}
    role="status"
    aria-live="polite"
  >
    Loading {label}…
  </div>
);

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <TrustBadges />
      <LuxuryMarquee />
      <LazySection placeholderHeight={450}>
        <Suspense fallback={<SectionFallback label="gallery" minHeight={450} />}>
          <HeroGallery />
        </Suspense>
      </LazySection>
      <LazySection placeholderHeight={300}>
        <Suspense fallback={<SectionFallback label="quick stats" minHeight={300} />}>
          <QuickStats />
        </Suspense>
      </LazySection>
      <LazySection placeholderHeight={500}>
        <Suspense fallback={<SectionFallback label="chef story" minHeight={500} />}>
          <Story />
        </Suspense>
      </LazySection>
      <LazySection placeholderHeight={500}>
        <Suspense fallback={<SectionFallback label="menu highlights" minHeight={500} />}>
          <MenuHighlights />
        </Suspense>
      </LazySection>
      <LazySection placeholderHeight={400}>
        <Suspense fallback={<SectionFallback label="videos" minHeight={400} />}>
          <Videos />
        </Suspense>
      </LazySection>
      <LazySection placeholderHeight={500}>
        <Suspense fallback={<SectionFallback label="locations" minHeight={500} />}>
          <Locations />
        </Suspense>
      </LazySection>
    </div>
  );
};

export default Home;
