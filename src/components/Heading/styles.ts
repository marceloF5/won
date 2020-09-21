import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProps } from '.'

const wrapperModifiers = {
    lineBottom: (theme: DefaultTheme) => css`
        position: relative;
        margin-bottom: ${theme.spacings.medium};

        &::after {
            position: absolute;
            left: 0;
            bottom: -1rem;
            content: '';
            width: 5rem;
            border-bottom: 0.5rem solid ${theme.colors.primary};
        }
    `,

    lineLeft: (theme: DefaultTheme) => css`
        padding-left: ${theme.spacings.xxsmall};
        border-left: 0.7rem solid ${theme.colors.secondary};
    `
}

export const Wrapper = styled.h2<HeadingProps>`
    ${({ theme, color, lineBottom, lineLeft }) => css`
        color: ${theme.colors[color!]};
        font-size: ${theme.font.sizes.xlarge};

        ${lineBottom && wrapperModifiers.lineBottom(theme)};
        ${lineLeft && wrapperModifiers.lineLeft(theme)};

        ${media.greaterThan('medium')`
            font-size: ${theme.font.sizes.xxlarge};
        `}
    `}
`
