import styled from 'styled-components';

export const InputBox = styled.section`
label {
    color: var(--gray-300);
    font-size: 1rem;
}

.input-field {
    input {
    display: flex;
    width: 22.4rem;
    height: 1.5rem;
    padding: 1.1875rem 1.5rem;
    justify-content: space-between;
    align-items: center;
    border-radius: 2.875rem;
    border: 2px solid var(--white);
    background: transparent;
    }

    img {
        position: absolute;
        margin-left: 22.5rem;
        margin-top: -2.7rem;
}
    }
}

`;