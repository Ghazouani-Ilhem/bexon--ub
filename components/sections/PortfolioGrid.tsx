import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  href: string;
}

const PortfolioGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems: PortfolioItem[] = [
    {
      id: '1',
      title: 'Business Strategy Project',
      category: 'strategy',
      image: '/assets/images/project/project-1.webp',
      href: '/portfolio-details'
    },
    {
      id: '2',
      title: 'Digital Transformation',
      category: 'digital',
      image: '/assets/images/project/project-2.webp',
      href: '/portfolio-details'
    },
    {
      id: '3',
      title: 'Marketing Campaign',
      category: 'marketing',
      image: '/assets/images/project/project-3.webp',
      href: '/portfolio-details'
    },
    {
      id: '4',
      title: 'Process Optimization',
      category: 'strategy',
      image: '/assets/images/project/project-4.webp',
      href: '/portfolio-details'
    },
    {
      id: '5',
      title: 'Technology Integration',
      category: 'digital',
      image: '/assets/images/project/project-5.webp',
      href: '/portfolio-details'
    },
    {
      id: '6',
      title: 'Brand Development',
      category: 'marketing',
      image: '/assets/images/project/project-6.webp',
      href: '/portfolio-details'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'strategy', label: 'Strategy' },
    { key: 'digital', label: 'Digital' },
    { key: 'marketing', label: 'Marketing' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section className="tj-portfolio-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading text-center">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                <i className="tji-box"></i>Our Portfolio
              </span>
              <h2 className="sec-title title-anim">
                Success <span>Stories</span> & Case Studies
              </h2>
              <p className="sec-desc wow fadeInUp" data-wow-delay=".6s">
                Explore our portfolio of successful projects and see how we've helped businesses achieve their goals.
              </p>
            </div>
          </div>
        </div>
        
        {/* Filter Buttons */}
        <div className="row">
          <div className="col-12">
            <div className="portfolio-filter text-center wow fadeInUp" data-wow-delay=".8s">
              {categories.map((category) => (
                <button
                  key={category.key}
                  className={`filter-btn ${activeFilter === category.key ? 'active' : ''}`}
                  onClick={() => setActiveFilter(category.key)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="row row-gap-4">
          {filteredItems.map((item, index) => (
            <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
              <div className="portfolio-item wow fadeInUp" data-wow-delay={`${0.1 + index * 0.1}s`}>
                <div className="portfolio-img">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    width={400}
                    height={300}
                  />
                  <div className="portfolio-overlay">
                    <div className="portfolio-content">
                      <h4 className="title">
                        <Link href={item.href}>{item.title}</Link>
                      </h4>
                      <span className="category">{item.category}</span>
                      <Link href={item.href} className="portfolio-link">
                        <i className="tji-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
