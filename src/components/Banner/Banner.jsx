import "./Banner.css";

import ImageBanner from "../../assets/images/banner.svg";
import MobileImageBanner from "../../assets/images/mobile_banner.svg";

export default function Banner() {
  return (
    <section className="banner">
      <a href="/promocoes" aria-label="Electrolux - Preços incríveis">
        <picture>
          <source
            media="(min-width: 769px)"
            srcSet={ImageBanner}
            alt="Electrolux"
          />
          <img src={MobileImageBanner} alt="Electrolux Mobile" />
        </picture>
      </a>
    </section>
  );
}
