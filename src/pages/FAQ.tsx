import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Is Daikon Vegan Sushi 100% vegan?',
    answer: 'Yes! Everything on our menu is 100% plant-based and vegan. We use no animal products whatsoever, including no fish, dairy, eggs, or honey.',
  },
  {
    question: 'Do you offer gluten-free options?',
    answer: 'Yes, we have gluten-free options available. Please inform your server about any dietary restrictions, and they will guide you through our gluten-free selections.',
  },
  {
    question: 'What are your hours of operation?',
    answer: 'Our Summerlin location (Daikon Vegan Sushi) is open Monday-Saturday from 11:00 AM to 9:00 PM. Our Henderson location (Basil Vegan Thai & Sushi) is open Monday-Saturday from 11:30 AM to 9:30 PM. Both locations are open Sunday from 3:00 PM to 9:00 PM and 9:30 PM respectively.',
  },
  {
    question: 'Do I need a reservation?',
    answer: 'While walk-ins are welcome, we highly recommend making a reservation, especially during peak hours and weekends, to ensure you get a table.',
  },
  {
    question: 'What is the Yellow Magic Roll?',
    answer: 'The Yellow Magic Roll is our award-winning signature vegan sushi roll that won PETA\'s 2024 Top 10 Vegan Sushi Roll award. It features a unique combination of plant-based ingredients with our special sauces.',
  },
  {
    question: 'Do you offer delivery and takeout?',
    answer: 'Yes! We offer both delivery and takeout through our online ordering system. You can order directly from our website or through popular delivery apps.',
  },
  {
    question: 'Are your sushi rolls made with real fish?',
    answer: 'No, all our sushi is 100% plant-based. We use creative vegan alternatives like konjac-based fish substitutes, vegetables, and tofu to create delicious and sustainable sushi options.',
  },
  {
    question: 'Do you have parking available?',
    answer: 'Yes, both our Summerlin and Henderson locations have ample free parking available for our guests.',
  },
  {
    question: 'Can you accommodate large groups or parties?',
    answer: 'Yes! We welcome large groups and parties. Please call ahead or make a reservation online to ensure we can accommodate your group size.',
  },
  {
    question: 'Who is Chef Mindy Lim?',
    answer: 'Chef Mindy Lim is our founder and head chef with over 20 years of culinary experience. She transitioned to plant-based cooking out of compassion for animals and has been creating innovative vegan Japanese cuisine since 2019.',
  },
  {
    question: 'Do you use MSG in your food?',
    answer: 'We prioritize fresh, wholesome ingredients. Please ask your server about specific ingredients or preparations if you have concerns about MSG or other additives.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover), debit cards, and cash.',
  },
  {
    question: 'Do you offer catering services?',
    answer: 'Yes, we offer catering for events and special occasions. Please contact us directly to discuss your catering needs and menu options.',
  },
  {
    question: 'Is your restaurant family-friendly?',
    answer: 'Absolutely! We welcome families and have options that appeal to both adults and children. Our plant-based menu is healthy and delicious for all ages.',
  },
  {
    question: 'What makes Daikon different from other sushi restaurants?',
    answer: 'We are Las Vegas\'s premier 100% vegan Japanese restaurant, awarded by PETA for our innovative plant-based sushi. Chef Mindy combines traditional Japanese techniques with creative vegan ingredients to deliver an authentic yet compassionate dining experience.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <section className="bg-primary-green text-white py-20 pt-32">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl font-body">
              Everything you need to know about Daikon Vegan Sushi
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-inset"
                    aria-expanded={openIndex === index}
                  >
                    <h3 className="text-lg md:text-xl font-heading font-semibold text-gray-800 pr-4">
                      {faq.question}
                    </h3>
                    <svg
                      className={`w-6 h-6 text-primary-green transition-transform duration-300 flex-shrink-0 ${
                        openIndex === index ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-5 text-gray-700 font-body leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Still Have Questions CTA */}
            <div className="mt-16 bg-gradient-to-r from-primary-green to-primary-green-dark text-white rounded-2xl p-8 md:p-12 text-center shadow-xl">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Still Have Questions?
              </h2>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                We're here to help! Reach out to us and we'll get back to you as soon as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-primary-green hover:bg-gray-100 font-body font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Contact Us
                </a>
                <a
                  href="tel:702-527-5423"
                  className="bg-secondary-coral hover:bg-secondary-coral-dark text-white font-body font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default FAQ;
