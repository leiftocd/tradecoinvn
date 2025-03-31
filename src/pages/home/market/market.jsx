import BingX from '../../../../public/bingX.png'
import ByBit from '../../../../public/bybit.png'
import Binance from '../../../../public/binance.png'
import BitGet from '../../../../public/bitget.png'
import Okx from '../../../../public/okx.png'
import Mexc from '../../../../public/mexc.png'
import Smoker from '../../../../public/smoker.png'
import Build from '../../../../public/build.png'

function Market() {
  return (
    <div className='w-full mx-[auto] flex py-[8rem]  px-[24rem] gap-[6vw]  justify-center  ' style={{backgroundImage: "url(./bg.jpg)" }}>
        <div className=" flex items-end gap-[6vw] relative">
            <div className=' flex text-white font-bold text-[40px] absolute top-[10%] left-0 z-10'>
                LÀM QUEN THỊ TRƯỜNG BẰNG CÁCH TẠO TÀI KHOẢN SÀN GIAO DỊCH
            </div>
            <div className=' absolute top-[50%] -left-[15%] -translate-y-1/2'>
                <img src={Smoker} alt="" className=' max-w-[50%]'/>
            </div>
            <div className='flex flex-col w-full'>
                <div className=" flex flex-col justify-center items-center 
                bg-gradient-to-b from-[rgba(0,233,236,0.6)] to-[rgba(0,0,0,0.6)] 
                px-[2rem] py-[2rem] rounded-[1.6rem] gap-[1rem]">
                    <div className=' w-full flex items-center justify-center'>
                        <span className=' text-white font-bold text-[16px] max-w-[70%] text-center'>Đăng kí tài khoản BingX</span>    
                    </div>
                    <div className=' max-w-[14.7rem]'>
                        <img src={BingX} alt="" />
                    </div>
                    <div className=''>
                        <p className='  text-white font-[400] text-[14px]'> Mã giới thiệu: 19986</p>
                    </div>
                </div>
                <div className=" flex flex-col justify-center items-center 
                bg-gradient-to-b from-[rgba(0,233,236,0.6)] to-[rgba(0,0,0,0.6)] 
                px-[2rem] py-[2rem] rounded-[1.6rem] gap-[1rem]">
                    <div className=' w-full flex items-center justify-center'>
                        <span className=' text-white font-bold text-[16px] max-w-[70%] text-center'>Đăng kí tài khoản BingX</span>    
                    </div>
                    <div className=' max-w-[14.7rem]'>
                        <img src={BingX} alt="" />
                    </div>
                    <div className=''>
                        <p className='  text-white font-[400] text-[14px]'> Mã giới thiệu: 19986</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col pb-[10rem] w-full'>
                <div className=" flex flex-col justify-center items-center 
                bg-gradient-to-b from-[rgba(0,233,236,0.6)] to-[rgba(0,0,0,0.6)] 
                px-[2rem] py-[2rem] rounded-[1.6rem] gap-[1rem]">
                    <div className=' w-full flex items-center justify-center'>
                        <span className=' text-white font-bold text-[16px] max-w-[70%] text-center'>Đăng kí tài khoản 
                        OKX</span>    
                    </div>
                    <div className=' max-w-[14.7rem]'>
                        <img src={Okx} alt="" />
                    </div>
                    <div className=''>
                        <p className='  text-white font-[400] text-[14px]'> Mã giới thiệu: 19986</p>
                    </div>
                </div>
                <div className=" flex flex-col justify-center items-center 
                bg-gradient-to-b from-[rgba(0,233,236,0.6)] to-[rgba(0,0,0,0.6)] 
                px-[2rem] py-[2rem] rounded-[1.6rem] gap-[1rem]">
                    <div className=' w-full flex items-center justify-center'>
                        <span className=' text-white font-bold text-[16px] max-w-[70%] text-center'>Đăng kí tài khoản 
                        MEXC</span>    
                    </div>
                    <div className=' max-w-[14.7rem]'>
                        <img src={Mexc} alt="" />
                    </div>
                    <div className=''>
                        <p className='  text-white font-[400] text-[14px]'> Mã giới thiệu: 19986</p>
                    </div>
                </div>
            </div>
        </div>
        <div className=" flex items-end gap-[1rem] pb-[20rem] pr-[] p">
            <div className='flex flex-col gap-[2rem]'>
                <div className=" flex flex-col justify-center items-center 
                bg-gradient-to-b from-[rgba(0,233,236,0.6)] to-[rgba(0,0,0,0.6)] 
                px-[2rem] py-[2rem] rounded-[1.6rem] gap-[1rem]
                ">
                    <div className=' w-full flex items-center justify-center'>
                        <span className=' text-white font-bold text-[16px] max-w-[70%] text-center'>Đăng kí tài khoản 
                        BYBIT</span>    
                    </div>
                    <div className=' max-w-[14.7rem]'>
                        <img src={ByBit} alt="" />
                    </div>
                    <div className=''>
                        <p className='  text-white font-[400] text-[14px]'> Mã giới thiệu: 19986</p>
                    </div>
                </div>
                <div className=" flex flex-col justify-center items-center 
                bg-gradient-to-b from-[rgba(0,233,236,0.6)] to-[rgba(0,0,0,0.6)] 
                px-[2rem] py-[2rem] rounded-[1.6rem] gap-[1rem]
                ">
                    <div className=' w-full flex items-center justify-center'>
                        <span className=' text-white font-bold text-[16px] max-w-[70%] text-center'>Đăng kí tài khoản 
                        Binance</span>    
                    </div>
                    <div className=' max-w-[14.7rem]'>
                        <img src={Binance} alt="" />
                    </div>
                    <div className=''>
                        <p className='  text-white font-[400] text-[14px]'> Mã giới thiệu: 19986</p>
                    </div>
                </div>
                <div className=" flex flex-col justify-center items-center 
                bg-gradient-to-b from-[rgba(0,233,236,0.6)] to-[rgba(0,0,0,0.6)] 
                px-[2rem] py-[2rem] rounded-[1.6rem] gap-[1rem]
                ">
                    <div className=' w-full flex items-center justify-center'>
                        <span className=' text-white font-bold text-[16px] max-w-[70%] text-center'>Đăng kí tài khoản 
                        Bitget</span>    
                    </div>
                    <div className=' max-w-[147px]'>
                        <img src={BitGet} alt="" />
                    </div>
                    <div className=''>
                        <p className='  text-white font-[400] text-[14px]'> Mã giới thiệu: 19986</p>
                    </div>
                </div>
                <div className='max-w-33rem'>
                    <img src={Build} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Market
