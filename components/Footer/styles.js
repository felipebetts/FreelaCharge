import styled from "styled-components";


export const FooterContainer = styled.footer`
    width: 100%;
    padding: 0.4rem 0;

    display:flex;
    justify-content: center;
    flex-wrap: wrap;
    border-top: 1px solid ${({ theme }) => theme.colors.text.neutral400};

    background: ${({ theme }) => theme.colors.primary.dark};

    align-self: flex-end;

    display: flex;
    align-items: center;
    justify-content: center;

    & a {
        color: ${({ theme }) => theme.colors.text.white };
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`