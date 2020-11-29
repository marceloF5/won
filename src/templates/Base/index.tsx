import React from 'react'

import * as S from './styles'
import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Menu from 'components/Menu'

export type BaseTemplateProps = {
    children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
    <section>
        <Container>
            <Menu />
        </Container>

        {children}

        <S.SectionFooter>
            <Container>
                <Footer />
            </Container>
        </S.SectionFooter>
    </section>
)

export default Base
