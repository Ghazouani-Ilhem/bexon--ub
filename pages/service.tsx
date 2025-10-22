import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import ServiceGrid from '@/components/sections/ServiceGrid';
import CtaSection from '@/components/sections/CtaSection';

const ServicePage: React.FC = () => {
  return (
    <Layout 
      title="Services - Bexon Corporate Business"
      description="Discover our comprehensive business consulting services including strategy development, customer experience solutions, and more."
    >
      <div className="space-for-header"></div>
      <PageHeader 
        title="Our Services"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/service' }
        ]}
      />
      <ServiceGrid />
      <CtaSection />
    </Layout>
  );
};

export default ServicePage;
