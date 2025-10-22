import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TeamMember } from '@/types';

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Eade Marren',
      position: 'Chief Executive',
      image: '/assets/images/team/team-1.webp',
      email: 'info@bexon.com',
      socialLinks: {
        facebook: 'https://www.facebook.com/',
        instagram: 'https://www.instagram.com/',
        twitter: 'https://x.com/',
        linkedin: 'https://www.linkedin.com/'
      }
    },
    {
      id: '2',
      name: 'Savannah Ngueen',
      position: 'Operations Head',
      image: '/assets/images/team/team-2.webp',
      email: 'info@bexon.com',
      socialLinks: {
        facebook: 'https://www.facebook.com/',
        instagram: 'https://www.instagram.com/',
        twitter: 'https://x.com/',
        linkedin: 'https://www.linkedin.com/'
      }
    },
    {
      id: '3',
      name: 'Kristin Watson',
      position: 'Marketing Lead',
      image: '/assets/images/team/team-3.webp',
      email: 'info@bexon.com',
      socialLinks: {
        facebook: 'https://www.facebook.com/',
        instagram: 'https://www.instagram.com/',
        twitter: 'https://x.com/',
        linkedin: 'https://www.linkedin.com/'
      }
    },
    {
      id: '4',
      name: 'Darlene Robertson',
      position: 'Business Director',
      image: '/assets/images/team/team-4.webp',
      email: 'info@bexon.com',
      socialLinks: {
        facebook: 'https://www.facebook.com/',
        instagram: 'https://www.instagram.com/',
        twitter: 'https://x.com/',
        linkedin: 'https://www.linkedin.com/'
      }
    }
  ];

  return (
    <section className="tj-team-section-3 section-gap section-gap-x">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading text-center">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                <i className="tji-box"></i> Meet Our Team
              </span>
              <h2 className="sec-title title-anim">
                Success <span>Stories</span> Fuel our Innovation.
              </h2>
            </div>
          </div>
        </div>
        <div className="row leftSwipeWrap">
          {teamMembers.map((member) => (
            <div key={member.id} className="col-lg-3 col-sm-6">
              <div className="team-item left-swipe">
                <div className="team-img">
                  <div className="team-img-inner">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      width={300}
                      height={350}
                    />
                  </div>
                  <div className="social-links">
                    <ul>
                      <li>
                        <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                          <i className="fa-brands fa-x-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h4 className="title">
                    <Link href="/team-details">{member.name}</Link>
                  </h4>
                  <span className="designation">{member.position}</span>
                  <a className="mail-at" href={`mailto:${member.email}`}>
                    <i className="tji-at"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-shape-1">
        <Image src="/assets/images/shape/pattern-2.svg" alt="Pattern" width={200} height={200} />
      </div>
      <div className="bg-shape-2">
        <Image src="/assets/images/shape/pattern-3.svg" alt="Pattern" width={200} height={200} />
      </div>
    </section>
  );
};

export default TeamSection;
