import styled, { keyframes } from 'styled-components';

interface IContainerProps {
  visible: number;
}

const appearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.li<IContainerProps>`
  a {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    margin: auto;
    background: #28262e;

    border-radius: 10px;

    animation: ${appearFromBottom} 1s;

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
      overflow: hidden;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;

      img {
        width: 100%;
        overflow: hidden;
        transition: transform 0.3s;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }

      &:hover {
        img {
          transform: scale(1.2);
        }
      }
    }

    section {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px 0;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;

      p {
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        overflow: hidden;
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
      }

      p + span,
      .product__price {
        color: #f9f9f9;
        font-size: 1.4rem;
        text-align: center;
      }

      .product__regularPrice {
        margin-right: 8px;
        font-size: 1.2rem;
        color: #999591;
        text-decoration: line-through;
      }
    }
  }
`;
