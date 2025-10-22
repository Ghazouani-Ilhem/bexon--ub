import React from 'react';

const ContactInfo: React.FC = () => {
  const contactItems = [
    {
      icon: 'tji-location-3',
      title: 'Our Location',
      content: '993 Renner Burg, West Rond, MT 94251-030'
    },
    {
      icon: 'tji-envelop',
      title: 'Email us',
      content: [
        { label: 'support@bexon.com', href: 'mailto:support@bexon.com' },
        { label: 'info@bexon.com', href: 'mailto:info@bexon.com' }
      ]
    },
    {
      icon: 'tji-phone',
      title: 'Call us',
      content: [
        { label: '+1 (009) 544-7818', href: 'tel:10095447818' },
        { label: '+1 (009) 880-1810', href: 'tel:10098801810' }
      ]
    },
    {
      icon: 'tji-chat',
      title: 'Live chat',
      content: [
        { label: 'livechat@bexon.com', href: 'mailto:livechat@bexon.com' },
        { label: 'Need help?', href: '/contact', active: true }
      ]
    }
  ];

  return (
    <div className="tj-contact-area section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading text-center">
              <span className="sub-title wow fadeInUp" data-wow-delay=".1s">
                <i className="tji-box"></i>Contact info
              </span>
              <h2 className="sec-title title-anim">
                <span>Reach</span> Out to Us
              </h2>
            </div>
          </div>
        </div>
        <div className="row row-gap-4">
          {contactItems.map((item, index) => (
            <div key={index} className="col-xl-3 col-lg-6 col-sm-6">
              <div className="contact-item style-2 wow fadeInUp" data-wow-delay={`${0.3 + index * 0.2}s`}>
                <div className="contact-icon">
                  <i className={item.icon}></i>
                </div>
                <h3 className="contact-title">{item.title}</h3>
                {Array.isArray(item.content) ? (
                  <ul className="contact-list">
                    {item.content.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a 
                          href={link.href} 
                          className={link.active ? 'active' : ''}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>{item.content}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
