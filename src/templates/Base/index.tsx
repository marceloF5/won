import React from 'react'

import * as S from './styles'
import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Menu from 'components/Menu'

export type BaseTemplateProps = {
    children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
    <S.Wrapper>
        <Container>
            <Menu username="marcelo" />
        </Container>

        <S.Content>{children}</S.Content>

        <S.SectionFooter>
            <Container>
                <Footer />
            </Container>
        </S.SectionFooter>
    </S.Wrapper>
)

export default Base
