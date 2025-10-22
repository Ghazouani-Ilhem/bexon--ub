import React from 'react';
import Link from 'next/link';

const Custom511: React.FC = () => {
  return (
    <div className="error-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="error-content">
              <div className="error-icon">
                <i className="fa fa-wifi" />
              </div>
              <h1>511</h1>
              <h2>Network Authentication Required</h2>
              <p>
                The client needs to authenticate to gain network access. 
                This is usually required for public Wi-Fi networks.
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
                  <li>Check your network connection</li>
                  <li>Authenticate with your network provider</li>
                  <li>Contact your network administrator</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom511;
