import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import TeamSection from '@/components/sections/TeamSection';

const TeamPage: React.FC = () => {
  return (
    <Layout>
      <PageHeader
        title="Our Team"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Our Team', href: '#' }
        ]}
      />
      <TeamSection />
    </Layout>
  );
};

export default TeamPage;
