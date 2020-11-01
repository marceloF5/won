import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

type CheckboxValue = string | ReadonlyArray<string> | number

export type CheckboxProps = {
    onCheck?: (status: boolean) => void
    isChecked?: boolean
    label?: string
    labelFor?: string
    labelColor?: 'white' | 'black'
    value?: CheckboxValue
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
    onCheck,
    isChecked = false,
    label,
    labelColor = 'white',
    labelFor = '',
    value,
    ...otherProps
}: CheckboxProps) => {
    const [checked, setChecked] = useState(isChecked)

    const handleOnChange = () => {
        const status = !checked
        setChecked(status)

        !!onCheck && onCheck(status)
    }

    return (
        <S.Wrapper>
            <S.Input
                type="checkbox"
                id={labelFor}
                onChange={handleOnChange}
                checked={checked}
                value={value}
                {...otherProps}
            />
            {!!label && (
                <S.Label htmlFor={labelFor} labelColor={labelColor}>
                    {label}
                </S.Label>
            )}
        </S.Wrapper>
    )
}

export default Checkbox
