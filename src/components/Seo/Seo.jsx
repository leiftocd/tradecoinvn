import { Helmet } from 'react-helmet-async';

/* eslint-disable react/prop-types */
function SEO({
  title = 'Trang chủ - TRADECOINVN',
  description = 'Tham gia TRADECOINVN - Cộng đồng Crypto hàng đầu Việt Nam để nhận nhiều lợi ích và cơ hội đầu tư.',
  url = '',
  image = '/logotitle.png',
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  twitterCard = 'summary_large_image',
  name = '@TradeCoinVN',
  type = 'website',
}) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{ogTitle || title}</title>
      <meta name="description" content={ogDescription || description} />
      <meta name="image" content={ogImage || image} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:url" content={ogUrl || url} />
      <meta property="og:image" content={ogImage || image} />
      <meta property="og:image:secure_url" content={ogImage || image} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage || image} />
      <meta name="twitter:creator" content={name} />
    </Helmet>
  );
}

export default SEO;