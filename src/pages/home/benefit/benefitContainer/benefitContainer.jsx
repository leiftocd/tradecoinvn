import BenefitBox from "../benefitContainer/benefitBox/benefitBox.jsx"
import ImgOne from '../../../../../public/benefit/01.png'
import ImgTwo from '../../../../../public/benefit/02.png'
import ImgThree from '../../../../../public/benefit/03.png'
function BenefitContainer() {
  return (
    <>
        <div className="flex gap-[1rem] flex-[1]">
            <BenefitBox 
              spanText='01'
              srcImg={ImgOne}
              titleText='Ti le thang keo cao'
            />
            <BenefitBox 
                spanText='02'
                srcImg={ImgTwo}
                titleText='Đội ngũ Trader #1 Việt Nam 
                            #6 Toàn thế giới'
            />
            <BenefitBox 
                spanText='03'
                srcImg={ImgThree}
                titleText='Nhóm tín hiệu Free, không thu phí'
            />
        </div>
    </>
  )
}

export default BenefitContainer
