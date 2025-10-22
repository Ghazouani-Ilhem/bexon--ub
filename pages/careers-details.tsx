import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import CareersDetails from '@/components/sections/CareersDetails';
import CtaSection from '@/components/sections/CtaSection';

const CareersDetailsPage: React.FC = () => {
  return (
    <Layout 
      title="Careers Details - Bexon Corporate Business"
      description="Join our team of business consulting experts and help us deliver exceptional results for our clients."
    >
      <div className="space-for-header"></div>
      <PageHeader 
        title="Careers Details"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Careers', href: '/careers' },
          { label: 'Careers Details', href: '/careers-details' }
        ]}
      />
      <CareersDetails />
      <CtaSection />
    </Layout>
  );
};

export default CareersDetailsPage;
