import styled from "styled-components";

export const Conteiner = styled.div`
display: flex;
width: 14.5rem;
padding: 1.5rem 1.25rem;
flex-direction: column;
align-items: flex-start;
gap: 1.5rem;
border-radius: 1rem;
border: 2px solid var(--gray-600);
background: var(--gray-700);

.title {
    display: flex;
justify-content: space-between;
align-items: flex-start;
align-self: stretch;

h4{
    color: #FFF;
    font-family: Inter;
    font-size: 1rem;
    font-weight: 400;
    line-height: normal;
    margin: 0rem;
    }
}

.items {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 0rem;
    margin: 0rem;
    }
.item {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    img {
        width: 2rem;
    }
    p{
        font-size: 0.875rem;
    }
}
`;
