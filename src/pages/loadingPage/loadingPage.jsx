import Logo from '../../../public/bannerlogo.png';
import './loadingPage.css';
import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

function LoadingPage() {
  const [searchParams] = useSearchParams();
  const link = searchParams.get("link");
  const navigate = useNavigate(); // Initialize navigate to redirect if no link

  useEffect(() => {
    if (!link) {
      // If no link is provided, redirect to the home page
      setTimeout(() => {
        navigate('/', { replace: true }); // Navigate to the home page, replacing current entry in history
      }, 1500);
      return; // Exit the useEffect
    }
    
    // Decode the URL in case it's encoded
    const decodedLink = decodeURIComponent(link);
    
    // If the link starts with 'http' or 'https', it's an external link
    if (decodedLink.startsWith('http://') || decodedLink.startsWith('https://')) {
      // Redirect to the provided link
      setTimeout(() => {
        window.location.replace(decodedLink); // Redirect to the external link
      }, 1500);
    } else {
      // If no valid link, navigate to the home page
      setTimeout(() => {
        navigate('/', { replace: true });
      }, 1500);
    }
  }, [link, navigate]);

  return (
    <section className='h-screen flex w-full justify-center py-[4rem_0]'>
      <div className="redirectPage max-w-[1080px] flex flex-col gap-[12rem] w-full">
        <div className="redirectPage-top flex w-full justify-center items-center relative">
          <div className='load-title flex h-[80px] justify-center items-center'>
            <img className='object-cover w-full h-auto' src={Logo} alt="" />
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
  );
}

export default LoadingPage;
