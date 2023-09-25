import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  align-self: stretch;
  border-radius: 1rem;
  border: 2px solid var(--gray-600);
  background: var(--gray-700);

  .button {
    width: 6.31rem;
    height: 3.5rem;
  }

  .user-input {
    display: flex;
    padding: 0.5rem 1.5rem;
    align-items: center;
    flex: 1 0 0;
    border-radius: 2.875rem;
    background: var(--gray-650);
  }

  .post {
    display: flex;
    align-items: center;
    gap: 1rem;
    align-self: stretch;

    img {
      width: 2rem;
    }
  }
  .icons {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
  }

  .submit {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
  }
  .submit-button {
    display: flex;
    align-items: flex-start;
  }
`;
export const Input = styled.input`
  display: flex;
  padding: 0.5rem 1.5rem;
  align-items: center;
  flex: 1 0 0;
  border-radius: 2.875rem;
  background: var(--gray-650);
  font-family: Poppins;
  font-size: 0.875rem;
  color: var(--gray-300);
  border: none;
`;
