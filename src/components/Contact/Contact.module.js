import { styled } from "styled-components";

export const Wrapper = styled.section`
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 40px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 120px;
  }
`;

export const BlockWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const TitleText = styled.h1`
  color: var(--main-dark-green-color);
  font-family: Oswald;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;
  text-align: center;
  @media screen and (min-width: 1280px) {
    font-size: 36px;
    line-height: 36px;
  }
`;

export const Text = styled.p`
  color: var(--main-dark-green-color);
  text-align: justify;
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  margin-top: 24px;
  &:first-child {
    margin-top: 0;
  }
`;

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
  fill: transparent;
  stroke: rgba(23, 61, 51, 1);
  transition: 0.3s ease;
`;

export const Link = styled.a`
  font-size: 20px;
  font-family: Fira Sans;
  letter-spacing: -0.8px;
  display: flex;
  align-items: center;
  margin-top: 8px;
  gap: 8px;
  font-style: normal;
  color: var(--main-dark-green-color);
  transition: 0.3s ease;
  &:hover,
  &:focus {
    color: var(--main-green-color);
    transition: 0.3s ease;
    ${Icon} {
      stroke: var(--main-green-color);
    }
  }
`;
export const FormDataWrapper = styled.div`
  @media screen and (min-width: 768px) {
    grid-column: 2;
  }
`;
