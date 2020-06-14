import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 45px;
  right: 0;
  padding: 30px;
  overflow: hidden;

  @media (max-width: 400px) {
    width: 100%;
    padding: 0;
    top: 100px;
  }
`;
