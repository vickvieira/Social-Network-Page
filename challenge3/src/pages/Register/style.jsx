import styled from 'styled-components';


export const RegisterPage = styled.section`
  color: var(--white);
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;

  .form {
    gap: 1.5rem;
    margin-top: 3.5rem;
    display: grid;
    justify-content: center;
  }
  hgroup {
    gap: 1.5rem;
    display: grid;

    h1 {
      font-size: 4rem;
      font-weight: 500;
      margin: 0rem;
    }
    p {
      font-size: 1rem;
      margin: 0rem;
    }
  }
  h2 {
    margin: 0rem;
    font-size: 2rem;
    font-weight: 400;
  }

  .cadastro {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 1.5rem;

    h2 {
      padding: 0rem 0.5rem;
    }
  }

  .half {
    width: 100%;
  }

  .background {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex: 1 0 0;
    align-self: stretch;
  }

  .login {
    a {
      color: var(--white);
      text-decoration: none;
    }
  }
  .redirect {
    text-align: center;
    margin: 0rem;

  }
`;

