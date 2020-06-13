import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface IContainerProps {
  type?: 'success' | 'error' | 'info';
  has_description: number;
}

const toastTypeVariations = {
  info: css`
    color: #3172b7;
    background: #ebf8ff;
  `,
  success: css`
    color: #2e656a;
    background: #e6fffa;
  `,
  error: css`
    color: #c53030;
    background: #fddede;
  `,
};

export const Container = styled(animated.div)<IContainerProps>`
  position: relative;
  width: 360px;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;

  ${({ type }) => toastTypeVariations[type || 'info']}
  & + div {
    margin-top: 8px;
  }

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    strong {
      color: #322153;
      font-size: 1.5rem;
    }

    p {
      margin-top: 4px;
      font-size: 1.4rem;
      opacity: 0.8;
      line-height: 20px;
      color: #6c6c80;
    }
  }

  button {
    position: absolute;
    top: 19px;
    right: 16px;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${({ has_description }) =>
    !has_description &&
    css`
      align-items: center;
      svg {
        margin-top: 0;
      }
    `}
`;
