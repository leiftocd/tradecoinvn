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
      <title data-react-helmet="true">{pageTitle}</title>
      <meta name="description" content={pageDescription} data-react-helmet="true"/>
      <meta name="image" content="{`${window.location.origin}/logotitle.png`}" data-react-helmet="true"/>
      {/* Open Graph tags */}
      <meta property="og:type" content="website" data-react-helmet="true"/>
      <meta property="og:title" content={ogTitle || pageTitle} data-react-helmet="true"/>
      <meta property="og:description" content={ogDescription || pageDescription} data-react-helmet="true"/>
      <meta property="og:url" content={ogUrl || pageUrl} data-react-helmet="true"/>
      <meta property="og:image" content={ogImage || `${window.location.origin}/logotitle.png`} data-react-helmet="true"/>
      <meta property="og:image:secure_url" content={ogImage || `${window.location.origin}/logotitle.png`} data-react-helmet="true"/>
      {/* Open tw tags */}
      <meta name="twitter:card" content="summary_large_image" data-react-helmet="true"/>
      <meta name="twitter:title" content={ogTitle || pageTitle} data-react-helmet="true"/>
      <meta name="twitter:description" content={ogDescription || pageDescription} data-react-helmet="true"/>
      <meta name="twitter:image" content={ogImage || `${window.location.origin}/logotitle.png`} data-react-helmet="true"/>
    </Helmet>
  );
}

export default SEO;
