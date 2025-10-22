import React from 'react';
import Link from 'next/link';

const HomeVariants: React.FC = () => {
  const homeVariants = [
    { id: 1, title: 'Home 1', href: '/', description: 'Main homepage' },
    { id: 2, title: 'Home 2', href: '/home2', description: 'Alternative layout' },
    { id: 3, title: 'Home 3', href: '/home3', description: 'Creative design' },
    { id: 4, title: 'Home 4', href: '/home4', description: 'Modern style' },
    { id: 5, title: 'Home 5', href: '/home5', description: 'Professional look' },
    { id: 6, title: 'Home 6', href: '/home6', description: 'Minimalist design' },
    { id: 7, title: 'Home 7', href: '/home7', description: 'Corporate style' },
    { id: 8, title: 'Home 8', href: '/home8', description: 'Business focused' },
    { id: 9, title: 'Home 9', href: '/home9', description: 'Creative business' },
    { id: 10, title: 'Home 10', href: '/home10', description: 'Advanced layout' }
  ];

  return (
    <div className="home-variants-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-header text-center">
              <h2>Home Page Variants</h2>
              <p>Choose from our collection of beautifully designed home page layouts</p>
            </div>
          </div>
        </div>
        <div className="row">
          {homeVariants.map((variant) => (
            <div key={variant.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="variant-card">
                <div className="variant-preview">
                  <div className="preview-image">
                    <img 
                      src={`/assets/images/home-variants/home-${variant.id}.jpg`} 
                      alt={variant.title}
                      className="img-fluid"
                    />
                  </div>
                  <div className="preview-overlay">
                    <Link href={variant.href} className="preview-btn">
                      <i className="fa fa-eye" />
                      View Live
                    </Link>
                  </div>
                </div>
                <div className="variant-info">
                  <h4>{variant.title}</h4>
                  <p>{variant.description}</p>
                  <Link href={variant.href} className="btn btn-primary btn-sm">
                    View Page
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeVariants;
