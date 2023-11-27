import React from "react";
import { BurgerButton, BurgerIcon, Logo, Wrapper } from "./header.styled";

const Header = () => {
  return <Wrapper>
    <Logo alt="logo"/>
<BurgerButton>
  <BurgerIcon/>
</BurgerButton>
  </Wrapper>;
};

export default Header;
