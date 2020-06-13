import { createGlobalStyle, css } from 'styled-components';

// import 'react-toggle/style.css';

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    font-size: 62.5%;
    height: 100%;
  }

  body {
    background: #312e38;
    color: #ff9000;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;

    .ReactModal__Overlay {
      opacity: 0;
      transition: all 500ms ease-in-out;
   }

    .ReactModal__Overlay--after-open {
      opacity: 1;
    }

    .ReactModal__Overlay--before-close {
      opacity: 0;
    }

    .ReactModal__Content {
      display: flex;
      flex-direction: column;
      width: 100%;

      opacity: 0;
      transform: translateX(150px);
      transition: all 500ms ease-in-out;

      @media (min-width: 610px) {
        width: 400px;
      }
    }

    .ReactModal__Content--after-open {
      opacity: 1;
      transform: translateX(0px);
    }

    .ReactModal__Content--before-close {
      opacity: 0;
      transform: translateX(150px);
    }
  }

  .ReactModal__Body--open {
     overflow-y: hidden;
   }

  body, input, button, input::placeholder, textarea::placeholder {
    font-family: 'Roboto Slab', serif;
  }

  input::placeholder, textarea::placeholder {
    color: #666360;
  }

  h1, h2, h3, h4, h5, h5, strong {
    font-weight: 500;
    color: #fff;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0px 1000px #232129 inset;
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }

  a {
    text-decoration: none;
    color: #ff9000;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
