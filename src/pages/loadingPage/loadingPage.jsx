import Logo from '../../../public/bannerlogo.png';
import './loadingPage.css';
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SEO from '../../components/Seo/Seo.jsx';

function LoadingPage() {
  const { slug } = useParams(); // Get the slug from the URL

  useEffect(() => {
    // Define external URLs based on slug
    const externalLinks = {
      "link-telegram-channel": "https://t.me/margintradingTCVN",
      "link-telegram-support": "https://t.me/TCVN_Support",
      "BingX": "https://bingx.com/en/accounts/invite/VR26GG",
      "Hashkey": "https://global.hashkey.com/en-US/register/invite?invite_code=qCpvZR",
      "OKX": "https://www.okx.com/vi/join/81726041",
      "MEXC": "https://www.mexc.com/vi-VN/register?inviteCode=mexc-121eFA",
      "ByBit": "https://www.bybitglobal.com/en/sign-up?affiliate_id=19986",
      "Binance": "https://accounts.binance.com/vi/register?ref=DCAGBWQ6",
      "BitGet": "https://www.bitget.com/vi/expressly?channelCode=TradeCoinVietnam&vipCode=gcr2&languageType=4",
      // Add more mappings as needed
    };

    const externalUrl = externalLinks[slug] || "https://default-fallback.com"; // Fallback URL if slug doesn't match
    const timer = setTimeout(() => {
      window.location.replace(externalUrl); // Redirect to the URL
    }, 1500);
    return () => clearTimeout(timer); // Cleanup the timeout
  }, [slug]);

  return (
    <>
      <SEO 
        title={slug === 'link-telegram-support' 
          ? 'Link Telegram | TradeCoinVN' 
          : slug === 'link-telegram-channel' 
          ? 'Link Telegram Channel | TradeCoinVN' 
          : `Tham gia sàn giao dịch ${slug} cùng TradeCoinVN`}
        description={slug === 'link-telegram-support' 
          ? 'Link Telegram | TradeCoinVN' 
          : slug === 'link-telegram-channel' 
          ? 'Link Telegram Channel | TradeCoinVN' 
          : `Tham gia sàn giao dịch ${slug} cùng TradeCoinVN để được hưởng nhiều quyền lợi và cơ hội trong việc đầu tư của bạn`}
        image={`${process.env.PUBLIC_URL}/logo.png`}  // Use PUBLIC_URL for consistency
        url={window.location.href}

        // Open Graph meta tags
        ogTitle={slug === 'link-telegram-support' ? 'Link Telegram | TradeCoinVN' : `Tham gia sàn giao dịch ${slug} cùng TradeCoinVN`}
        ogDescription={slug === 'link-telegram-support' ? 'Link Telegram | TradeCoinVN' : `Tham gia sàn giao dịch ${slug} cùng TradeCoinVN`}
        ogImage={`${process.env.PUBLIC_URL}/logo.png`}
        ogUrl={window.location.href}
        ogType="website"

        // Twitter meta tags
        twitterCard="summary_large_image"
        twitterTitle={slug === 'link-telegram-support' ? 'Link Telegram | TradeCoinVN' : `Tham gia sàn giao dịch ${slug} cùng TradeCoinVN`}
        twitterDescription={slug === 'link-telegram-support' ? 'Link Telegram | TradeCoinVN' : `Tham gia sàn giao dịch ${slug} cùng TradeCoinVN`}
        twitterImage={`${process.env.PUBLIC_URL}/logo.png`}
        twitterUrl={window.location.href}
      />
      <section className='h-screen flex w-full justify-center py-[4rem_0]'>
        <div className="redirectPage max-w-[1080px] flex flex-col gap-[12rem] w-full">
          <div className="redirectPage-top flex w-full justify-center items-center relative">
            <div className='load-title flex h-[80px] justify-center items-center'>
              <img className='object-cover w-full h-auto' src={Logo} alt="Logo" />
            </div>
            <div className='title-div uppercase font-bold text-[3rem] text-white leading-[100%] justify-between flex h-full flex-col'>
              Cộng đồng Crypto
              <span className='title-span uppercase font-bold text-[3rem] text-white leading-[100%]'>
                top 1 Việt Nam
              </span>
            </div>
          </div>
          <div className="content flex gap-[5rem] w-full justify-center items-center">
            <div className='h-[40px] w-[40px] aura'>
              <svg className='object-cover w-full h-auto' xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
                <path fill="#fff" d="M208 144a15.78 15.78 0 0 1-10.42 14.94L146 178l-19 51.62a15.92 15.92 0 0 1-29.88 0L78 178l-51.62-19a15.92 15.92 0 0 1 0-29.88L78 110l19-51.62a15.92 15.92 0 0 1 29.88 0L146 110l51.62 19A15.78 15.78 0 0 1 208 144m-56-96h16v16a8 8 0 0 0 16 0V48h16a8 8 0 0 0 0-16h-16V16a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16m88 32h-8v-8a8 8 0 0 0-16 0v8h-8a8 8 0 0 0 0 16h8v8a8 8 0 0 0 16 0v-8h8a8 8 0 0 0 0-16" />
              </svg>
            </div>
            <div className='flex gap-4'>
              <h2 className='h2-load text-white text-[40px] font-bold'>Đang điều hướng</h2>
              <span className='text-white text-[40px] font-bold dotJump1'>.</span>
              <span className='text-white text-[40px] font-bold dotJump2'>.</span>
              <span className='text-white text-[40px] font-bold dotJump3'>.</span>
            </div>
            <div className='h-[40px] w-[40px] aura'>
              <svg className='object-cover w-full h-auto' xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
                <path fill="#fff" d="M208 144a15.78 15.78 0 0 1-10.42 14.94L146 178l-19 51.62a15.92 15.92 0 0 1-29.88 0L78 178l-51.62-19a15.92 15.92 0 0 1 0-29.88L78 110l19-51.62a15.92 15.92 0 0 1 29.88 0L146 110l51.62 19A15.78 15.78 0 0 1 208 144m-56-96h16v16a8 8 0 0 0 16 0V48h16a8 8 0 0 0 0-16h-16V16a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16m88 32h-8v-8a8 8 0 0 0-16 0v8h-8a8 8 0 0 0 0 16h8v8a8 8 0 0 0 16 0v-8h8a8 8 0 0 0 0-16" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoadingPage;
