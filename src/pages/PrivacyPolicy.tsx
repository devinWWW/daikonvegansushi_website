import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-white to-gray-50'>
        {/* Hero Section */}
        <section className="bg-primary-green text-white py-20 pt-32">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Privacy Policy
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
              <h2 className="text-2xl font-heading font-bold text-primary-green mb-4">Introduction</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                Daikon Vegan Sushi & More ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website daikonvegansushi.com or dine at our restaurants.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary-green mb-4">Information We Collect</h2>

              <h3 className="text-xl font-heading font-semibold text-dark-green mb-3">Personal Information</h3>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside text-gray-700 font-body mb-4 space-y-2">
                <li>Make a reservation online or by phone</li>
                <li>Place an order for pickup or delivery</li>
                <li>Sign up for our loyalty rewards program</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Contact us with inquiries or feedback</li>
                <li>Participate in promotions, surveys, or contests</li>
              </ul>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                This information may include: name, email address, phone number, mailing address, payment information, and dining preferences.
              </p>

              <h3 className="text-xl font-heading font-semibold text-dark-green mb-3 mt-6">Automatically Collected Information</h3>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                When you visit our website, we automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 font-body mb-4 space-y-2">
                <li>IP address and browser type</li>
                <li>Operating system and device information</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website or search engine</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary-green mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-700 font-body mb-4 space-y-2">
                <li>Process and fulfill your orders and reservations</li>
                <li>Communicate with you about your orders, reservations, or inquiries</li>
                <li>Send promotional emails and marketing communications (with your consent)</li>
                <li>Improve our website, menu offerings, and customer service</li>
                <li>Administer loyalty rewards programs and promotions</li>
                <li>Analyze website usage and trends</li>
                <li>Prevent fraud and enhance security</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary-green mb-4">Sharing Your Information</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="list-disc list-inside text-gray-700 font-body mb-4 space-y-2">
                <li><strong>Service Providers:</strong> Third-party vendors who assist us with payment processing, online ordering (Toast), reservations, and email marketing</li>
                <li><strong>Delivery Partners:</strong> DoorDash, Uber Eats, and other delivery platforms when you place orders through their services</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of business assets</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary-green mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookies through your browser settings, but disabling cookies may limit certain website functionality.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary-green mb-4">Third-Party Links</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                Our website may contain links to third-party websites, including online ordering platforms (Toast), delivery services (DoorDash, Uber Eats), and social media. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary-green mb-4">Data Security</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
              </p>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                Payment information is processed securely through our third-party payment processors and is not stored on our servers.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary-green mb-4">Your Privacy Rights</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc list-inside text-gray-700 font-body mb-4 space-y-2">
                <li>Access and receive a copy of your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to or restrict certain data processing activities</li>
              </ul>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                To exercise these rights, please contact us at <a href="mailto:daikonvegan01@gmail.com" className="text-primary-green hover:text-secondary-coral">daikonvegan01@gmail.com</a> or call (702) 749-3283.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary-green mb-4">Children's Privacy</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                Our website and services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary-green mb-4">California Privacy Rights (CCPA)</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                California residents have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to delete personal information, and the right to opt-out of the sale of personal information. We do not sell personal information.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary-green mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. The "Last Updated" date at the top of this page indicates when the policy was last revised. We encourage you to review this policy periodically.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-heading font-bold text-primary-green mb-4">Contact Us</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
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

export default PrivacyPolicy;
