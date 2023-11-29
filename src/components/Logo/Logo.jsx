import React from 'react'
import { LogoInHover,LogoWrapper,LogoImg } from './Logo.styled';

const Logo = () => {
  return (
    <LogoWrapper href='/' aria-label="logo">
    <LogoImg/>
    <LogoInHover/>
  </LogoWrapper>
  )
}

export default Logo;