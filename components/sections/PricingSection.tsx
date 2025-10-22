import React from 'react';
import Link from 'next/link';

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  buttonLink: string;
}

const PricingSection: React.FC = () => {
  const pricingPlans: PricingPlan[] = [
    {
      id: '1',
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Basic business consultation',
        'Monthly strategy review',
        'Email support',
        'Basic reporting',
        'Up to 2 team members'
      ],
      buttonText: 'Get Started',
      buttonLink: '/contact'
    },
    {
      id: '2',
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Comprehensive business analysis',
        'Weekly strategy sessions',
        'Priority support',
        'Advanced reporting',
        'Up to 10 team members',
        'Custom solutions'
      ],
      popular: true,
      buttonText: 'Choose Plan',
      buttonLink: '/contact'
    },
    {
      id: '3',
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Full-service consulting',
        'Daily strategy support',
        '24/7 dedicated support',
        'Custom reporting dashboard',
        'Unlimited team members',
        'White-label solutions',
        'Dedicated account manager'
      ],
      buttonText: 'Contact Sales',
      buttonLink: '/contact'
    }
  ];

  return (
    <section className="tj-pricing-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading text-center">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                <i className="tji-box"></i>Pricing Plans
              </span>
              <h2 className="sec-title title-anim">
                Choose Your <span>Perfect Plan</span>
              </h2>
              <p className="sec-desc wow fadeInUp" data-wow-delay=".6s">
                Flexible pricing options designed to meet your business needs and budget.
              </p>
            </div>
          </div>
        </div>
        
        <div className="row row-gap-4">
          {pricingPlans.map((plan, index) => (
            <div key={plan.id} className="col-xl-4 col-lg-6 col-md-6">
              <div className={`pricing-item wow fadeInUp ${plan.popular ? 'popular' : ''}`} data-wow-delay={`${0.1 + index * 0.1}s`}>
                {plan.popular && (
                  <div className="popular-badge">
                    <span>Most Popular</span>
                  </div>
                )}
                <div className="pricing-header">
                  <h4 className="title">{plan.name}</h4>
                  <div className="price">
                    <span className="amount">{plan.price}</span>
                    <span className="period">{plan.period}</span>
                  </div>
                  <p className="description">{plan.description}</p>
                </div>
                <div className="pricing-content">
                  <ul className="features-list">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <i className="tji-check"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pricing-footer">
                  <Link href={plan.buttonLink} className="tj-primary-btn">
                    <span className="btn-text">
                      <span>{plan.buttonText}</span>
                    </span>
                    <span className="btn-icon">
                      <i className="tji-arrow-right-long"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="row">
          <div className="col-12">
            <div className="pricing-note text-center wow fadeInUp" data-wow-delay=".8s">
              <p>
                <strong>Need a custom solution?</strong> Contact us to discuss your specific requirements 
                and we'll create a tailored plan just for you.
              </p>
              <Link href="/contact" className="tj-secondary-btn">
                <span className="btn-text">
                  <span>Contact Us</span>
                </span>
                <span className="btn-icon">
                  <i className="tji-arrow-right-long"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
