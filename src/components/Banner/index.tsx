import Button from 'components/Button'
import * as S from './styles'
import Ribbon from 'components/Ribbon'

export type BannerProps = {
    img: string
    title: string
    subtitle: string
    buttonLabel: string
    buttonLink: string
    ribbon?: string
    ribbonColor?: string
    ribbonSize?: string
}

const Banner = ({
    img,
    title,
    subtitle,
    buttonLabel,
    buttonLink,
    ribbon,
    ribbonColor,
    ribbonSize
}: BannerProps) => (
    <S.Wrapper>
        <S.Image src={img} role="img" aria-label={title} />
        <S.Caption>
            <S.Title>{title}</S.Title>
            <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
            <Button as="a" href={buttonLink} size="large">
                {buttonLabel}
            </Button>
        </S.Caption>
        {!!ribbon && (
            <Ribbon color={ribbonColor} size={ribbonSize}>
                {ribbon}
            </Ribbon>
        )}
    </S.Wrapper>
)

export default Banner
