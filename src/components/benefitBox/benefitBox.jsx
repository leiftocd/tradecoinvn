import Arrow from '../../../public/arrow.png'
import { useState } from 'react';
// eslint-disable-next-line react/prop-types
function BenefitBox({spanText, srcImg, titleText }) {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <>
        <div id='beneBox' className=" flex flex-col gap-[2rem] max-w-[31rem] w-full hv "
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
        >
            <div className=" flex rounded-[30px] bg-gradient-to-r from-[rgba(17,93,242,0.16)] to-[rgba(0,233,236,0.16)] bene-box relative">
                <div className=" flex flex-col relative w-full" >
                    <div className=" beneBox-hidden w-full flex items-center border-white border-l-2 h-[60px]">
                        <p className=" text-[60px] font-bold text-[#00E9EC] pl-[2rem] h-full text-center leading-[100%]
                        ">{spanText}
                        </p>
                    </div>
                    <div className=" text-[30px] font-[700] text-white ">
                        <h2 className=' mt-[2rem] mb-[1.5rem] text-left'>
                            {titleText}
                        </h2>
                    </div>
                    <div className= 'arrowM absolute'>
                        <img src={Arrow} alt="" className= {` transition-all duration-500 ${
                            isHovered ? " -rotate-180 opacity-[1]" : "rotate-0 opacity-[.6]"
                            }`}/>
                    </div>
                    <div className='max-w-full relative opacity-[1] bottom-[1rem] mt-[2rem]'>
                        <img src={srcImg} alt="Benefit"
                        className={`w-full object-cover transition-all duration-300 contain-intrinsic ${
                        isHovered ? "flex" : "hidden"
                        }`}/>
                    </div>
                </div>
                <div className= {`arrow absolute transition-all duration-1000 ${
                        isHovered ? " left-[85%] bottom-[90%] " : "left-[30%] bottom-[0]"
                        }`}>
                    <img src={Arrow} alt="" className= {` transition-all duration-300 ${
                        isHovered ? " rotate-180 "  : "rotate-0 "
                        }`}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default BenefitBox
