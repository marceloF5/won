import { InputHTMLAttributes } from 'react'
import * as S from './styles'

type RadioValue = string | ReadonlyArray<string> | number

export type RadioProps = {
    onCheck?: (value?: RadioValue) => void
    label?: string
    labelFor?: string
    labelColor?: 'white' | 'black'
    value?: RadioValue
} & InputHTMLAttributes<HTMLInputElement>

const Radio = ({
    onCheck,
    label,
    labelColor = 'white',
    labelFor = '',
    value,
    ...otherProps
}: RadioProps) => {
    const handleOnChange = () => {
        !!onCheck && onCheck(value)
    }

    return (
        <S.Wrapper>
            <S.Input
                type="radio"
                id={labelFor}
                onChange={handleOnChange}
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

export default Radio
