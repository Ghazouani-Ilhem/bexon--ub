import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import HomeVariants from '@/components/HomeVariants';

const HomeVariantsPage: React.FC = () => {
  return (
    <Layout>
      <PageHeader
        title="Home Page Variants"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Home Variants', href: '#' }
        ]}
      />
      <HomeVariants />
    </Layout>
  );
};

export default HomeVariantsPage;
