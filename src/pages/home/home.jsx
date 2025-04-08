import Banner from './banner/banner.jsx';
import Benefit from './benefit/benefit.jsx';
import Market from './market/market.jsx';
import Partner from './partner/partner.jsx';
import Footer from './footer/footer.jsx';
import { Helmet } from 'react-helmet';
import LogoTitle from '../../../public/logotitle.png';

function Home() {
  return (
    <>
      <Helmet>
        {/* Standard metadata */}
        <title>Trang chủ - TRADECOINVN</title>
        <meta
          name="description"
          content="Tham gia TRADECOINVN - Cộng đồng Crypto hàng đầu Việt Nam để nhận nhiều lợi ích và cơ hội đầu tư."
        />
        {/* Open Graph metadata */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Trang chủ - TRADECOINVN" />
        <meta
          property="og:description"
          content="Tham gia TRADECOINVN - Cộng đồng Crypto hàng đầu Việt Nam để nhận nhiều lợi ích và cơ hội đầu tư."
        />
        <meta property="og:image" content={LogoTitle} />
        <meta property="og:url" content="https://default-fallback.com" />
        {/* Twitter Card metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trang chủ - TRADECOINVN" />
        <meta
          name="twitter:description"
          content="Tham gia TRADECOINVN - Cộng đồng Crypto hàng đầu Việt Nam để nhận nhiều lợi ích và cơ hội đầu tư."
        />
        <meta name="twitter:image" content={LogoTitle} />
      </Helmet>

      {/* Page components */}
      <Banner />
      <Benefit />
      <Market />
      <Partner />
      <Footer />
    </>
  );
}

export default Home;