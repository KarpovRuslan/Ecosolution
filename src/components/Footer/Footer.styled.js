import styled from "styled-components";

export const FooterWrapper = styled.footer`
  padding-bottom: 24px;
  @media screen and (min-width: 768px) {
    padding-bottom: 40px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const GreenLine = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  flex-shrink: 0;
  background-color: var(--main-green-color);
`;

export const ArrowIcon = styled.svg`
  stroke: var(--main-dark-green-color);
  fill: transparent;
  transform: rotate(-90deg);
  width: 16px;
  height: 16px;
  transition: 0.5s ease;
`;

export const InnerCircle = styled.button`
  display: flex;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  align-items: center;
  justify-content: center;
  background-color: var(--main-green-color);
  margin-left: 19px;
  transition: 0.5s ease;
  &:hover,
  &:focus {
    background-color: var(--main-dark-green-color);
    transition: 0.5s ease;
    & > svg {
      stroke: var(--main-green-color);
    }
  }
  @media screen and (min-width: 768px) {
    order: 3;
    margin-left: 130px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 0px;
  }
`;

export const ButtonLinkUp = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const LinksWrapper = styled.ul`
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  row-gap: 8px;
  stroke: var(--main-green-color);
  @media screen and (min-width: 768px) {
    order: 2;
    margin-top: 0px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 170px;
  }
`;

export const AddressWrapper = styled.div`
  font-family: Fira Sans;
  letter-spacing: -0.64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  gap: 16px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-top: 16px;
    justify-content: space-between;
  }
`;

export const Email = styled.a`
  margin-top: 8px;
  transition: 0.5s ease;
  @media screen and (min-width: 768px) {
    margin-top: 0px;
    margin-left: 77px;
    margin-right: 20px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 492px;
    margin-right: 140px;
  }
  &:hover,
  &:focus {
    transition: 0.5s ease;
    color: var(--main-green-color);
  }
`;

export const MapLink = styled.a`
  transition: 0.5s ease;
  &:hover,
  &:focus {
    color: var(--main-green-color);
    transition: 0.5s ease;
  }
`;
