import Arrow from '../../../../../../public/arrow.png'

function BenefitBox() {
  return (
    <>
        <div className=" flex flex-col gap-[2rem]">
            <div className=" flex rounded-[30px] bg-gradient-to-r from-[rgba(17,93,242,0.16)] to-[rgba(0,233,236,0.16)] px-[2rem] py-[2.7rem] relative">
                <div className=" flex flex-col gap-[2rem] pb-[10rem]" >
                    <div className=" w-full flex items-center gap-[2.5rem]">
                        <span className=' block w-[2px] bg-white h-[3rem]'></span>
                        <span className=" text-[60px] font-bold text-[#00E9EC]
                        ">01
                        </span>
                    </div>
                    <div className=" text-[32px] font-[500] text-white">
                        Ti le thang keo cao
                    </div>
                    <div>
                        {/* <img src="" alt="" /> */}
                    </div>
                </div>
                <div className=" w-full absolute left-[30%] bottom-[2%]">
                    <img src={Arrow} alt="" className=''/>
                </div>
            </div>
        </div>
    </>
  )
}

export default BenefitBox
