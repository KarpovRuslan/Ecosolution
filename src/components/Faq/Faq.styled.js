import styled from 'styled-components';
import arrow from '../../utils/img/arrow-right.svg'
import icons from "../../utils/img/icons.svg";

export const Wrapper = styled.section`
margin-top:36px;
`;

export const Title = styled.p`
color: #173D33;
font-family: Oswald;
font-size: 28px;
font-style: normal;
font-weight: 400;
line-height: 28px;
text-transform: uppercase;
margin-bottom:24px;
@media screen and (min-width: 768px){
    font-size: 36px;
    line-height: 36px;
    margin-bottom:0px;
  }
  @media screen and (min-width: 1280px){
    font-size: 48px;
    line-height: 48px;
  }
`;

export const GreenLine = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  flex-shrink: 0;
  background-color: var(--main-green-color);
`;

export const CardList = styled.li`
margin-top:16px;
margin-bottom:16px;
@media screen and (min-width: 1280px){
    margin-top:24px;
    margin-bottom:24px;
  }
`;

export const CardWrapper = styled.div`
display:flex;
flex-direction:column;
`;

export const CardWrapperUpper = styled.div`
display:flex;
`;

export const CardQuestionTitle = styled.p`
color: var(--main-dark-green-color);
text-align: justify;
font-family: Fira Sans;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.72px;
margin-left:8px;
@media screen and (min-width: 1280px){
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`;
export const CardQuestionAnswer = styled.p`
color: var(--main-dark-green-color);
text-align: justify;
font-family: Fira Sans;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.56px;
margin-left:24px;
margin-top:16px;
@media screen and (min-width: 768px){
    margin-left:44px;
  }
@media screen and (min-width: 1280px){
    font-size: 16px;
    letter-spacing: -0.64px;
    margin-left:52px;
    margin-top:24px;
  }
`;

export const ButtonIcon = styled.button`
display: flex;
  width: 24px;
  height: 24px;
  border-radius: 40%;
  border: none;
  align-items: center;
  justify-content: center;
  background-color: var(--second-light-green-color);
  transition: 0.5s ease;
  &:hover,
  &:focus {
    background-color: var(--main-green-color);
    transition: 0.5s ease;
  }
`;

export const Show = styled.image`
width: 14px;
  height: 14px;
  content: url(${arrow});
`;

export const UnShow = styled.image`
width: 14px;
  height: 14px;
  content: url(${icons} + "#icon-close");
`;