import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Preloader from '../common/Preloader';
import BackToTop from '../common/BackToTop';
import PerformanceMonitor from '../common/PerformanceMonitor';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Preloader />
        <Header />
        <main id="primary" className="site-main">
          {children}
        </main>
        <Footer />
        <BackToTop />
        <PerformanceMonitor />
      </div>
    </div>
  );
};

export default Layout;
