import React, { useState, useEffect } from 'react';

const Maintenance: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [email, setEmail] = useState('');

  // Set maintenance end date (2 hours from now)
  const maintenanceEndDate = new Date();
  maintenanceEndDate.setHours(maintenanceEndDate.getHours() + 2);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = maintenanceEndDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Email submitted:', email);
      // Handle email notification logic here
      setEmail('');
    }
  };

  return (
    <div className="maintenance-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="maintenance-content">
              <div className="maintenance-header">
                <div className="maintenance-icon">
                  <i className="fa fa-cog fa-spin" />
                </div>
                <h1>We're Under Maintenance</h1>
                <p className="subtitle">We're currently performing scheduled maintenance</p>
                <p className="description">
                  Our website is temporarily unavailable while we perform important updates and improvements. 
                  We apologize for any inconvenience and appreciate your patience.
                </p>
              </div>

              <div className="maintenance-timer">
                <h3>Expected to be back in:</h3>
                <div className="timer-display">
                  <div className="timer-item">
                    <div className="timer-number">{timeLeft.hours}</div>
                    <div className="timer-label">Hours</div>
                  </div>
                  <div className="timer-item">
                    <div className="timer-number">{timeLeft.minutes}</div>
                    <div className="timer-label">Minutes</div>
                  </div>
                  <div className="timer-item">
                    <div className="timer-number">{timeLeft.seconds}</div>
                    <div className="timer-label">Seconds</div>
                  </div>
                </div>
              </div>

              <div className="maintenance-info">
                <h3>What We're Doing</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <div className="info-icon">
                      <i className="fa fa-server" />
                    </div>
                    <h4>Server Updates</h4>
                    <p>Upgrading our server infrastructure for better performance</p>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">
                      <i className="fa fa-shield" />
                    </div>
                    <h4>Security Enhancements</h4>
                    <p>Implementing latest security measures to protect your data</p>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">
                      <i className="fa fa-rocket" />
                    </div>
                    <h4>Performance Optimization</h4>
                    <p>Improving website speed and user experience</p>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">
                      <i className="fa fa-bug" />
                    </div>
                    <h4>Bug Fixes</h4>
                    <p>Resolving known issues and improving stability</p>
                  </div>
                </div>
              </div>

              <div className="maintenance-notification">
                <h3>Get Notified When We're Back</h3>
                <p>We'll send you an email as soon as our website is back online.</p>
                <form onSubmit={handleEmailSubmit} className="notification-form">
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="email-input"
                      required
                    />
                    <button type="submit" className="notify-btn">
                      Notify Me
                    </button>
                  </div>
                </form>
                <p className="privacy-note">
                  We respect your privacy. We'll only send you a notification when we're back online.
                </p>
              </div>

              <div className="maintenance-contact">
                <h3>Need Immediate Assistance?</h3>
                <p>If you have an urgent matter, please contact us directly:</p>
                <div className="contact-options">
                  <div className="contact-item">
                    <i className="fa fa-envelope" />
                    <div className="contact-details">
                      <h4>Email Support</h4>
                      <p>support@bexon.com</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="fa fa-phone" />
                    <div className="contact-details">
                      <h4>Phone Support</h4>
                      <p>+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="fa fa-comments" />
                    <div className="contact-details">
                      <h4>Live Chat</h4>
                      <p>Available 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="maintenance-status">
                <h3>Maintenance Status</h3>
                <div className="status-timeline">
                  <div className="status-item completed">
                    <div className="status-icon">
                      <i className="fa fa-check" />
                    </div>
                    <div className="status-content">
                      <h4>Database Backup</h4>
                      <p>Completed - All data safely backed up</p>
                    </div>
                  </div>
                  <div className="status-item in-progress">
                    <div className="status-icon">
                      <i className="fa fa-cog fa-spin" />
                    </div>
                    <div className="status-content">
                      <h4>Server Updates</h4>
                      <p>In Progress - Upgrading server infrastructure</p>
                    </div>
                  </div>
                  <div className="status-item pending">
                    <div className="status-icon">
                      <i className="fa fa-clock" />
                    </div>
                    <div className="status-content">
                      <h4>Testing & Verification</h4>
                      <p>Pending - Will begin after server updates</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="maintenance-footer">
                <p>
                  Thank you for your patience. We're working hard to bring you an improved experience. 
                  Check back soon!
                </p>
                <div className="social-links">
                  <a href="#" className="social-link">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#" className="social-link">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#" className="social-link">
                    <i className="fa fa-instagram" />
                  </a>
                  <a href="#" className="social-link">
                    <i className="fa fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
