import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import PrivacyPolicy from '@/components/sections/PrivacyPolicy';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <Layout>
      <PageHeader
        title="Privacy Policy"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Privacy Policy', href: '#' }
        ]}
      />
      <PrivacyPolicy />
    </Layout>
  );
};

export default PrivacyPolicyPage;
