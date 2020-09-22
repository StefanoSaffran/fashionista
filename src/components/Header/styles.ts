import styled, { css } from 'styled-components';

interface IBadgeProps {
  hasProducts: number;
}

export const Container = styled.div`
  background: #28262e;
  padding: 0 30px;
  min-width: 300px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 3;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1279px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-weight: 600;
    font-size: 3rem;
    margin-right: 20px;
    color: #fff;
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: flex-end;

  div {
    flex-direction: row;
  }

  > button {
    background: none;
    border: none;
    margin-top: 5px;

    svg {
      color: #999591;
      width: 30px;
      height: 30px;

      &:hover {
        color: #ff9000;
      }
    }
  }
`;

export const Badge = styled.button<IBadgeProps>`
  position: relative;

  sup {
    display: none;
    align-items: center;
    justify-content: center;
    background: #ff9000;
    position: absolute;
    width: 18px;
    height: 18px;
    right: 0;
    top: 0;
    border-radius: 50%;
    visibility: hidden;
    transition: all 0.5s;
  }
  ${({ hasProducts }) =>
    hasProducts &&
    css`
      sup {
        visibility: visible;
        display: flex;
      }
    `}
`;
