import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Service } from '@/types';

const ServiceGrid: React.FC = () => {
  const services: Service[] = [
    {
      id: '1',
      title: 'Business Strategy Development',
      description: 'We help you develop comprehensive business strategies that drive growth and ensure long-term success.',
      icon: 'tji-service-1',
      href: '/service-details'
    },
    {
      id: '2',
      title: 'Customer Experience Solutions',
      description: 'Enhance your customer journey with our innovative experience design and implementation services.',
      icon: 'tji-service-2',
      href: '/service-details'
    },
    {
      id: '3',
      title: 'Sustainability and ESG Consulting',
      description: 'Integrate sustainable practices and ESG principles into your business operations and strategy.',
      icon: 'tji-service-3',
      href: '/service-details'
    },
    {
      id: '4',
      title: 'Training and Development Programs',
      description: 'Empower your team with comprehensive training programs tailored to your business needs.',
      icon: 'tji-service-4',
      href: '/service-details'
    },
    {
      id: '5',
      title: 'IT Support & Maintenance',
      description: 'Keep your technology infrastructure running smoothly with our expert IT support services.',
      icon: 'tji-service-5',
      href: '/service-details'
    },
    {
      id: '6',
      title: 'Marketing Strategy & Campaigns',
      description: 'Boost your brand visibility and reach with our strategic marketing solutions and campaigns.',
      icon: 'tji-service-6',
      href: '/service-details'
    }
  ];

  return (
    <section className="tj-service-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading text-center">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                <i className="tji-box"></i>Our Services
              </span>
              <h2 className="sec-title title-anim">
                Comprehensive <span>Business Solutions</span> for Your Success
              </h2>
              <p className="sec-desc wow fadeInUp" data-wow-delay=".6s">
                We provide end-to-end business consulting services to help you achieve your goals and drive sustainable growth.
              </p>
            </div>
          </div>
        </div>
        <div className="row row-gap-4">
          {services.map((service, index) => (
            <div key={service.id} className="col-xl-4 col-lg-6 col-md-6">
              <div className="service-item wow fadeInUp" data-wow-delay={`${0.1 + index * 0.1}s`}>
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <div className="service-content">
                  <h4 className="title">
                    <Link href={service.href}>{service.title}</Link>
                  </h4>
                  <p className="desc">{service.description}</p>
                  <Link href={service.href} className="read-more">
                    Learn More <i className="tji-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
