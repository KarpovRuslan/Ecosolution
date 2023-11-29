import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  gap: 8px;
`;

export const LinkIcon = styled.svg`
  fill: transparent;
  //stroke: var(--white-color);
  stroke: ${({ strokeColor }) => strokeColor || "var(--white-color)"};
  width: 24px;
  height: 24px;
  transition: 0.3s ease;
  &:hover,
  &:focus {
    stroke: var(--main-green-color);
  }
`;