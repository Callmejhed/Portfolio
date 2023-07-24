import styled from 'styled-components'

export const Wrapper = styled.section`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap-reverse;

    & .textcontainer{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    & .image-container{ 
        border: 1px solid;
        flex: .5;
    }
`