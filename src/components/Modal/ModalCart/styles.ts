import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  height: 40px;
  border-bottom: 1px solid #232129;
  padding-bottom: 5px;

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

  > button {
    padding: 16px;
    background: #ff9000;
    font-size: 1.5rem;
    border-radius: 10px;
    color: #f4ede8;
    border: 2px solid #232129;
    max-height: 56px;
    margin: 35px 0 10px;
    font-weight: 600;
    margin: auto 10px 5px;

    &:hover {
      background-color: ${shade(0.1, '#ff9000')};
    }

    &:active {
      background: #232129;
      color: #ff9000;
      border-color: #ff9000;
    }
  }
`;

export const Products = styled.ul`
  display: flex;

  justify-content: flex-start;
  flex-direction: column;
  background: #28262e;
  margin: 10px 10px 0;
  border-radius: 8px;
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
`;

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  span {
    color: rgb(153, 153, 153);
    font-weight: bold;
    font-size: 1.6rem;
  }

  strong {
    font-size: 2.8rem;
    margin-left: 8px;
  }
`;
