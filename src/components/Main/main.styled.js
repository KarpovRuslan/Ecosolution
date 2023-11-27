import styled from 'styled-components';

export const Btn =styled.button`
display: flex;
  width: 110px;
  height: 40px;
  border-radius: 50%;
  border: none;
  align-items: center;
  justify-content: center;
  background-color: var(--second-light-green-color);
  &:hover {
    background-color: var(--main-green-color);
  }
`;