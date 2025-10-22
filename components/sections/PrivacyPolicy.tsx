import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="privacy-policy-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="privacy-content">
              <div className="privacy-header">
                <h1>Privacy Policy</h1>
                <p className="last-updated">Last updated: December 2024</p>
              </div>

              <div className="privacy-section">
                <h2>1. Information We Collect</h2>
                <p>
                  We collect information you provide directly to us, such as when you create an account, 
                  make a purchase, or contact us for support. This may include:
                </p>
                <ul>
                  <li>Name and contact information (email address, phone number, mailing address)</li>
                  <li>Account credentials (username and password)</li>
                  <li>Payment information (credit card details, billing address)</li>
                  <li>Communication preferences</li>
                  <li>Product reviews and feedback</li>
                </ul>
              </div>

              <div className="privacy-section">
                <h2>2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Process and fulfill your orders</li>
                  <li>Provide customer support and respond to your inquiries</li>
                  <li>Send you important updates about your account or orders</li>
                  <li>Improve our products and services</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Prevent fraud and ensure security</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div className="privacy-section">
                <h2>3. Information Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except in the following circumstances:
                </p>
                <ul>
                  <li>With service providers who assist us in operating our website and conducting our business</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or acquisition</li>
                  <li>With your explicit consent</li>
                </ul>
              </div>

              <div className="privacy-section">
                <h2>4. Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul>
                  <li>SSL encryption for data transmission</li>
                  <li>Secure servers and databases</li>
                  <li>Regular security audits and updates</li>
                  <li>Limited access to personal information</li>
                  <li>Employee training on data protection</li>
                </ul>
              </div>

              <div className="privacy-section">
                <h2>5. Cookies and Tracking</h2>
                <p>
                  We use cookies and similar technologies to enhance your browsing experience and analyze 
                  website traffic. You can control cookie settings through your browser preferences.
                </p>
                <p>Types of cookies we use:</p>
                <ul>
                  <li>Essential cookies (required for website functionality)</li>
                  <li>Analytics cookies (help us understand website usage)</li>
                  <li>Marketing cookies (used for targeted advertising)</li>
                  <li>Preference cookies (remember your settings)</li>
                </ul>
              </div>

              <div className="privacy-section">
                <h2>6. Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                  <li>Access your personal information</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Delete your personal information</li>
                  <li>Object to processing of your information</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>

              <div className="privacy-section">
                <h2>7. Data Retention</h2>
                <p>
                  We retain your personal information for as long as necessary to fulfill the purposes 
                  outlined in this privacy policy, unless a longer retention period is required or 
                  permitted by law.
                </p>
              </div>

              <div className="privacy-section">
                <h2>8. International Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries other than your own. 
                  We ensure appropriate safeguards are in place to protect your information in accordance 
                  with applicable data protection laws.
                </p>
              </div>

              <div className="privacy-section">
                <h2>9. Children's Privacy</h2>
                <p>
                  Our services are not directed to children under 13 years of age. We do not knowingly 
                  collect personal information from children under 13. If we become aware that we have 
                  collected personal information from a child under 13, we will take steps to delete 
                  such information.
                </p>
              </div>

              <div className="privacy-section">
                <h2>10. Changes to This Policy</h2>
                <p>
                  We may update this privacy policy from time to time. We will notify you of any changes 
                  by posting the new policy on this page and updating the "Last updated" date. We encourage 
                  you to review this policy periodically.
                </p>
              </div>

              <div className="privacy-section">
                <h2>11. Contact Us</h2>
                <p>
                  If you have any questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="contact-info">
                  <p><strong>Email:</strong> privacy@bexon.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong>Address:</strong> 123 Business Street, City, State 12345</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="privacy-sidebar">
              <div className="sidebar-widget">
                <h4>Quick Links</h4>
                <ul className="quick-links">
                  <li><a href="#information-collect">Information We Collect</a></li>
                  <li><a href="#how-we-use">How We Use Your Information</a></li>
                  <li><a href="#information-sharing">Information Sharing</a></li>
                  <li><a href="#data-security">Data Security</a></li>
                  <li><a href="#cookies">Cookies and Tracking</a></li>
                  <li><a href="#your-rights">Your Rights</a></li>
                  <li><a href="#data-retention">Data Retention</a></li>
                  <li><a href="#international-transfers">International Transfers</a></li>
                  <li><a href="#children-privacy">Children's Privacy</a></li>
                  <li><a href="#policy-changes">Changes to This Policy</a></li>
                  <li><a href="#contact-us">Contact Us</a></li>
                </ul>
              </div>

              <div className="sidebar-widget">
                <h4>Related Documents</h4>
                <ul className="related-documents">
                  <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
                  <li><a href="/cookie-policy">Cookie Policy</a></li>
                  <li><a href="/data-protection">Data Protection Policy</a></li>
                  <li><a href="/gdpr-compliance">GDPR Compliance</a></li>
                </ul>
              </div>

              <div className="sidebar-widget">
                <h4>Need Help?</h4>
                <div className="help-content">
                  <p>If you have questions about our privacy practices or need assistance with your data rights, our team is here to help.</p>
                  <a href="/contact" className="btn btn-primary">Contact Support</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
