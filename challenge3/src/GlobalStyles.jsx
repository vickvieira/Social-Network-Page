import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #F5F5F5;
    --black: #000000;
    --orange: #FE2E05;
    --yellow: #E9B425;

    --gray-900: #17181C;
    --gray-700: #1E1F23;
    --gray-650: #27282F;
    --gray-600: #2E2F36;
    --gray-300: #75767D;
    --gray-200: #A1A3A7;
  }

  body {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background: var(--gradient-background, linear-gradient(180deg, #2E2F36 0%, #17181C 100%));
    display: flex;
    width: 94.5rem;
    height: 84.875rem;
`;

export default GlobalStyle;