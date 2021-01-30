import { Container } from 'components/Container'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Main = styled(Container)`
    ${({ theme }) => css`
        ${media.greaterThan('medium')`
            display: grid;
            grid-template-columns: 26rem 1fr;
            gap: ${theme.grid.gutter};
        `}
    `}
`

export const ShowMore = styled.div`
    ${({ theme }) => css`
        color: ${theme.colors.white};
        font-weight: bold;
        padding: ${theme.spacings.medium};
        text-align: center;
        text-transform: uppercase;

        cursor: pointer;

        > svg {
            color: ${theme.colors.primary};
        }
    `}
`
