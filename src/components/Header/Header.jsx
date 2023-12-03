import { useEffect, useState } from "react";
import {
  BurgerButton,
  BurgerIcon,
  Wrapper,
  Btn,
  InnerText,
  InnerCircle,
  ArrowIcon,
  ButtonsWrapper,
  Container,
} from "./header.styled";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Logo from "../Logo/Logo";
import icons from "../../utils/img/icons.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrl, setScrl] = useState("false");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrl(scrollY > 0 ? "true" : "false");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleGetInTouchClick = () => {
    const headerHeight = document.getElementById("header").offsetHeight;
    const clickAndGoTo = document.getElementById("contact");
    if (clickAndGoTo) {
      const scrollPosition = clickAndGoTo.offsetTop - headerHeight;
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Container $scrl={scrl}>
      <Wrapper id="header">
        <Logo />
        <ButtonsWrapper>
          <BurgerButton onClick={handleMenuToggle}>
            <BurgerIcon>
              <use href={icons + "#icon-menu"} />
            </BurgerIcon>
          </BurgerButton>
          <Btn onClick={handleGetInTouchClick}>
            <InnerText>Get in touch</InnerText>
            <InnerCircle>
              <ArrowIcon>
                <use href={icons + "#icon-arrow-right"} />
              </ArrowIcon>
            </InnerCircle>
          </Btn>
          {isMenuOpen && (
            <BurgerMenu $isOpen={true} onClose={handleMenuClose} />
          )}
        </ButtonsWrapper>
      </Wrapper>
    </Container>
  );
};

export default Header;
