import GameCardSlider from 'components/GameCardSlider'
import { GameCardProps } from 'components/GameCard'
import Heading from 'components/Heading'
import Highlight, { HighlightProps } from 'components/Highlight'

import * as S from './styles'
import React from 'react'

export type ShowCaseProps = {
    title?: string
    highlight?: HighlightProps
    games?: GameCardProps[]
    color?: 'black' | 'white'
}

const Showcase = ({
    title,
    highlight,
    games,
    color = 'white'
}: ShowCaseProps) => (
    <S.Wrapper>
        {!!title && (
            <Heading lineLeft lineColor="secondary">
                {title}
            </Heading>
        )}
        {!!highlight && <Highlight {...highlight} />}
        {!!games && <GameCardSlider items={games} color={color} />}
    </S.Wrapper>
)

export default Showcase
