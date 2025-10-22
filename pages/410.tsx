import React from 'react';
import Link from 'next/link';

const Custom410: React.FC = () => {
  return (
    <div className="error-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="error-content">
              <div className="error-icon">
                <i className="fa fa-trash" />
              </div>
              <h1>410</h1>
              <h2>Gone</h2>
              <p>
                The requested resource is no longer available and will not be available again. 
                This is a permanent condition.
              </p>
              <div className="error-actions">
                <Link href="/" className="btn btn-primary">
                  <i className="fa fa-home" />
                  Go Home
                </Link>
                <Link href="/sitemap" className="btn btn-outline">
                  <i className="fa fa-sitemap" />
                  View Sitemap
                </Link>
              </div>
              <div className="error-help">
                <h3>What can you do?</h3>
                <ul>
                  <li>Check our sitemap for available pages</li>
                  <li>Use our search function to find what you're looking for</li>
                  <li>Contact us if you need help finding specific content</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom410;
