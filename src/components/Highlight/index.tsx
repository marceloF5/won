import Button from 'components/Button'
import * as S from './styles'

export type HighlightProps = {
    title: string
    subtitle: string
    backgroundImage: string
    buttonLabel: string
    buttonLink: string
    floatImage?: string
}

const Highlight = ({
    title,
    subtitle,
    backgroundImage,
    buttonLabel,
    buttonLink,
    floatImage
}: HighlightProps) => (
    <S.Wrapper backgroundImage={backgroundImage}>
        {!!floatImage && <S.FloatImage src={floatImage} alt={title} />}
        <S.Content>
            <S.Title>{title}</S.Title>
            <S.Subtitle>{subtitle}</S.Subtitle>
            <Button as="a" href={buttonLink}>
                {buttonLabel}
            </Button>
        </S.Content>
    </S.Wrapper>
)

export default Highlight
