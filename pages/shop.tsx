import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import ShopGrid from '@/components/sections/ShopGrid';

const ShopPage: React.FC = () => {
  return (
    <Layout>
      <PageHeader
        title="Shop"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Shop', href: '#' }
        ]}
      />
      <ShopGrid />
    </Layout>
  );
};

export default ShopPage;
