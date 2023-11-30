import { useEffect } from "react";
import {
  BlurBackground,
  BtnClose,
  BtnCloseIcon,
  MenuNav,
  MenuWrapper,
  NavLink,
  NavLinkIcon,
  NavList,
  WhiteLine,
} from "./BurgerMenu.styled";
import icons from "../../utils/img/icons.svg";
import SocialLinks from "../SocialLinks/SocialLinks";

const menuItems = ["Main", "About", "Cases", "FAQ", "Contact Us"];

const BurgerMenu = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [onClose]);

  useEffect(() => {
    const handleBackdropClick = (event) => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleBackdropClick);
    }
    return () => {
      document.removeEventListener("click", handleBackdropClick);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <BlurBackground isOpen={isOpen} onClick={onClose} />
      <MenuWrapper isOpen={isOpen}>
        <div>
          <BtnClose onClick={isOpen}>
            <BtnCloseIcon>
              <use href={icons + "#icon-close"} />
            </BtnCloseIcon>
            close
          </BtnClose>
          <WhiteLine />
          <MenuNav>
            <NavList>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <NavLink onClick={isOpen}>
                    {item}
                    <NavLinkIcon>
                      <use href={icons + "#icon-arrow-right"} />
                    </NavLinkIcon>
                  </NavLink>
                </li>
              ))}
            </NavList>
          </MenuNav>
        </div>
        <div>
          <SocialLinks />
        </div>
      </MenuWrapper>
    </>
  );
};

export default BurgerMenu;
