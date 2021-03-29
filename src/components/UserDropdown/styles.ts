import styled, { css } from 'styled-components'

export const Nav = styled.nav`
    ${({ theme }) => css`
        width: 26rem;

        display: flex;
        flex-direction: column;

        a:not(:last-child) {
            border-bottom: 0.1rem solid ${theme.colors.lightgray};
        }
    `}
`

export const Username = styled.span`
    ${({ theme }) => css`
        padding: 0 ${theme.spacings.xxsmall};
    `}
`

export const Link = styled.a`
    ${({ theme }) => css`
        background-color: ${theme.colors.white};
        color: ${theme.colors.black};
        cursor: pointer;
        padding: ${theme.spacings.xsmall} ${theme.spacings.small};
        transition: background, color, ${theme.transition.default};
        text-decoration: none;

        display: flex;
        align-items: center;

        &:hover {
            background-color: ${theme.colors.primary};
            color: ${theme.colors.white};
        }

        > svg {
            width: 2.4rem;
            height: 2.4rem;
        }

        > span {
            margin-left: ${theme.spacings.xsmall};
        }
    `}
`
