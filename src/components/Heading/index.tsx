import * as S from './styles'

export type LineColors = 'primary' | 'secondary'

export type HeadingProps = {
    children: React.ReactNode
    color?: 'white' | 'black'
    lineColor?: LineColors
    lineBottom?: boolean
    lineLeft?: boolean
    size?: 'small' | 'medium' | 'huge'
}

const Heading = ({
    children,
    color = 'white',
    lineColor = 'primary',
    lineBottom = false,
    lineLeft = false,
    size = 'medium'
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
