import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

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

const Button = ({
    children,
    fullWidth = false,
    icon,
    minimal = false,
    size = 'medium',
    ...otherProps
}: ButtonProps) => (
    <S.Wrapper
        fullWidth={fullWidth}
        hasIcon={!!icon}
        minimal={minimal}
        size={size}
        {...otherProps}
    >
        {!!icon && icon}
        {!!children && <span>{children}</span>}
    </S.Wrapper>
)

export default Button
