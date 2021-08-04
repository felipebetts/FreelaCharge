import styled from "styled-components";


export const CardContainer = styled.div`

    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // justify-content: center;

    
    padding: 16px;
    
    background: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
    box-shadow: ${({ theme }) => theme.boxShadow };
    
    ${(props) => props.width ? `width: ${props.width};` : ''}
    ${(props) => props.height ? `height: ${props.height};` : ''}
    ${(props) => props.maxWidth ? `max-width: ${props.maxWidth};` : ''}
    ${(props) => props.maxHeight ? `max-height: ${props.maxHeight};` : ''}
    ${(props) => props.margin ? `margin: ${props.margin};` : ''}
    ${(props) => props.padding ? `padding: ${props.padding};` : ''}
    ${(props) => props.overflow ? `overflow: ${props.overflow};` : ''}

`

export const CardListItem = styled.div`

    cursor: pointer;

    width: 100%;
    text-align: left;


    &:hover {
        background: ${({ theme }) => theme.colors.primary.fadedDark };
    }

`