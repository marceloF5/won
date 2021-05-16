import React from 'react'

import * as S from './styles'
import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import { useSession } from 'next-auth/client'

export type BaseTemplateProps = {
    children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => {
    const [session, loading] = useSession()

    return (
        <S.Wrapper>
            <Container>
                <Menu username={session?.user?.name} loading={loading} />
            </Container>

            <S.Content>{children}</S.Content>

            <S.SectionFooter>
                <Container>
                    <Footer />
                </Container>
            </S.SectionFooter>
        </S.Wrapper>
    )
}

export default Base
