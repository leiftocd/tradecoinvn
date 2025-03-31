
import '../components/button.css'
function bannerBtn({href, text, className, spanBtn}) {
  return (
    <a href={href} className={className}>
        <div className=' flex'>
            <span className={spanBtn} >{text}</span>
        </div>
    </a>
  )
}

export default bannerBtn
