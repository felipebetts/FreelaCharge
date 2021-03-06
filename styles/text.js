import styled from 'styled-components'

export const Title1 = styled.h1`

cursor: pointer;

    color: ${({ theme }) => theme.colors.text.neutral600};
    font-size: 5rem;
    font-weight: 800;
    margin-bottom: 0;
    margin-top: 1rem;
`

export const Title3 = styled.h3`

    color: ${({ theme }) => theme.colors.text.neutral600 };
    font-size: 1.4rem;
    font-weight: 600;
`

export const Title4 = styled.h4`

    color: ${({ theme }) => theme.colors.text.neutral400 };
    font-size: 1.5rem;
    font-weight: 600;
`


export const Parag = styled.p`

    color: ${({ theme }) => theme.colors.text.neutral600 };
    text-align: left;
    margin: 0 0 1rem;
    font-size: 1.2rem;
    ${(props) => props.fontSize ? `font-size: ${props.fontSize};` : ''}
    ${(props) => props.fontWeight ? `font-weight: ${props.fontWeight};` : ''}
    ${(props) => props.margin ? `margin: ${props.margin};` : ''}
    ${(props) => props.color ? `color: ${props.theme.colors.text[props.color]};` : ''}

`

export const HourValue = styled.span`

    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text.neutral600 };
    margin: 0.5rem 0 1rem;

`