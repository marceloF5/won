import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type TextFieldProps = {
    onInput?: (value: string) => void
    disabled?: boolean
    error?: string
    label?: string
    labelFor?: string
    labelColor?: 'white' | 'black'
    icon?: JSX.Element
    iconPosition?: 'left' | 'right'
    initialValue?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
    onInput,
    disabled = false,
    error = '',
    label,
    labelFor = '',
    labelColor = 'black',
    icon,
    iconPosition = 'left',
    initialValue = '',
    ...otherProps
}: TextFieldProps) => {
    const [value, setValue] = useState(initialValue)

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        setValue(newValue)

        !!onInput && onInput(newValue)
    }

    return (
        <S.Wrapper disabled={disabled} error={!!error}>
            {!!label && (
                <S.Label htmlFor={labelFor} labelColor={labelColor}>
                    {label}
                </S.Label>
            )}
            <S.InputWrapper>
                {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
                <S.Input
                    type="text"
                    onChange={handleOnChange}
                    value={value}
                    hasIcon={!!icon}
                    iconPosition={iconPosition}
                    disabled={disabled}
                    {...otherProps}
                ></S.Input>
            </S.InputWrapper>
            {!!error && <S.Error>{error}</S.Error>}
        </S.Wrapper>
    )
}

export default TextField