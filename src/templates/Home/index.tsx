import React from 'react'

import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import { Container } from 'components/Container'
import BannerSlider from 'components/BannerSlider'
import Showcase from 'components/Showcase'
import Base from '../Base'
import * as S from './styles'

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
    <Base>
        <Container>
            <S.SectionBanner>
                <BannerSlider items={banners} />
            </S.SectionBanner>
        </Container>

        <S.SectionNews>
            <Showcase title="News" games={newGames} />
        </S.SectionNews>

        <Showcase
            title="Most popular"
            highlight={mostPopularHighlight}
            games={mostPopularGames}
        />

        <S.SectionUpcoming>
            <Showcase title="Upcoming" games={upcommingGames} />
            <Showcase
                games={upcommingMoreGames}
                highlight={upcommingHighlight}
            />
        </S.SectionUpcoming>

        <Showcase
            title="Free Games"
            highlight={freeHighlight}
            games={freeGames}
        />
    </Base>
)

export default Home
