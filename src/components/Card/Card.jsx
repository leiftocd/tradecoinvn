/* eslint-disable react/prop-types */
import clsx from "clsx";
import { forwardRef } from "react";
import './card.css';
import { Link } from "react-router-dom";

const Card = forwardRef(
  ({ className, slug, imgOnly, title, img, description, ...props }, ref) => {
    // Luôn dùng slug và đi qua LoadingPage với /:slug
    return (
      <Link to={`/${slug}`} ref={ref} {...props}>
        <div
          className={clsx(
            {
              "card transition-all duration-300": !imgOnly,
            },
            className
          )}
        >
          {title && <p className="title-card">{title}</p>}
          <p>
            <img decoding="async" src={img} />
          </p>
          {description && (
            <p className="text-description p-market-res">{description}</p>
          )}
        </div>
      </Link>
    );
  }
);

Card.displayName = "Card";
export { Card };