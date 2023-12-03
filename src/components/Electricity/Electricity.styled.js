import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 36px;
  padding-bottom: 36px;
  @media screen and (min-width: 768px) {
    padding-bottom: 100px;
    padding-top: 100px;
  }
  @media screen and (min-width: 1280px) {
    padding-bottom: 120px;
    padding-top: 120px;
  }
`;

export const GreenLine = styled.span`
  display: block;
  width: 2px;
  height: 48px;
  background-color: var(--main-green-color);
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    height: 87px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 16px;
  }
`;

export const TitleElectricity = styled.p`
  color: var(--main-dark-green-color);
  text-align: center;
  font-family: Oswald;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 36px;
    width: 368px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 48px;
    line-height: 48px;
    width: 491px;
  }
`;

export const WrapperElectricity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  gap: 8px;
  @media screen and (min-width: 1280px) {
    margin-top: 17px;
  }
`;

export const TextNumbers = styled.div`
  color: var(--main-green-color);
  text-align: center;
  font-family: Oswald;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    font-size: 100px;
    line-height: 100px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 164px;
    line-height: 164px;
  }
`;

export const NumberValue = styled.span`
  color: var(--main-dark-green-color);
  text-align: center;
  font-family: Oswald;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 48px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 48px;
    line-height: 48px;
  }
`;
