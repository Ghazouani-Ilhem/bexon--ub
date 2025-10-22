import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import PortfolioGrid from '@/components/sections/PortfolioGrid';
import CtaSection from '@/components/sections/CtaSection';

const PortfolioPage: React.FC = () => {
  return (
    <Layout 
      title="Portfolio - Bexon Corporate Business"
      description="Explore our portfolio of successful business consulting projects and client success stories."
    >
      <div className="space-for-header"></div>
      <PageHeader 
        title="Our Portfolio"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Portfolio', href: '/portfolio' }
        ]}
      />
      <PortfolioGrid />
      <CtaSection />
    </Layout>
  );
};

export default PortfolioPage;
