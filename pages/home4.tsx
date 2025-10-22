import React from 'react';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';

const Home4Page: React.FC = () => {
  return (
    <Layout>
      {/* H4 Banner Section */}
      <section className="h4-banner-section section-gap-x">
        <div className="h4-banner-area">
          <div className="h4-banner-content">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="h4-banner-text wow fadeInLeft" data-wow-delay=".3s">
                    <span className="sub-title">
                      <i className="tji-box"></i> Get to Know Us
                    </span>
                    <h1 className="banner-title">Driving Excellence Through Evolution & Trust.</h1>
                    <p>Committed to delivering innovative solutions that drive success. With a focus on quality, we help businesses achieve their goals.</p>
                    <div className="btn-area">
                      <Link className="tj-primary-btn" href="/contact">
                        <span className="btn-text"><span>Get Started</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                      </Link>
                      <a className="number" href="tel:18884521505">
                        <i className="tji-phone"></i><span>1-888-452-1505</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="h4-banner-img wow fadeInRight" data-wow-delay=".5s">
                    <Image src="/assets/images/hero/hero-img-3.webp" alt="Hero" width={600} height={500} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Section */}
      <section id="choose" className="tj-choose-section section-gap">
        <div className="container">
          <div className="row row-gap-4">
            <div className="col-lg-6">
              <div className="choose-content wow fadeInLeft" data-wow-delay=".3s">
                <div className="sec-heading">
                  <span className="sub-title">Why Choose Us</span>
                  <h2 className="sec-title">We Provide Best Service & Solutions</h2>
                  <p>Our team of experts is dedicated to delivering exceptional results that exceed expectations and drive business growth.</p>
                </div>
                <div className="choose-features">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="tji-check"></i>
                    </div>
                    <div className="feature-content">
                      <h5>Expert Team</h5>
                      <p>Professional team with years of experience</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="tji-check"></i>
                    </div>
                    <div className="feature-content">
                      <h5>24/7 Support</h5>
                      <p>Round-the-clock customer support</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="tji-check"></i>
                    </div>
                    <div className="feature-content">
                      <h5>Quality Service</h5>
                      <p>High-quality solutions for your business</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="choose-img wow fadeInRight" data-wow-delay=".5s">
                <Image src="/assets/images/about/about-5.webp" alt="Choose" width={600} height={400} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home4Page;
