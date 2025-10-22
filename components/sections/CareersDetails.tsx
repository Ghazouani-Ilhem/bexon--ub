import React from 'react';
import Link from 'next/link';

const CareersDetails: React.FC = () => {
  const job = {
    title: 'Senior Business Consultant',
    department: 'Consulting',
    location: 'New York, NY',
    type: 'Full-time',
    experience: '5+ years',
    salary: '$80,000 - $120,000',
    description: 'We are seeking a highly motivated Senior Business Consultant to join our team. You will work with clients to develop and implement strategic solutions that drive business growth and operational excellence.',
    responsibilities: [
      'Lead strategic consulting projects for clients across various industries',
      'Develop comprehensive business strategies and implementation plans',
      'Conduct business analysis and identify improvement opportunities',
      'Collaborate with cross-functional teams to deliver solutions',
      'Present findings and recommendations to senior leadership',
      'Mentor junior consultants and contribute to team development',
      'Build and maintain strong client relationships',
      'Stay current with industry trends and best practices'
    ],
    requirements: [
      'Bachelor\'s degree in Business, Economics, or related field',
      'MBA or equivalent advanced degree preferred',
      '5+ years of consulting experience',
      'Strong analytical and problem-solving skills',
      'Excellent communication and presentation abilities',
      'Proven track record of delivering results',
      'Experience with project management methodologies',
      'Ability to work independently and in teams'
    ],
    benefits: [
      'Competitive salary and performance bonuses',
      'Comprehensive health, dental, and vision insurance',
      '401(k) retirement plan with company matching',
      'Flexible work arrangements and remote work options',
      'Professional development and training opportunities',
      'Generous paid time off and holidays',
      'Company-sponsored events and team building activities',
      'Career advancement opportunities'
    ],
    applicationProcess: [
      'Submit your resume and cover letter',
      'Complete our online assessment',
      'Initial phone screening with HR',
      'Technical interview with the team lead',
      'Final interview with senior management',
      'Reference checks and background verification',
      'Job offer and onboarding'
    ]
  };

  return (
    <section className="tj-careers-details-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div className="career-details-content">
              <div className="career-header wow fadeInUp" data-wow-delay=".3s">
                <h1 className="career-title">{job.title}</h1>
                <div className="career-meta">
                  <span className="department">{job.department}</span>
                  <span className="location">{job.location}</span>
                  <span className="type">{job.type}</span>
                  <span className="experience">{job.experience}</span>
                </div>
                <div className="career-salary">
                  <span className="salary-label">Salary Range:</span>
                  <span className="salary-amount">{job.salary}</span>
                </div>
              </div>

              <div className="career-description wow fadeInUp" data-wow-delay=".5s">
                <h3 className="section-title">Job Description</h3>
                <p className="desc">{job.description}</p>
              </div>

              <div className="career-responsibilities wow fadeInUp" data-wow-delay=".7s">
                <h3 className="section-title">Key Responsibilities</h3>
                <ul className="responsibilities-list">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index}>
                      <i className="tji-arrow-right"></i>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="career-requirements wow fadeInUp" data-wow-delay=".9s">
                <h3 className="section-title">Requirements</h3>
                <ul className="requirements-list">
                  {job.requirements.map((requirement, index) => (
                    <li key={index}>
                      <i className="tji-arrow-right"></i>
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="career-benefits wow fadeInUp" data-wow-delay="1.1s">
                <h3 className="section-title">Benefits & Perks</h3>
                <ul className="benefits-list">
                  {job.benefits.map((benefit, index) => (
                    <li key={index}>
                      <i className="tji-check"></i>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="career-process wow fadeInUp" data-wow-delay="1.3s">
                <h3 className="section-title">Application Process</h3>
                <div className="process-steps">
                  {job.applicationProcess.map((step, index) => (
                    <div key={index} className="process-step">
                      <div className="step-number">{index + 1}</div>
                      <div className="step-content">
                        <p>{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-xl-4 col-lg-5">
            <div className="career-sidebar">
              <div className="sidebar-widget wow fadeInUp" data-wow-delay=".3s">
                <h4 className="widget-title">Apply Now</h4>
                <p className="widget-desc">
                  Ready to join our team? Submit your application and take the next step in your career.
                </p>
                <Link href="/contact" className="tj-primary-btn">
                  <span className="btn-text">
                    <span>Apply for this Position</span>
                  </span>
                  <span className="btn-icon">
                    <i className="tji-arrow-right-long"></i>
                  </span>
                </Link>
              </div>

              <div className="sidebar-widget wow fadeInUp" data-wow-delay=".5s">
                <h4 className="widget-title">Job Details</h4>
                <div className="job-details">
                  <div className="detail-item">
                    <span className="label">Department:</span>
                    <span className="value">{job.department}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Location:</span>
                    <span className="value">{job.location}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Type:</span>
                    <span className="value">{job.type}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Experience:</span>
                    <span className="value">{job.experience}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Salary:</span>
                    <span className="value">{job.salary}</span>
                  </div>
                </div>
              </div>

              <div className="sidebar-widget wow fadeInUp" data-wow-delay=".7s">
                <h4 className="widget-title">Related Positions</h4>
                <div className="related-positions">
                  <div className="position-item">
                    <h6 className="position-title">
                      <Link href="/careers-details">Digital Transformation Specialist</Link>
                    </h6>
                    <span className="position-location">San Francisco, CA</span>
                  </div>
                  <div className="position-item">
                    <h6 className="position-title">
                      <Link href="/careers-details">Marketing Strategy Manager</Link>
                    </h6>
                    <span className="position-location">Chicago, IL</span>
                  </div>
                  <div className="position-item">
                    <h6 className="position-title">
                      <Link href="/careers-details">Junior Consultant</Link>
                    </h6>
                    <span className="position-location">Boston, MA</span>
                  </div>
                </div>
              </div>

              <div className="sidebar-widget wow fadeInUp" data-wow-delay=".9s">
                <h4 className="widget-title">Company Culture</h4>
                <p className="widget-desc">
                  We foster a collaborative, innovative environment where every team member can grow and make a real impact.
                </p>
                <Link href="/about" className="tj-secondary-btn">
                  <span className="btn-text">
                    <span>Learn More About Us</span>
                  </span>
                  <span className="btn-icon">
                    <i className="tji-arrow-right-long"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersDetails;
