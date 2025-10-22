import React, { useState, useEffect } from 'react';

const ComingSoon: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [email, setEmail] = useState('');

  // Set launch date (30 days from now)
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

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
      // Handle email subscription logic here
      setEmail('');
    }
  };

  return (
    <div className="coming-soon-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="coming-soon-content">
              <div className="coming-soon-header">
                <h1>Coming Soon</h1>
                <p className="subtitle">We're working hard to bring you something amazing!</p>
                <p className="description">
                  Our new website is under construction and will be launching soon. 
                  Stay tuned for exciting updates and new features.
                </p>
              </div>

              <div className="countdown-timer">
                <div className="timer-item">
                  <div className="timer-number">{timeLeft.days}</div>
                  <div className="timer-label">Days</div>
                </div>
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

              <div className="coming-soon-features">
                <h3>What to Expect</h3>
                <div className="features-grid">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fa fa-rocket" />
                    </div>
                    <h4>Enhanced Performance</h4>
                    <p>Faster loading times and improved user experience</p>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fa fa-mobile" />
                    </div>
                    <h4>Mobile Optimized</h4>
                    <p>Fully responsive design for all devices</p>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fa fa-shield" />
                    </div>
                    <h4>Enhanced Security</h4>
                    <p>Advanced security measures to protect your data</p>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fa fa-cog" />
                    </div>
                    <h4>New Features</h4>
                    <p>Exciting new functionality and tools</p>
                  </div>
                </div>
              </div>

              <div className="email-notification">
                <h3>Get Notified</h3>
                <p>Be the first to know when we launch! Enter your email address below.</p>
                <form onSubmit={handleEmailSubmit} className="email-form">
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
                  We respect your privacy. We'll only send you updates about our launch.
                </p>
              </div>

              <div className="social-links">
                <h4>Follow Us</h4>
                <div className="social-icons">
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
                  <a href="#" className="social-link">
                    <i className="fa fa-youtube" />
                  </a>
                </div>
              </div>

              <div className="contact-info">
                <h4>Need Help?</h4>
                <p>If you have any questions or need assistance, please don't hesitate to contact us.</p>
                <div className="contact-details">
                  <div className="contact-item">
                    <i className="fa fa-envelope" />
                    <span>info@bexon.com</span>
                  </div>
                  <div className="contact-item">
                    <i className="fa fa-phone" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
