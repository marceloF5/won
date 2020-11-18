import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import Highlight, { HighlightProps } from 'components/Highlight'
import { Container } from 'components/Container'
import BannerSlider from 'components/BannerSlider'
import Footer from 'components/Footer'
import GameCardSlider from 'components/GameCardSlider'
import Heading from 'components/Heading'
import Menu from 'components/Menu'

import * as S from './styles'
import React from 'react'

export type HomeTemplateProps = {
    banners: BannerProps[]
    newGames: GameCardProps[]
    mostPopularHighlight: HighlightProps
    mostPopularGames: GameCardProps[]
    upcommingGames: GameCardProps[]
    upcommingHighlight: HighlightProps
    upcommingMoreGames: GameCardProps[]
    freeHighlight: HighlightProps
    freeGames: GameCardProps[]
}

const Home = ({
    banners,
    newGames,
    mostPopularHighlight,
    mostPopularGames,
    upcommingGames,
    upcommingHighlight,
    upcommingMoreGames,
    freeHighlight,
    freeGames
}: HomeTemplateProps) => (
    <section>
        <Container>
            <Menu />
            <S.SectionBanner>
                <BannerSlider items={banners} />
            </S.SectionBanner>
        </Container>

        <S.SectionNews>
            <Container>
                <Heading lineLeft lineColor="secondary" color="black">
                    News
                </Heading>
                <GameCardSlider items={newGames} color="black" />
            </Container>
        </S.SectionNews>

        <Container>
            <S.SectionMostPopular>
                <Heading lineLeft lineColor="secondary">
                    Most popular
                </Heading>
                <Highlight {...mostPopularHighlight} />
                <GameCardSlider items={mostPopularGames} />
            </S.SectionMostPopular>
        </Container>

        <S.SectionUpcoming>
            <Container>
                <Heading lineLeft lineColor="secondary">
                    Upcoming
                </Heading>

                <GameCardSlider items={upcommingGames} />
                <Highlight {...upcommingHighlight} />
                <GameCardSlider items={upcommingMoreGames} />
            </Container>
        </S.SectionUpcoming>

        <S.SectionFreeGames>
            <Container>
                <Heading lineLeft lineColor="secondary">
                    Free Games
                </Heading>
                <Highlight {...freeHighlight} />
                <GameCardSlider items={freeGames} />
            </Container>
        </S.SectionFreeGames>

        <S.SectionFooter>
            <Container>
                <Footer />
            </Container>
        </S.SectionFooter>
    </section>
)

export default Home
