import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const Wrapper = styled.section`
  padding-bottom: 36px;
  @media screen and (min-width: 768px) {
    padding-bottom: 100px;
  }
  @media screen and (min-width: 1280px) {
    padding-bottom: 120px;
  }
`;

export const TitleCase = styled.p`
  color: var(--main-dark-green-color);
  font-family: Oswald;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 36px;
    width: 264px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 48px;
    line-height: 48px;
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

export const GreenLineHorizontal = styled.span`
  @media screen and (min-width: 768px) {
    &:before {
      content: "";
      display: flex;
      height: 110px;
      border: 1px solid var(--main-green-color);
      flex-shrink: 0;
      margin-right: 40px;
    }
  }
  @media screen and (min-width: 1280px) {
    &:before {
      height: 87px;
    }
  }
`;

export const WrapperCase = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    margin-top: 0px;
    margin-left: -10px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 0px;
  }
`;

export const CurrentCase = styled.div`
  color: var(--main-dark-green-color);
  text-align: justify;
  font-family: Fira Sans;
  font-size: 28px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -1.12px;
  display: flex;
  align-items: flex-end;
`;

export const CurrentNumber = styled.p`
  margin-right: 5px;
`;
export const Total = styled.p`
  color: rgba(23, 61, 51, 0.25);
`;

export const WrapperSwiper = styled(Swiper)`
  width: 320px;
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    width: 100%;
    margin-top: 38px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 120px;
  }
`;

export const CaseSlide = styled(SwiperSlide)`
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const SlideBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  @media screen and (min-width: 768px) {
    height: 220px;
  }
  @media screen and (min-width: 1280px) {
    height: 340px;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 21px 12px 12px;
  background-color: var(--second-backg-color);
  gap: 21px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
  @media screen and (min-width: 1280px) {
    gap: 24px;
    padding: 48px;
  }
`;

export const DescriptionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 1280px) {
    gap: 50px;
  }
`;

export const TitleText = styled.h5`
  text-align: justify;
  font-family: Fira Sans;
  font-size: 18px;
  color: var(--main-dark-green-color);
  line-height: normal;
  letter-spacing: -0.8px;
  width: 175px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    width: 200px;
    min-height: 72px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 24px;
    width: 350px;
    min-height: 58px;
  }
`;

export const ButtonBlockIcon = styled.svg`
  width: 28px;
  height: 28px;
  transform: rotate(320deg);
  fill: transparent;
  stroke: rgba(23, 61, 51, 1);
  transition: 0.5s ease;
`;

export const ButtonBlock = styled.button`
  display: inline-flex;
  padding: 16px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 100px;
  border: none;
  width: 60px;
  height: 60px;
  background-color: var(--main-green-color);
  transition: 0.5s ease;
  &:hover,
  &:focus {
    background-color: var(--main-dark-green-color);
    transition: 0.5s ease;
    & ${ButtonBlockIcon} {
      stroke: var(--main-green-color);
    }
  }
`;

export const TextBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.p`
  text-align: justify;
  font-family: Fira Sans;
  font-size: 12px;
  color: var(--main-dark-green-color);
  line-height: normal;
  letter-spacing: -0.48px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;

export const WrapperData = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: auto 0fr auto;
    align-items: center;
  }
  @media screen and (min-width: 1280px) {
  }
`;
