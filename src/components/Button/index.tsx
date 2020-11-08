import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import * as S from './styles'

export type ButtonTypes =
    | AnchorHTMLAttributes<HTMLAnchorElement>
    | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
    as?: React.ElementType
    fullWidth?: boolean
    icon?: JSX.Element
    minimal?: boolean
    size?: 'small' | 'medium' | 'large'
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
    {
        children,
        fullWidth = false,
        icon,
        minimal = false,
        size = 'medium',
        ...otherProps
    },
    ref
) => (
    <S.Wrapper
        fullWidth={fullWidth}
        hasIcon={!!icon}
        minimal={minimal}
        size={size}
        ref={ref}
        {...otherProps}
    >
        {!!icon && icon}
        {!!children && <span>{children}</span>}
    </S.Wrapper>
)

export default forwardRef(Button)
