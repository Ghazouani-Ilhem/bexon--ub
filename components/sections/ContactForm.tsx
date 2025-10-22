import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const subjects = [
    { value: '0', label: 'Chose a option' },
    { value: '1', label: 'Business Strategy' },
    { value: '2', label: 'Customer Experience' },
    { value: '3', label: 'Sustainability and ESG' },
    { value: '4', label: 'Training and Development' },
    { value: '5', label: 'IT Support & Maintenance' },
    { value: '6', label: 'Marketing Strategy' }
  ];

  return (
    <section className="tj-contact-section-2 section-bottom-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-form wow fadeInUp" data-wow-delay=".1s">
              <h3 className="title">Feel Free to Get in Touch or Visit our Location.</h3>
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-input">
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <label className="cf-label">Full Name <span>*</span></label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-input">
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <label className="cf-label">Email Address <span>*</span></label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-input">
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                      <label className="cf-label">Phone number <span>*</span></label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-input">
                      <div className="tj-nice-select-box">
                        <div className="tj-select">
                          <select 
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                          >
                            {subjects.map((subject) => (
                              <option key={subject.value} value={subject.value}>
                                {subject.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-input message-input">
                      <textarea 
                        name="message" 
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                      <label className="cf-label">Type message <span>*</span></label>
                    </div>
                  </div>
                  <div className="submit-btn">
                    <button className="tj-primary-btn" type="submit">
                      <span className="btn-text">
                        <span>Submit Now</span>
                      </span>
                      <span className="btn-icon">
                        <i className="tji-arrow-right-long"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="map-area wow fadeInUp" data-wow-delay=".3s">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d316440.5712687838!2d-74.01091796224334!3d40.67186885683901!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1745918398047!5m2!1sen!2sbd"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
