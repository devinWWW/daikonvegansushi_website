export interface Promotion {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price?: string;
  image: string;
  imageAlt: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  featured: boolean;
  locations: ('basil' | 'daikon' | 'both')[];
  ctaText: string;
  ctaLink: string;
  tags: string[];
  category: 'seasonal' | 'daily' | 'special' | 'limited-time';
}

export const promotions: Promotion[] = [
  {
    id: 'december-ramen-2024',
    title: 'The Gift of Ramen — Free Bowls This December!',
    subtitle: 'Spend $50 and Eat for Free at Basil and Daikon',
    description: "It's the most wonderful time of the year—for eating! We are celebrating December (Dec 1 - Jan 1) with two incredible offers. Choose your comfort: At Basil Vegan Thai, spend $50 and receive a FREE Tantanmen (creamy & spicy kick). At Daikon Vegan Sushi, spend $50 and receive a FREE Tomato Ramen (rich & tangy comfort).",
    price: 'FREE Ramen with $50',
    image: '/promotion.png',
    imageAlt: 'December free ramen promotion - Tantanmen and Tomato Ramen bowls',
    startDate: '2024-12-01',
    endDate: '2025-01-01',
    isActive: true,
    featured: true,
    locations: ['both'],
    ctaText: 'Order Now',
    ctaLink: '/contact',
    tags: ['December Special', 'Free Ramen', 'Holiday', 'Tantanmen', 'Tomato Ramen'],
    category: 'seasonal'
  },
  {
    id: 'holiday-gift-cards-2025',
    title: 'Holiday Gift Card Special',
    subtitle: 'Give the Gift of Good Taste — and Get a Little Extra Too',
    description: 'Share plant-based sushi with friends and family this holiday season! Purchase a $50 gift card and receive a $10 bonus, or get a $20 bonus with a $100 gift card. Digital eGift cards delivered instantly and usable in-store or online. Bonus valid for 3 months.',
    price: 'Bonus up to $20',
    image: '/winning-award-yellow-magic.png',
    imageAlt: 'Holiday gift cards for vegan restaurants',
    startDate: '2025-11-01',
    endDate: '2025-12-31',
    isActive: true,
    featured: true,
    locations: ['both'],
    ctaText: 'View Gift Card Details',
    ctaLink: '/holiday-gift-cards',
    tags: ['Gift Cards', 'Holiday', 'Bonus Value', 'Digital'],
    category: 'seasonal'
  },
  {
    id: 'uber-eats-smoothie-promo',
    title: 'FREE CocoBanana Smoothie',
    subtitle: 'Spend $40+ on Uber Eats',
    description: 'Order $40 or more from Daikon or Basil on Uber Eats and get a FREE CocoBanana Smoothie! Roll into flavor and top it off with sweetness, or spice it up then chill with a tropical treat. Available only via Uber Eats. Limited time offer.',
    price: 'FREE with $40+ order',
    image: '/trapical-roll.png',
    imageAlt: 'Free CocoBanana smoothie with Uber Eats order',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    isActive: true,
    featured: false,
    locations: ['both'],
    ctaText: 'View Offer & Order',
    ctaLink: '/uber-eats-smoothie',
    tags: ['Uber Eats', 'Free Item', 'Smoothie', 'Limited Time'],
    category: 'special'
  },
  {
    id: 'member-rewards-program',
    title: 'New Member Bonus!',
    subtitle: 'FREE CocoBanana Smoothie with $25 Purchase',
    description: 'Are you or a friend new to our rewards program? Join the family this month at either location! Get a FREE CocoBanana Smoothie with a $25 purchase. Register with your phone number and start earning rewards toward free food, exclusive offers, and more.',
    price: 'FREE Smoothie',
    image: '/trapical-roll.png',
    imageAlt: 'New member rewards - Free CocoBanana Smoothie',
    startDate: '2024-12-01',
    endDate: '2025-12-31',
    isActive: true,
    featured: true,
    locations: ['both'],
    ctaText: 'Join Rewards Program',
    ctaLink: '/member-rewards',
    tags: ['New Members', 'Free Smoothie', 'Rewards', 'Welcome Offer'],
    category: 'daily'
  },
  // Add more promotions here as they become available
  // Example structure for future promotions:
  /*
  {
    id: 'happy-hour-2025',
    title: 'Happy Hour Specials',
    subtitle: 'Monday - Friday 3-6pm',
    description: 'Enjoy special pricing on select appetizers and sushi rolls during our happy hour.',
    price: 'Starting at $5',
    image: '/happy-hour-image.jpg',
    imageAlt: 'Happy hour sushi and appetizers',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    isActive: true,
    featured: false,
    locations: ['both'],
    ctaText: 'See Happy Hour Menu',
    ctaLink: '/promotions/happy-hour',
    tags: ['Happy Hour', 'Daily Special', 'Appetizers'],
    category: 'daily'
  }
  */
];

// Helper functions
export const getActivePromotions = (): Promotion[] => {
  const today = new Date();
  return promotions.filter(promo => {
    const startDate = new Date(promo.startDate);
    const endDate = new Date(promo.endDate);
    return promo.isActive && today >= startDate && today <= endDate;
  });
};

export const getFeaturedPromotions = (): Promotion[] => {
  return getActivePromotions().filter(promo => promo.featured);
};

export const getPromotionsByLocation = (location: 'basil' | 'daikon'): Promotion[] => {
  return getActivePromotions().filter(promo =>
    promo.locations.includes(location) || promo.locations.includes('both')
  );
};

export const getPromotionsByCategory = (category: Promotion['category']): Promotion[] => {
  return getActivePromotions().filter(promo => promo.category === category);
};
