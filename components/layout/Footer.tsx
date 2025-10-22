'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Facebook, Instagram, Twitter, Linkedin, Send } from 'lucide-react';
import Container from '../ui/Container';
import Heading from '../ui/Heading';
import Text from '../ui/Text';
import Button from '../ui/Button';

const Footer = () => {
  const services = [
    { href: '#', label: 'Customer Experience' },
    { href: '#', label: 'Training Programs' },
    { href: '#', label: 'Business Strategy' },
    { href: '#', label: 'ESG Consulting' },
  ];

  const resources = [
    { href: '/contact', label: 'Contact us' },
    { href: '/team', label: 'Team Member' },
    { href: '/careers', label: 'Careers' },
    { href: '#', label: 'News' },
  ];

  const socialLinks = [
    { href: 'https://www.facebook.com/', icon: <Facebook className="w-5 h-5" />, label: 'Facebook' },
    { href: 'https://www.instagram.com/', icon: <Instagram className="w-5 h-5" />, label: 'Instagram' },
    { href: 'https://x.com/', icon: <Twitter className="w-5 h-5" />, label: 'Twitter' },
    { href: 'https://www.linkedin.com/', icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Link href="/" className="inline-block">
                  <Image 
                    src="/assets/images/logos/logo.webp" 
                    alt="Bexon Logo" 
                    width={150} 
                    height={50}
                  />
                </Link>
              </div>
              <Text color="white" className="text-gray-300 leading-relaxed">
                Developing personalize our customer journeys to increase satisfaction & loyalty of our expansion.
              </Text>
            </div>

            {/* Services */}
            <div>
              <Heading level={5} className="text-white mb-6">
                Services
              </Heading>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link 
                      href={service.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <Heading level={5} className="text-white mb-6">
                Resources
              </Heading>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <Link 
                      href={resource.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {resource.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <Heading level={5} className="text-white mb-6">
                Subscribe to Our Newsletter
              </Heading>
              <form className="space-y-4">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-400"
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    className="rounded-l-none"
                    icon={<Send className="w-4 h-4" />}
                  >
                    Send
                  </Button>
                </div>
                <label className="flex items-center text-sm text-gray-300">
                  <input type="checkbox" className="mr-2" />
                  Agree to our <Link href="#" className="text-blue-400 hover:text-blue-300 ml-1">Terms & Condition?</Link>
                </label>
              </form>
            </div>
          </div>
        </Container>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <a 
                href="tel:+10095447818"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                +1 (009) 544-7818
              </a>
              <a 
                href="mailto:info@bexon.com"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                info@bexon.com
              </a>
            </div>

            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="text-gray-300 text-sm">
              © 2025 <Link href="https://themeforest.net/user/theme-junction/portfolio" target="_blank" className="text-blue-400 hover:text-blue-300">Bexon</Link> All right reserved
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
