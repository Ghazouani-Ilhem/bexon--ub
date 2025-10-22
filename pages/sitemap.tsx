import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import Sitemap from '@/components/sections/Sitemap';

const SitemapPage: React.FC = () => {
  return (
    <Layout>
      <PageHeader
        title="Site Map"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Site Map', href: '#' }
        ]}
      />
      <Sitemap />
    </Layout>
  );
};

export default SitemapPage;
