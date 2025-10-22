'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Menu } from 'lucide-react';
import Button from '../ui/Button';
import SearchPopup from '../common/SearchPopup';
import OffcanvasMenu from '../common/OffcanvasMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <>
      {/* Main Header */}
      <header className="header-area header-1 section-gap-x bg-white shadow-lg sticky top-0 z-40" role="banner">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Site Logo */}
            <div className="site_logo">
              <Link className="logo" href="/">
                <Image 
                  src="/assets/images/logos/logo.webp" 
                  alt="Bexon Logo" 
                  width={150} 
                  height={50}
                  priority
                />
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium" aria-current="page">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Pages
              </Link>
              <Link href="/service" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Services
              </Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Portfolio
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Contact
              </Link>
            </nav>

            {/* Header Right Items */}
            <div className="hidden lg:flex items-center space-x-4">
              <button 
                onClick={toggleSearch}
                className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <Button
                href="/contact"
                variant="primary"
                size="md"
                className="tj-primary-btn"
              >
                Let's Talk
              </Button>
              <button 
                onClick={toggleMenu}
                className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Search Popup */}
      <SearchPopup isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      
      {/* Offcanvas Menu */}
      <OffcanvasMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
