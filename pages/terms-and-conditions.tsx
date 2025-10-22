import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import TermsAndConditions from '@/components/sections/TermsAndConditions';
import CtaSection from '@/components/sections/CtaSection';

const TermsAndConditionsPage: React.FC = () => {
  return (
    <Layout 
      title="Terms and Conditions - Bexon Corporate Business"
      description="Read our terms and conditions to understand the terms of service for using our business consulting services."
    >
      <div className="space-for-header"></div>
      <PageHeader 
        title="Terms and Conditions"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Terms and Conditions', href: '/terms-and-conditions' }
        ]}
      />
      <TermsAndConditions />
      <CtaSection />
    </Layout>
  );
};

export default TermsAndConditionsPage;
