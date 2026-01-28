import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  canonical?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, image = 'https://i.pinimg.com/736x/2a/87/87/2a87873c57c152a6c78e1e32d2926e0a.jpg', canonical }) => {
  const siteName = 'BrightSmile Dental';
  const fullTitle = `${title} | ${siteName}`;
  const baseUrl = 'https://your-domain.com'; // Replace with your actual domain (e.g., https://brightsmile-omega.vercel.app)

  const absoluteImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;
  const absoluteCanonicalUrl = canonical ? (canonical.startsWith('http') ? canonical : `${baseUrl}${canonical}`) : undefined;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {absoluteCanonicalUrl && <link rel="canonical" href={absoluteCanonicalUrl} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={absoluteImageUrl} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={absoluteImageUrl} />
    </Helmet>
  );
};

export default SEO;
