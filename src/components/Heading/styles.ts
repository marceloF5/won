import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProps, LineColors } from '.'

const wrapperModifiers = {
    lineBottom: (theme: DefaultTheme, lineColor: LineColors) => css`
        position: relative;
        margin-bottom: ${theme.spacings.medium};

        &::after {
            position: absolute;
            left: 0;
            bottom: -1rem;
            content: '';
            width: 5rem;
            border-bottom: 0.5rem solid ${theme.colors[lineColor]};
        }
    `,

    lineLeft: (theme: DefaultTheme, lineColor: LineColors) => css`
        padding-left: ${theme.spacings.xxsmall};
        border-left: 0.7rem solid ${theme.colors[lineColor]};
    `,

    small: (theme: DefaultTheme) => css`
        font-size: ${theme.font.sizes.medium};

        &::after {
            width: 3rem;
        }
    `,

    medium: (theme: DefaultTheme) => css`
        font-size: ${theme.font.sizes.xlarge};

        ${media.greaterThan('medium')`
            font-size: ${theme.font.sizes.xxlarge};
        `}
    `
}

export const Wrapper = styled.h2<HeadingProps>`
    ${({ theme, color, lineColor, lineBottom, lineLeft, size }) => css`
        color: ${theme.colors[color!]};

        ${lineBottom && wrapperModifiers.lineBottom(theme, lineColor)};
        ${lineLeft && wrapperModifiers.lineLeft(theme, lineColor)};
        ${!!size && wrapperModifiers[size](theme)}
    `}
`
