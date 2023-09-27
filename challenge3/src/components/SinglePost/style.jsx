import styled from "styled-components";

export const Article = styled.article`
  display: flex;
  padding: 1rem 0rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
  border-radius: 1rem;
  border: 2px solid var(--gray-600);
  background: var(--gray-700);

  .post-img{
    align-self: stretch;
  }
  .post {
    display: flex;
    align-items: center;
    gap: 1rem;
    align-self: stretch;
    width: 41.625rem;

    img {
      width: 2rem;
    }
  }
  
  .info {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .content {
    display: flex;
    padding: 0rem 1rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    font-size: 0.75rem;
  }
  .description {
    font-size: 0.75rem;
    width: 43rem;
  }

  hgroup {
    color: #fff;
    font-family: Poppins;
    h4 {
      margin: 0rem;
      font-size: 0.875rem;
      font-weight: 400;
    }
    p {
      color: var(--gray-300);
      font-size: 0.75rem;
      font-weight: 400;
      b {
        color: white;
      }
      svg {
        padding-right: 0.38rem;
      }
    }
  }

  .post-actions{
    display: flex;
    height: 2.1875rem;
    padding: 0.625rem 3rem;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;

    button{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        border: none;
        background: transparent;

        p{
            color: var(--gray-200);
            font-family: Inter;
            font-size: 0.75rem;
        }
    }
  }

  .icons {
    display: flex;
    align-items: flex-start;
    gap: 1.0625rem;
  }

  .comments {
    display: flex;
    padding: 0rem 1rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    align-self: stretch;

    button {
        background: none;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        align-self: stretch;
        padding-top: 1rem;
        border-top: 0.125rem solid var(--gray-650);

        p{
            color: var(--yellow);
            font-family: Inter;
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }
    }
  }
  .comment{
    display: flex;
    align-items: center;
    gap: 1rem;
    align-self: stretch;

    img{
        width: 1.5rem;
        display: flex;
        align-items: flex-start;
        gap: -0.0625rem;
        align-self: stretch;
    }
  }

  .text-comment {
    font-size: 0.625rem;
    color: #D9D9D9;
    font-weight: 400;

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

export const UpperDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
align-self: stretch;
padding-right: 1rem;
`;

export const Options = styled.div`
.dots {
  background: none;
    border: none;
}
`;

export const Menu = styled.div`
display: flex;
width: 13.5rem;
padding: 0.5625rem 0.5rem;
flex-direction: column;
align-items: flex-start;
border-radius: 0.5rem;
background: var(--gray-white, #FFF);
box-shadow: 0px 48px 88px -4px rgba(23, 9, 54, 0.06);

.edit, .delete {
background: none;
border: none;
display: flex;
padding: 0.75rem;
align-items: center;
gap: 0.75rem;
align-self: stretch;
font-family: Inter;
font-size: 0.875rem;
line-height: 1.5rem; /* 171.429% */
letter-spacing: -0.00875rem;

}

textarea{
  font-family: Poppins;
    color: white;
    margin-top: 1rem;
    width: 40rem;
    margin-left: -59rem;
    position: absolute;
    display: flex;
    padding: 0.5rem 1.5rem;
    align-items: center;
    flex: 1 0 0;
    border-radius: 2.875rem;
    background: var(--gray-gray-650, #27282F);
}

.save {
  position: absolute;
  background: white;
  border: none;
margin-top: 2.5rem;
    margin-left: -20rem;
    font-family: Inter;
    font-size: 0.875rem;
    line-height: 1.5rem;
    letter-spacing: -0.00875rem;
    border-radius: 0.5rem;
}
`;
