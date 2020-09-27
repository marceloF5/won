import * as S from './styles'

export type LineColors = 'primary' | 'secondary'

export type HeadingProps = {
    children: React.ReactNode
    color?: 'white' | 'black'
    lineColor?: LineColors
    lineBottom?: boolean
    lineLeft?: boolean
    size?: 'small' | 'medium'
}

const Heading = ({
    children,
    color = 'black',
    lineColor = 'primary',
    lineBottom = false,
    lineLeft = false,
    size = 'small'
}: HeadingProps) => (
    <S.Wrapper
        color={color}
        lineColor={lineColor}
        lineBottom={lineBottom}
        lineLeft={lineLeft}
        size={size}
    >
        {children}
    </S.Wrapper>
)

export default Heading
