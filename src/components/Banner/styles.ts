import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type ImageProps = { src: string }

export const Wrapper = styled.main`
    position: relative;

    ${media.greaterThan('medium')`
        box-shadow: 0 0.4rem 0.5rem 0 rgba(0, 0, 0, 0.2);
    `}
`

export const Image = styled.div<ImageProps>`
    ${({ theme, src }) => css`
        background-color: ${theme.colors.lightgray};
        background-image: url(${src});
        background-size: cover;
        background-position: center center;
        width: 100%;
        height: 23rem;

        ${media.greaterThan('medium')`
            height: 58rem;
        `}
    `}
`

export const Caption = styled.div`
    ${({ theme }) => css`
        background-color: rgba(0, 0, 0, 0.7);
        width: 100%;
        padding: ${theme.spacings.small};

        ${media.greaterThan('medium')`
            border-radius: 0 0 ${theme.border.radius} ${theme.border.radius};
            padding: ${theme.spacings.large};
            position: absolute;
            bottom: 0;
            left: 0;
        `}
    `}
`

export const Title = styled.h2`
    ${({ theme }) => css`
        color: ${theme.colors.white};
        font-size: ${theme.font.sizes.large};
        font-weight: ${theme.font.bold};

        ${media.greaterThan('medium')`
            font-size: ${theme.font.sizes.xxlarge};
        `}
    `}
`

export const Subtitle = styled.h3`
    ${({ theme }) => css`
        color: ${theme.colors.white};
        font-size: ${theme.font.sizes.small};
        font-weight: ${theme.font.normal};
        margin-bottom: ${theme.spacings.xsmall};

        strong {
            color: ${theme.colors.primary};
        }
    `}
`
