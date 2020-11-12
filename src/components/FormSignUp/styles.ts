import styled, { css } from 'styled-components'
import { darken } from 'polished'

import * as TextFieldStyles from 'components/TextField/styles'
import * as ButtonStyles from 'components/Button/styles'

export const Wrapper = styled.div`
    ${({ theme }) => css`
        ${ButtonStyles.Wrapper} {
            margin: ${theme.spacings.medium} auto ${theme.spacings.xsmall};
        }
        ${TextFieldStyles.Wrapper} {
            margin: ${theme.spacings.xxsmall} 0;
        }
    `}
`

export const FormLink = styled.div`
    ${({ theme }) => css`
        color: ${theme.colors.black};
        font-size: ${theme.font.sizes.small};
        text-align: center;

        a {
            border-bottom: 0.1rem solid ${theme.colors.secondary};
            color: ${theme.colors.secondary};

            text-decoration: none;
            transition: color, border, ${theme.transition.fast};

            &:hover {
                color: ${darken(0.1, theme.colors.secondary)};
                border-bottom: 0.1rem solid
                    ${darken(0.1, theme.colors.secondary)};
            }
        }
    `}
`
