
import { Link } from 'react-router-dom'
import '../components/button.css'
function bannerBtn({href, text, className, spanBtn}) {
  return (
    <Link to={`/redirect?link=${encodeURIComponent(href)}`} className={className}>
        <div className=' flex'>
            <span className={spanBtn} >{text}</span>
        </div>
    </Link>
  )
}

export default bannerBtn
