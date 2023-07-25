import styled from "styled-components";

export const Wrapper = styled.section`
  height: calc(100vh - 8rem);
  display: grid;
  place-items: center;

  & .container {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: left;

    & .text-container {
      display: flex;
      flex-direction: column;
      gap: .4rem;

      & h2 {
        font-weight: 700;
        font-size: 2rem;
      }
      & h3 {
        font-weight: 600;
        font-size: 1.75rem;
      }
      & p {
        font-weight: 400;
        font-size: 1.5rem;
      }
    }
  }
`;
