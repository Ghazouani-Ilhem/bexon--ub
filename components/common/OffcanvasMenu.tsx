'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { X, Search, Phone, Mail, MapPin } from 'lucide-react';

interface OffcanvasMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const OffcanvasMenu: React.FC<OffcanvasMenuProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/service', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black bg-opacity-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/assets/images/logos/logo-2.webp"
                    alt="Bexon Logo"
                    width={120}
                    height={40}
                  />
                </Link>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Description */}
              <div className="mb-8">
                <p className="text-gray-600 leading-relaxed">
                  Developing personalize our customer journeys to increase satisfaction & loyalty of our expansion
                  recognized by industry leaders.
                </p>
              </div>

              {/* Search */}
              <div className="mb-8">
                <h5 className="text-lg font-semibold text-gray-900 mb-4">Search Now!</h5>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="search"
                    placeholder="Search here..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Contact Info */}
              <div className="mb-8">
                <h5 className="text-lg font-semibold text-gray-900 mb-4">Contact Info</h5>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <a href="tel:+10095447818" className="text-gray-600 hover:text-blue-600 transition-colors">
                      +1 (009) 544-7818
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <a href="mailto:info@bexon.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                      info@bexon.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-600">
                      993 Renner Burg, West Rond, MT 94251-030
                    </span>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex-1">
                <h5 className="text-lg font-semibold text-gray-900 mb-4">Navigation</h5>
                <nav className="space-y-2">
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OffcanvasMenu;