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
        image="{`${window.location.origin}/logotitle.png`}"
        url={window.location.href}
        //op graph
        ogTitle="Trang chủ - TRADECOINVN"
        ogDescription="Tham gia TRADECOINVN - Cộng đồng Crypto hàng đầu Việt Nam để nhận nhiều lợi ích và cơ hội đầu tư."
        ogImage="https://images.unsplash.com/photo-1726137569966-a7354383e2ae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ogUrl={window.location.href}
        ogType="website"

        // Twitter meta tags
        twitterCard="summary_large_image"
        twitterTitle="Trang chủ - TRADECOINVN"
        twitterDescription="Tham gia TRADECOINVN - Cộng đồng Crypto hàng đầu Việt Nam để nhận nhiều lợi ích và cơ hội đầu tư."
        twitterImage={`${window.location.origin}/logotitle.png`}
        twitterUrl={window.location.href}
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