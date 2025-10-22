import React from 'react';
import Link from 'next/link';

const Custom408: React.FC = () => {
  return (
    <div className="error-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="error-content">
              <div className="error-icon">
                <i className="fa fa-clock-o" />
              </div>
              <h1>408</h1>
              <h2>Request Timeout</h2>
              <p>
                The server timed out waiting for the request. 
                This usually happens when the request takes too long to process.
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
                  <li>Try the request again</li>
                  <li>Check your internet connection</li>
                  <li>Contact us if the problem persists</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom408;
