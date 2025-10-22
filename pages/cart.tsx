import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import CartSection from '@/components/sections/CartSection';
import CtaSection from '@/components/sections/CtaSection';

const CartPage: React.FC = () => {
  return (
    <Layout 
      title="Shopping Cart - Bexon Corporate Business"
      description="Review your selected services and proceed to checkout to get started with your business consulting solutions."
    >
      <div className="space-for-header"></div>
      <PageHeader 
        title="Shopping Cart"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Cart', href: '/cart' }
        ]}
      />
      <CartSection />
      <CtaSection />
    </Layout>
  );
};

export default CartPage;
