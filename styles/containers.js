import styled from "styled-components";


export const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;

    // padding: 1rem;


    background: ${({ theme }) => theme.colors.secondary };

`


export const Flex = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;



    ${(props) => props.column ? 'flex-direction: column;' : ''}
    
    ${(props) => props.wrap ? `flex-wrap: ${props.wrap};` : ''}
    
    ${(props) => props.width ? `width: ${props.width};` : ''}
    ${(props) => props.height ? `height: ${props.height};` : ''}

    ${(props) => props.padding ? `padding: ${props.padding};` : ''}
    ${(props) => props.margin ? `margin: ${props.margin};` : ''}

    ${(props) => props.textAlign ? `text-align: ${props.textAlign};` : ''}
    ${(props) => props.alignItems ? `align-items: ${props.alignItems};` : ''}
    ${(props) => props.justifyContent ? `justify-content: ${props.justifyContent};` : ''}

    ${(props) => props.maxHeight ? `max-height: ${props.maxHeight};` : ''}
    ${(props) => props.minHeight ? `min-height: ${props.minHeight};` : ''}
    ${(props) => props.maxWidth ? `max-width: ${props.maxWidth};` : ''}
    ${(props) => props.minWidth ? `min-width: ${props.minWidth};` : ''}
    ${(props) => props.wrap ? `flex-wrap: ${props.wrap};` : ''}
`

export const Box = styled.div`

    ${(props) => props.width ? `width: ${props.width};` : ''}

    ${(props) => props.padding ? `padding: ${props.padding};` : ''}
    ${(props) => props.margin ? `margin: ${props.margin};` : ''}

    ${(props) => props.textAlign ? `text-align: ${props.textAlign};` : ''}
    ${(props) => props.alignItems ? `align-items: ${props.alignItems};` : ''}
    ${(props) => props.justifyContent ? `justify-content: ${props.justifyContent};` : ''}

    ${(props) => props.maxHeight ? `max-height: ${props.maxHeight};` : ''}
    ${(props) => props.minHeight ? `min-height: ${props.minHeight};` : ''}
    ${(props) => props.maxWidth ? `max-width: ${props.maxWidth};` : ''}
    ${(props) => props.minWidth ? `min-width: ${props.minWidth};` : ''}

`

export const Stripe = styled.div`

    background: ${({ theme }) => theme.colors.white };
    width: 100%;


    padding: 1rem 2rem;


`