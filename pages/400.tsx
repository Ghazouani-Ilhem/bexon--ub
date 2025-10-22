import React from 'react';
import Link from 'next/link';

const Custom400: React.FC = () => {
  return (
    <div className="error-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="error-content">
              <div className="error-icon">
                <i className="fa fa-exclamation-triangle" />
              </div>
              <h1>400</h1>
              <h2>Bad Request</h2>
              <p>
                The request could not be understood by the server due to malformed syntax. 
                Please check your request and try again.
              </p>
              <div className="error-actions">
                <Link href="/" className="btn btn-primary">
                  <i className="fa fa-home" />
                  Go Home
                </Link>
                <button 
                  className="btn btn-outline"
                  onClick={() => window.history.back()}
                >
                  <i className="fa fa-arrow-left" />
                  Go Back
                </button>
              </div>
              <div className="error-help">
                <h3>What can you do?</h3>
                <ul>
                  <li>Check the URL for any typos</li>
                  <li>Go back to the previous page</li>
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

export default Custom400;
