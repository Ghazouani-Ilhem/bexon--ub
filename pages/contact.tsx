import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import ContactInfo from '@/components/sections/ContactInfo';
import ContactForm from '@/components/sections/ContactForm';
import CtaSection from '@/components/sections/CtaSection';

const ContactPage: React.FC = () => {
  return (
    <Layout 
      title="Contact Us - Bexon Corporate Business"
      description="Get in touch with Bexon for all your business consulting needs. Contact us via phone, email, or our contact form for expert assistance."
    >
      <div className="space-for-header"></div>
      <PageHeader 
        title="Contact Us"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us', href: '/contact' }
        ]}
      />
      <ContactInfo />
      <ContactForm />
      <CtaSection />
    </Layout>
  );
};

export default ContactPage;
