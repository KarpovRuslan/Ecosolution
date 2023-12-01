import { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import icons from "../../utils/img/icons.svg";
import {
  Wrapper,
  ArrowIcon,
  InnerCircle,
  GreenLine,
  LinksWrapper,
  AddressWrapper,
  Email,
  MapLink,
} from "./Footer.styled";
import SocialLinks from "../SocialLinks/SocialLinks";

const Footer = () => {
  const [scrolled, setScrolled] = useState(0);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrolled(scrollPosition > 0);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    const clickAndGoTo = document.getElementById("main");
    if (clickAndGoTo) {
      clickAndGoTo.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div id="footer" scrolled={scrolled}>
      <GreenLine />
      <Wrapper>
        <Logo />
        <InnerCircle onClick={handleClick}>
          <ArrowIcon>
            <use href={icons + "#icon-arrow-right"} />
          </ArrowIcon>
        </InnerCircle>
      </Wrapper>
      <LinksWrapper>
        <SocialLinks color="var(--main-dark-green-color)" />
      </LinksWrapper>

      <AddressWrapper>
        <MapLink
          href="https://www.google.com.ua/maps/search/79005,+Ukraine,+Lvivstreet.+Shota+Rustaveli,+7/@49.8313557,24.0323843,17z/data=!3m1!4b1?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
        >
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </MapLink>
        <Email href="mailto:office@ecosolution.com">
          office@ecosolution.com
        </Email>
        <p>ecosolution © 2023</p>
      </AddressWrapper>
    </div>
  );
};

export default Footer;
