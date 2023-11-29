import styled from 'styled-components';
import burgerMenu from '../../utils/img/burger.svg'
import arrow from '../../utils/img/arrow-right.svg'

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0;
  background-color: ${(props) => (props.isScrolled ? '#fff' : 'transparent')};  
  position: sticky;
  top: 0;
  z-index: 30;

  @media screen and (min-width: 768px) {
    height: 68px;
  }
  @media screen and (min-width: 1280px) {
    padding: 0;
  }
`;

export const BurgerButton =styled.button`
display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  align-items: center;
  justify-content: center;
  background-color: var(--second-light-green-color);
  transition: 0.5s ease;
  &:hover,
  &:focus {
    background-color: var(--main-green-color);
    transition: 0.5s ease;
  }
`;

export const BurgerIcon =styled.img`
width: 16px;
  height: 16px;
  content: url(${burgerMenu});
`;

export const InnerCircle =styled.button`
  display: flex;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: none;
  align-items: center;
  justify-content: center;
  background-color: var( --main-dark-green-color);
  transition: 0.5s ease;
`;

export const Btn =styled.button`
@media screen and (max-width: 767px) {
    display: none;
  }
  display: inline-flex;
  height: 39px;
  padding: 10px 16px;
  margin-left: 12px;
    justify-content: center;
    align-items: center;
    gap: 12px;
  border-radius: 500px;
  border:none;
  background-color: var(--main-green-color);
  color: var(--main-dark-green-color);
  transition: 0.5s ease;
  &:hover,
  &:focus {
    background-color: var( --main-dark-green-color);
    color: var(--main-green-color);
    transition: 0.5s ease;
    ${InnerCircle}{
        background-color: var(--main-green-color);
    }
  }
  
`;

export const InnerText = styled.p`
font-family: Fira Sans;
font-style: normal;
line-height: normal;
font-size:16px;
letter-spacing: -0.64px;
`;

export const ArrowIcon =styled.img`
width: 14px;
  height: 14px;
  content: url(${arrow});
  transform: rotate(90deg);
`;

export const ButtonsWrapper = styled.div`
  display: flex;`;