import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Bexon - Corporate Business Solutions',
  description = 'Leading provider of innovative business solutions, helping companies achieve growth through cutting-edge technology and exceptional service.',
  keywords = 'business solutions, corporate services, technology consulting, digital transformation, business growth, innovation',
  image = '/assets/images/og-image.webp',
  url = 'https://bexon.com',
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  section,
  tags = []
}) => {
  const fullTitle = title.includes('Bexon') ? title : `${title} | Bexon`;
  const fullUrl = url.startsWith('http') ? url : `https://bexon.com${url}`;
  const fullImage = image.startsWith('http') ? image : `https://bexon.com${image}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author || 'Bexon Team'} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Bexon" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      
      {/* Article Specific Meta Tags */}
      {type === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Favicon */}
      <link rel="icon" href="/assets/images/fav.png" />
      <link rel="apple-touch-icon" href="/assets/images/fav.png" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': type === 'article' ? 'Article' : 'WebSite',
            name: fullTitle,
            description: description,
            url: fullUrl,
            image: fullImage,
            author: type === 'article' && author ? {
              '@type': 'Person',
              name: author
            } : undefined,
            publisher: {
              '@type': 'Organization',
              name: 'Bexon',
              logo: {
                '@type': 'ImageObject',
                url: 'https://bexon.com/assets/images/logos/logo.webp'
              }
            },
            datePublished: type === 'article' && publishedTime ? publishedTime : undefined,
            dateModified: type === 'article' && modifiedTime ? modifiedTime : undefined,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': fullUrl
            }
          })
        }}
      />
    </Head>
  );
};

export default SEOHead;
