import React, { useState } from 'react';
import Link from 'next/link';

const FaqSection: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const faqs = [
    {
      id: 1,
      question: 'What services does Bexon offer to clients?',
      answer: 'Getting started is easy! Simply reach out to us through our contact form or give us a call, and we\'ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.'
    },
    {
      id: 2,
      question: 'How do I get started with Corporate Business?',
      answer: 'Getting started is easy! Simply reach out to us through our contact form or give us a call, and we\'ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.'
    },
    {
      id: 3,
      question: 'How do you ensure the success of a project?',
      answer: 'Getting started is easy! Simply reach out to us through our contact form or give us a call, and we\'ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.'
    },
    {
      id: 4,
      question: 'How long will it take to complete my project?',
      answer: 'Getting started is easy! Simply reach out to us through our contact form or give us a call, and we\'ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.'
    },
    {
      id: 5,
      question: 'Can I track the progress of my project?',
      answer: 'Getting started is easy! Simply reach out to us through our contact form or give us a call, and we\'ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.'
    }
  ];

  return (
    <section className="tj-faq-section section-gap">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <div className="content-wrap">
              <div className="sec-heading">
                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                  <i className="tji-box"></i>Common Questions
                </span>
                <h2 className="sec-title title-anim">
                  Need <span>Help?</span> Start Here...
                </h2>
              </div>
              <p className="desc wow fadeInUp" data-wow-delay=".6s">
                We stay ahead of curve, leveraging <br /> cutting-edge are technologies and <br /> strategies to competitive
              </p>
              <div className="wow fadeInUp" data-wow-delay=".8s">
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
          <div className="col-lg-8">
            <div className="accordion tj-faq" id="faqOne">
              {faqs.map((faq, index) => (
                <div key={faq.id} className={`accordion-item ${activeFaq === index ? 'active' : ''} wow fadeInUp`} data-wow-delay={`${0.3 + index * 0.1}s`}>
                  <button 
                    className={`faq-title ${activeFaq === index ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                  >
                    {faq.question}
                  </button>
                  <div 
                    className={`collapse ${activeFaq === index ? 'show' : ''}`}
                    data-bs-parent="#faqOne"
                  >
                    <div className="accordion-body faq-text">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
