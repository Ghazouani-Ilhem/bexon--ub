import React from 'react';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';

const Home2Page: React.FC = () => {
  return (
    <Layout>
      {/* Hero Slider Section */}
      <section className="tj-slider-section">
        <div className="swiper hero-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide tj-slider-item">
              <div className="slider-bg-image" style={{ backgroundImage: 'url(/assets/images/hero/slider-1.webp)' }}></div>
              <div className="container">
                <div className="slider-wrapper">
                  <div className="slider-content">
                    <h1 className="slider-title">Leading Future for <span>Business.</span></h1>
                    <div className="slider-desc">Committed to delivering innovative solutions that drive success. With a focus on quality.</div>
                    <div className="slider-btn">
                      <Link className="tj-primary-btn" href="/contact">
                        <span className="btn-text"><span>Get Started</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide tj-slider-item">
              <div className="slider-bg-image" style={{ backgroundImage: 'url(/assets/images/hero/slider-2.webp)' }}></div>
              <div className="container">
                <div className="slider-wrapper">
                  <div className="slider-content">
                    <h1 className="slider-title">Leading Future for <span>Business.</span></h1>
                    <div className="slider-desc">Committed to delivering innovative solutions that drive success. With a focus on quality.</div>
                    <div className="slider-btn">
                      <Link className="tj-primary-btn" href="/contact">
                        <span className="btn-text"><span>Get Started</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide tj-slider-item">
              <div className="slider-bg-image" style={{ backgroundImage: 'url(/assets/images/hero/slider-3.webp)' }}></div>
              <div className="container">
                <div className="slider-wrapper">
                  <div className="slider-content">
                    <h1 className="slider-title">Leading Future for <span>Business.</span></h1>
                    <div className="slider-desc">Committed to delivering innovative solutions that drive success. With a focus on quality.</div>
                    <div className="slider-btn">
                      <Link className="tj-primary-btn" href="/contact">
                        <span className="btn-text"><span>Get Started</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-navigation d-inline-flex wow fadeIn" data-wow-delay="1.5s">
            <div className="slider-prev">
              <span className="anim-icon">
                <i className="tji-arrow-left"></i>
                <i className="tji-arrow-left"></i>
              </span>
            </div>
            <div className="slider-next">
              <span className="anim-icon">
                <i className="tji-arrow-right"></i>
                <i className="tji-arrow-right"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="swiper hero-thumb wow fadeIn" data-wow-delay="2s">
          <div className="swiper-wrapper">
            <div className="swiper-slide thumb-item">
              <Image src="/assets/images/hero/slider-thumb-1.webp" alt="Thumbnail" width={100} height={60} />
            </div>
            <div className="swiper-slide thumb-item">
              <Image src="/assets/images/hero/slider-thumb-2.webp" alt="Thumbnail" width={100} height={60} />
            </div>
            <div className="swiper-slide thumb-item">
              <Image src="/assets/images/hero/slider-thumb-3.webp" alt="Thumbnail" width={100} height={60} />
            </div>
          </div>
        </div>
        <div className="circle-text-wrap wow fadeInUp" data-wow-delay="1s">
          <span className="circle-text" style={{ backgroundImage: 'url(/assets/images/hero/circle-text.webp)' }}></span>
          <Link className="circle-icon" href="/service"><i className="tji-arrow-down-big"></i></Link>
        </div>
      </section>

      {/* Client Section */}
      <section className="tj-client-section section-top-gap">
        <div className="container-fluid client-container">
          <div className="row">
            <div className="col-12">
              <div className="client-content style-2 wow fadeIn" data-wow-delay=".3s">
                <h5 className="sec-title">Join Over <span className="client-numbers">1000+</span> Companies with <span className="client-text">Bexon</span> Here</h5>
              </div>
              <div className="swiper client-slider client-slider-1 wow fadeIn" data-wow-delay=".5s">
                <div className="swiper-wrapper">
                  <div className="swiper-slide client-item">
                    <div className="client-logo">
                      <Image src="/assets/images/brands/brand-1.webp" alt="Brand" width={120} height={60} />
                    </div>
                  </div>
                  <div className="swiper-slide client-item">
                    <div className="client-logo">
                      <Image src="/assets/images/brands/brand-2.webp" alt="Brand" width={120} height={60} />
                    </div>
                  </div>
                  <div className="swiper-slide client-item">
                    <div className="client-logo">
                      <Image src="/assets/images/brands/brand-3.webp" alt="Brand" width={120} height={60} />
                    </div>
                  </div>
                  <div className="swiper-slide client-item">
                    <div className="client-logo">
                      <Image src="/assets/images/brands/brand-4.webp" alt="Brand" width={120} height={60} />
                    </div>
                  </div>
                  <div className="swiper-slide client-item">
                    <div className="client-logo">
                      <Image src="/assets/images/brands/brand-5.webp" alt="Brand" width={120} height={60} />
                    </div>
                  </div>
                  <div className="swiper-slide client-item">
                    <div className="client-logo">
                      <Image src="/assets/images/brands/brand-6.webp" alt="Brand" width={120} height={60} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="tj-about-section section-gap">
        <div className="container">
          <div className="row row-gap-4">
            <div className="col-lg-4 col-md-6 order-lg-1 order-3">
              <div className="countup-item style-2 wow fadeInUp" data-wow-delay=".1s">
                <span className="count-icon"><i className="tji-complete"></i></span>
                <span className="steps">01.</span>
                <div className="count-inner">
                  <span className="count-text">Projects Completed.</span>
                  <div className="inline-content">
                    <span className="odometer countup-number" data-count="93">93</span>
                    <span className="count-plus">%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12 order-lg-2 order-1">
              <div className="about-content-area-2 wow fadeInUp" data-wow-delay=".3s">
                <div className="about-content">
                  <div className="sec-heading style-2">
                    <span className="sub-title">Get to Know Us</span>
                    <h2 className="sec-title title-highlight">Driving into Excellence & Innovation: Your Trusted Partner for Sustainable Business Success.</h2>
                  </div>
                  <div className="wow fadeInUp" data-wow-delay=".3s">
                    <Link className="text-btn" href="/about">
                      <span className="btn-text"><span>Learn More</span></span>
                      <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                    </Link>
                  </div>
                </div>
                <div className="video-img wow fadeInRight" data-wow-delay=".7s">
                  <Image src="/assets/images/about/about-3.webp" alt="About" width={600} height={400} />
                  <a className="video-btn video-popup" data-autoplay="true" data-vbtype="video" data-maxwidth="1200px" href="https://www.youtube.com/watch?v=MLpWrANjFbI&ab_channel=eidelchteinadvogados">
                    <span><i className="tji-play"></i></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 order-lg-3 order-2">
              <div className="customers-box style-2 wow fadeInUp" data-wow-delay=".3s">
                <div className="customers-bg" style={{ backgroundImage: 'url(/assets/images/about/about-4.webp)' }}></div>
                <div className="customers">
                  <ul>
                    <li className="wow fadeInLeft" data-wow-delay=".3s">
                      <Image src="/assets/images/testimonial/client-1.webp" alt="Client" width={50} height={50} />
                    </li>
                    <li className="wow fadeInLeft" data-wow-delay=".4s">
                      <Image src="/assets/images/testimonial/client-2.webp" alt="Client" width={50} height={50} />
                    </li>
                    <li className="wow fadeInLeft" data-wow-delay=".5s">
                      <Image src="/assets/images/testimonial/client-3.webp" alt="Client" width={50} height={50} />
                    </li>
                    <li className="wow fadeInLeft" data-wow-delay=".6s">
                      <Image src="/assets/images/testimonial/client-4.webp" alt="Client" width={50} height={50} />
                    </li>
                    <li className="wow fadeInLeft" data-wow-delay=".7s">
                      <Image src="/assets/images/testimonial/client-5.webp" alt="Client" width={50} height={50} />
                    </li>
                    <li className="wow fadeInLeft" data-wow-delay=".8s">
                      <Image src="/assets/images/testimonial/client-6.webp" alt="Client" width={50} height={50} />
                    </li>
                  </ul>
                  <div className="customers-text">
                    <span className="customers-count">+50</span>
                    <span className="customers-desc">Happy Customers</span>
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

export default Home2Page;
