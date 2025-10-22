import React from 'react';
import Link from 'next/link';

const Custom537: React.FC = () => {
  return (
    <div className="error-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="error-content">
              <div className="error-icon">
                <i className="fa fa-exclamation-triangle" />
              </div>
              <h1>537</h1>
              <h2>Origin DNS Error</h2>
              <p>
                Cloudflare could not resolve the DNS name of the origin server. 
                This is usually a temporary condition.
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
                  <li>Try the request again in a few minutes</li>
                  <li>Contact us if the problem persists</li>
                  <li>Check our status page for updates</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom537;
