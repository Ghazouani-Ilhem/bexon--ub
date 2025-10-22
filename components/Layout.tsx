import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Preloader from './Preloader';
import BackToTop from './BackToTop';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'Bexon - Corporate Business Template',
  description = 'Developing personalize our customer journeys to increase satisfaction & loyalty of our expansion recognized by industry leaders.',
  keywords = 'corporate, business, consulting, services'
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/fav.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      
      <div className="body-overlay"></div>
      
      <Preloader />
      <BackToTop />
      
      <Header />
      
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="primary" className="site-main">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
