import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import ServiceDetails from '@/components/sections/ServiceDetails';
import CtaSection from '@/components/sections/CtaSection';

const ServiceDetailsPage: React.FC = () => {
  return (
    <Layout 
      title="Service Details - Bexon Corporate Business"
      description="Learn more about our comprehensive business consulting services and how we can help your organization succeed."
    >
      <div className="space-for-header"></div>
      <PageHeader 
        title="Service Details"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/service' },
          { label: 'Service Details', href: '/service-details' }
        ]}
      />
      <ServiceDetails />
      <CtaSection />
    </Layout>
  );
};

export default ServiceDetailsPage;
