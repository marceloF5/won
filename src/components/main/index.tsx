import * as S from './styles'

interface MainProps {
    title: string
    description: string
}

const Main: React.FC<MainProps> = ({ title, description }) => (
    <S.Wrapper>
        {/* <S.Logo
            src="/img/logo.svg"
            alt="Atomic Image and Advanced React written in side"
        /> */}
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Illustration
            src="/img/hero-illustration.svg"
            alt="A developer in front a screen code in his computer"
        />
    </S.Wrapper>
)

export default Main
