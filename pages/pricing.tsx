import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import PricingSection from '@/components/sections/PricingSection';
import CtaSection from '@/components/sections/CtaSection';

const PricingPage: React.FC = () => {
  return (
    <Layout 
      title="Pricing - Bexon Corporate Business"
      description="Choose the perfect plan for your business consulting needs. Flexible pricing options to fit your budget and requirements."
    >
      <div className="space-for-header"></div>
      <PageHeader 
        title="Pricing Plans"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Pricing', href: '/pricing' }
        ]}
      />
      <PricingSection />
      <CtaSection />
    </Layout>
  );
};

export default PricingPage;
