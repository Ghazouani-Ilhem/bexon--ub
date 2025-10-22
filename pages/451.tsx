import React from 'react';
import Link from 'next/link';

const Custom451: React.FC = () => {
  return (
    <div className="error-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="error-content">
              <div className="error-icon">
                <i className="fa fa-gavel" />
              </div>
              <h1>451</h1>
              <h2>Unavailable For Legal Reasons</h2>
              <p>
                The requested resource is unavailable due to legal reasons. 
                This may be due to censorship or legal restrictions.
              </p>
              <div className="error-actions">
                <Link href="/" className="btn btn-primary">
                  <i className="fa fa-home" />
                  Go Home
                </Link>
                <Link href="/contact" className="btn btn-outline">
                  <i className="fa fa-envelope" />
                  Contact Us
                </Link>
              </div>
              <div className="error-help">
                <h3>What can you do?</h3>
                <ul>
                  <li>Contact us for more information</li>
                  <li>Check our other available content</li>
                  <li>Visit our main page for alternative resources</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom451;
