import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileNavigation from './components/MobileNavigation';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Catering = lazy(() => import('./pages/Catering'));
const BlogIndex = lazy(() => import('./pages/blog/BlogIndex'));
const VeganSushiGuide = lazy(() => import('./pages/blog/VeganSushiGuide'));
const VeganRamenGuide = lazy(() => import('./pages/blog/VeganRamenGuide'));
const BoldJourneyInterview = lazy(() => import('./pages/blog/BoldJourneyInterview'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const Accessibility = lazy(() => import('./pages/Accessibility'));
const ThanksgivingPromotion = lazy(() => import('./pages/ThanksgivingPromotion'));
const Promotions = lazy(() => import('./pages/Promotions'));
const HolidayGiftCards = lazy(() => import('./pages/HolidayGiftCards'));
const UberEatsPromotion = lazy(() => import('./pages/UberEatsPromotion'));
const MemberRewards = lazy(() => import('./pages/MemberRewards'));
const NotFound = lazy(() => import('./pages/NotFound'));
const PromotionPopup = lazy(() => import('./components/PromotionPopup'));

function App() {
  const routeFallback = (
    <div
      className="py-10 text-center text-primary-green font-body text-base"
      role="status"
      aria-live="polite"
    >
      Loading page…
    </div>
  );

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main id="main-content" className="flex-grow pb-16 md:pb-0" tabIndex={-1}>
          <Suspense fallback={routeFallback}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/catering" element={<Catering />} />
              <Route path="/blog" element={<BlogIndex />} />
              <Route path="/blog/ultimate-guide-vegan-sushi-las-vegas" element={<VeganSushiGuide />} />
              <Route path="/blog/vegan-ramen-las-vegas" element={<VeganRamenGuide />} />
              <Route path="/blog/mindy-lim-bold-journey-interview" element={<BoldJourneyInterview />} />
              <Route path="/blog/eater-vegas-daikon-feature" element={<EaterVegasDaikonFeature />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/promotions" element={<Promotions />} />
              <Route path="/thanksgiving-2025" element={<ThanksgivingPromotion />} />
              <Route path="/holiday-gift-cards" element={<HolidayGiftCards />} />
              <Route path="/uber-eats-smoothie" element={<UberEatsPromotion />} />
              <Route path="/member-rewards" element={<MemberRewards />} />
              {/* 404 catch-all route - must be last */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <MobileNavigation />
        <Suspense fallback={null}>
          <PromotionPopup />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
