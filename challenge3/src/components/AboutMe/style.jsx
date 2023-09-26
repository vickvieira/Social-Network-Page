import styled from "styled-components";

export const Address = styled.address`
padding-left: 1.5rem;
padding-right: 1.5rem;
padding-top: 1.5rem;
justify-content: center;
align-items: center;
gap: 0.625rem;
border-radius: 1rem;
border: 2px solid var(--gray-600);
background: var(--gray-700);

display: flex;
width: 20rem;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 1.5rem;

color: var(--white);
font-family: Nunito;
font-size: 1.25rem;
font-style: normal;
font-weight: 700;
line-height: normal;

p{
    color: var(--white, #F5F5F5);
font-family: Nunito;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;
opacity: 0.7;
}
`;

export const Div = styled.div`
display: flex;
align-items: center;
gap: 0.75rem;
align-self: stretch;
padding-bottom: 1.5rem;

.icon {
    display: flex;
    width: 1.25rem;
    height: 1.25rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
}
`;