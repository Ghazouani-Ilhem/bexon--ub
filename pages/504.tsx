import React from 'react';
import Link from 'next/link';

const Custom504: React.FC = () => {
  return (
    <div className="error-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="error-content">
              <div className="error-icon">
                <i className="fa fa-clock-o" />
              </div>
              <h1>504</h1>
              <h2>Gateway Timeout</h2>
              <p>
                The server did not receive a timely response from an upstream server. 
                This is usually a temporary issue that will resolve itself.
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
                  <li>Wait a moment and try again</li>
                  <li>Check your internet connection</li>
                  <li>Contact us if the problem continues</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom504;
