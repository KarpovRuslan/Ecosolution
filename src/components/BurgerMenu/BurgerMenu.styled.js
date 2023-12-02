import styled from "styled-components";

export const BlurBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(23, 61, 51, 0.25);
  backdrop-filter: blur(2px);
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  z-index: ${(props) => (props.$isOpen ? 10 : -10)};
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  transition: all 0.5s ease;
`;

export const MenuWrapper = styled.div`
  width: 320px;
  height: 568px;
  flex-shrink: 0;
  border-radius: 25px;
  background: rgba(23, 61, 51, 0.75);
  backdrop-filter: blur(12.5px);

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-sizing: border-box;
  padding: 24px;

  position: fixed;
  top: 36px;
  right: 50%;
  transform: translateX(50%);
  transition: all 0.5s ease;
  z-index: 50;
  @media screen and (min-width: calc(768px - 0.02px)) {
    width: 365px;
    height: 90%;
    top: 30px;
    right: 30px;
    transform: none;
  }
  @media screen and (min-width: calc(1280px - 0.02px)) {
    right: 100px;
  }
`;

export const BtnClose = styled.button`
  display: inline-flex;
  align-items: flex-end;
  border: 0px;
  background: transparent;
  color: var(--white-color);
  margin-bottom: 8px;
  font-family: Fira Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;
  transition: 0.3s ease;

  &:hover,
  &:focus {
    color: var(--main-green-color);
    & > svg {
      stroke: var(--main-green-color);
    }
  }
`;

export const BtnCloseIcon = styled.svg`
  stroke: var(--white-color);
  width: 20px;
  height: 20px;
  transition: 0.3s ease;
`;

export const WhiteLine = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  flex-shrink: 0;
  background-color: var(--white-color);
`;

export const MenuNav = styled.nav`
  margin-top: 16px;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const NavLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  color: var(--white-color);
  font-family: Fira Sans;
  font-size: 24px;
  line-height: normal;
  letter-spacing: -0.96px;
  transition: 0.3s ease;
  cursor: pointer;
  &:hover,
  &:focus {
    color: var(--main-green-color);
    & > svg {
      stroke: var(--main-green-color);
    }
  }
`;

export const NavLinkIcon = styled.svg`
  stroke: var(--white-color);
  fill: transparent;
  transform: rotate(-45deg);
  width: 16px;
  height: 16px;
  transition: 0.3s ease;
`;
