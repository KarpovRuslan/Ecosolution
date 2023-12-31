import React, { useState } from "react";
import faqData from "../helpers/faqData.json";
import icons from "../../utils/img/icons.svg";
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
  Icon,
  LowerText,
  Btn,
  InnerText,
  InnerCircle,
  ArrowIcon,
  CardListWrapper,
} from "./Faq.styled";

const Faq = () => {
  const [show, setShow] = useState([false, true, true, true, true]);

  const handleToggle = (index) => {
    setShow((prevStates) => {
      return prevStates.map((_, i) => (i === index ? !prevStates[i] : true));
    });
  };
  const handleClick = () => {
    const headerHeight = document.getElementById("header").offsetHeight;
    const clickAndGoTo = document.getElementById("contact");
    if (clickAndGoTo) {
      const scrollPosition = clickAndGoTo.offsetTop - headerHeight;
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Wrapper id="faq">
      <Title>Frequently Asked Questions</Title>
      <CardListWrapper>
        {faqData.map((faq, index) => (
          <CardList key={index}>
            <GreenLine key={index} />
            <CardWrapper>
              <CardWrapperUpper>
                <ButtonIcon type="button" onClick={() => handleToggle(index)}>
                  {show[index] ? (
                    <Icon>
                      <use href={icons + "#icon-add"} />
                    </Icon>
                  ) : (
                    <Icon>
                      <use href={icons + "#icon-minus"} />
                    </Icon>
                  )}
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
        <Btn type="button" onClick={handleClick}>
          <InnerText>Contact Us</InnerText>
          <InnerCircle>
            <ArrowIcon>
              <use href={icons + "#icon-arrow-right"} />
            </ArrowIcon>
          </InnerCircle>
        </Btn>
      </LowerText>
    </Wrapper>
  );
};

export default Faq;
