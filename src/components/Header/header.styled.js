import styled from 'styled-components';
import logo from '../../utils/img/logo.png';
import logoHover from '../../utils/img/logoHover.png';
import burgerMenu from '../../utils/img/burger.svg'

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
  align-items: center;
  position: sticky;
  height: 40px;
  z-index: 30;
`

export const Logo = styled.img`
content: url(${logo});
  width: 269px;
  height: 40px;
  &:hover {
    content: url(${logoHover});
  }
`

export const BurgerButton =styled.button`
display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  align-items: center;
  justify-content: center;
  background-color: var(--second-light-green-color);
  &:hover {
    background-color: var(--main-green-color);
  }
`;

export const BurgerIcon =styled.img`
width: 16px;
  height: 16px;
  content: url(${burgerMenu});
`;