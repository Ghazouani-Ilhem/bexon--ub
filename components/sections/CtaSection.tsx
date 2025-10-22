import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CtaSection: React.FC = () => {
  return (
    <section className="tj-cta-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cta-area">
              <div className="cta-content">
                <h2 className="title title-anim">Let's Build Future Together.</h2>
                <div className="cta-btn wow fadeInUp" data-wow-delay=".6s">
                  <Link href="/contact" className="tj-primary-btn btn-dark">
                    <span className="btn-text">
                      <span>Get Started Now</span>
                    </span>
                    <span className="btn-icon">
                      <i className="tji-arrow-right-long"></i>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="cta-img">
                <Image 
                  src="/assets/images/cta/cta-bg.webp" 
                  alt="CTA Background" 
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
