import styled from 'styled-components';

export const LoginPage = styled.section`
  color: var(--white);
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  background: var(--gradient-background, linear-gradient(180deg, #2E2F36 0%, #17181C 100%));

  .form {
    gap: 1.5rem;
    margin-top: 13.75rem;
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
      width: 25rem;
    }
  }
  h2 {
    margin: 0rem;
    font-size: 2rem;
    font-weight: 400;
  }

  .login {
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

  .register {
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