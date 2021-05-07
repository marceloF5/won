import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type TextFieldProps = {
    onInputChange?: (value: string) => void
    disabled?: boolean
    error?: string
    label?: string
    name?: string
    labelColor?: 'white' | 'black'
    icon?: JSX.Element
    iconPosition?: 'left' | 'right'
    initialValue?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
    onInputChange,
    disabled = false,
    error = '',
    label,
    name,
    icon,
    iconPosition = 'left',
    initialValue,
    ...otherProps
}: TextFieldProps) => {
    const [value, setValue] = useState(initialValue)

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        setValue(newValue)

        !!onInputChange && onInputChange(newValue)
    }

    return (
        <S.Wrapper disabled={disabled} error={!!error}>
            {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
            <S.InputWrapper>
                {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
                <S.Input
                    type="text"
                    onChange={handleOnChange}
                    value={value}
                    hasIcon={!!icon}
                    iconPosition={iconPosition}
                    disabled={disabled}
                    name={name}
                    {...(label ? { id: name } : {})}
                    {...otherProps}
                ></S.Input>
            </S.InputWrapper>
            {!!error && <S.Error>{error}</S.Error>}
        </S.Wrapper>
    )
}

export default TextField
