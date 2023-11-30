import styled from "styled-components";
import show from "../../utils/img/add.svg";
import unShow from "../../utils/img/minus.svg";
import arrow from "../../utils/img/arrow-right.svg";

export const Wrapper = styled.section`
  margin-top: 36px;
  grid-template-columns: 1fr;
  grid-template-areas:
    "cardListWrapper"
    "titleAndLowerText";
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "cardListWrapper titleAndLowerText";
    column-gap: 24px;
    margin-top: 100px;
  }
  @media screen and (min-width: 1280px) {
    column-gap: 48px;
    margin-top: 120px;
  }
`;

export const CardListWrapper = styled.ul`
  grid-area: cardListWrapper;
`;

export const Title = styled.p`
  color: #173d33;
  font-family: Oswald;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;
  margin-bottom: 24px;
  grid-area: titleAndLowerText;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 0px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 48px;
    line-height: 48px;
    width: 398px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const GreenLine = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  flex-shrink: 0;
  background-color: var(--main-green-color);
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const CardList = styled.li`
  margin-top: 16px;
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0px;
  }
  @media screen and (min-width: 768px) {
    &:first-child {
      margin-top: 0px;
    }
  }
  @media screen and (min-width: 1280px) {
    margin-top: 24px;
    margin-bottom: 24px;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardWrapperUpper = styled.div`
  display: flex;
  align-items: center;
`;

export const CardQuestionTitle = styled.p`
  color: var(--main-dark-green-color);
  text-align: justify;
  font-family: Fira Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;
  margin-left: 8px;
  @media screen and (min-width: 768px) {
    margin-left: 16px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 24px;
    letter-spacing: -0.96px;
    margin-left: 24px;
  }
`;
export const CardQuestionAnswer = styled.p`
  color: var(--main-dark-green-color);
  text-align: justify;
  font-family: Fira Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;
  margin-left: 24px;
  margin-top: 16px;
  @media screen and (min-width: 768px) {
    margin-left: 44px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
    letter-spacing: -0.64px;
    margin-left: 52px;
    margin-top: 24px;
  }
`;

export const ButtonIcon = styled.button`
  display: flex;
  width: 16px;
  height: 16px;
  border-radius: 40%;
  border: none;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  transition: 0.5s ease;
  &:hover,
  &:focus {
    transition: 0.5s ease;
  }
  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const Show = styled.img`
  width: 16px;
  height: 16px;
  content: url(${show});
  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const UnShow = styled.img`
  width: 16px;
  height: 16px;
  content: url(${unShow});
  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const LowerText = styled.p`
  color: var(--main-dark-green-color);
  text-align: justify;
  font-family: Fira Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  margin-top: 36px;
  grid-area: titleAndLowerText;
  @media screen and (min-width: 768px) {
    justify-content: end;
  }
`;

export const InnerCircle = styled.p`
  display: flex;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: none;
  align-items: center;
  justify-content: center;
  background-color: var(--main-dark-green-color);
  transition: 0.5s ease;
`;

export const Btn = styled.button`
  display: inline-flex;
  height: 39px;
  padding: 10px 16px;
  margin-left: 12px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 500px;
  border: none;
  background-color: var(--main-green-color);
  color: var(--main-dark-green-color);
  transition: 0.5s ease;
  &:hover,
  &:focus {
    background-color: var(--main-dark-green-color);
    color: var(--main-green-color);
    transition: 0.5s ease;
    ${InnerCircle} {
      background-color: var(--main-green-color);
    }
  }
`;

export const InnerText = styled.p`
  font-family: Fira Sans;
  font-style: normal;
  line-height: normal;
  font-size: 16px;
  letter-spacing: -0.64px;
`;

export const ArrowIcon = styled.img`
  width: 14px;
  height: 14px;
  content: url(${arrow});
  transform: rotate(90deg);
`;
