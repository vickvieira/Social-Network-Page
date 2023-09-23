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

   --gradient-button: linear-gradient(180deg, #AD2D14 0%, #F42E07 100%);
   --gradient-background: linear-gradient(180deg, #2E2F36 0%, #17181C 100%);

  }

  body {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background: var(--gradient-background, linear-gradient(180deg, #2E2F36 0%, #17181C 100%));
    height: 84.875rem;
    margin: 0rem;
    }

    input {
        color: white;
      }
      
    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;