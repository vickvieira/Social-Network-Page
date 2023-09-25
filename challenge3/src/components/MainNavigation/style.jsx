import styled from 'styled-components';

export const Ul = styled.ul`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 12rem;
list-style-type: none;
padding: 0rem;
color: var(--white);
margin: 0rem;

font-family: Inter;
font-size: 0.875rem;
letter-spacing: -0.0175rem;

border-radius: 0.5rem;
border: 2px solid var(--gray-600);
a {
    display: flex;
    width: 12rem;
    padding: 0.75rem 1.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    color: white;
    font-weight: 400;
    line-height: 1.5rem;
}
a:hover {
    color: var(--orange);
}
a.active {
    color: var(--gray-700);
    background: var(--orange);
    :hover {
        color: var(--white);
    }
}
`
export const Nav = styled.nav`
background: var(--gray-700);
border: 2px solid var(--gray-600);
display: flex;
width: 21.875rem;
padding: 1.625rem 0.625rem;
flex-direction: column;
align-items: center;
gap: 1.5rem;
align-self: stretch;

img {
    width: 17rem;
}

left: ${props => props.navigation ? '0' : '-100%'};
animation: showSidebar .4s;
`;