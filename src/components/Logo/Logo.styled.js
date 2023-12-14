import styled from "styled-components";
import { ReactComponent as LogoImage } from "../../utils/img/logo.svg";
import { ReactComponent as LogoHover } from "../../utils/img/logoHover.svg";

export const LogoImg = styled(LogoImage)`
  display: block;
`;

export const LogoInHover = styled(LogoHover)`
  display: none;
`;

export const LogoWrapper = styled.a`
  &:hover,
  &:focus ${LogoImg}, &:not(:hover) ${LogoInHover} {
    display: none;
  }
  &:hover,
  &:focus ${LogoInHover}, &:not(:hover) ${LogoImg} {
    display: block;
  }
`;
