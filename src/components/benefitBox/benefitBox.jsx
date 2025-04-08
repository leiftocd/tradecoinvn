/* eslint-disable react/prop-types */
import Arrow from '../../../public/arrow.png';
import { useState } from 'react';

function BenefitBox({ spanText, srcImg, titleText }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked((prev) => !prev);
    };
    const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;
    return (
        <>
            <div
                id="beneBox"
                className="flex flex-col gap-[2rem] max-w-[100%] w-full hv"
                onMouseEnter={!isMobile ? () => setIsHovered(true) : null} 
                onMouseLeave={() => setIsHovered(false)}
                onClick={isMobile ? handleClick : null}
            >
                <div
                    style={{ height: '-webkit-fill-available' }}
                    className="flex rounded-[30px] bg-gradient-to-r from-[rgba(17,93,242,0.16)] to-[rgba(0,233,236,0.16)] bene-box relative"
                >
                    <div className="flex flex-col relative w-full">
                        <div className="beneBox-hidden w-full flex items-center border-white border-l-2 h-[60px]">
                            <p className="text-[60px] font-bold text-[#00E9EC] pl-[2rem] h-full text-center leading-[100%]">
                                {spanText}
                            </p>
                        </div>
                        <div className="text-[30px] font-[700] text-white">
                            <h2 className="mt-[2rem] mb-[1.5rem] text-left">{titleText}</h2>
                        </div>
                        <div className="arrowM absolute">
                            <img
                                src={Arrow}
                                alt=""
                                className={`transition-all duration-500 ${
                                    isHovered || isClicked ? '-rotate-180 opacity-[1]' : 'rotate-0 opacity-[.6]'
                                }`}
                            />
                        </div>
                        <div className="max-w-full relative opacity-[1] bottom-[1rem] mt-[2rem]">
                            <img
                                src={srcImg}
                                alt="Benefit"
                                className={`w-full object-cover transition-all duration-300 ${
                                    isHovered || isClicked ? 'flex' : 'hidden'
                                }`}
                            />
                        </div>
                    </div>
                    <div
                        className={`arrow absolute transition-all duration-1000 ${
                            isHovered || isClicked ? 'left-[85%] bottom-[90%]' : 'left-[40%] bottom-[0]'
                        }`}
                    >
                        <img
                            src={Arrow}
                            alt=""
                            className={`transition-all duration-300 ${
                                isHovered || isClicked ? 'rotate-180' : 'rotate-0'
                            }`}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default BenefitBox;