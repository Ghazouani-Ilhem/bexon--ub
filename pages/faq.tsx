import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import FaqSection from '@/components/sections/FaqSection';
import CtaSection from '@/components/sections/CtaSection';

const FaqPage: React.FC = () => {
  return (
    <Layout 
      title="FAQ - Bexon Corporate Business"
      description="Find answers to frequently asked questions about our business consulting services and solutions."
    >
      <div className="space-for-header"></div>
      <PageHeader 
        title="Frequently Asked Questions"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'FAQ', href: '/faq' }
        ]}
      />
      <FaqSection />
      <CtaSection />
    </Layout>
  );
};

export default FaqPage;
