import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MenuItem } from '@/types';
import OffcanvasMenu from './OffcanvasMenu';
import SearchPopup from './SearchPopup';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
  };

  const menuItems: MenuItem[] = [
    {
      title: 'Home',
      href: '/',
      children: [
        { title: 'Homepage 01', href: '/' },
        { title: 'Homepage 02', href: '/home2' },
        { title: 'Homepage 03', href: '/home3' },
        { title: 'Homepage 04', href: '/home4' },
        { title: 'Homepage 05', href: '/home5' },
        { title: 'Homepage 06', href: '/home6' },
        { title: 'Homepage 07', href: '/home7' },
        { title: 'Homepage 08', href: '/home8', badge: 'New' },
        { title: 'Homepage 09', href: '/home9', badge: 'New' },
        { title: 'Homepage 10', href: '/home10', badge: 'New' },
      ]
    },
    {
      title: 'Pages',
      href: '/about',
      isPagesMenu: true,
      children: [
        { title: 'About us', href: '/about' },
        { title: 'Our history', href: '/history', badge: 'HOT' },
        { title: 'Team', href: '/team' },
        { title: 'Team details', href: '/team-details' },
        { title: 'Careers', href: '/careers', badge: 'NEW' },
        { title: 'Careers details', href: '/careers-details' },
        { title: 'Pricing plan', href: '/pricing' },
        { title: 'Feedbacks', href: '/about#feedbacks' },
        { title: 'Faq', href: '/faq' },
        { title: 'Contact', href: '/contact' },
      ],
      otherPages: [
        { title: 'Services', href: '/service' },
        { title: 'Service details', href: '/service-details' },
        { title: 'Portfolio', href: '/portfolio' },
        { title: 'Portfolio details', href: '/portfolio-details' },
        { title: 'Error 404', href: '/404' },
        { title: 'Blog grid', href: '/blog-grid', badge: 'NEW' },
        { title: 'Blog standard', href: '/blog' },
        { title: 'Blog details', href: '/blog-details' },
        { title: 'Term & conditions', href: '/terms-and-conditions' },
        { title: 'Recognition', href: '/about#recognition', badge: 'NEW' },
      ],
      shopPages: [
        { title: 'Shop', href: '/shop', badge: 'HOT' },
        { title: 'Shop details', href: '/shop-details' },
        { title: 'Cart', href: '/cart' },
        { title: 'Checkout', href: '/checkout' },
        { title: 'Wishlist', href: '/wishlist', badge: 'NEW' },
        { title: 'Login', href: '/login' },
        { title: 'Tracking', href: '/about#tracking' },
        { title: 'Order confirm', href: '/about#order-confirm' },
        { title: 'Registration', href: '/login' },
        { title: 'Coming soon', href: '/coming-soon' },
      ]
    },
    {
      title: 'Services',
      href: '/service',
      children: [
        { title: 'Business Strategy Development', href: '/service-details' },
        { title: 'Customer Experience Solutions', href: '/service-details' },
        { title: 'Sustainability and ESG Consulting', href: '/service-details' },
        { title: 'Training and Development Programs', href: '/service-details' },
        { title: 'IT Support & Maintenance', href: '/service-details' },
        { title: 'Marketing Strategy & Campaigns', href: '/service-details' },
      ]
    },
    {
      title: 'Portfolio',
      href: '/portfolio',
      children: [
        { title: 'Portfolio', href: '/portfolio' },
        { title: 'Portfolio Details', href: '/portfolio-details' },
      ]
    },
    {
      title: 'Blog',
      href: '/blog',
      children: [
        { title: 'Blog', href: '/blog' },
        { title: 'Blog Grid', href: '/blog-grid' },
        { title: 'Blog Right Sidebar', href: '/blog-right-sidebar' },
        { title: 'Blog Details', href: '/blog-details' },
      ]
    },
    {
      title: 'Contact',
      href: '/contact'
    }
  ];

  return (
    <>
      <OffcanvasMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <SearchPopup isOpen={isSearchOpen} onClose={handleSearchClose} />
      
      {/* Desktop Header */}
      <header className="header-area header-1 header-absolute section-gap-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="header-wrapper">
                {/* Site Logo */}
                <div className="site_logo">
                  <Link href="/" className="logo">
                    <Image 
                      src="/assets/images/logos/logo.webp" 
                      alt="Bexon Logo" 
                      width={120}
                      height={40}
                      priority
                    />
                  </Link>
                </div>

                {/* Navigation */}
                <div className="menu-area d-none d-lg-inline-flex align-items-center">
                  <nav id="mobile-menu" className="mainmenu">
                    <ul>
                      {menuItems.map((item, index) => (
                        <li key={index} className={item.children ? 'has-dropdown' : ''}>
                          <Link href={item.href}>{item.title}</Link>
                          {item.children && (
                            <ul className={`sub-menu header__mega-menu mega-menu ${item.isPagesMenu ? 'mega-menu-pages' : ''}`}>
                              <li>
                                <div className="mega-menu-wrapper">
                                  {item.isPagesMenu ? (
                                    <div className="container-fluid gap-60-25">
                                      <div className="row">
                                        {/* Main Pages */}
                                        <div className="mega-menu-pages-single">
                                          <div className="mega-menu-pages-single-inner">
                                            <h6 className="mega-menu-title">Main Pages</h6>
                                            <div className="mega-menu-list">
                                              {item.children?.map((child, childIndex) => (
                                                <Link key={childIndex} href={child.href}>
                                                  {child.title}
                                                  {child.badge && (
                                                    <span className={`mega-menu-badge tj-zoom-in-out-anim ${child.badge === 'HOT' ? 'mega-menu-badge-hot' : ''}`}>
                                                      {child.badge}
                                                    </span>
                                                  )}
                                                </Link>
                                              ))}
                                            </div>
                                          </div>
                                        </div>

                                        {/* Other Pages */}
                                        <div className="mega-menu-pages-single">
                                          <div className="mega-menu-pages-single-inner">
                                            <h6 className="mega-menu-title">Other Pages</h6>
                                            <div className="mega-menu-list">
                                              {item.otherPages?.map((child, childIndex) => (
                                                <Link key={childIndex} href={child.href}>
                                                  {child.title}
                                                  {child.badge && (
                                                    <span className="mega-menu-badge tj-zoom-in-out-anim">
                                                      {child.badge}
                                                    </span>
                                                  )}
                                                </Link>
                                              ))}
                                            </div>
                                          </div>
                                        </div>

                                        {/* Shop Pages */}
                                        <div className="mega-menu-pages-single">
                                          <div className="mega-menu-pages-single-inner">
                                            <h6 className="mega-menu-title">Shop Pages</h6>
                                            <div className="mega-menu-list">
                                              {item.shopPages?.map((child, childIndex) => (
                                                <Link key={childIndex} href={child.href}>
                                                  {child.title}
                                                  {child.badge && (
                                                    <span className={`mega-menu-badge tj-zoom-in-out-anim ${child.badge === 'HOT' ? 'mega-menu-badge-hot' : ''}`}>
                                                      {child.badge}
                                                    </span>
                                                  )}
                                                </Link>
                                              ))}
                                            </div>
                                          </div>
                                        </div>

                                        {/* Feature Box */}
                                        <div className="col-12 col-lg-3 mega-menu-pages-single">
                                          <div className="mega-menu-pages-single-inner">
                                            <div className="feature-box">
                                              <div className="feature-content">
                                                <h2 className="title">Modern</h2>
                                                <span>Home Makeover</span>
                                                <a className="read-more feature-contact" href="tel:8321890640">
                                                  <i className="tji-phone-3"></i>
                                                  <span>+8 (321) 890-640</span>
                                                </a>
                                              </div>
                                              <div className="feature-images">
                                                <Image 
                                                  src="/assets/images/header/feature-1.webp" 
                                                  alt="Feature" 
                                                  width={200}
                                                  height={150}
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="container-fluid gap-60-25">
                                      <div className="row">
                                        {item.children.map((child, childIndex) => (
                                          <div key={childIndex} className="col-xl-3 col-lg-3 col-12">
                                            <div className="tj-demo-thumb">
                                              <div className="image">
                                                <Image 
                                                  src={`/assets/images/header/demo/home-${childIndex + 1}.webp`} 
                                                  alt={child.title}
                                                  width={200}
                                                  height={150}
                                                />
                                                <div className="tj-demo-button">
                                                  <Link href={child.href} className="tj-primary-btn header_btn">
                                                    <span className="btn-text">
                                                      <span>View demo</span>
                                                    </span>
                                                    <span className="btn-icon">
                                                      <i className="tji-arrow-right-long"></i>
                                                    </span>
                                                  </Link>
                                                </div>
                                              </div>
                                              <h6 className="tj-demo-title">
                                                <Link href={child.href}>{child.title}</Link>
                                              </h6>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </li>
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>

                {/* Header Right Items */}
                <div className="header-right-item d-none d-lg-inline-flex">
                  <div className="header-search">
                    <button 
                      className="search"
                      onClick={() => setIsSearchOpen(true)}
                    >
                      <i className="tji-search"></i>
                    </button>
                    <button 
                      type="button" 
                      className="search_close_btn"
                      onClick={() => setIsSearchOpen(false)}
                    >
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M1 1L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                  <div className="header-button">
                    <Link href="/contact" className="tj-primary-btn">
                      <span className="btn-text">
                        <span>Let's Talk</span>
                      </span>
                      <span className="btn-icon">
                        <i className="tji-arrow-right-long"></i>
                      </span>
                    </Link>
                  </div>
                  <div 
                    className="menu_bar menu_offcanvas d-none d-lg-inline-flex"
                    onClick={() => setIsMenuOpen(true)}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                {/* Mobile Menu Bar */}
                <div 
                  className="menu_bar mobile_menu_bar d-lg-none"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky Header */}
      <header className="header-area header-1 header-duplicate header-sticky section-gap-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="header-wrapper">
                {/* Site Logo */}
                <div className="site_logo">
                  <Link href="/" className="logo">
                    <Image 
                      src="/assets/images/logos/logo.webp" 
                      alt="Bexon Logo" 
                      width={120}
                      height={40}
                      priority
                    />
                  </Link>
                </div>

                {/* Navigation */}
                <div className="menu-area d-none d-lg-inline-flex align-items-center">
                  <nav className="mainmenu">
                    <ul>
                      {menuItems.map((item, index) => (
                        <li key={index} className={item.children ? 'has-dropdown' : ''}>
                          <Link href={item.href}>{item.title}</Link>
                          {item.children && (
                            <ul className={`sub-menu header__mega-menu mega-menu ${item.isPagesMenu ? 'mega-menu-pages' : ''}`}>
                              <li>
                                <div className="mega-menu-wrapper">
                                  {item.isPagesMenu ? (
                                    <div className="container-fluid gap-60-25">
                                      <div className="row">
                                        {/* Main Pages */}
                                        <div className="mega-menu-pages-single">
                                          <div className="mega-menu-pages-single-inner">
                                            <h6 className="mega-menu-title">Main Pages</h6>
                                            <div className="mega-menu-list">
                                              {item.children?.map((child, childIndex) => (
                                                <Link key={childIndex} href={child.href}>
                                                  {child.title}
                                                  {child.badge && (
                                                    <span className={`mega-menu-badge tj-zoom-in-out-anim ${child.badge === 'HOT' ? 'mega-menu-badge-hot' : ''}`}>
                                                      {child.badge}
                                                    </span>
                                                  )}
                                                </Link>
                                              ))}
                                            </div>
                                          </div>
                                        </div>

                                        {/* Other Pages */}
                                        <div className="mega-menu-pages-single">
                                          <div className="mega-menu-pages-single-inner">
                                            <h6 className="mega-menu-title">Other Pages</h6>
                                            <div className="mega-menu-list">
                                              {item.otherPages?.map((child, childIndex) => (
                                                <Link key={childIndex} href={child.href}>
                                                  {child.title}
                                                  {child.badge && (
                                                    <span className="mega-menu-badge tj-zoom-in-out-anim">
                                                      {child.badge}
                                                    </span>
                                                  )}
                                                </Link>
                                              ))}
                                            </div>
                                          </div>
                                        </div>

                                        {/* Shop Pages */}
                                        <div className="mega-menu-pages-single">
                                          <div className="mega-menu-pages-single-inner">
                                            <h6 className="mega-menu-title">Shop Pages</h6>
                                            <div className="mega-menu-list">
                                              {item.shopPages?.map((child, childIndex) => (
                                                <Link key={childIndex} href={child.href}>
                                                  {child.title}
                                                  {child.badge && (
                                                    <span className={`mega-menu-badge tj-zoom-in-out-anim ${child.badge === 'HOT' ? 'mega-menu-badge-hot' : ''}`}>
                                                      {child.badge}
                                                    </span>
                                                  )}
                                                </Link>
                                              ))}
                                            </div>
                                          </div>
                                        </div>

                                        {/* Feature Box */}
                                        <div className="col-12 col-lg-3 mega-menu-pages-single">
                                          <div className="mega-menu-pages-single-inner">
                                            <div className="feature-box">
                                              <div className="feature-content">
                                                <h2 className="title">Modern</h2>
                                                <span>Home Makeover</span>
                                                <a className="read-more feature-contact" href="tel:8321890640">
                                                  <i className="tji-phone-3"></i>
                                                  <span>+8 (321) 890-640</span>
                                                </a>
                                              </div>
                                              <div className="feature-images">
                                                <Image 
                                                  src="/assets/images/header/feature-1.webp" 
                                                  alt="Feature" 
                                                  width={200}
                                                  height={150}
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="container-fluid gap-60-25">
                                      <div className="row">
                                        {item.children.map((child, childIndex) => (
                                          <div key={childIndex} className="col-xl-3 col-lg-3 col-12">
                                            <div className="tj-demo-thumb">
                                              <div className="image">
                                                <Image 
                                                  src={`/assets/images/header/demo/home-${childIndex + 1}.webp`} 
                                                  alt={child.title}
                                                  width={200}
                                                  height={150}
                                                />
                                                <div className="tj-demo-button">
                                                  <Link href={child.href} className="tj-primary-btn header_btn">
                                                    <span className="btn-text">
                                                      <span>View demo</span>
                                                    </span>
                                                    <span className="btn-icon">
                                                      <i className="tji-arrow-right-long"></i>
                                                    </span>
                                                  </Link>
                                                </div>
                                              </div>
                                              <h6 className="tj-demo-title">
                                                <Link href={child.href}>{child.title}</Link>
                                              </h6>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </li>
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>

                {/* Header Right Items */}
                <div className="header-right-item d-none d-lg-inline-flex">
                  <div className="header-search">
                    <button 
                      className="search"
                      onClick={() => setIsSearchOpen(true)}
                    >
                      <i className="tji-search"></i>
                    </button>
                    <button 
                      type="button" 
                      className="search_close_btn"
                      onClick={() => setIsSearchOpen(false)}
                    >
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M1 1L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                  <div className="header-button">
                    <Link href="/contact" className="tj-primary-btn">
                      <span className="btn-text">
                        <span>Let's Talk</span>
                      </span>
                      <span className="btn-icon">
                        <i className="tji-arrow-right-long"></i>
                      </span>
                    </Link>
                  </div>
                  <div 
                    className="menu_bar menu_offcanvas d-none d-lg-inline-flex"
                    onClick={() => setIsMenuOpen(true)}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                {/* Mobile Menu Bar */}
                <div 
                  className="menu_bar mobile_menu_bar d-lg-none"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;