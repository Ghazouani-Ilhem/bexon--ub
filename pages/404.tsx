import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';

const Custom404: React.FC = () => {
  return (
    <Layout 
      title="404 - Page Not Found | Bexon Corporate Business"
      description="The page you're looking for doesn't exist. Return to our homepage or explore our services."
    >
      <div className="space-for-header"></div>
      <section className="tj-error-section section-gap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="error-content text-center">
                <div className="error-img wow fadeInUp" data-wow-delay=".3s">
                  <Image 
                    src="/assets/images/404/error.webp" 
                    alt="404 Error" 
                    width={500}
                    height={400}
                  />
                </div>
                <div className="error-text wow fadeInUp" data-wow-delay=".5s">
                  <h2 className="title">Oops! Page Not Found</h2>
                  <p className="desc">
                    The page you're looking for doesn't exist or has been moved. 
                    Let's get you back on track.
                  </p>
                  <div className="error-btn-area">
                    <Link href="/" className="tj-primary-btn">
                      <span className="btn-text">
                        <span>Back to Home</span>
                      </span>
                      <span className="btn-icon">
                        <i className="tji-arrow-right-long"></i>
                      </span>
                    </Link>
                    <Link href="/contact" className="tj-secondary-btn">
                      <span className="btn-text">
                        <span>Contact Us</span>
                      </span>
                      <span className="btn-icon">
                        <i className="tji-arrow-right-long"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Custom404;
