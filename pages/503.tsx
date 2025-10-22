import React from 'react';
import Link from 'next/link';

const Custom503: React.FC = () => {
  return (
    <div className="error-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="error-content">
              <div className="error-icon">
                <i className="fa fa-cog fa-spin" />
              </div>
              <h1>503</h1>
              <h2>Service Unavailable</h2>
              <p>
                Our service is temporarily unavailable due to maintenance or high traffic. 
                Please try again in a few moments.
              </p>
              <div className="error-actions">
                <Link href="/" className="btn btn-primary">
                  <i className="fa fa-home" />
                  Go Home
                </Link>
                <button 
                  className="btn btn-outline"
                  onClick={() => window.location.reload()}
                >
                  <i className="fa fa-refresh" />
                  Try Again
                </button>
              </div>
              <div className="error-help">
                <h3>What can you do?</h3>
                <ul>
                  <li>Wait a few minutes and try again</li>
                  <li>Check our status page for updates</li>
                  <li>Contact us if the issue persists</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom503;
