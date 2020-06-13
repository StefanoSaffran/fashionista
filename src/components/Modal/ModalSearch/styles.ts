import styled, { keyframes } from 'styled-components';

const scaleAndRotate = keyframes`
  0% {
    transform: scale(1.0) rotate(0deg);
  }
  100% {
    transform: scale(1.6) rotate(20deg) translateY(-15px);
  }
`;

export const Header = styled.header`
  height: 112px;

  div.header__context {
    display: flex;
    align-items: center;
    padding: 0 10px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      background: transparent;
      color: #fff;
    }

    span {
      font-size: 1.6rem;
      margin-left: 15px;
    }
  }
`;

export const Body = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const InputWrapper = styled.div`
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #232129;

  input {
    background: #232129;
    color: #f4ede8;
    border: 2px solid #232129;
    border-radius: 10px;
    padding: 16px;
    width: 100%;
    font-size: 1.5rem;
  }
`;
export const Products = styled.ul`
  display: flex;
  height: 100%;
  justify-content: flex-start;
  flex-direction: column;
`;

export const Empty = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 1.6rem;
    margin-bottom: 25px;
  }

  svg {
    animation: ${scaleAndRotate} 2s infinite ease-in-out alternate;
  }
`;
