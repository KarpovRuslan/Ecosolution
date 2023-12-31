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
  FooterWrapper,
} from "./Footer.styled";
import SocialLinks from "../SocialLinks/SocialLinks";

const Footer = () => {
  const handleClick = () => {
    const clickAndGoTo = document.getElementById("main");
    if (clickAndGoTo) {
      clickAndGoTo.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <FooterWrapper id="footer">
      <GreenLine />
      <Wrapper>
        <Logo />
        <InnerCircle type="button" onClick={handleClick}>
          <ArrowIcon>
            <use href={icons + "#icon-arrow-right"} />
          </ArrowIcon>
        </InnerCircle>

        <LinksWrapper>
          <SocialLinks color="var(--main-dark-green-color)" />
        </LinksWrapper>
      </Wrapper>
      <AddressWrapper>
        <MapLink
          href="https://www.google.com.ua/maps/search/79005,+Ukraine,+Lvivstreet.+Shota+Rustaveli,+7/@49.8313557,24.0323843,17z/data=!3m1!4b1?entry=ttu"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </MapLink>
        <Email href="mailto:office@ecosolution.com">
          office@ecosolution.com
        </Email>
        <p>ecosolution © 2023</p>
      </AddressWrapper>
    </FooterWrapper>
  );
};

export default Footer;
