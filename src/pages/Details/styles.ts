import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface IContentProps {
  visible: number;
}

interface ISelectProps {
  isFilled: number;
}

export const Container = styled.div`
  padding: 0 30px;
  width: 100%;

  > button {
    border: 0;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.5rem;
    margin: 5px 0;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Content = styled.div<IContentProps>`
  max-width: 1279px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  border-radius: 8px;

  background: #28262e;

  .card__discount {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 2;
    border-radius: 5px;
    padding: 2px;

    background: #ff9000;
    display: ${({ visible }) => !visible && 'none'};

    span {
      color: #28262e;
      padding: 2px 3px;
      font-size: 1.3rem;
      font-weight: bold;
    }
  }

  .card__picture {
    border-radius: 0;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    position: relative;

    img {
      border-radius: 0;
      width: 100%;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
  }

  @media (min-width: 785px) {
    flex-direction: row;

    .card__picture {
      border-top-right-radius: 0;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      width: 50%;

      img {
        border-top-right-radius: 0;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }
    }
  }
`;

export const ProductDetails = styled.div`
  font-size: 1.6rem;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    margin: 15px 0;
  }

  p {
    margin-bottom: 15px;
    b {
      text-decoration: line-through;
    }
    span {
      color: #999591;
    }
  }

  button {
    flex: 1;
    padding: 16px;
    background: #ff9000;
    width: 100%;
    font-size: 1.5rem;
    border-radius: 10px;
    color: #f4ede8;
    border: 2px solid #232129;
    max-height: 56px;
    margin: 35px 0 10px;
    font-weight: 600;

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

export const SelectWrapper = styled.div<ISelectProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  select {
    flex: 1;
    padding: 16px;
    padding-right: 0;
    background: #232129;
    width: 100%;
    font-size: 1.5rem;
    border-radius: 10px;
    color: #f4ede8;
    border: 2px solid #232129;
    max-height: 56px;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    ${({ isFilled }) =>
      isFilled &&
      css`
        border-color: #ff9000;
        color: #ff9000;
      `}
  }

  svg {
    color: #f4ede8;
    position: absolute;
    right: 15px;
    pointer-events: none;
    user-select: none;

    ${({ isFilled }) =>
      isFilled &&
      css`
        border-color: #ff9000;
        color: #ff9000;
      `}
  }
`;
