import { Helmet } from 'react-helmet-async';

/* eslint-disable react/prop-types */
function SEO({
  title,
  description,
  url,
  image,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  twitterCard,
  name,
  type
}) {
  const isBrowser = typeof window !== 'undefined';
  const pageUrl = url || (isBrowser ? window.location.href : '');
  const pageImage = image || (isBrowser ? `${window.location.origin}/logotitle.png` : '/logotitle.png');
  const pageTitle = title || 'Default Title';
  const pageDescription = description || 'Default description';

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="image" content={pageImage} />

      {/* Open Graph */}
      <meta property="og:type" content={type || 'website'} />
      <meta property="og:title" content={ogTitle || pageTitle} />
      <meta property="og:description" content={ogDescription || pageDescription} />
      <meta property="og:url" content={ogUrl || pageUrl} />
      <meta property="og:image" content={ogImage || pageImage} />
      <meta property="og:image:secure_url" content={ogImage || pageImage} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard || 'summary_large_image'} />
      <meta name="twitter:title" content={ogTitle || pageTitle} />
      <meta name="twitter:description" content={ogDescription || pageDescription} />
      <meta name="twitter:image" content={ogImage || pageImage} />
      <meta name="twitter:creator" content={name || '@default'} />
    </Helmet>
  );
}

export default SEO;
