import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  type?: string;
  image?: string;
  url?: string;
}

export const SEO = ({
  title = 'Siyabonga Sibanda | Technology Administrator & Developer',
  description = 'Technology professional based in Bulawayo, Zimbabwe, specializing in software development and technical administration at Kawerify Tech.',
  keywords = 'Siyabonga Sibanda, Kawerify Tech, Technology Administrator, Software Developer, Zimbabwe, Web Development, Tech Solutions',
  type = 'website',
  image = '/profile.jpg',
  url = 'https://kawerify.tech'
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Siyabonga Sibanda" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#3B82F6" />
      
      {/* Favicon */}
      <link rel="icon" href="/ss-logo.svg" />
      <link rel="apple-touch-icon" href="/ss-logo.svg" />
      <link rel="manifest" href="/site.webmanifest" />
    </Helmet>
  );
};
