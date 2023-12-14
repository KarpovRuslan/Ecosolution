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
  MapLink,
} from "./main.styled";

const Main = () => {
  const handleClick = () => {
    const headerHeight = document.getElementById("header").offsetHeight;
    const clickAndGoTo = document.getElementById("cases");
    if (clickAndGoTo) {
      const scrollPosition = clickAndGoTo.offsetTop - headerHeight;
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <Wrapper id="main">
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

          <Btn type="button" onClick={handleClick}>
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
          <MapLink
            href="https://www.google.com.ua/maps/search/79005,+Ukraine,+Lvivstreet.+Shota+Rustaveli,+7/@49.8313557,24.0323843,17z/data=!3m1!4b1?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </MapLink>
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
