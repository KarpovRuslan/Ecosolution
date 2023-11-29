import React from 'react';
import Image from '../../utils/img/wind_turbine-min.jpeg';
import { ArrowIcon, Btn, InnerCircle, InnerText, Wrapper,Title,TitleWrapper,Text,MainWrapper,Email,AddressWrapper,CommonWrapper,LowerWrapper,CopyrightText,TitleImage } from './main.styled';

const Main = () => {
  return (
    <Wrapper>
        <CommonWrapper>
        <TitleWrapper>
            <Title>renewable energy for any task</Title>
        </TitleWrapper>
        
        <MainWrapper>
        <Text>
            Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass
        </Text>

        <Btn>
            <InnerText>Learn more</InnerText>
            <InnerCircle><ArrowIcon/></InnerCircle>
        </Btn>
        </MainWrapper>
        </CommonWrapper>
        <LowerWrapper>
            <AddressWrapper>
                <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
                <Email href="mailto:office@ecosolution.com">office@ecosolution.com</Email>
                <CopyrightText>ecosolution © 2023</CopyrightText>
            </AddressWrapper>
        </LowerWrapper>
        <TitleImage src={Image} alt="Wind turbine operation"/>
    </Wrapper>
  )
}

export default Main;