import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import PortfolioDetails from '@/components/sections/PortfolioDetails';
import CtaSection from '@/components/sections/CtaSection';

const PortfolioDetailsPage: React.FC = () => {
  return (
    <Layout 
      title="Portfolio Details - Bexon Corporate Business"
      description="Explore our successful business consulting projects and case studies that demonstrate our expertise and results."
    >
      <div className="space-for-header"></div>
      <PageHeader 
        title="Portfolio Details"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Portfolio', href: '/portfolio' },
          { label: 'Portfolio Details', href: '/portfolio-details' }
        ]}
      />
      <PortfolioDetails />
      <CtaSection />
    </Layout>
  );
};

export default PortfolioDetailsPage;
