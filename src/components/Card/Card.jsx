import clsx from "clsx";
import { forwardRef } from "react";
import './card.css'
import { Link } from "react-router-dom";
const Card = forwardRef(
  // eslint-disable-next-line react/prop-types
  ({ className, href, imgOnly, title, img, description, ...props }, ref) => (
    <Link ref={ref} to={`/redirect?link=${encodeURIComponent(href)}`} {...props}>
      <div
        className={clsx(
          {
            "card transition-all duration-300":
              !imgOnly,
          },
          className
        )}
      >
        {title && <p className="title-card">{title}</p>}
        <p>
          <img decoding="async" src={img} />
        </p>
        {description && (
          <p className="text-description p-market-res ">{description}</p>
        )}
      </div>
    </Link>
  )
);

Card.displayName = "Card";
export { Card };
