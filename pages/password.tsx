import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import PasswordForm from '@/components/sections/PasswordForm';
import CtaSection from '@/components/sections/CtaSection';

const PasswordPage: React.FC = () => {
  return (
    <Layout 
      title="Reset Password - Bexon Corporate Business"
      description="Reset your password to regain access to your Bexon account and continue managing your business consulting services."
    >
      <div className="space-for-header"></div>
      <PageHeader 
        title="Reset Password"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Reset Password', href: '/password' }
        ]}
      />
      <PasswordForm />
      <CtaSection />
    </Layout>
  );
};

export default PasswordPage;
