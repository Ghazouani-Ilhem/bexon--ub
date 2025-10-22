import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <section className="tj-hero-section hero-1 section-gap">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="hero-content wow fadeInLeft" data-wow-delay=".3s">
              <span className="sub-title">
                <i className="tji-box"></i>
                Welcome to Bexon
              </span>
              <h1 className="hero-title title-anim">
                Empowering Business with <span>Expertise.</span>
              </h1>
              <p className="hero-desc">
                Developing personalize our customer journeys to increase satisfaction & loyalty of our expansion recognized by industry leaders.
              </p>
              <div className="hero-btn-area">
                <Link href="/contact" className="tj-primary-btn">
                  <span className="btn-text">
                    <span>Get Started</span>
                  </span>
                  <span className="btn-icon">
                    <i className="tji-arrow-right-long"></i>
                  </span>
                </Link>
                <Link href="/about" className="tj-secondary-btn">
                  <span className="btn-text">
                    <span>Learn More</span>
                  </span>
                  <span className="btn-icon">
                    <i className="tji-play"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="hero-img-area wow fadeInRight" data-wow-delay=".5s">
              <div className="hero-img">
                <Image 
                  src="/assets/images/hero/hero-1.webp" 
                  alt="Hero Image" 
                  width={600}
                  height={500}
                  priority
                />
              </div>
              <div className="hero-shape">
                <Image 
                  src="/assets/images/shape/hero-shape-1.svg" 
                  alt="Hero Shape" 
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-bg-shape">
        <Image 
          src="/assets/images/shape/hero-bg-shape.svg" 
          alt="Hero Background Shape" 
          width={800}
          height={600}
        />
      </div>
    </section>
  );
};

export default HeroSection;
