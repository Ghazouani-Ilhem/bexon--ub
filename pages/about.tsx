import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import ChooseSection from '@/components/sections/ChooseSection';
import AboutSection from '@/components/sections/AboutSection';
import ClientSection from '@/components/sections/ClientSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import TeamSection from '@/components/sections/TeamSection';
import FaqSection from '@/components/sections/FaqSection';
import CtaSection from '@/components/sections/CtaSection';

const AboutPage: React.FC = () => {
  return (
    <Layout 
      title="About Us - Bexon Corporate Business"
      description="Learn about Bexon's mission to empower businesses through innovative solutions and exceptional service. Discover our team, values, and commitment to excellence."
    >
      <div className="space-for-header"></div>
      <PageHeader 
        title="About Us"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about' }
        ]}
      />
      <ChooseSection />
      <AboutSection />
      <ClientSection />
      <TestimonialSection />
      <TeamSection />
      <FaqSection />
      <CtaSection />
    </Layout>
  );
};

export default AboutPage;
