import {useState,useEffect} from "react";
import { BurgerButton, BurgerIcon, Wrapper,Btn,InnerText,InnerCircle,ArrowIcon,ButtonsWrapper } from "./header.styled";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Logo from "../Logo/Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  };
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 0);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    return <Wrapper isScrolled={isScrolled}>
      <Logo/>
        <ButtonsWrapper>
        <BurgerButton onClick={handleMenuToggle}>
            <BurgerIcon/>
          </BurgerButton>
            <Btn>
              <InnerText>Get in touch</InnerText>
              <InnerCircle><ArrowIcon/></InnerCircle>
            </Btn>
            {isMenuOpen && <BurgerMenu isOpen={handleMenuToggle} onClose={handleMenuClose} />}
        </ButtonsWrapper>
    </Wrapper>;
};

export default Header;
