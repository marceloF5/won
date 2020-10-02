import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { HighlightProps } from '.'

type WrapperProps = Pick<HighlightProps, 'backgroundImage'>

export const Wrapper = styled.section<WrapperProps>`
    ${({ backgroundImage, alignment }) => css`
        background-image: url(${backgroundImage});
        background-position: center center;
        background-size: cover;
        height: 23rem;
        position: relative;
        display: grid;
        grid-template-areas: ${alignment === 'right'
            ? 'floatimage content'
            : 'content floatimage'};
        grid-template-columns: 1.3fr 2fr;

        &::after {
            background-color: rgba(0, 0, 0, 0.6);
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
        }

        ${media.greaterThan('medium')`
            height: 32rem;
        `}
    `}
`

export const Content = styled.div`
    ${({ theme }) => css`
        grid-area: content;
        padding: ${theme.spacings.xsmall};
        text-align: right;
        z-index: ${theme.layers.base};

        ${media.greaterThan('medium')`
            align-self: end;
            padding: ${theme.spacings.large};
        `}
    `}
`

export const Title = styled.h2`
    ${({ theme }) => css`
        color: ${theme.colors.white};
        font-size: ${theme.font.sizes.large};
        font-weight: ${theme.font.bold};

        ${media.greaterThan('medium')`
            font-size:${theme.font.sizes.xxlarge};
        `}
    `}
`

export const Subtitle = styled.h3`
    ${({ theme }) => css`
        color: ${theme.colors.white};
        font-size: ${theme.font.sizes.small};
        font-weight: ${theme.font.light};
        margin-bottom: ${theme.spacings.medium};

        ${media.greaterThan('medium')`
            font-size:${theme.font.sizes.large};
        `}
    `}
`

export const FloatImage = styled.img`
    ${({ theme }) => css`
        align-self: flex-end;
        grid-area: floatimage;
        max-height: 23rem;
        max-width: 100%;
        z-index: ${theme.layers.base};

        ${media.greaterThan('medium')`
            max-height: 32rem;
        `}
    `}
`