import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  gap: 8px;
`;

export const LinkIcon = styled.svg`
  fill: transparent;
  stroke: ${({ color }) => color || "var(--white-color)"};
  width: ${({ width }) => width || "24px"};
  height: ${({ height }) => height || "24px"};
  transition: 0.3s ease;
  &:hover,
  &:focus {
    stroke: var(--main-green-color);
    transition: 0.3s ease;
  }
`;
