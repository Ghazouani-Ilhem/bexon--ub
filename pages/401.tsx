import React from 'react';
import Link from 'next/link';

const Custom401: React.FC = () => {
  return (
    <div className="error-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="error-content">
              <div className="error-icon">
                <i className="fa fa-lock" />
              </div>
              <h1>401</h1>
              <h2>Unauthorized</h2>
              <p>
                You need to be authenticated to access this resource. 
                Please log in with your credentials.
              </p>
              <div className="error-actions">
                <Link href="/login" className="btn btn-primary">
                  <i className="fa fa-sign-in" />
                  Login
                </Link>
                <Link href="/" className="btn btn-outline">
                  <i className="fa fa-home" />
                  Go Home
                </Link>
              </div>
              <div className="error-help">
                <h3>What can you do?</h3>
                <ul>
                  <li>Log in with your account credentials</li>
                  <li>Create a new account if you don't have one</li>
                  <li>Contact support if you're having trouble logging in</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom401;
