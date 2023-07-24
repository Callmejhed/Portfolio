import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  & nav {
    height: 4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    & .nav-list {
      display: flex;
      gap: 3rem;
      list-style: none;

      & li > a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
`;

export const MWrapper = styled.header`
  positon: relative;

  & nav {
    height: 4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  & .drawer {
    height: 100vh;
    width: 15vw;
    position: absolute;
    top: 0;
    display: grid;
    justify-content: start;
    align-items: start;
    padding: 5rem 0 0 3rem;
    // transform: translateX(-101%); hides the drawer

    & ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      & #close-btn {
        text-align: right;
      }

      & li > a {
        font-size: 1.6rem;
        text-decoration: none;
        color: inherit;
      }
    }
  }
`;
