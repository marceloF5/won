import * as S from './styles'

const Main = () => (
    <S.Wrapper>
        <S.Logo
            src="/img/logo.svg"
            alt="Atomic Image and Advanced React written in side"
        />
        <S.Title>Advanced React Course</S.Title>
        <S.Description>
            with TypeScript, ReactJS, NextJS and Styled Components
        </S.Description>
        <S.Illustration
            src="/img/hero-illustration.svg"
            alt="A developer in front a screen code in his computer"
        />
    </S.Wrapper>
)

export default Main
