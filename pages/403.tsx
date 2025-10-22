import React from 'react';
import Link from 'next/link';

const Custom403: React.FC = () => {
  return (
    <div className="error-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="error-content">
              <div className="error-icon">
                <i className="fa fa-ban" />
              </div>
              <h1>403</h1>
              <h2>Forbidden</h2>
              <p>
                You don't have permission to access this resource. 
                Please check your credentials or contact the administrator.
              </p>
              <div className="error-actions">
                <Link href="/" className="btn btn-primary">
                  <i className="fa fa-home" />
                  Go Home
                </Link>
                <Link href="/login" className="btn btn-outline">
                  <i className="fa fa-sign-in" />
                  Login
                </Link>
              </div>
              <div className="error-help">
                <h3>What can you do?</h3>
                <ul>
                  <li>Check if you're logged in with the correct account</li>
                  <li>Contact the administrator for access</li>
                  <li>Go back to the previous page</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom403;
