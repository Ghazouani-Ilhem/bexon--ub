import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TeamDetails: React.FC = () => {
  const teamMember = {
    name: 'Eade Marren',
    position: 'Chief Executive Officer',
    image: '/assets/images/team/team-1.webp',
    email: 'eade.marren@bexon.com',
    phone: '+1 (009) 544-7818',
    bio: 'Eade Marren is a seasoned business executive with over 15 years of experience in strategic consulting and corporate leadership. He has successfully led numerous transformation projects for Fortune 500 companies and startups alike.',
    expertise: [
      'Strategic Planning',
      'Business Transformation',
      'Leadership Development',
      'Change Management',
      'Digital Strategy',
      'Operations Excellence'
    ],
    education: [
      'MBA in Business Administration - Harvard Business School',
      'Bachelor of Science in Engineering - MIT',
      'Certified Management Consultant (CMC)',
      'PMP Certification'
    ],
    experience: [
      '15+ years in business consulting',
      'Led 100+ successful projects',
      'Former VP at McKinsey & Company',
      'Advisory board member for 5 startups'
    ],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/eade-marren',
      twitter: 'https://x.com/eademarren',
      facebook: 'https://www.facebook.com/eademarren'
    }
  };

  return (
    <section className="tj-team-details-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-5">
            <div className="team-member-card wow fadeInUp" data-wow-delay=".3s">
              <div className="member-img">
                <Image 
                  src={teamMember.image} 
                  alt={teamMember.name} 
                  width={400}
                  height={500}
                />
              </div>
              <div className="member-info">
                <h3 className="name">{teamMember.name}</h3>
                <span className="position">{teamMember.position}</span>
                <div className="contact-info">
                  <div className="contact-item">
                    <i className="tji-envelop"></i>
                    <span>{teamMember.email}</span>
                  </div>
                  <div className="contact-item">
                    <i className="tji-phone"></i>
                    <span>{teamMember.phone}</span>
                  </div>
                </div>
                <div className="social-links">
                  <a href={teamMember.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href={teamMember.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href={teamMember.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-xl-8 col-lg-7">
            <div className="team-member-details">
              <div className="member-bio wow fadeInUp" data-wow-delay=".5s">
                <h3 className="section-title">About {teamMember.name}</h3>
                <p className="bio-text">{teamMember.bio}</p>
                <p className="bio-text">
                  Throughout his career, Eade has been instrumental in driving growth and innovation 
                  across various industries. His expertise in strategic planning and business 
                  transformation has helped numerous organizations achieve their goals and exceed 
                  expectations.
                </p>
              </div>

              <div className="member-expertise wow fadeInUp" data-wow-delay=".7s">
                <h4 className="section-title">Areas of Expertise</h4>
                <div className="expertise-grid">
                  {teamMember.expertise.map((skill, index) => (
                    <div key={index} className="expertise-item">
                      <i className="tji-check"></i>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="member-education wow fadeInUp" data-wow-delay=".9s">
                <h4 className="section-title">Education & Certifications</h4>
                <ul className="education-list">
                  {teamMember.education.map((edu, index) => (
                    <li key={index}>
                      <i className="tji-arrow-right"></i>
                      {edu}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="member-experience wow fadeInUp" data-wow-delay="1.1s">
                <h4 className="section-title">Professional Experience</h4>
                <ul className="experience-list">
                  {teamMember.experience.map((exp, index) => (
                    <li key={index}>
                      <i className="tji-arrow-right"></i>
                      {exp}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="member-cta wow fadeInUp" data-wow-delay="1.3s">
                <Link href="/contact" className="tj-primary-btn">
                  <span className="btn-text">
                    <span>Schedule a Consultation</span>
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

export default TeamDetails;
