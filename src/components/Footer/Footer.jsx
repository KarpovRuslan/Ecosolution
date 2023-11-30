import { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import {
  Wrapper,
  ArrowIcon,
  InnerCircle,
  GreenLine,
  LinksWrapper,
  AddressWrapper,
  Email,
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
          <ArrowIcon />
        </InnerCircle>
      </Wrapper>
      <LinksWrapper>
        <SocialLinks color="var(--main-dark-green-color)" />
      </LinksWrapper>

      <AddressWrapper>
        <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
        <Email href="mailto:office@ecosolution.com">
          office@ecosolution.com
        </Email>
        <p>ecosolution © 2023</p>
      </AddressWrapper>
    </div>
  );
};

export default Footer;
