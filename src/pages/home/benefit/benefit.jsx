import BenefitContainer from "./benefitContainer/benefitContainer.jsx"
function Benefit() {
    return (
      <div className=" flex flex-col mx-[auto] py-[8rem] gap-[6rem]"
      style={{backgroundImage: "url(./bg.jpg)" }}>
        <div className=" flex items-center justify-center">
            <span className=" text-[2.5vw] text-white uppercase font-bold">
                Quyền lợi thành viên TradeCoinVN
            </span>
        </div>
        <div className=" flex flex-col gap-[2rem]">
            <BenefitContainer />
            <BenefitContainer />
        </div>
        
      </div>
    )
}

export default Benefit
