import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-white to-gray-50'>
        {/* Hero Section */}
        <section className="bg-primary-green text-white py-20 pt-32">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Terms of Service
            </h1>
            <p className="text-xl font-body">
              Last Updated: January 2025
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary-green mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                These Terms of Service ("Terms") govern your use of the Daikon Vegan Sushi & More website (daikonvegansushi.com) and services. By accessing or using our website, placing orders, or making reservations, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                If you do not agree to these Terms, please do not use our website or services.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary-green mb-4">Use of Our Website</h2>

              <h3 className="text-xl font-heading font-semibold text-dark-green mb-3">Permitted Use</h3>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                You may use our website for lawful purposes only, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 font-body mb-4 space-y-2">
                <li>Browsing our menu and restaurant information</li>
                <li>Placing orders for pickup or delivery</li>
                <li>Making reservations</li>
                <li>Signing up for our loyalty rewards program</li>
                <li>Contacting us with inquiries</li>
              </ul>

              <h3 className="text-xl font-heading font-semibold text-dark-green mb-3 mt-6">Prohibited Activities</h3>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc list-inside text-gray-700 font-body mb-4 space-y-2">
                <li>Use our website for any illegal or unauthorized purpose</li>
                <li>Transmit viruses, malware, or other harmful code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Scrape, copy, or download content without permission</li>
                <li>Impersonate another person or entity</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Submit false or misleading information</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary-green mb-4">Orders and Reservations</h2>

              <h3 className="text-xl font-heading font-semibold text-dark-green mb-3">Online Orders</h3>
              <ul className="list-disc list-inside text-gray-700 font-body mb-4 space-y-2">
                <li>All orders are subject to availability and acceptance</li>
                <li>We reserve the right to refuse or cancel any order</li>
                <li>Prices are subject to change without notice</li>
                <li>You are responsible for providing accurate delivery information</li>
                <li>Payment is required at the time of order placement</li>
                <li>Order modifications may not be possible after submission</li>
              </ul>

              <h3 className="text-xl font-heading font-semibold text-dark-green mb-3 mt-6">Reservations</h3>
              <ul className="list-disc list-inside text-gray-700 font-body mb-4 space-y-2">
                <li>Reservations are subject to availability</li>
                <li>We may hold your table for 15 minutes past the reservation time</li>
                <li>Please notify us at least 2 hours in advance if you need to cancel</li>
                <li>Repeat no-shows may result in reservation restrictions</li>
                <li>Large party reservations may require a deposit or credit card guarantee</li>
              </ul>

              <h3 className="text-xl font-heading font-semibold text-dark-green mb-3 mt-6">Cancellations and Refunds</h3>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                Orders placed through our online ordering system (Toast) are processed immediately. Cancellations must be requested within 5 minutes of order placement. Refunds are handled on a case-by-case basis for order errors or quality issues.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary-green mb-4">Pricing and Payment</h2>
              <ul className="list-disc list-inside text-gray-700 font-body mb-4 space-y-2">
                <li>All prices are in US Dollars (USD)</li>
                <li>Applicable sales tax will be added to your order total</li>
                <li>Delivery fees and gratuity may apply</li>
                <li>We accept major credit cards, debit cards, and cash (in-person only)</li>
                <li>Gift cards are non-refundable and cannot be exchanged for cash</li>
                <li>Promotional offers cannot be combined unless stated otherwise</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary-green mb-4">Food Allergies and Dietary Restrictions</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                While all our dishes are 100% vegan, we cannot guarantee that our food is free from all allergens. Cross-contamination may occur in our kitchen. Please inform our staff of any allergies or dietary restrictions when ordering.
              </p>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                <strong>Common allergens that may be present:</strong> Soy, wheat/gluten, tree nuts, sesame, and mushrooms.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary-green mb-4">Intellectual Property</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                All content on our website, including text, images, logos, recipes, and design elements, is the property of Daikon Vegan Sushi & More and is protected by copyright and trademark laws.
              </p>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                You may not reproduce, distribute, modify, or create derivative works without our express written permission.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary-green mb-4">Third-Party Services</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                Our website uses third-party services, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 font-body mb-4 space-y-2">
                <li>Toast (online ordering and gift cards)</li>
                <li>DoorDash and Uber Eats (delivery services)</li>
                <li>Payment processors</li>
              </ul>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                These third parties have their own terms of service and privacy policies. We are not responsible for their practices or services.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary-green mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                To the fullest extent permitted by law, Daikon Vegan Sushi & More shall not be liable for:
              </p>
              <ul className="list-disc list-inside text-gray-700 font-body mb-4 space-y-2">
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of profits, data, or business opportunities</li>
                <li>Errors or delays in service due to circumstances beyond our control</li>
                <li>Third-party delivery service issues or delays</li>
                <li>Food allergies or adverse reactions (when proper notice was not provided)</li>
              </ul>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                Our total liability shall not exceed the amount paid for your order or reservation.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary-green mb-4">Disclaimer of Warranties</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                Our website and services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee uninterrupted or error-free service.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary-green mb-4">Indemnification</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                You agree to indemnify and hold harmless Daikon Vegan Sushi & More, its owners, employees, and agents from any claims, damages, or expenses arising from your use of our website or violation of these Terms.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary-green mb-4">Governing Law</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the State of Nevada, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Clark County, Nevada.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary-green mb-4">Changes to Terms</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of the revised Terms.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-heading font-bold text-primary-green mb-4">Contact Us</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="text-gray-700 font-body space-y-2">
                <p><strong>Daikon Vegan Sushi & More</strong></p>
                <p>7210 W Lake Mead Blvd, Ste 1<br />Las Vegas, NV 89128</p>
                <p>Phone: <a href="tel:7027493283" className="text-primary-green hover:text-secondary-coral">(702) 749-3283</a></p>
                <p>Email: <a href="mailto:daikonvegan01@gmail.com" className="text-primary-green hover:text-secondary-coral">daikonvegan01@gmail.com</a></p>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default TermsOfService;
