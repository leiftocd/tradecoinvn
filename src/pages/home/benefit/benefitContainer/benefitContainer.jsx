import BenefitBox from "../benefitContainer/benefitBox/benefitBox.jsx"

function BenefitContainer() {
  return (
    <>
        <div className="flex gap-[2rem] items-center justify-center">
            <BenefitBox />
            <BenefitBox />
            <BenefitBox />
        </div>
    </>
  )
}

export default BenefitContainer
