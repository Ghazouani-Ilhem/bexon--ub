import React from 'react';
import Link from 'next/link';

const Custom422: React.FC = () => {
  return (
    <div className="error-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="error-content">
              <div className="error-icon">
                <i className="fa fa-exclamation-circle" />
              </div>
              <h1>422</h1>
              <h2>Unprocessable Entity</h2>
              <p>
                The request was well-formed but contains semantic errors. 
                Please check your input and try again.
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
                  <li>Check your input for any errors</li>
                  <li>Make sure all required fields are filled</li>
                  <li>Contact us if you need help with the form</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom422;
