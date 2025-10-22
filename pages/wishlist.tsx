import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import WishlistSection from '@/components/sections/WishlistSection';
import CtaSection from '@/components/sections/CtaSection';

const WishlistPage: React.FC = () => {
  return (
    <Layout 
      title="Wishlist - Bexon Corporate Business"
      description="View your saved services and solutions in your wishlist to easily access them later."
    >
      <div className="space-for-header"></div>
      <PageHeader 
        title="My Wishlist"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Wishlist', href: '/wishlist' }
        ]}
      />
      <WishlistSection />
      <CtaSection />
    </Layout>
  );
};

export default WishlistPage;
