import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

type LinkProps = {
    isActive?: boolean
}

const linkModifiers = {
    default: (theme: DefaultTheme) => css`
        background: ${theme.colors.white};
        color: ${theme.colors.black};
    `,

    active: (theme: DefaultTheme) => css`
        background: ${theme.colors.primary};
        color: ${theme.colors.white};
    `
}

export const Nav = styled.nav`
    ${({ theme }) => css`
        display: flex;
        border-bottom: 0.1rem solid ${theme.colors.lightgray};

        ${media.greaterThan('medium')`
            flex-direction: column;
            border: 0;

            a:not(:last-child) {
                border-bottom: 0.1rem solid ${theme.colors.lightgray}
            }

        `}
    `}
`

export const Link = styled.a<LinkProps>`
    ${({ theme, isActive }) => css`
        cursor: pointer;
        padding: ${theme.spacings.xsmall} ${theme.spacings.small};
        text-decoration: none;
        transition: background, color, ${theme.transition.default};

        display: flex;
        align-items: center;

        &:hover {
            background: ${theme.colors.primary};
            color: ${theme.colors.white};
        }

        > span {
            margin-left: ${theme.spacings.xsmall};
        }

        ${media.lessThan('medium')`
            justify-content: center;
            flex: 1;

            > span {
                display: none;
            }
        `}

        ${!isActive && linkModifiers.default(theme)}
        ${isActive && linkModifiers.active(theme)}
    `}
`
