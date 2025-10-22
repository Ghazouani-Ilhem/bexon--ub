import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import HistorySection from '@/components/sections/HistorySection';
import CtaSection from '@/components/sections/CtaSection';

const HistoryPage: React.FC = () => {
  return (
    <Layout 
      title="Our History - Bexon Corporate Business"
      description="Learn about Bexon's journey from a small consulting firm to a leading business solutions provider."
    >
      <div className="space-for-header"></div>
      <PageHeader 
        title="Our History"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Our History', href: '/history' }
        ]}
      />
      <HistorySection />
      <CtaSection />
    </Layout>
  );
};

export default HistoryPage;
