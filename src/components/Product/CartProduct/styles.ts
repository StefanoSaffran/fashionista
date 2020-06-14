import styled from 'styled-components';

export const Container = styled.li`
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  -webkit-box-align: center;
  align-items: center;
  font-size: 1.3rem;
  justify-content: space-between;

  & + li {
    border-top: 1px solid #ccc;
    margin-top: 10px;
    padding-top: 10px;
  }

  .card__picture {
    height: 150px;
    margin-bottom: 15px;
    img {
      height: 100%;
      border-radius: 8px;
    }
  }

  .product__info {
    flex: 1 1 60%;
    padding: 0 5px;
    display: flex;
    flex-direction: column;
    margin-bottom: 57px;

    @media (max-width: 350px) {
      flex: 1 1 30%;
    }

    span:first-child {
      font-weight: 600;
      margin-top: 0;
      margin-bottom: 0.5rem;
      color: #fff;
    }

    span:nth-child(2) {
      margin-bottom: 0.5rem;
      color: #999591;
    }

    span:nth-child(3) {
      margin-bottom: 50px;
      color: #999591;

      b {
        margin-right: 5px;
        color: #ff9000;
      }
    }
  }

  .product__quantity {
    display: flex;
    align-items: center;
    justify-content: center;

    > button {
      background: none;
      border: 0;
      padding: 6px 8px;
    }

    > input {
      background: #312e38;
      color: #fff;
      width: 50px;
      text-align: center;
      border: 1px solid #ff900011;
      border-image: initial;
      border-radius: 3px;
      padding: 6px;
    }
  }

  .product__price {
    width: 30%;
    text-align: right;
    padding-right: 5px;

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

  .subtotal {
  }

  > button {
    background: none;
    border: 0;
    padding: 6px 8px;

    svg {
      color: #999591;

      &:hover {
        color: #ff9000;
      }
    }
  }
`;
