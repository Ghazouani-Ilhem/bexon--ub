import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioDetails: React.FC = () => {
  const project = {
    title: 'Digital Transformation for Global Retail Chain',
    category: 'Digital Transformation',
    client: 'Global Retail Chain',
    duration: '6 months',
    team: '8 consultants',
    image: '/assets/images/project/project-1.webp',
    description: 'We helped a global retail chain transform their digital operations and improve customer experience across all channels.',
    challenge: 'The client was struggling with outdated systems, poor customer experience, and declining sales. They needed a comprehensive digital transformation strategy to modernize their operations and compete in the digital marketplace.',
    solution: 'We developed a multi-phase digital transformation strategy that included technology modernization, process optimization, and customer experience enhancement. Our team worked closely with the client to implement new systems and train their staff.',
    results: [
      '40% increase in online sales',
      '60% improvement in customer satisfaction',
      '35% reduction in operational costs',
      '50% faster order processing',
      '25% increase in customer retention'
    ],
    technologies: ['Cloud Computing', 'AI/ML', 'Mobile Apps', 'Data Analytics', 'CRM Systems'],
    gallery: [
      '/assets/images/project/project-1.webp',
      '/assets/images/project/project-2.webp',
      '/assets/images/project/project-3.webp',
      '/assets/images/project/project-4.webp'
    ]
  };

  return (
    <section className="tj-portfolio-details-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div className="portfolio-details-content">
              <div className="portfolio-meta wow fadeInUp" data-wow-delay=".3s">
                <span className="category">{project.category}</span>
                <span className="client">{project.client}</span>
                <span className="duration">{project.duration}</span>
              </div>
              
              <h1 className="portfolio-title wow fadeInUp" data-wow-delay=".5s">{project.title}</h1>
              
              <div className="portfolio-img wow fadeInUp" data-wow-delay=".7s">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={800}
                  height={500}
                />
              </div>
              
              <div className="portfolio-description wow fadeInUp" data-wow-delay=".9s">
                <p className="desc">{project.description}</p>
              </div>

              <div className="portfolio-challenge wow fadeInUp" data-wow-delay="1.1s">
                <h3 className="section-title">The Challenge</h3>
                <p className="desc">{project.challenge}</p>
              </div>

              <div className="portfolio-solution wow fadeInUp" data-wow-delay="1.3s">
                <h3 className="section-title">Our Solution</h3>
                <p className="desc">{project.solution}</p>
              </div>

              <div className="portfolio-results wow fadeInUp" data-wow-delay="1.5s">
                <h3 className="section-title">Results Achieved</h3>
                <div className="results-grid">
                  {project.results.map((result, index) => (
                    <div key={index} className="result-item">
                      <i className="tji-check"></i>
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="portfolio-gallery wow fadeInUp" data-wow-delay="1.7s">
                <h3 className="section-title">Project Gallery</h3>
                <div className="gallery-grid">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="gallery-item">
                      <Image 
                        src={image} 
                        alt={`Project Gallery ${index + 1}`} 
                        width={200}
                        height={150}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-xl-4 col-lg-5">
            <div className="portfolio-sidebar">
              <div className="sidebar-widget wow fadeInUp" data-wow-delay=".3s">
                <h4 className="widget-title">Project Info</h4>
                <div className="project-info">
                  <div className="info-item">
                    <span className="label">Client:</span>
                    <span className="value">{project.client}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Duration:</span>
                    <span className="value">{project.duration}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Team Size:</span>
                    <span className="value">{project.team}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Category:</span>
                    <span className="value">{project.category}</span>
                  </div>
                </div>
              </div>

              <div className="sidebar-widget wow fadeInUp" data-wow-delay=".5s">
                <h4 className="widget-title">Technologies Used</h4>
                <div className="technologies-list">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="sidebar-widget wow fadeInUp" data-wow-delay=".7s">
                <h4 className="widget-title">Related Projects</h4>
                <div className="related-projects">
                  <div className="related-project">
                    <div className="project-img">
                      <Image 
                        src="/assets/images/project/project-2.webp" 
                        alt="Related Project" 
                        width={100}
                        height={80}
                      />
                    </div>
                    <div className="project-content">
                      <h6 className="project-title">
                        <Link href="/portfolio-details">E-commerce Platform Development</Link>
                      </h6>
                      <span className="project-category">Web Development</span>
                    </div>
                  </div>
                  <div className="related-project">
                    <div className="project-img">
                      <Image 
                        src="/assets/images/project/project-3.webp" 
                        alt="Related Project" 
                        width={100}
                        height={80}
                      />
                    </div>
                    <div className="project-content">
                      <h6 className="project-title">
                        <Link href="/portfolio-details">Mobile App Strategy</Link>
                      </h6>
                      <span className="project-category">Mobile Development</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sidebar-widget wow fadeInUp" data-wow-delay=".9s">
                <h4 className="widget-title">Get Similar Results</h4>
                <p className="widget-desc">
                  Ready to transform your business? Let's discuss how we can help you achieve similar results.
                </p>
                <Link href="/contact" className="tj-primary-btn">
                  <span className="btn-text">
                    <span>Start Your Project</span>
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
    </section>
  );
};

export default PortfolioDetails;
