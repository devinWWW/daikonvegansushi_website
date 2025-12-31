import React from 'react';

const Accessibility: React.FC = () => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-white to-gray-50'>
        {/* Hero Section */}
        <section className="bg-primary-green text-white py-20 pt-32">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Accessibility Statement
            </h1>
            <p className="text-xl font-body">
              Our Commitment to Inclusive Dining
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary-green mb-4">Our Commitment</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                Daikon Vegan Sushi & More is committed to ensuring digital and physical accessibility for all people, including those with disabilities. We strive to provide an inclusive experience for all our guests, both online and in our restaurants.
              </p>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                We are continuously working to improve the accessibility of our website and services to comply with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards and the Americans with Disabilities Act (ADA).
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary-green mb-4">Website Accessibility Features</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                Our website includes the following accessibility features:
              </p>
              <ul className="list-disc list-inside text-gray-700 font-body mb-4 space-y-2">
                <li><strong>Semantic HTML:</strong> Proper heading structure and landmarks for screen reader navigation</li>
                <li><strong>Alt Text:</strong> Descriptive alternative text for all images</li>
                <li><strong>Keyboard Navigation:</strong> Full website navigation using keyboard only</li>
                <li><strong>Focus Indicators:</strong> Visible focus states for interactive elements</li>
                <li><strong>Color Contrast:</strong> Sufficient color contrast ratios for text readability</li>
                <li><strong>Responsive Design:</strong> Mobile-friendly layout that adapts to different screen sizes</li>
                <li><strong>Skip Navigation:</strong> Skip-to-content link for screen reader users</li>
                <li><strong>ARIA Labels:</strong> Accessible labels for interactive components</li>
                <li><strong>Form Labels:</strong> Clear labels and instructions for all form fields</li>
                <li><strong>Readable Fonts:</strong> Clear, legible typography throughout the site</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary-green mb-4">Restaurant Accessibility</h2>

              <h3 className="text-xl font-heading font-semibold text-dark-green mb-3">Physical Accessibility</h3>
              <ul className="list-disc list-inside text-gray-700 font-body mb-4 space-y-2">
                <li><strong>Wheelchair Access:</strong> Both locations feature wheelchair-accessible entrances and dining areas</li>
                <li><strong>Accessible Parking:</strong> Designated accessible parking spaces available at both locations</li>
                <li><strong>Accessible Restrooms:</strong> ADA-compliant restrooms with grab bars and accessible fixtures</li>
                <li><strong>Wide Pathways:</strong> Clear pathways for wheelchair and mobility device navigation</li>
                <li><strong>Accessible Seating:</strong> Tables with appropriate height and clearance</li>
              </ul>

              <h3 className="text-xl font-heading font-semibold text-dark-green mb-3 mt-6">Dietary Accommodations</h3>
              <ul className="list-disc list-inside text-gray-700 font-body mb-4 space-y-2">
                <li><strong>100% Vegan Menu:</strong> All dishes are plant-based and free from animal products</li>
                <li><strong>Gluten-Free Options:</strong> Many menu items available gluten-free or can be modified</li>
                <li><strong>Allergy Information:</strong> Staff trained to assist with allergen inquiries</li>
                <li><strong>Menu Modifications:</strong> We accommodate reasonable dietary restrictions and preferences</li>
                <li><strong>Clear Labeling:</strong> Menu items marked with dietary information (GF, soy-free, etc.)</li>
              </ul>

              <h3 className="text-xl font-heading font-semibold text-dark-green mb-3 mt-6">Service Accommodations</h3>
              <ul className="list-disc list-inside text-gray-700 font-body mb-4 space-y-2">
                <li><strong>Large Print Menus:</strong> Available upon request</li>
                <li><strong>Patient Service:</strong> Staff trained to provide extra time and assistance</li>
                <li><strong>Service Animals:</strong> Service animals welcome in accordance with ADA regulations</li>
                <li><strong>Quiet Dining:</strong> We can accommodate requests for quieter seating when available</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary-green mb-4">Assistive Technology Compatibility</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                Our website is designed to be compatible with:
              </p>
              <ul className="list-disc list-inside text-gray-700 font-body mb-4 space-y-2">
                <li>Screen readers (JAWS, NVDA, VoiceOver)</li>
                <li>Browser zoom (up to 200%)</li>
                <li>Speech recognition software</li>
                <li>Keyboard-only navigation</li>
                <li>Browser accessibility features</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary-green mb-4">Third-Party Services</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                We use third-party platforms for certain services:
              </p>
              <ul className="list-disc list-inside text-gray-700 font-body mb-4 space-y-2">
                <li><strong>Online Ordering:</strong> Toast (www.toasttab.com)</li>
                <li><strong>Reservations:</strong> Rewards system (rewards.vegansushilv.com)</li>
                <li><strong>Delivery:</strong> DoorDash and Uber Eats</li>
              </ul>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                While we strive to work with accessible platforms, we cannot control the accessibility of third-party websites. Please contact us if you experience difficulties with these services, and we will assist you in placing orders or making reservations.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary-green mb-4">Ongoing Improvements</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                We are committed to continually improving accessibility:
              </p>
              <ul className="list-disc list-inside text-gray-700 font-body mb-4 space-y-2">
                <li>Regular accessibility audits and testing</li>
                <li>Staff training on accessibility best practices</li>
                <li>User feedback integration</li>
                <li>Compliance monitoring and updates</li>
                <li>Working with accessibility consultants and advocates</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary-green mb-4">Known Limitations</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                Despite our efforts, some accessibility challenges may exist:
              </p>
              <ul className="list-disc list-inside text-gray-700 font-body mb-4 space-y-2">
                <li>Some third-party embedded content may not be fully accessible</li>
                <li>Older PDF documents may not be screen reader-friendly (we are working to update these)</li>
                <li>Some visual content may be challenging for users with visual impairments</li>
              </ul>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                We are actively working to address these issues and welcome your feedback.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary-green mb-4">Feedback and Assistance</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                We welcome your feedback on the accessibility of our website and restaurants. If you encounter any barriers or have suggestions for improvement, please contact us:
              </p>
              <div className="text-gray-700 font-body space-y-4 mb-6">
                <div>
                  <p className="font-semibold">For Website Accessibility Issues:</p>
                  <p>Email: <a href="mailto:daikonvegan01@gmail.com?subject=Website%20Accessibility" className="text-primary-green hover:text-secondary-coral">daikonvegan01@gmail.com</a></p>
                  <p>Subject line: "Website Accessibility"</p>
                </div>
                <div>
                  <p className="font-semibold">For Restaurant Accessibility Concerns:</p>
                  <p><strong>Summerlin Location:</strong> <a href="tel:7027493283" className="text-primary-green hover:text-secondary-coral">(702) 749-3283</a></p>
                  <p><strong>Henderson Location:</strong> <a href="tel:7023573837" className="text-primary-green hover:text-secondary-coral">(702) 357-3837</a></p>
                </div>
              </div>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                We aim to respond to accessibility feedback within 2 business days. If you need immediate assistance with ordering or reservations, please call us during business hours.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-primary-green mb-4">Formal Complaints</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                If you are not satisfied with our response to your accessibility concerns, you may contact:
              </p>
              <div className="text-gray-700 font-body space-y-2">
                <p><strong>U.S. Department of Justice</strong><br />
                Civil Rights Division<br />
                950 Pennsylvania Avenue, NW<br />
                Washington, D.C. 20530<br />
                Phone: (800) 514-0301 (voice) | (833) 610-1264 (TTY)<br />
                Website: <a href="https://www.ada.gov" target="_blank" rel="noopener noreferrer" className="text-primary-green hover:text-secondary-coral">www.ada.gov</a></p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-heading font-bold text-primary-green mb-4">Last Updated</h2>
              <p className="text-gray-700 font-body leading-relaxed">
                This Accessibility Statement was last reviewed and updated in January 2025.
              </p>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Accessibility;
