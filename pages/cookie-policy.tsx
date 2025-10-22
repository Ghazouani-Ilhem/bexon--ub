import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import CookiePolicy from '@/components/sections/CookiePolicy';

const CookiePolicyPage: React.FC = () => {
  return (
    <Layout>
      <PageHeader
        title="Cookie Policy"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Cookie Policy', href: '#' }
        ]}
      />
      <CookiePolicy />
    </Layout>
  );
};

export default CookiePolicyPage;
