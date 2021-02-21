import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { rgba } from 'polished'

import * as CheckboxStyles from 'components/Checkbox/styles'
import * as HeadingStyles from 'components/Heading/styles'
import * as RadioStyles from 'components/Radio/styles'

type WrapperProps = {
    isOpen: boolean
}

const wrapperModifiers = {
    open: (theme: DefaultTheme) => css`
        height: 100vh;
        width: 100%;
        z-index: ${theme.layers.modal};

        display: flex;
        flex-direction: column;

        position: fixed;
        top: 0;
        left: 0;

        ${Overlay} {
            background-color: ${theme.colors.white};
            height: 100vh;
            opacity: 1;
            width: 100%;
            z-index: ${theme.layers.modal};

            position: fixed;
            top: 0;
            left: 0;
        }

        ${Content} {
            margin-top: ${theme.spacings.medium};
            overflow-y: scroll;
            transform: translateY(0);
        }

        ${Content}, ${Footer}, ${IconWrapper} {
            z-index: ${theme.layers.modal};
        }

        ${HeadingStyles.Wrapper} {
            color: ${theme.colors.black};
            font-size: ${theme.font.sizes.xlarge};
            font-weight: ${theme.font.normal};
        }

        ${CheckboxStyles.Label}, ${RadioStyles.Label} {
            color: ${theme.colors.black};
        }

        ${IconWrapper} {
            color: ${theme.colors.black};

            > svg {
                width: 30px;

                position: absolute;
                right: ${theme.spacings.xxsmall};
                top: ${theme.spacings.xxsmall};

                &:first-child {
                    display: none;
                }
            }
        }
    `,

    close: (theme: DefaultTheme) => css`
        ${IconWrapper} {
            color: ${theme.colors.white};

            > svg:last-child {
                display: none;
            }
        }

        ${Content} {
            transform: translateY(3rem);
            height: 0;
        }

        ${Content}, ${Footer} {
            visibility: hidden;

            position: absolute;
            left: 0;
        }
    `
}

export const Wrapper = styled.div<WrapperProps>`
    ${({ theme, isOpen }) => css`
        ${media.lessThan('medium')`
            ${!!isOpen && wrapperModifiers.open(theme)}
            ${!isOpen && wrapperModifiers.close(theme)}
        `}
    `}
`

export const Overlay = styled.div`
    ${({ theme }) => css`
        transition: opacity ${theme.transition.default};
        opacity: 0;
        position: absolute;
    `}
`

export const Footer = styled.div`
    ${({ theme }) => css`
        box-shadow: 0 -0.2rem ${theme.spacings.xxxsmall} ${rgba(theme.colors.black, 0.2)};
        padding: ${theme.spacings.small};

        ${media.greaterThan('medium')`
            display: none
        `}
    `}
`

export const IconWrapper = styled.div`
    ${({ theme }) => css`
        cursor: pointer;
        width: ${theme.spacings.small};
        height: ${theme.spacings.small};

        ${media.greaterThan('medium')`
            display: none;
        `}
    `}
`

export const Content = styled.div`
    ${({ theme }) => css`
        flex: 1;
        overflow-y: auto;
        padding: 0 ${theme.spacings.small};
        margin-top: ${theme.spacings.xxlarge};
        margin-bottom: calc(
            ${theme.spacings.small} - ${theme.spacings.xxxsmall}
        );
        transition: transform ${theme.transition.default};

        ${media.greaterThan('medium')`
            overflow-y: initial;
            padding: 0;
            margin-top: 0;
            margin-bottom: 0;
        `}
    `}
`

export const Items = styled.div`
    ${({ theme }) => css`
        & > div:not(:last-of-type) {
            margin-bottom: ${theme.spacings.xxsmall};
        }

        & + div {
            border-top: 0.1rem solid ${rgba(theme.colors.gray, 0.2)};
            margin-top: ${theme.spacings.small};
            padding-top: ${theme.spacings.xsmall};
        }
    `}
`
