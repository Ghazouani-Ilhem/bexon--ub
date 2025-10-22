import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import BlogRightSidebar from '@/components/sections/BlogRightSidebar';
import CtaSection from '@/components/sections/CtaSection';

const BlogRightSidebarPage: React.FC = () => {
  return (
    <Layout 
      title="Blog Right Sidebar - Bexon Corporate Business"
      description="Stay updated with the latest business insights, industry trends, and expert advice from our consulting team."
    >
      <div className="space-for-header"></div>
      <PageHeader 
        title="Blog Right Sidebar"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog Right Sidebar', href: '/blog-right-sidebar' }
        ]}
      />
      <BlogRightSidebar />
      <CtaSection />
    </Layout>
  );
};

export default BlogRightSidebarPage;
