import { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
}

export const generateSEO = ({
  title = 'Bexon - Corporate Business Solutions',
  description = 'Leading provider of innovative business solutions, helping companies achieve growth through cutting-edge technology and exceptional service.',
  keywords = 'business solutions, corporate services, technology consulting, digital transformation, business growth',
  image = '/assets/images/og-image.webp',
  url = 'https://bexon.com',
  type = 'website',
  publishedTime,
  modifiedTime,
  authors = ['Bexon Team'],
}: SEOProps = {}): Metadata => {
  const metadata: Metadata = {
    title,
    description,
    keywords: keywords.split(', '),
    authors: authors.map(author => ({ name: author })),
    creator: 'Bexon',
    publisher: 'Bexon',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Bexon',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@bexon',
      site: '@bexon',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
    },
  };

  return metadata;
};

export const structuredData = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bexon',
    url: 'https://bexon.com',
    logo: 'https://bexon.com/assets/images/logos/logo.webp',
    description: 'Leading provider of innovative business solutions',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '993 Renner Burg, West Rond',
      addressLocality: 'MT',
      postalCode: '94251-030',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-009-544-7818',
      contactType: 'customer service',
      email: 'info@bexon.com',
    },
    sameAs: [
      'https://www.facebook.com/bexon',
      'https://www.instagram.com/bexon',
      'https://x.com/bexon',
      'https://www.linkedin.com/company/bexon',
    ],
  },
  website: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Bexon',
    url: 'https://bexon.com',
    description: 'Leading provider of innovative business solutions',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://bexon.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  },
};