import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import BlogGrid from '@/components/sections/BlogGrid';
import CtaSection from '@/components/sections/CtaSection';

const BlogPage: React.FC = () => {
  return (
    <Layout 
      title="Blog - Bexon Corporate Business"
      description="Stay updated with the latest business insights, industry trends, and expert advice from our consulting team."
    >
      <div className="space-for-header"></div>
      <PageHeader 
        title="Our Blog"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' }
        ]}
      />
      <BlogGrid />
      <CtaSection />
    </Layout>
  );
};

export default BlogPage;
