import React from 'react'
import Logo from '../Logo/Logo';
import { Wrapper,ArrowIcon, InnerCircle,GreenLine,LinksWrapper,AddressWrapper,Email } from './Footer.styled';
import SocialLinks from '../SocialLinks/SocialLinks';

const Footer = () => {
  return (
  <>
  <GreenLine/>
    <Wrapper>
        <Logo/>
            <InnerCircle><ArrowIcon/></InnerCircle>
    </Wrapper>
    <LinksWrapper>
    <SocialLinks strokeColor="var(--main-dark-green-color)"/>
    </LinksWrapper>
    
            <AddressWrapper>
                <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
                <Email href="mailto:office@ecosolution.com">office@ecosolution.com</Email>
                <p>ecosolution © 2023</p>
            </AddressWrapper>
  </>
    
  )
}

export default Footer;