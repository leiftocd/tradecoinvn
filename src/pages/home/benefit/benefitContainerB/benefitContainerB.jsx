import BenefitBox from "../../../../components/benefitBox/benefitBox.jsx"
import ImgFour from '../../../../../public/benefit/04.png'
import ImgFive from '../../../../../public/benefit/05.png'
import ImgSix from '../../../../../public/benefit/06.png'

function BenefitContainerT() {
  return (
    <>
        <div className="flex gap-[1rem] flex-[1] beneT-res">
            <BenefitBox 
              spanText='04'
              srcImg={ImgFour}
              titleText='Cập nhật tin tức thị trường crypto tốc độ tên lửa'
            />
            <BenefitBox 
                spanText='05'
                srcImg={ImgFive}
                titleText='Tri ân đến cộng đồng với những phần quà độc quyền'
            />
            <BenefitBox 
                spanText='06'
                srcImg={ImgSix}
                titleText='Tham gia hệ sinh thái social trader #1 Việt Nam'
            />
        </div>
    </>
  )
}

export default BenefitContainerT
