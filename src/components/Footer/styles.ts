import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyle from 'components/Heading/styles'

export const Wrapper = styled.main`
    ${HeadingStyle.Wrapper} {
        text-transform: uppercase;
    }
`

export const Content = styled.div`
    ${({ theme }) => css`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: ${theme.grid.gutter};
        margin-top: ${theme.spacings.medium};

        ${media.greaterThan('medium')`
            grid-template-columns: repeat(4, 1fr);
        `}
    `}
`

export const Column = styled.div`
    ${({ theme }) => css`
        a,
        span {
            color: ${theme.colors.gray};
            display: block;
            font-size: ${theme.font.sizes.small};
            margin-bottom: ${theme.spacings.xxsmall};
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }
    `}
`

export const Copyright = styled.div`
    ${({ theme }) => css`
        color: ${theme.colors.gray};
        font-size: ${theme.font.sizes.xsmall};
        margin-bottom: ${theme.spacings.large};
        margin-top: ${theme.spacings.medium};
        text-align: center;
    `}
`
