import styled from "styled-components";

export const Headers = styled.header`
height: 4.5625rem;
padding: 0rem 1.75rem;
justify-content: space-between;
align-items: center;
align-self: stretch;
border-top: 2px solid var(--gray-600);
border-right: 2px solid var(--gray-600);
border-bottom: 2px solid var(--gray-600);
background: var(--gray-700);
display: flex;
`;

export const Arrow = styled.div`
border-radius: 3.125rem;
border: 2px solid var(--gray-gray-650, #27282F);
background: var(--gradient-button, linear-gradient(180deg, #AD2D14 0%, #F42E07 100%));
i {
    color: car(--orange);
}
`;

export const Div = styled.div`

.open {
    display: flex;
}

p {
    color: #FFF;
    font-family: Poppins;
    font-size: 1rem;
    margin: 0rem;
}
.menu{
    display: flex;
    padding: 0.625rem;
    justify-content: flex-end;
    align-items: center;
    gap: 0.625rem;
}
.arrow{
    display: flex;
    width: 28.0625rem;
    align-items: center;
    gap: 0.75rem;
}

`;

