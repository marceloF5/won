import * as S from './styles'

export type ButtonProps = {
    children?: React.ReactNode
    fullWidth?: boolean
    icon?: JSX.Element
    onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
    size?: 'small' | 'medium' | 'large'
}

const Button = ({
    children,
    fullWidth = false,
    icon,
    size = 'medium',
    ...otherProps
}: ButtonProps) => (
    <S.Wrapper
        fullWidth={fullWidth}
        hasIcon={!!icon}
        size={size}
        {...otherProps}
    >
        {!!icon && icon}
        {!!children && <span>{children}</span>}
    </S.Wrapper>
)

export default Button
