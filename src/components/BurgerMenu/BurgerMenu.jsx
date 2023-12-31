import { useEffect, useState } from "react";
import PropTypes from "prop-types";
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
const menuIdMapping = {
  main: "main",
  about: "about",
  cases: "cases",
  faq: "faq",
  contact: "contact",
};

const BurgerMenu = ({ $isOpen, onClose }) => {
  const [scrolled, setScrolled] = useState(0);
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

    if ($isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("click", handleBackdropClick);
    } else {
      document.body.style.overflow = "";
      document.removeEventListener("click", handleBackdropClick);
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("click", handleBackdropClick);
    };
  }, [$isOpen, onClose]);

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

  const handleNavLinkClick = (item) => {
    const id = menuIdMapping[item.toLowerCase()] || "main";
    const element = document.getElementById(id);

    if (element) {
      const headerHeight = document.getElementById("header").offsetHeight;
      const scrollPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });

      onClose();
    }
  };

  return (
    <>
      <BlurBackground
        $isOpen={$isOpen}
        onClick={onClose}
        $scrolled={scrolled}
      />
      <MenuWrapper>
        <div>
          <BtnClose onClick={onClose}>
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
                  <NavLink
                    onClick={() =>
                      handleNavLinkClick(
                        item.toLowerCase() === "about"
                          ? "about"
                          : item.toLowerCase() === "cases"
                          ? "cases"
                          : item.toLowerCase() === "faq"
                          ? "faq"
                          : item.toLowerCase() === "main"
                          ? "main"
                          : "contact"
                      )
                    }
                  >
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

BurgerMenu.propTypes = {
  $isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default BurgerMenu;
