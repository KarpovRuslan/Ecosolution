import styled from "styled-components";
import arrow from "../../utils/img/arrow-right.svg";

export const Wrapper = styled.div`
  font-family: Fira Sans;
  width: 320px;
  @media screen and (min-width: 768px) {
    width: 708px;
  }
  @media screen and (min-width: 1280px) {
    width: 1242px;
  }
`;

export const CommonWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const TitleWrapper = styled.div`
  margin-top: 146px;
  @media screen and (min-width: 768px) {
    margin-top: 164px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 200px;
  }
`;

export const Title = styled.p`
  font-family: Oswald;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  width: 320px;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 48px;
    width: 301px;
    margin-bottom: 0px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 64px;
    line-height: 64px;
    width: 485px;
    height: 128px;
    font-style: normal;
  }
`;

export const Btn = styled.button`
  display: inline-flex;
  height: 39px;
  margin-top: 24px;
  margin-bottom: 2px;
  border-radius: 500px;
  padding: 4px 4px 4px 16px;
  gap: 12px;
  flex-shrink: 0;
  border: 1px solid var(--main-green-color);
  align-items: center;
  justify-content: center;
  background-color: var(--main-backg-color);
  color: var(--main-dark-green-color);
  transition: 0.5s ease;
  &:hover {
    background-color: var(--main-dark-green-color);
    color: var(--main-green-color);
    border-color: var(--main-dark-green-color);
    transition: 0.5s ease;
  }
  @media screen and (min-width: 768px) {
    margin-top: 43px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 20px;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 342px;
    margin-left: 65px;
    align-items: start;
    justify-content: space-between;
  }
  @media screen and (min-width: 1280px) {
    width: 363px;
    margin-left: 296px;
  }
`;

export const Text = styled.p`
  text-align: justify;
  line-height: normal;
  letter-spacing: -0.64px;
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    margin-top: 168px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 209px;
  }
`;

export const InnerText = styled.p`
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -0.64px;
`;

export const ArrowIcon = styled.img`
  width: 16px;
  height: 16px;
  content: url(${arrow});
`;

export const InnerCircle = styled.p`
  display: flex;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  align-items: center;
  justify-content: center;
  background-color: var(--main-green-color);
`;

export const TitleImage = styled.img`
  width:100%  
  height: 316px;
  flex-shrink: 0;
  object-fit: cover;
@media screen and (min-width: 768px){
  height: 550px;
    }
@media screen and (min-width: 1280px){
  height: 600px;
    }
`;

export const Email = styled.a`
  margin-top: 8px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    margin-top: 0px;
    margin-left: 77px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 492px;
  }
  &:hover,
  &:focus {
    color: var(--main-green-color);
  }
`;

export const ButtonCloseSVG = styled.svg`
  stroke: var(--white-color);
  width: 20px;
  height: 20px;
  transition: 0.3s ease;
`;

export const AddressWrapper = styled.div`
  letter-spacing: -0.64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-top: 16px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 12px;
  }
`;

export const LowerWrapper = styled.div`
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    margin-bottom: 34px;
  }
  &:before {
    content: "";
    display: flex;
    width: 100%;
    border: 1px solid var(--main-green-color);
    flex-shrink: 0;
    margin-top: 24px;
  }
`;

export const CopyrightText = styled.p`
  margin-left: 50px;
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 167px;
  }
`;
