import React from 'react';
import Link from 'next/link';

const ChooseSection: React.FC = () => {
  const chooseItems = [
    {
      icon: 'tji-innovative',
      title: 'Innovative Solutions',
      description: 'We stay ahead of the curve, leveraging cutting-edge technologies and strategies to keep you competitive in a marketplace.'
    },
    {
      icon: 'tji-award',
      title: 'Award-Winning Expertise',
      description: 'Recognized by industry leaders, our award-winning team has a proven record of delivering excellence across projects.'
    },
    {
      icon: 'tji-support',
      title: 'Dedicated Support',
      description: 'Our team is always available to address your concerns, providing quick and effective solution to keep your business.'
    }
  ];

  return (
    <section id="choose" className="tj-choose-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading-wrap">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                <i className="tji-box"></i>Choose the Best
              </span>
              <div className="heading-wrap-content">
                <div className="sec-heading">
                  <h2 className="sec-title title-anim">
                    Empowering Business with <span>Expertise.</span>
                  </h2>
                </div>
                <div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
                  <Link href="/contact" className="tj-primary-btn">
                    <span className="btn-text">
                      <span>Request a Call</span>
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
        <div className="row row-gap-4 rightSwipeWrap">
          {chooseItems.map((item, index) => (
            <div key={index} className="col-lg-4">
              <div className="choose-box right-swipe">
                <div className="choose-content">
                  <div className="choose-icon">
                    <i className={item.icon}></i>
                  </div>
                  <h4 className="title">{item.title}</h4>
                  <p className="desc">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseSection;
