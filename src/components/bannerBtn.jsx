/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import '../components/button.css';

function BannerBtn({ slug, href, text, className, spanBtn }) {
  // Nếu có href, dùng <a> để redirect trực tiếp
  if (href) {
    return (
      <a href={href} className={className}>
        <div className="flex">
          <span className={spanBtn}>{text}</span>
        </div>
      </a>
    );
  }
  // Nếu có slug, dùng <Link> để đi qua LoadingPage
  return (
    <Link to={`/${slug}`} className={className}>
      <div className="flex">
        <span className={spanBtn}>{text}</span>
      </div>
    </Link>
  );
}

export default BannerBtn;