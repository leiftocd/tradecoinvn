import { Helmet } from 'react-helmet-async';
/* eslint-disable react/prop-types */
function SEO({ title, description, url, ogTitle, ogDescription, ogImage, ogUrl }) {
  const pageTitle = title || "Default Title";
  const pageDescription = description || "Default description for the page.";
  const pageUrl = url || window.location.href;

  return (
    <Helmet>
      {/* Character encoding meta tag */}
      <meta charSet="UTF-8" />
      {/* Standard metadata tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} data-react-helmet="true"/>
      <meta name="image" content="{`${window.location.origin}/logotitle.png`}" data-react-helmet="true"/>
      {/* Open Graph tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle || pageTitle} />
      <meta property="og:description" content={ogDescription || pageDescription} />
      <meta property="og:url" content={ogUrl || pageUrl} />
      <meta property="og:image" content={ogImage || `${window.location.origin}/logotitle.png`} />
      <meta property="og:image:secure_url" content={ogImage || `${window.location.origin}/logotitle.png`} />
      {/* Open tw tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || pageTitle} />
      <meta name="twitter:description" content={ogDescription || pageDescription} />
      <meta name="twitter:image" content={ogImage || `${window.location.origin}/logotitle.png`} />
    </Helmet>
  );
}

export default SEO;
