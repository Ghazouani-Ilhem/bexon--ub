import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/sections/HeroSection';
import ChooseSection from '@/components/sections/ChooseSection';
import AboutSection from '@/components/sections/AboutSection';
import ClientSection from '@/components/sections/ClientSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import TeamSection from '@/components/sections/TeamSection';
import FaqSection from '@/components/sections/FaqSection';
import CtaSection from '@/components/sections/CtaSection';

const HomePage: React.FC = () => {
  return (
    <Layout 
      title="Bexon - Corporate Business Template"
      description="Developing personalize our customer journeys to increase satisfaction & loyalty of our expansion recognized by industry leaders."
    >
      <div className="space-for-header"></div>
      <HeroSection />
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

export default HomePage;
