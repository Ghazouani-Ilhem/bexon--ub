import React from 'react';
import Link from 'next/link';

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

const CareersSection: React.FC = () => {
  const jobOpenings: JobOpening[] = [
    {
      id: '1',
      title: 'Senior Business Consultant',
      department: 'Consulting',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Lead strategic consulting projects and help clients achieve their business objectives.',
      requirements: [
        '5+ years of consulting experience',
        'MBA or equivalent degree',
        'Strong analytical skills',
        'Excellent communication skills'
      ]
    },
    {
      id: '2',
      title: 'Digital Transformation Specialist',
      department: 'Technology',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Help organizations navigate digital transformation and implement technology solutions.',
      requirements: [
        '3+ years of digital transformation experience',
        'Technical background preferred',
        'Project management skills',
        'Client-facing experience'
      ]
    },
    {
      id: '3',
      title: 'Marketing Strategy Manager',
      department: 'Marketing',
      location: 'Chicago, IL',
      type: 'Full-time',
      description: 'Develop and execute marketing strategies for our clients across various industries.',
      requirements: [
        '4+ years of marketing experience',
        'Strategic thinking abilities',
        'Data analysis skills',
        'Creative problem-solving'
      ]
    },
    {
      id: '4',
      title: 'Junior Consultant',
      department: 'Consulting',
      location: 'Boston, MA',
      type: 'Full-time',
      description: 'Support senior consultants in delivering high-quality business solutions.',
      requirements: [
        '1-2 years of business experience',
        'Bachelor\'s degree required',
        'Eager to learn and grow',
        'Team player mentality'
      ]
    }
  ];

  return (
    <section className="tj-careers-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading text-center">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                <i className="tji-box"></i>Join Our Team
              </span>
              <h2 className="sec-title title-anim">
                Build Your <span>Career</span> With Us
              </h2>
              <p className="sec-desc wow fadeInUp" data-wow-delay=".6s">
                We're looking for talented individuals who are passionate about helping businesses succeed. 
                Join our team and make a real impact.
              </p>
            </div>
          </div>
        </div>
        
        <div className="row row-gap-4">
          {jobOpenings.map((job, index) => (
            <div key={job.id} className="col-xl-6 col-lg-6">
              <div className="career-item wow fadeInUp" data-wow-delay={`${0.1 + index * 0.1}s`}>
                <div className="career-header">
                  <h4 className="title">{job.title}</h4>
                  <div className="career-meta">
                    <span className="department">{job.department}</span>
                    <span className="location">{job.location}</span>
                    <span className="type">{job.type}</span>
                  </div>
                </div>
                <div className="career-content">
                  <p className="description">{job.description}</p>
                  <div className="requirements">
                    <h6>Key Requirements:</h6>
                    <ul>
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="career-footer">
                  <Link href={`/careers/${job.id}`} className="tj-primary-btn">
                    <span className="btn-text">
                      <span>Apply Now</span>
                    </span>
                    <span className="btn-icon">
                      <i className="tji-arrow-right-long"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="row">
          <div className="col-12">
            <div className="careers-cta text-center wow fadeInUp" data-wow-delay=".8s">
              <h3>Don't See a Position That Fits?</h3>
              <p>We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.</p>
              <Link href="/contact" className="tj-secondary-btn">
                <span className="btn-text">
                  <span>Send Resume</span>
                </span>
                <span className="btn-icon">
                  <i className="tji-arrow-right-long"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
