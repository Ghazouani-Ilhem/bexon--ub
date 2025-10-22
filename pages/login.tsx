import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import LoginForm from '@/components/sections/LoginForm';
import CtaSection from '@/components/sections/CtaSection';

const LoginPage: React.FC = () => {
  return (
    <Layout 
      title="Login - Bexon Corporate Business"
      description="Access your Bexon account to manage your business consulting services and track your projects."
    >
      <div className="space-for-header"></div>
      <PageHeader 
        title="Login"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Login', href: '/login' }
        ]}
      />
      <LoginForm />
      <CtaSection />
    </Layout>
  );
};

export default LoginPage;
