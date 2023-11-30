import React, { useEffect, useState } from "react";
import faqData from "../helpers/faqData.json";
import {
  Wrapper,
  Title,
  GreenLine,
  CardList,
  CardWrapper,
  CardQuestionTitle,
  CardWrapperUpper,
  CardQuestionAnswer,
  ButtonIcon,
  Show,
  UnShow,
  LowerText,
  Btn,
  InnerText,
  InnerCircle,
  ArrowIcon,
  CardListWrapper,
} from "./Faq.styled";

export const Faq = () => {
  const [show, setShow] = useState([false, true, true, true, true]);
  const [scrolled, setScrolled] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrolled(scrollPosition > 0);
  };

  const handleToggle = (index) => {
    setShow((prevStates) => {
      return prevStates.map((_, i) => (i === index ? !prevStates[i] : true));
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    const clickAndGoTo = document.getElementById("contact");
    if (clickAndGoTo) {
      clickAndGoTo.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Wrapper id="faq" scrolled={scrolled}>
      <Title>Frequently Asked Questions</Title>
      <CardListWrapper>
        {faqData.map((faq, index) => (
          <CardList key={index}>
            <GreenLine key={index} />
            <CardWrapper>
              <CardWrapperUpper>
                <ButtonIcon onClick={() => handleToggle(index)}>
                  {show[index] ? <Show /> : <UnShow />}
                </ButtonIcon>
                <CardQuestionTitle>{faq.question}</CardQuestionTitle>
              </CardWrapperUpper>
              {!show[index] && (
                <CardQuestionAnswer>{faq.answer}</CardQuestionAnswer>
              )}
            </CardWrapper>
          </CardList>
        ))}
      </CardListWrapper>
      <LowerText>
        Didn't find the answer to your question?
        <Btn onClick={handleClick}>
          <InnerText>Contact Us</InnerText>
          <InnerCircle>
            <ArrowIcon />
          </InnerCircle>
        </Btn>
      </LowerText>
    </Wrapper>
  );
};
