import React from "react";
import {
  Wrapper,
  Link,
  Text,
  TitleText,
  BlockWrapper,
  FormDataWrapper,
  Icon,
} from "./Contact.module";
import SocialLinks from "../SocialLinks/SocialLinks";
import FormData from "../helpers/FormData/FormData";
import icons from "../../utils/img/icons.svg";

const Contact = () => {
  return (
    <>
      <TitleText id="contact">Contact us</TitleText>
      <Wrapper>
        <BlockWrapper>
          <Text>Phone:</Text>
          <Link href="tel:380981234567">
            <Icon>
              <use href={icons + "#icon-call"} />
            </Icon>
            38 (098) 12 34 567
          </Link>
          <Link href="tel:380931234567">
            <Icon>
              <use href={icons + "#icon-call"} />
            </Icon>
            38 (093) 12 34 567
          </Link>
          <Text>E-mail:</Text>
          <Link href="mailto:office@ecosolution.com">
            <Icon>
              <use href={icons + "#icon-sms"} />
            </Icon>
            office@ecosolution.com
          </Link>
          <Text>Address:</Text>
          <Link
            href="https://www.google.com.ua/maps/search/79005,+Ukraine,+Lvivstreet.+Shota+Rustaveli,+7/@49.8313557,24.0323843,17z/data=!3m1!4b1?entry=ttu"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <Icon>
              <use href={icons + "#icon-map"} />
            </Icon>
            79005, Ukraine, Lvivstreet. <br /> Shota Rustaveli, 7
          </Link>
          <Text>Social Networks:</Text>
          <div style={{ marginTop: 20, marginLeft: 12 }}>
            <SocialLinks color="var(--main-dark-green-color)" />
          </div>
        </BlockWrapper>
        <FormDataWrapper>
          <FormData />
        </FormDataWrapper>
      </Wrapper>
    </>
  );
};

export default Contact;
