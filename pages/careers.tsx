import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import CareersSection from '@/components/sections/CareersSection';
import CtaSection from '@/components/sections/CtaSection';

const CareersPage: React.FC = () => {
  return (
    <Layout 
      title="Careers - Bexon Corporate Business"
      description="Join our team of business consulting experts and help us deliver exceptional results for our clients."
    >
      <div className="space-for-header"></div>
      <PageHeader 
        title="Join Our Team"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Careers', href: '/careers' }
        ]}
      />
      <CareersSection />
      <CtaSection />
    </Layout>
  );
};

export default CareersPage;
