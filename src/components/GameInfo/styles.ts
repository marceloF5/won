import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as RibbonStyles from 'components/Ribbon/styles'

export const Wrapper = styled.div`
    ${({ theme }) => css`
        background: ${theme.colors.white};
        padding: ${theme.spacings.small};
        position: relative;

        ${RibbonStyles.Wrapper} {
            right: -1rem;

            &:before {
                border-right-width: 1rem;
            }
        }

        ${media.greaterThan('medium')`
            ${RibbonStyles.Wrapper} {
                font-size: ${theme.font.sizes.large};
                right: ${theme.spacings.small};
                top: ${theme.spacings.small};

                &:before {
                    border: none;
                }
            }
        `}
    `}
`

export const Description = styled.p`
    ${({ theme }) => css`
        color: ${theme.colors.gray};
        font-size: ${theme.font.sizes.small};
        margin-bottom: ${theme.spacings.small};

        ${media.greaterThan('medium')`
            max-width: 77rem;
        `}
    `}
`

export const ButtonsWrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        align-items: center;

        > button {
            width: 100%;
            margin-bottom: ${theme.spacings.xxsmall};
        }

        ${media.greaterThan('medium')`
            flex-direction: row-reverse;

            > button {
                width: initial;
                margin-bottom: 0
            }
        `}
    `}
`
