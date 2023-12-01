import React, { useEffect, useState } from "react";
import Image from "../../utils/img/wind_turbine-min.jpeg";
import icons from "../../utils/img/icons.svg";
import {
  ArrowIcon,
  Btn,
  InnerCircle,
  InnerText,
  Wrapper,
  Title,
  TitleWrapper,
  Text,
  MainWrapper,
  Email,
  AddressWrapper,
  CommonWrapper,
  LowerWrapper,
  CopyrightText,
  TitleImage,
} from "./main.styled";

const Main = () => {
  const [scrolled, setScrolled] = useState(0);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrolled(scrollPosition > 0);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    const clickAndGoTo = document.getElementById("cases");
    if (clickAndGoTo) {
      clickAndGoTo.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Wrapper id="main" scrolled={scrolled}>
      <CommonWrapper>
        <TitleWrapper>
          <Title>renewable energy for any task</Title>
        </TitleWrapper>

        <MainWrapper>
          <Text>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </Text>

          <Btn onClick={handleClick}>
            <InnerText>Learn more</InnerText>
            <InnerCircle>
              <ArrowIcon>
                <use href={icons + "#icon-arrow-right"} />
              </ArrowIcon>
            </InnerCircle>
          </Btn>
        </MainWrapper>
      </CommonWrapper>
      <LowerWrapper>
        <AddressWrapper>
          <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
          <Email href="mailto:office@ecosolution.com">
            office@ecosolution.com
          </Email>
          <CopyrightText>ecosolution © 2023</CopyrightText>
        </AddressWrapper>
      </LowerWrapper>
      <TitleImage src={Image} alt="Wind turbine operation" />
    </Wrapper>
  );
};

export default Main;
