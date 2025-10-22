import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import ShopDetails from '@/components/sections/ShopDetails';

const ShopDetailsPage: React.FC = () => {
  return (
    <Layout>
      <PageHeader
        title="Shop Details"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Shop', href: '/shop' },
          { label: 'Product Details', href: '#' }
        ]}
      />
      <ShopDetails />
    </Layout>
  );
};

export default ShopDetailsPage;
