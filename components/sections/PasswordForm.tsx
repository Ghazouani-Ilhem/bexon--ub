import React, { useState } from 'react';
import Link from 'next/link';

const PasswordForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log('Password reset form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="tj-password-section section-gap">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <div className="password-form-wrapper wow fadeInUp" data-wow-delay=".3s">
              <div className="password-header text-center">
                <h2 className="password-title">Reset Your Password</h2>
                <p className="password-subtitle">
                  Enter your email address and we'll send you a link to reset your password.
                </p>
              </div>
              
              <form className="password-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                
                <button type="submit" className="tj-primary-btn w-100">
                  <span className="btn-text">
                    <span>Send Reset Link</span>
                  </span>
                  <span className="btn-icon">
                    <i className="tji-arrow-right-long"></i>
                  </span>
                </button>
              </form>
              
              <div className="password-footer text-center">
                <p className="password-footer-text">
                  Remember your password? <Link href="/login" className="login-link">Sign in here</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PasswordForm;
