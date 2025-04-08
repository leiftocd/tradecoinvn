import Banner from './banner/banner.jsx';
import Benefit from './benefit/benefit.jsx';
import Market from './market/market.jsx';
import Partner from './partner/partner.jsx';
import Footer from './footer/footer.jsx';
import SEO from '../../components/Seo/Seo.jsx';

function Home() {
  return (
    <>
      <SEO 
        title="Trang chủ - TRADECOINVN"
        description="Tham gia TRADECOINVN - Cộng đồng Crypto hàng đầu Việt Nam để nhận nhiều lợi ích và cơ hội đầu tư."
        image={`${window.location.origin}/logotitle.png`}
        url={window.location.href}
      />
      <Banner />
      <Benefit />
      <Market />
      <Partner />
      <Footer />
    </>
  );
}

export default Home;