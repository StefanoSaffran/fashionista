import styled from 'styled-components';

export const Container = styled.li`
  background: #28262e;
  margin: 10px;
  border-radius: 8px;

  button {
    font-size: 1.4rem;
    display: flex;
    flex-direction: row;
    border: 0;
    background: none;
    color: #ff9000;
    text-align: left;

    .card__picture {
      width: 25%;
      img {
        width: 100%;
        height: 100%;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }
    }

    .product__info {
      flex: 1;
      padding: 5px;
      display: flex;
      flex-direction: column;

      span:first-child {
        font-weight: 600;
        margin-top: 0;
        margin-bottom: 0.5rem;
        color: #fff;
      }

      span:last-child {
        margin-bottom: 50px;
        color: #999591;
        b {
          margin-right: 5px;
          color: #ff9000;
        }
      }
    }

    .product__price {
      width: 30%;
      text-align: right;
      padding: 5px;

      span:first-child {
        color: #fff;
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 600;
      }

      span:last-child {
        font-size: 1rem;
        opacity: 0.9;
      }
    }
  }
`;
