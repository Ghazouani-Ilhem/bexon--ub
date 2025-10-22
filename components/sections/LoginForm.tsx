import React, { useState } from 'react';
import Link from 'next/link';

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <section className="tj-login-section section-gap">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <div className="login-form-wrapper wow fadeInUp" data-wow-delay=".3s">
              <div className="login-header text-center">
                <h2 className="login-title">Welcome Back</h2>
                <p className="login-subtitle">Sign in to your account to continue</p>
              </div>
              
              <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                
                <div className="form-options">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      id="remember"
                      name="remember"
                      checked={formData.remember}
                      onChange={handleChange}
                      className="form-check-input"
                    />
                    <label htmlFor="remember" className="form-check-label">
                      Remember me
                    </label>
                  </div>
                  <Link href="/password" className="forgot-password">
                    Forgot Password?
                  </Link>
                </div>
                
                <button type="submit" className="tj-primary-btn w-100">
                  <span className="btn-text">
                    <span>Sign In</span>
                  </span>
                  <span className="btn-icon">
                    <i className="tji-arrow-right-long"></i>
                  </span>
                </button>
              </form>
              
              <div className="login-footer text-center">
                <p className="login-footer-text">
                  Don't have an account? <Link href="/register" className="register-link">Sign up here</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
