import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  height: 25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  align-self: stretch;
  border-radius: 1rem;
  border: 2px solid var(--gray-600);
  background: var(--gray-700);

  hgroup {
    margin-top: 1.565rem;
    margin-left: 13rem;
    h3 {
      color: var(--yellow);
      font-family: Nunito;
      font-size: 1.875rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin: 0rem;
    }
    p {
      color: var(--yellow);
      font-family: Nunito;
    }
  }
  .button {
    width: 8.9rem;
    height: 3.5rem;
    padding: 1rem 1.5rem;
  }
  .cover-info {
    display: flex;
    padding-right: 8.75rem;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
  }
`;

export const Div = styled.div`
height: 17.5rem;
flex-shrink: 0;
align-self: stretch;
border-radius: 1rem;

background-image: url(${props => props.imageurl});
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #C4C4C4;

img{
    margin-top: 8.75rem;
    margin-left: 2.88rem;
    width: 11.23875rem;
}
`
;