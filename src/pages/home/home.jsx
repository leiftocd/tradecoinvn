import Banner from './banner/banner.jsx'
import Benefit from './benefit/benefit.jsx'
import Market from './market/market.jsx'
import Partner from './partner/partner.jsx'
import Footer from './footer/footer.jsx'
import { Helmet } from 'react-helmet'
import LogoTitle from '../../../public/logotitle.png'
function Home() {
  return (
    <>
        <Helmet>
            <title>Trang chủ - TRADECOINVN</title>
            <meta property="og:type" content="website" />
            <meta property="og:image" content={LogoTitle} />
            <meta property="og:url" content={LogoTitle}/>
        </Helmet>
        <Banner />
        <Benefit />
        <Market />
        <Partner />
        <Footer />
    </>
  )
}
export default Home
