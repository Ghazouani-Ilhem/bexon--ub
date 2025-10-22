import React from 'react';
import Link from 'next/link';

const Custom429: React.FC = () => {
  return (
    <div className="error-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="error-content">
              <div className="error-icon">
                <i className="fa fa-tachometer" />
              </div>
              <h1>429</h1>
              <h2>Too Many Requests</h2>
              <p>
                You have made too many requests in a short period of time. 
                Please wait a moment before trying again.
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
                  <li>Wait a few minutes before trying again</li>
                  <li>Reduce the frequency of your requests</li>
                  <li>Contact us if you need higher rate limits</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom429;
