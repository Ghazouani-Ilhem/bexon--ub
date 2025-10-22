import React from 'react';
import Image from 'next/image';

const HistorySection: React.FC = () => {
  const milestones = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'Bexon was founded with a vision to help businesses achieve their goals through strategic consulting and innovative solutions.',
      image: '/assets/images/history/history-1.webp'
    },
    {
      year: '2012',
      title: 'First Major Client',
      description: 'We secured our first Fortune 500 client, marking a significant milestone in our growth and establishing our reputation in the industry.',
      image: '/assets/images/history/history-2.webp'
    },
    {
      year: '2015',
      title: 'International Expansion',
      description: 'We expanded our services internationally, opening offices in Europe and Asia to serve clients globally.',
      image: '/assets/images/history/history-3.webp'
    },
    {
      year: '2018',
      title: 'Digital Transformation Focus',
      description: 'We pivoted to focus on digital transformation, helping businesses adapt to the rapidly changing digital landscape.',
      image: '/assets/images/history/history-4.webp'
    },
    {
      year: '2020',
      title: 'Remote Work Revolution',
      description: 'During the global pandemic, we helped hundreds of companies transition to remote work and digital operations.',
      image: '/assets/images/history/history-5.webp'
    },
    {
      year: '2023',
      title: 'AI Integration',
      description: 'We became early adopters of AI technology, integrating artificial intelligence into our consulting services.',
      image: '/assets/images/history/history-6.webp'
    },
    {
      year: '2024',
      title: 'Future Vision',
      description: 'Today, we continue to innovate and lead the industry, helping businesses prepare for the future of work and technology.',
      image: '/assets/images/history/history-7.webp'
    }
  ];

  return (
    <section className="tj-history-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading text-center">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                <i className="tji-box"></i>Our Journey
              </span>
              <h2 className="sec-title title-anim">
                A <span>Decade</span> of Excellence and Innovation
              </h2>
              <p className="sec-desc wow fadeInUp" data-wow-delay=".6s">
                From humble beginnings to industry leadership, discover the key milestones that shaped Bexon into the trusted business partner we are today.
              </p>
            </div>
          </div>
        </div>
        
        <div className="timeline-wrapper">
          {milestones.map((milestone, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} wow fadeInUp`} data-wow-delay={`${0.1 + index * 0.1}s`}>
              <div className="timeline-content">
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-card">
                  <div className="timeline-img">
                    <Image 
                      src={milestone.image} 
                      alt={milestone.title} 
                      width={400}
                      height={250}
                    />
                  </div>
                  <div className="timeline-text">
                    <h4 className="timeline-title">{milestone.title}</h4>
                    <p className="timeline-desc">{milestone.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-12">
            <div className="history-stats text-center wow fadeInUp" data-wow-delay=".8s">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="stat-item">
                    <div className="stat-number">500+</div>
                    <div className="stat-label">Projects Completed</div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="stat-item">
                    <div className="stat-number">200+</div>
                    <div className="stat-label">Happy Clients</div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="stat-item">
                    <div className="stat-number">50+</div>
                    <div className="stat-label">Team Members</div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="stat-item">
                    <div className="stat-number">15+</div>
                    <div className="stat-label">Countries Served</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
