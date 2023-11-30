import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const IconLeft = styled.svg`
  width: 36px;
  height: 36px;
  transform: rotate(180deg);
  fill: transparent;
  stroke: rgba(23, 61, 51, 1);
  transition: 0.5s ease;
`;

export const IconRight = styled.svg`
  width: 36px;
  height: 36px;
  fill: transparent;
  stroke: rgba(23, 61, 51, 1);
  transition: 0.5s ease;
`;

export const CustomButton = styled.button`
  display: inline-flex;
  padding: 15px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 100px;
  border: 1px solid var(--main-dark-green-color);
  background-color: transparent;
  transition: 0.5s ease;
  &:hover {
    border-color: var(--main-green-color);
    transition: 0.5s ease;
    & ${IconLeft} {
      stroke: var(--main-green-color);
    }
    & ${IconRight} {
      stroke: var(--main-green-color);
    }
  }
`;
