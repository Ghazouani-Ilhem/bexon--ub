import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServiceDetails: React.FC = () => {
  const serviceFeatures = [
    {
      icon: 'tji-check',
      title: 'Strategic Planning',
      description: 'Comprehensive business strategy development and implementation'
    },
    {
      icon: 'tji-check',
      title: 'Process Optimization',
      description: 'Streamline operations and improve efficiency across all departments'
    },
    {
      icon: 'tji-check',
      title: 'Technology Integration',
      description: 'Modernize your technology stack and digital transformation'
    },
    {
      icon: 'tji-check',
      title: 'Team Training',
      description: 'Empower your team with the skills and knowledge they need'
    },
    {
      icon: 'tji-check',
      title: 'Performance Monitoring',
      description: 'Track progress and measure success with detailed analytics'
    },
    {
      icon: 'tji-check',
      title: 'Ongoing Support',
      description: 'Continuous support and guidance throughout your journey'
    }
  ];

  return (
    <section className="tj-service-details-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div className="service-details-content">
              <div className="service-details-img wow fadeInUp" data-wow-delay=".3s">
                <Image 
                  src="/assets/images/service/service-details.webp" 
                  alt="Service Details" 
                  width={800}
                  height={500}
                />
              </div>
              
              <div className="service-details-text wow fadeInUp" data-wow-delay=".5s">
                <h2 className="title">Comprehensive Business Consulting Services</h2>
                <p className="desc">
                  Our business consulting services are designed to help organizations of all sizes 
                  achieve their goals and drive sustainable growth. We combine industry expertise 
                  with innovative solutions to deliver measurable results.
                </p>
                <p className="desc">
                  Whether you're a startup looking to scale or an established company seeking 
                  transformation, our team of experienced consultants will work closely with you 
                  to develop and implement strategies that drive success.
                </p>
              </div>

              <div className="service-features wow fadeInUp" data-wow-delay=".7s">
                <h3 className="section-title">What We Offer</h3>
                <div className="row">
                  {serviceFeatures.map((feature, index) => (
                    <div key={index} className="col-md-6">
                      <div className="feature-item">
                        <div className="feature-icon">
                          <i className={feature.icon}></i>
                        </div>
                        <div className="feature-content">
                          <h5 className="title">{feature.title}</h5>
                          <p className="desc">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="service-process wow fadeInUp" data-wow-delay=".9s">
                <h3 className="section-title">Our Process</h3>
                <div className="process-steps">
                  <div className="process-step">
                    <div className="step-number">01</div>
                    <div className="step-content">
                      <h5 className="title">Discovery & Analysis</h5>
                      <p className="desc">We begin by understanding your business, challenges, and goals through comprehensive analysis.</p>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-number">02</div>
                    <div className="step-content">
                      <h5 className="title">Strategy Development</h5>
                      <p className="desc">Based on our analysis, we develop a customized strategy tailored to your specific needs.</p>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-number">03</div>
                    <div className="step-content">
                      <h5 className="title">Implementation</h5>
                      <p className="desc">We work alongside your team to implement the strategy and ensure smooth execution.</p>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="step-number">04</div>
                    <div className="step-content">
                      <h5 className="title">Monitoring & Optimization</h5>
                      <p className="desc">We continuously monitor progress and optimize strategies for maximum impact.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-xl-4 col-lg-5">
            <div className="service-sidebar">
              <div className="sidebar-widget wow fadeInUp" data-wow-delay=".3s">
                <h4 className="widget-title">Quick Contact</h4>
                <div className="contact-info">
                  <div className="contact-item">
                    <i className="tji-phone"></i>
                    <span>+1 (009) 544-7818</span>
                  </div>
                  <div className="contact-item">
                    <i className="tji-envelop"></i>
                    <span>info@bexon.com</span>
                  </div>
                  <div className="contact-item">
                    <i className="tji-location-3"></i>
                    <span>993 Renner Burg, West Rond, MT 94251-030</span>
                  </div>
                </div>
                <Link href="/contact" className="tj-primary-btn">
                  <span className="btn-text">
                    <span>Get Started</span>
                  </span>
                  <span className="btn-icon">
                    <i className="tji-arrow-right-long"></i>
                  </span>
                </Link>
              </div>

              <div className="sidebar-widget wow fadeInUp" data-wow-delay=".5s">
                <h4 className="widget-title">Related Services</h4>
                <ul className="service-list">
                  <li><Link href="/service-details">Business Strategy Development</Link></li>
                  <li><Link href="/service-details">Customer Experience Solutions</Link></li>
                  <li><Link href="/service-details">Digital Transformation</Link></li>
                  <li><Link href="/service-details">Process Optimization</Link></li>
                  <li><Link href="/service-details">Team Training & Development</Link></li>
                </ul>
              </div>

              <div className="sidebar-widget wow fadeInUp" data-wow-delay=".7s">
                <h4 className="widget-title">Download Brochure</h4>
                <p className="desc">Get detailed information about our services and solutions.</p>
                <Link href="#" className="tj-secondary-btn">
                  <span className="btn-text">
                    <span>Download PDF</span>
                  </span>
                  <span className="btn-icon">
                    <i className="tji-download"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
