import React from 'react';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';

const Home7Page: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="tj-hero-section-7 section-gap-x">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content-7 wow fadeInLeft" data-wow-delay=".3s">
                <span className="sub-title">
                  <i className="tji-box"></i> Get to Know Us
                </span>
                <h1 className="hero-title">Driving Excellence Through Evolution & Trust.</h1>
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
              <div className="hero-img-7 wow fadeInRight" data-wow-delay=".5s">
                <Image src="/assets/images/hero/hero-img-6.webp" alt="Hero" width={600} height={500} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home7Page;
