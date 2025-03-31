import BenefitContainer from "./benefitContainer/benefitContainer.jsx"
import Grow from '../../../../public/grow.png'
function Benefit() {
    return (
      <section 
      style={{backgroundImage: "url(./bg.jpg)" }} className="bg-contain "
      >
        <div className=" flex flex-col mx-[auto] px-[3rem] gap-[3rem] max-w-[108rem] "
        >
            <div className=" flex items-center justify-center">
                <div>
                    <img src={Grow} alt="" />
                </div>
                <span className=" text-[2.5vw] text-white uppercase font-bold">
                    Quyền lợi thành viên TradeCoinVN
                </span>
                <div>
                    <img src={Grow} alt="" />
                </div>
            </div>
            <div className=" flex flex-col gap-[2rem]">
                <BenefitContainer />
                <BenefitContainer />
            </div>
            
        </div>
      </section>
    )
}

export default Benefit
