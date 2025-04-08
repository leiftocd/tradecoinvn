import { Helmet } from 'react-helmet-async';
/* eslint-disable react/prop-types */
function SEO({ title, description, name, type, url, image, twitterCard, ogTitle, ogDescription, ogImage, ogUrl }) {
    const pageTitle = title || "Default Title";
    const pageDescription = description || "Default description for the page.";
    const pageUrl = url || window.location.href;
    const pageImage = image || `${window.location.origin}/logotitle.png`;
  
    return (
      <Helmet>
        {/* Standard metadata tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="image" content={pageImage} />
  
        {/* Facebook Open Graph tags */}
        <meta property="og:type" content={type || 'website'} />
        <meta property="og:title" content={ogTitle || pageTitle} />
        <meta property="og:description" content={ogDescription || pageDescription} />
        <meta property="og:url" content={ogUrl || pageUrl} />
        <meta property="og:image" content={ogImage || pageImage} />
  
        {/* Twitter Card tags */}
        <meta name="twitter:creator" content={name || '@default'} />
        <meta name="twitter:card" content={twitterCard || 'summary_large_image'} />
        <meta name="twitter:title" content={ogTitle || pageTitle} />
        <meta name="twitter:description" content={ogDescription || pageDescription} />
        <meta name="twitter:image" content={ogImage || pageImage} />
      </Helmet>
    );
  }
  export default SEO