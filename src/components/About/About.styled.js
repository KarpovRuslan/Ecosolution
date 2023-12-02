import styled from "styled-components";

export const Wrapper = styled.section`
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    margin-top: 100px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 122px;
  }
`;

export const TitleAbout = styled.p`
  font-family: Oswald;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 36px;
    width: 272px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 48px;
    line-height: 48px;
    width: 365px;
  }
`;

export const Text = styled.p`
  margin-top: 24px;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  @media screen and (min-width: 768px) {
    width: 342px;
    margin-left: 11px;
    margin-top: 0px;
  }
  @media screen and (min-width: 1280px) {
    width: 459px;
    margin-left: 161px;
  }
`;

export const TextWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const GreenLine = styled.span`
  @media screen and (min-width: 768px) {
    &:before {
      content: "";
      display: flex;
      height: 110px;
      border: 1px solid var(--main-green-color);
      flex-shrink: 0;
      margin-top: 3px;
      margin-left: 82px;
      margin-bottom: 0px;
    }
  }
  @media screen and (min-width: 1280px) {
    &:before {
      margin-top: 4px;
      margin-left: 254px;
      height: 87px;
    }
  }
`;

export const ValueWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 36px;
  @media screen and (min-width: 768px) {
    margin-top: 100px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "value1 value2 image1 image1"
      "image2 image2 value3 value4";
  }
  @media screen and (min-width: 1280px) {
    gap: 48px;
  }
`;

export const ValueCard = styled.div`
  text-align: center;
  background-color: var(--second-backg-color);
`;

export const ValueTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 12px;
  margin-bottom: 33px;
  @media screen and (min-width: 768px) {
    margin-bottom: 51px;
  }
  @media screen and (min-width: 1280px) {
    margin: 48px 24px 94px 24px;
  }
`;

export const ValueTitle = styled.p`
  font-family: Oswald;
  font-size: 16px;
  text-transform: uppercase;
  margin-left: 8px;
  line-height: 24px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 32px;
    line-height: 48px;
  }
`;

export const ValueTitleIcon = styled.img`
  width: 16px;
  height: 16px;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const ValueText = styled.p`
  text-align: justify;
  font-family: Fira Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;
  border-top: 1px solid var(--main-green-color);
  margin-left: 12px;
  margin-right: 12px;
  padding-top: 12px;

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    margin-left: 24px;
    margin-right: 24px;
    padding-top: 24px;
  }
`;

export const ValueImage = styled.img`
  display: none;
  width: 100%;
  max-height: 197px;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    display: block;
    max-height: 197px;
    grid-area: ${({ $area }) => $area};
  }
  @media screen and (min-width: 1280px) {
    max-height: 339px;
  }
`;

export const Icon = styled.svg`
  stroke: var(--white-color);
  fill: red;
  width: 16px;
  height: 16px;
  transition: 0.3s ease;
`;
