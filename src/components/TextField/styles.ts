import styled, { css, DefaultTheme } from 'styled-components'
import { TextFieldProps } from '.'

type IconPosition = Pick<TextFieldProps, 'iconPosition'>

type IconProps = {
    hasIcon: boolean
} & IconPosition

const wrapperModifiers = {
    error: (theme: DefaultTheme) => css`
        ${InputWrapper} {
            border-color: ${theme.colors.red};
        }
        ${Label},
        ${Icon} {
            color: ${theme.colors.red};
        }
    `,
    disabled: (theme: DefaultTheme) => css`
        ${Label},
        ${Input},
        ${Icon} {
            color: ${theme.colors.gray};
            cursor: not-allowed;

            &::placeholder {
                color: currentColor;
            }
        }
    `
}

export const Wrapper = styled.div<
    Pick<TextFieldProps, 'disabled'> & { error?: boolean }
>`
    ${({ theme, disabled, error }) => css`
        ${!!error && wrapperModifiers.error(theme)}
        ${disabled && wrapperModifiers.disabled(theme)}
    `}
`

export const InputWrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        background: ${theme.colors.lightgray};
        border: 0.2rem solid;
        border-color: ${theme.colors.lightgray};
        border-radius: ${theme.border.radius};
        padding: 0 ${theme.spacings.xsmall};

        &:focus-within {
            box-shadow: 0 0 0.5rem ${theme.colors.primary};
        }
    `}
`

export const Input = styled.input<IconProps>`
    ${({ theme, hasIcon, iconPosition }) => css`
        background: transparent;
        border: 0;
        color: ${theme.colors.black};
        font-family: ${theme.font.family};
        font-size: ${theme.font.sizes.medium};
        outline: none;
        padding: ${theme.spacings.xxsmall} 0;
        padding-${iconPosition}: ${hasIcon ? theme.spacings.xxsmall : 0};
        width: 100%;
    `}
`

export const Label = styled.label`
    ${({ theme }) => css`
        font-size: ${theme.font.sizes.small};
        color: ${theme.colors.black};
        cursor: pointer;
    `}
`

export const Icon = styled.div<IconPosition>`
    ${({ theme, iconPosition }) => css`
        display: flex;
        width: 2.2rem;
        color: ${theme.colors.gray};
        order: ${iconPosition === 'right' ? 1 : 0};

        & > svg {
            width: 100%;
        }
    `}
`

export const Error = styled.p`
    ${({ theme }) => css`
        color: ${theme.colors.red};
        margin-top: ${theme.spacings.xxxsmall};
    `}
`
