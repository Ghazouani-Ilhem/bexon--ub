import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import TeamDetails from '@/components/sections/TeamDetails';
import CtaSection from '@/components/sections/CtaSection';

const TeamDetailsPage: React.FC = () => {
  return (
    <Layout 
      title="Team Details - Bexon Corporate Business"
      description="Meet our experienced team members and learn about their expertise in business consulting and strategy development."
    >
      <div className="space-for-header"></div>
      <PageHeader 
        title="Team Details"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Team', href: '/team' },
          { label: 'Team Details', href: '/team-details' }
        ]}
      />
      <TeamDetails />
      <CtaSection />
    </Layout>
  );
};

export default TeamDetailsPage;
