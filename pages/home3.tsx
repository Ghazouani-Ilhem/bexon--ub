import React from 'react';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';

const Home3Page: React.FC = () => {
  return (
    <Layout>
      {/* Banner Section */}
      <section className="tj-banner-section-2 section-gap-x">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="banner-content-2">
                <span className="sub-title wow fadeInUp" data-wow-delay=".2s">
                  <i className="tji-box"></i> Get to Know Us
                </span>
                <h1 className="banner-title title-anim">Driving Excellence Through
                  <a className="title-video video-popup wow fadeInUp" data-wow-delay="1.3s" data-autoplay="true"
                    data-vbtype="video" data-maxwidth="1200px"
                    href="https://www.youtube.com/watch?v=MLpWrANjFbI&ab_channel=eidelchteinadvogados">
                    <i className="tji-play"></i>
                    <Image src="/assets/images/hero/title-img.webp" alt="Video" width={200} height={120} />
                  </a> Evolution & Trust.
                </h1>
                <div className="btn-area wow fadeInUp" data-wow-delay=".8s">
                  <Link className="tj-primary-btn" href="/contact">
                    <span className="btn-text"><span>Learn More</span></span>
                    <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                  </Link>
                  <a className="number" href="tel:18884521505"><i className="tji-phone"></i><span>1-888-452-1505</span></a>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="banner-img-area wow fadeInUp" data-wow-delay=".3s">
                <div className="banner-img">
                  <Image src="/assets/images/hero/hero-img-2.webp" alt="Hero" width={600} height={500} />
                  <div className="brand-name wow fadeIn" data-wow-delay="2.2s">
                    <div className="marquee-vr">
                      <span className="text">Bexon<span className="icon">/</span></span>
                      <span className="text">Bexon<span className="icon">/</span></span>
                      <span className="text">Bexon<span className="icon">/</span></span>
                      <span className="text">Bexon<span className="icon">/</span></span>
                      <span className="text">Bexon<span className="icon">/</span></span>
                      <span className="text">Bexon<span className="icon">/</span></span>
                    </div>
                  </div>
                  <div className="growth-box wow fadeInUp" data-wow-delay="1.7s">
                    <Image src="/assets/images/hero/growth.webp" alt="Growth" width={100} height={100} />
                  </div>
                </div>
                <div className="wow fadeIn" data-wow-delay="2.2s">
                  <div className="banner-author">
                    <h4 className="title">Eade Marren</h4>
                    <span className="designation">CEO & Founder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-shape-1">
          <Image src="/assets/images/shape/pattern-2.svg" alt="Shape" width={200} height={200} />
        </div>
        <div className="bg-shape-2">
          <Image src="/assets/images/shape/pattern-3.svg" alt="Shape" width={150} height={150} />
        </div>
        <div className="banner-scroll wow fadeInDown" data-wow-delay="2.5s">
          <a href="#choose" className="scroll-down">
            <span><i className="tji-arrow-down-long"></i></span>
            Scroll Down
          </a>
        </div>
      </section>

      {/* Client Section */}
      <div className="tj-client-section-2 section-gap-x wow fadeInUp" data-wow-delay=".4s">
        <div className="container-fluid client-container">
          <div className="row">
            <div className="col-12">
              <div className="swiper client-slider client-slider-2">
                <div className="swiper-wrapper">
                  <div className="swiper-slide client-item">
                    <div className="client-logo">
                      <Image src="/assets/images/brands/brand-1-light.webp" alt="Brand" width={120} height={60} />
                    </div>
                  </div>
                  <div className="swiper-slide client-item">
                    <div className="client-logo">
                      <Image src="/assets/images/brands/brand-2-light.webp" alt="Brand" width={120} height={60} />
                    </div>
                  </div>
                  <div className="swiper-slide client-item">
                    <div className="client-logo">
                      <Image src="/assets/images/brands/brand-3-light.webp" alt="Brand" width={120} height={60} />
                    </div>
                  </div>
                  <div className="swiper-slide client-item">
                    <div className="client-logo">
                      <Image src="/assets/images/brands/brand-4-light.webp" alt="Brand" width={120} height={60} />
                    </div>
                  </div>
                  <div className="swiper-slide client-item">
                    <div className="client-logo">
                      <Image src="/assets/images/brands/brand-5-light.webp" alt="Brand" width={120} height={60} />
                    </div>
                  </div>
                  <div className="swiper-slide client-item">
                    <div className="client-logo">
                      <Image src="/assets/images/brands/brand-6-light.webp" alt="Brand" width={120} height={60} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home3Page;
