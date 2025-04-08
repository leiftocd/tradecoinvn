/* eslint-disable react/prop-types */
import { Helmet } from 'react-helmet-async';

function SEO({ title, description, name, type, url, image }) {
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
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:image" content={pageImage} />
            {/* Twitter Card tags */}
            <meta name="twitter:creator" content={name || '@default'} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={pageDescription} />
            <meta name="twitter:image" content={pageImage} />
        </Helmet>
    );
}

export default SEO;
