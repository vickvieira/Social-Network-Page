import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  width: 406px;
  height: 3.5rem;
  padding: 1rem 1.5rem;
  align-items: center;
  justify-content: center;
  font-family: Poppins;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 46px;

  background: ${(props) => props.primary ? "var(--gradient-button)" : "var(--gradient-background)"};
  border: ${(props) => props.primary ? "1px solid var(--orange)" : "1px solid var(--gray-900)"};
  color: white;

  &:hover {
    background: ${(props) => props.primary ? "var(--gradient-button)" : "var(--gradient-background)"};
    color: ${(props) => (props.primary ? "var(--gray-900)" : "var(--orange)")};
  }
`;