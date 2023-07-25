import styled from "styled-components";

export const Wrapper = styled.section`
  height: 100vh;
  display: grid;
  place-items: center;

  & .container {
    padding: 1.25rem;
    width: 80%;
    min-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    & article {
      display: flex;
      gap: 3rem;
      align-items: top;

      & h4 {
        width: 25rem;
        text-align: right;
      }
    }

    & > :nth-child(3) {
      & ul {
        margin-left: 1.25rem;
        margin-top: 0.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        list-style-image: url(${(props) => {
          props.image;
        }});
      }
    }

    & a{
        align-self: center;
        color: inherit;
        text-decoration: none;
        padding: .5rem 1.25rem;

        &:hover{
            transform: scale(1.25);
        }
    }
  }
`;
