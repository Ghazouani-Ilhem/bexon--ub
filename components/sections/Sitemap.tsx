import React from 'react';
import Link from 'next/link';

const Sitemap: React.FC = () => {
  const sitemapData = {
    mainPages: [
      { title: 'Home', href: '/', description: 'Main landing page' },
      { title: 'About Us', href: '/about', description: 'Learn about our company' },
      { title: 'Services', href: '/service', description: 'Our service offerings' },
      { title: 'Portfolio', href: '/portfolio', description: 'Our work and projects' },
      { title: 'Blog', href: '/blog', description: 'Latest news and insights' },
      { title: 'Contact', href: '/contact', description: 'Get in touch with us' }
    ],
    servicePages: [
      { title: 'Web Development', href: '/service-details?id=web-development', description: 'Custom web solutions' },
      { title: 'Mobile App Development', href: '/service-details?id=mobile-development', description: 'iOS and Android apps' },
      { title: 'UI/UX Design', href: '/service-details?id=ui-ux-design', description: 'User experience design' },
      { title: 'Digital Marketing', href: '/service-details?id=digital-marketing', description: 'Online marketing strategies' },
      { title: 'E-commerce Solutions', href: '/service-details?id=ecommerce', description: 'Online store development' },
      { title: 'Cloud Services', href: '/service-details?id=cloud-services', description: 'Cloud infrastructure solutions' }
    ],
    portfolioPages: [
      { title: 'E-commerce Website', href: '/portfolio-details?id=ecommerce-website', description: 'Online shopping platform' },
      { title: 'Mobile Banking App', href: '/portfolio-details?id=banking-app', description: 'Financial mobile application' },
      { title: 'Corporate Website', href: '/portfolio-details?id=corporate-website', description: 'Business website design' },
      { title: 'SaaS Platform', href: '/portfolio-details?id=saas-platform', description: 'Software as a Service solution' },
      { title: 'Restaurant Website', href: '/portfolio-details?id=restaurant-website', description: 'Food delivery platform' },
      { title: 'Healthcare App', href: '/portfolio-details?id=healthcare-app', description: 'Medical appointment system' }
    ],
    blogPages: [
      { title: 'Web Development Trends 2024', href: '/blog-details?id=web-dev-trends-2024', description: 'Latest trends in web development' },
      { title: 'Mobile App Design Best Practices', href: '/blog-details?id=mobile-design-best-practices', description: 'Design guidelines for mobile apps' },
      { title: 'SEO Optimization Tips', href: '/blog-details?id=seo-optimization-tips', description: 'Search engine optimization guide' },
      { title: 'Cloud Computing Benefits', href: '/blog-details?id=cloud-computing-benefits', description: 'Advantages of cloud solutions' },
      { title: 'E-commerce Security', href: '/blog-details?id=ecommerce-security', description: 'Online store security measures' },
      { title: 'UI/UX Design Principles', href: '/blog-details?id=ui-ux-principles', description: 'User interface design fundamentals' }
    ],
    companyPages: [
      { title: 'Our Team', href: '/team', description: 'Meet our team members' },
      { title: 'Careers', href: '/careers', description: 'Job opportunities' },
      { title: 'Pricing', href: '/pricing', description: 'Service pricing plans' },
      { title: 'FAQ', href: '/faq', description: 'Frequently asked questions' },
      { title: 'History', href: '/history', description: 'Company history and milestones' }
    ],
    legalPages: [
      { title: 'Terms and Conditions', href: '/terms-and-conditions', description: 'Terms of service' },
      { title: 'Privacy Policy', href: '/privacy-policy', description: 'Data protection policy' },
      { title: 'Cookie Policy', href: '/cookie-policy', description: 'Cookie usage information' }
    ],
    shopPages: [
      { title: 'Shop', href: '/shop', description: 'Browse our products' },
      { title: 'Product Details', href: '/shop-details', description: 'Product information' },
      { title: 'Cart', href: '/cart', description: 'Shopping cart' },
      { title: 'Checkout', href: '/checkout', description: 'Complete your purchase' },
      { title: 'Wishlist', href: '/wishlist', description: 'Saved items' }
    ],
    userPages: [
      { title: 'Login', href: '/login', description: 'User login' },
      { title: 'Password Reset', href: '/password', description: 'Reset your password' }
    ]
  };

  return (
    <div className="sitemap-area">
      <div className="container">
        <div className="sitemap-header">
          <h1>Site Map</h1>
          <p>Find all the pages and content on our website organized by category.</p>
        </div>

        <div className="sitemap-content">
          <div className="row">
            <div className="col-lg-6">
              <div className="sitemap-section">
                <h2>Main Pages</h2>
                <ul className="sitemap-list">
                  {sitemapData.mainPages.map((page, index) => (
                    <li key={index}>
                      <Link href={page.href} className="sitemap-link">
                        <span className="page-title">{page.title}</span>
                        <span className="page-description">{page.description}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sitemap-section">
                <h2>Services</h2>
                <ul className="sitemap-list">
                  {sitemapData.servicePages.map((page, index) => (
                    <li key={index}>
                      <Link href={page.href} className="sitemap-link">
                        <span className="page-title">{page.title}</span>
                        <span className="page-description">{page.description}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sitemap-section">
                <h2>Portfolio</h2>
                <ul className="sitemap-list">
                  {sitemapData.portfolioPages.map((page, index) => (
                    <li key={index}>
                      <Link href={page.href} className="sitemap-link">
                        <span className="page-title">{page.title}</span>
                        <span className="page-description">{page.description}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="sitemap-section">
                <h2>Blog</h2>
                <ul className="sitemap-list">
                  {sitemapData.blogPages.map((page, index) => (
                    <li key={index}>
                      <Link href={page.href} className="sitemap-link">
                        <span className="page-title">{page.title}</span>
                        <span className="page-description">{page.description}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sitemap-section">
                <h2>Company</h2>
                <ul className="sitemap-list">
                  {sitemapData.companyPages.map((page, index) => (
                    <li key={index}>
                      <Link href={page.href} className="sitemap-link">
                        <span className="page-title">{page.title}</span>
                        <span className="page-description">{page.description}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sitemap-section">
                <h2>Legal</h2>
                <ul className="sitemap-list">
                  {sitemapData.legalPages.map((page, index) => (
                    <li key={index}>
                      <Link href={page.href} className="sitemap-link">
                        <span className="page-title">{page.title}</span>
                        <span className="page-description">{page.description}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="sitemap-section">
                <h2>Shop</h2>
                <ul className="sitemap-list">
                  {sitemapData.shopPages.map((page, index) => (
                    <li key={index}>
                      <Link href={page.href} className="sitemap-link">
                        <span className="page-title">{page.title}</span>
                        <span className="page-description">{page.description}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="sitemap-section">
                <h2>User Account</h2>
                <ul className="sitemap-list">
                  {sitemapData.userPages.map((page, index) => (
                    <li key={index}>
                      <Link href={page.href} className="sitemap-link">
                        <span className="page-title">{page.title}</span>
                        <span className="page-description">{page.description}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="sitemap-footer">
          <div className="search-box">
            <h3>Can't find what you're looking for?</h3>
            <p>Use our search function to find specific content on our website.</p>
            <div className="search-form">
              <input
                type="text"
                placeholder="Search our website..."
                className="search-input"
              />
              <button className="search-btn">
                <i className="fa fa-search" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
