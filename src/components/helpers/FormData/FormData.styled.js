import { styled, css } from "styled-components";

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 36px;
  margin-bottom: 36px;
  padding: 36px 12px;
  background-color: var(--second-backg-color);

  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
    padding: 36px 24px;
    &:first-child {
      margin-top: 0;
    }
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 120px;
    padding: 48px;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
  font-family: Fira Sans;
  letter-spacing: -0.64px;
  &:not(:first-child) {
    margin-top: 28px;
  }
`;

export const Input = styled.input`
  font-family: Fira Sans;
  font-size: 18px;
  letter-spacing: -0.72px;
  border-color: transparent;
  background-color: transparent;
  &:focus,
  &:hover {
    outline: 0px solid var(--main-dark-green-color);
  }

  &::placeholder {
    color: #bdbdbd;
  }

  border-bottom-color: var(--main-green-color);

  ${({ "data-has-error": hasError }) =>
    hasError &&
    css`
      border-bottom-color: var(--warning-color);
    `}
`;

export const ErrorMessageStyle = styled.p`
  margin-left: auto;
  color: var(--warning-color);
  margin-top: 8px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Btn = styled.button`
  display: inline-flex;
  height: 39px;
  margin-top: 16px;
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
  @media screen and (min-width: 1280px) {
    margin-top: 32px;
  }
`;

export const InnerText = styled.p`
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -0.64px;
`;

export const ArrowIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: var(--main-dark-green-color);
  fill: none;
  transition: 0.5s ease;
`;

export const InnerCircle = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  align-items: center;
  justify-content: center;
  background-color: var(--main-green-color);
`;
