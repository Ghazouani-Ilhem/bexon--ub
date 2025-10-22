import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutSection: React.FC = () => {
  return (
    <section className="tj-about-section-2 section-gap section-gap-x">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 order-lg-1 order-2">
            <div className="about-img-area style-2 wow fadeInLeft" data-wow-delay=".3s">
              <div className="about-img overflow-hidden">
                <Image 
                  data-speed=".8" 
                  src="/assets/images/about/about-5.webp" 
                  alt="About Image" 
                  width={500}
                  height={400}
                />
              </div>
              <div className="box-area style-2">
                <div className="progress-box wow fadeInUp" data-wow-delay=".3s">
                  <h4 className="title">Business Progress</h4>
                  <ul className="tj-progress-list">
                    <li>
                      <h6 className="tj-progress-title">Revenue</h6>
                      <div className="tj-progress">
                        <span className="tj-progress-percent">82%</span>
                        <div className="tj-progress-bar" data-percent="82"></div>
                      </div>
                    </li>
                    <li>
                      <h6 className="tj-progress-title">Satisfaction</h6>
                      <div className="tj-progress">
                        <span className="tj-progress-percent">90%</span>
                        <div className="tj-progress-bar" data-percent="90"></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 order-lg-2 order-1">
            <div className="about-content-area">
              <div className="sec-heading">
                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                  <i className="tji-box"></i>Get to Know Us
                </span>
                <h2 className="sec-title title-anim">
                  Driving Innovation and Excellence for Sustainable Corporate Success <span>Worldwide.</span>
                </h2>
              </div>
            </div>
            <div className="about-bottom-area">
              <div className="mission-vision-box wow fadeInLeft" data-wow-delay=".5s">
                <h4 className="title">Our Mission</h4>
                <p className="desc">
                  our mission is empower businesses through innovate best solution, exceptional service.
                </p>
                <ul className="list-items">
                  <li><i className="tji-list"></i>Innovation & Excellence</li>
                  <li><i className="tji-list"></i>Exceptional Customer</li>
                  <li><i className="tji-list"></i>Business Growth</li>
                </ul>
              </div>
              <div className="mission-vision-box wow fadeInRight" data-wow-delay=".5s">
                <h4 className="title">Our Vision</h4>
                <p className="desc">
                  Our vision is to become a global leader in providing transformative business solutions.
                </p>
                <ul className="list-items">
                  <li><i className="tji-list"></i>Global Leadership</li>
                  <li><i className="tji-list"></i>Transformative Impact</li>
                  <li><i className="tji-list"></i>Sustainable Success</li>
                </ul>
              </div>
            </div>
            <div className="about-btn-area wow fadeInUp" data-wow-delay=".6s">
              <Link href="/about" className="tj-primary-btn">
                <span className="btn-text">
                  <span>Learn More About Us</span>
                </span>
                <span className="btn-icon">
                  <i className="tji-arrow-right-long"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-shape-1">
        <Image src="/assets/images/shape/pattern-2.svg" alt="Pattern" width={200} height={200} />
      </div>
      <div className="bg-shape-2">
        <Image src="/assets/images/shape/pattern-3.svg" alt="Pattern" width={200} height={200} />
      </div>
    </section>
  );
};

export default AboutSection;
