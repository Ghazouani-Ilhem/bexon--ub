import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import CheckoutSection from '@/components/sections/CheckoutSection';
import CtaSection from '@/components/sections/CtaSection';

const CheckoutPage: React.FC = () => {
  return (
    <Layout 
      title="Checkout - Bexon Corporate Business"
      description="Complete your order and get started with your business consulting services."
    >
      <div className="space-for-header"></div>
      <PageHeader 
        title="Checkout"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Checkout', href: '/checkout' }
        ]}
      />
      <CheckoutSection />
      <CtaSection />
    </Layout>
  );
};

export default CheckoutPage;
