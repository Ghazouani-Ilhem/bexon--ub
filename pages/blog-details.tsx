import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import BlogDetails from '@/components/sections/BlogDetails';
import CtaSection from '@/components/sections/CtaSection';

const BlogDetailsPage: React.FC = () => {
  return (
    <Layout 
      title="Blog Details - Bexon Corporate Business"
      description="Read our latest insights on business strategy, digital transformation, and industry trends from our expert consulting team."
    >
      <div className="space-for-header"></div>
      <PageHeader 
        title="Blog Details"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'Blog Details', href: '/blog-details' }
        ]}
      />
      <BlogDetails />
      <CtaSection />
    </Layout>
  );
};

export default BlogDetailsPage;
