import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Breadcrumb {
  label: string;
  href: string;
}

interface PageHeaderProps {
  title: string;
  breadcrumbs: Breadcrumb[];
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  breadcrumbs, 
  backgroundImage = '/assets/images/bg/pheader-bg.webp' 
}) => {
  return (
    <section 
      className="tj-page-header section-gap-x" 
      data-bg-image={backgroundImage}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tj-page-header-content text-center">
              <h1 className="tj-page-title">{title}</h1>
              <div className="tj-page-link">
                {breadcrumbs.map((breadcrumb, index) => (
                  <React.Fragment key={index}>
                    <span>
                      {index === 0 ? <i className="tji-home"></i> : <i className="tji-arrow-right"></i>}
                    </span>
                    <span>
                      {index === breadcrumbs.length - 1 ? (
                        <span>{breadcrumb.label}</span>
                      ) : (
                        <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
                      )}
                    </span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div 
        className="page-header-overlay" 
        data-bg-image="/assets/images/shape/pheader-overlay.webp"
      ></div>
    </section>
  );
};

export default PageHeader;
