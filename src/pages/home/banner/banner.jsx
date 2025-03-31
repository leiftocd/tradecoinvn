import BannerImgLeft from '../../../../public/bannerLeft.png'
import BannerImgRight from '../../../../public/bannerRight.png'
import BannerLogo from '../../../../public/bannerLogo.png'
// import BannerContentBg from '../../../../public/bannerContentBg1.png'
import WebsiteImg from '../../../../public/website.png'
import YoutubeImg from '../../../../public/ytb.png'
import TwitterImg from '../../../../public/x.png'
import BannerAllIn from '../../../../public/all-in.png'

import BannerBtn from '../../../components/bannerBtn.jsx'

function Banner() {
  return (
    <>
        <div className='banner flex flex-col py-[3rem] px-[0] bg-cover bg-center bg-repeat relative
        max-md:py-[2.8rem]  max-md:px-[0] max-md:gap-[2rem]' 
        style={{backgroundImage: "url(./bg.jpg)" }} >
            <div className="flex items-center w-full justify-center ">
                <img src={BannerLogo} alt="" className=' max-w-[100%]' loading='lazy'/>
            </div>
            <div className=" flex w-full justify-around
            max-md:gap-[3rem]
            ">
                <div className='  w-full flex items-center max-w-[20vw] 
                max-md:hidden
                i-res
                '>
                    <img src={BannerImgLeft} alt="banner" className=' w-full ' loading='lazy'/>
                </div>
                    <div className=" flex items-center justify-center flex-col gap-[6rem] px-[3vw] mx-[auto]">
                        <div className='  flex flex-col items-center
                        max-md:gap-[1rem]'>
                            <div className="whitespace-pre-line inline-block text-[#00E9EC] text-center 
                                [webkit-text-stroke-width:1px] [webkit-text-stroke-color:#00E9EC] 
                                font-poppins text-[4vw] font-bold -tracking-[1.92px] uppercase text-shadow-glow
                                max-md:text-[2.8em] max-md:px-[8vw] s-res">
                                    Cộng đồng Crypto
                                    top 1 Việt Nam
                            </div>
                            <div className=' max-w-[14.7rem] hidden w-full items-center
                            max-md:flex '>
                                <img src={BannerImgLeft} alt="banner" className=' w-full' loading='lazy'/>
                            </div>
                        </div>
                        <div className='flex w-full items-center justify-evenly gap-[4vw] 
                        max-md:gap-[2rem]'>
                            <div className=' flex flex-col items-center justify-center gap-[4rem]  
                            max-md:gap-[2rem]'>
                                <div className=' flex w-full bg-cover bg-center bg-repeat relative py-[1rem] px-[1.5rem] items-center justify-center max-w-[32.7rem]
                                max-md:pl-[1.6rem]' 
                                style={{backgroundImage: "url(./bannerContentBg1.png)" }}
                                >
                                    <span className=' text-white text-[16px] font-bold '>
                                        THAM GIA NHÓM CALL KÈO PREMIUM
                                    </span>
                                    <div className=' absolute z-10 right-[-19%] bottom-[-10%]'>
                                        <img src={BannerAllIn} alt="" className=' max-w-[9.8rem]'/>
                                    </div>
                                    {/* <img src={BannerContentBg} alt="" className=' max-w-full absolute inset-0 -z-1' loading='lazy'/> */}
                                </div>
                                <div className=' flex flex-col w-full gap-[1.5rem] items-start
                                max-md:gap-[1rem] max-md:px-[4.8rem]'>
                                    <div className='w-full flex items-center justify-center max-w-[90%]'>
                                        <BannerBtn href="https://go.tradecoinvn.com/link-telegram-channel" 
                                            text="Channel Telegram TradeCoinVN"
                                            className=" bannerBtn"
                                            spanBtn="textBtn max-md:text-[1.2em]"
                                        />
                                    </div>
                                    <div className=' w-full flex items-center justify-center max-w-[90%]'>
                                        <BannerBtn href="https://www.facebook.com/groups/tradervietnam" text="Group Facebook TradeCoinVN" 
                                            className=" bannerBtn"
                                            spanBtn="textBtn max-md:text-[1.2em]"
                                        />
                                    </div>
                                    <div className=' w-full flex items-center justify-center max-w-[90%]'>
                                        <BannerBtn href="https://go.tradecoinvn.com/link-telegram-support" text="Liên Hệ Support Vào Nhóm Premium" 
                                            className=" bannerBtnLast w-full" 
                                            spanBtn="  textBtnLast max-md:text-[1.2em]"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-[2rem] max-md:hidden'>
                                <a href="https://tradecoinvn.net/" className='  flex items-end '>
                                    <img src={WebsiteImg} alt="" className=' w-full max-w-[25.4rem]'  />
                                </a>
                                <a href="https://www.youtube.com/@tradecoinvn_media" className='  flex items-end '>
                                    <img src={YoutubeImg} alt="" className=' w-full max-w-[25.4rem]' />
                                </a>
                                <a href="https://x.com/TCVNcommunity" className='  flex items-end '>
                                    <img src={TwitterImg} alt="" className=' w-full max-w-[25.4rem]' />
                                </a>
                            </div>
                        </div>
                    </div>
                <div className="  w-full flex items-center max-w-[20vw] 
                max-md:hidden
                i-res
                ">
                    <img src={BannerImgRight} alt="banner" className=' w-full ' loading='lazy'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner
