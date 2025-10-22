import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <section className="tj-terms-and-conditions-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div className="terms-content">
              <div className="terms-intro wow fadeInUp" data-wow-delay=".3s">
                <p className="intro-text">
                  These terms and conditions outline the rules and regulations for the use of Bexon's website and services. 
                  By accessing this website, we assume you accept these terms and conditions.
                </p>
                <p className="last-updated">
                  <strong>Last updated:</strong> January 1, 2024
                </p>
              </div>

              <div className="terms-section wow fadeInUp" data-wow-delay=".5s">
                <h3 className="section-title">1. Acceptance of Terms</h3>
                <p>
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div className="terms-section wow fadeInUp" data-wow-delay=".7s">
                <h3 className="section-title">2. Use License</h3>
                <p>
                  Permission is granted to temporarily download one copy of the materials on Bexon's website for personal, 
                  non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul>
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display</li>
                  <li>attempt to reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </div>

              <div className="terms-section wow fadeInUp" data-wow-delay=".9s">
                <h3 className="section-title">3. Disclaimer</h3>
                <p>
                  The materials on Bexon's website are provided on an 'as is' basis. Bexon makes no warranties, expressed or implied, 
                  and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions 
                  of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>

              <div className="terms-section wow fadeInUp" data-wow-delay="1.1s">
                <h3 className="section-title">4. Limitations</h3>
                <p>
                  In no event shall Bexon or its suppliers be liable for any damages (including, without limitation, damages for loss of data 
                  or profit, or due to business interruption) arising out of the use or inability to use the materials on Bexon's website, 
                  even if Bexon or a Bexon authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </div>

              <div className="terms-section wow fadeInUp" data-wow-delay="1.3s">
                <h3 className="section-title">5. Accuracy of Materials</h3>
                <p>
                  The materials appearing on Bexon's website could include technical, typographical, or photographic errors. 
                  Bexon does not warrant that any of the materials on its website are accurate, complete, or current. 
                  Bexon may make changes to the materials contained on its website at any time without notice.
                </p>
              </div>

              <div className="terms-section wow fadeInUp" data-wow-delay="1.5s">
                <h3 className="section-title">6. Links</h3>
                <p>
                  Bexon has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. 
                  The inclusion of any link does not imply endorsement by Bexon of the site. Use of any such linked website is at the user's own risk.
                </p>
              </div>

              <div className="terms-section wow fadeInUp" data-wow-delay="1.7s">
                <h3 className="section-title">7. Modifications</h3>
                <p>
                  Bexon may revise these terms of service for its website at any time without notice. By using this website, 
                  you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </div>

              <div className="terms-section wow fadeInUp" data-wow-delay="1.9s">
                <h3 className="section-title">8. Governing Law</h3>
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of the United States 
                  and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                </p>
              </div>

              <div className="terms-section wow fadeInUp" data-wow-delay="2.1s">
                <h3 className="section-title">9. Contact Information</h3>
                <p>
                  If you have any questions about these Terms and Conditions, please contact us at:
                </p>
                <div className="contact-info">
                  <p><strong>Email:</strong> info@bexon.com</p>
                  <p><strong>Phone:</strong> +1 (009) 544-7818</p>
                  <p><strong>Address:</strong> 993 Renner Burg, West Rond, MT 94251-030</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-xl-4 col-lg-5">
            <div className="terms-sidebar">
              <div className="sidebar-widget wow fadeInUp" data-wow-delay=".3s">
                <h4 className="widget-title">Quick Navigation</h4>
                <ul className="terms-nav">
                  <li><a href="#acceptance">1. Acceptance of Terms</a></li>
                  <li><a href="#license">2. Use License</a></li>
                  <li><a href="#disclaimer">3. Disclaimer</a></li>
                  <li><a href="#limitations">4. Limitations</a></li>
                  <li><a href="#accuracy">5. Accuracy of Materials</a></li>
                  <li><a href="#links">6. Links</a></li>
                  <li><a href="#modifications">7. Modifications</a></li>
                  <li><a href="#governing">8. Governing Law</a></li>
                  <li><a href="#contact">9. Contact Information</a></li>
                </ul>
              </div>

              <div className="sidebar-widget wow fadeInUp" data-wow-delay=".5s">
                <h4 className="widget-title">Need Help?</h4>
                <p className="widget-desc">
                  If you have any questions about our terms and conditions, please don't hesitate to contact us.
                </p>
                <a href="/contact" className="tj-primary-btn">
                  <span className="btn-text">
                    <span>Contact Us</span>
                  </span>
                  <span className="btn-icon">
                    <i className="tji-arrow-right-long"></i>
                  </span>
                </a>
              </div>

              <div className="sidebar-widget wow fadeInUp" data-wow-delay=".7s">
                <h4 className="widget-title">Privacy Policy</h4>
                <p className="widget-desc">
                  Learn how we collect, use, and protect your personal information.
                </p>
                <a href="/privacy-policy" className="tj-secondary-btn">
                  <span className="btn-text">
                    <span>Read Privacy Policy</span>
                  </span>
                  <span className="btn-icon">
                    <i className="tji-arrow-right-long"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
