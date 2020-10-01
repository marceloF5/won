import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = { hasIcon: boolean } & Pick<
    ButtonProps,
    'fullWidth' | 'size'
>

const wrapperModifiers = {
    fullWidth: () => css`
        width: 100%;
    `,

    small: (theme: DefaultTheme) => css`
        height: 3rem;
        font-size: ${theme.font.sizes.xsmall};
    `,

    medium: (theme: DefaultTheme) => css`
        height: 4rem;
        font-size: ${theme.font.sizes.small};
        padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    `,

    large: (theme: DefaultTheme) => css`
        height: 5rem;
        font-size: ${theme.font.sizes.medium};
        padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
    `,

    withIcon: (theme: DefaultTheme) => css`
        svg {
            width: 1.5rem;

            & + span {
                margin-left: ${theme.spacings.xxsmall};
            }
        }
    `
}

export const Wrapper = styled.button<WrapperProps>`
    ${({ theme, fullWidth, hasIcon, size }) => css`
        display: inline-flex;
        align-items: center;
        justify-content: center;

        color: ${theme.colors.white};
        cursor: pointer;
        background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
        border: 0;
        border-radius: ${theme.border.radius};
        padding: ${theme.spacings.xxsmall};
        text-decoration: none;

        &:hover {
            background: linear-gradient(180deg, #e35565 0%, #d958a6 50%);
        }

        ${fullWidth && wrapperModifiers.fullWidth()}
        ${!!hasIcon && wrapperModifiers.withIcon(theme)}
        ${!!size && wrapperModifiers[size](theme)};
    `}
`
