/* eslint-disable react/prop-types */
import '../components/button.css';

function BannerBtn({ slug, href, text, className, spanBtn }) {
  const finalHref = href || `/${slug}.html`;

  return (
    <a href={finalHref} className={className} target="_self">
      <div className="flex">
        <span className={spanBtn}>{text}</span>
      </div>
    </a>
  );
}

export default BannerBtn;
