import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 30px;
  width: 100%;
`;

export const Content = styled.div`
  max-width: 1279px;
  margin: 10px auto;
`;

export const ProductsCount = styled.div`
  font-size: 1.6rem;
  margin-bottom: 10px;
  color: #999591;
`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;

  @media (min-width: 545px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 785px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1030px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
