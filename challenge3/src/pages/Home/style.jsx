import styled from "styled-components";

export const Div = styled.div`
background: var(--gray-900);
h1{
margin: 0rem;
}
display: flex;
padding: 2.25rem;
align-items: flex-start;
gap: 2.25rem;
align-self: stretch;

.posts {
    display: flex;
flex-direction: column;
align-items: center;
gap: 1.5rem;
flex: 1 0 0;
align-self: stretch;
}
`;