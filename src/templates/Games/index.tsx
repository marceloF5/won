import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'
import Base from 'templates/Base'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard, { GameCardProps } from 'components/GameCard'
import { Grid } from 'components/Grid'

import * as S from './styles'
import React from 'react'

export type GamesTemplateProps = {
    games?: GameCardProps[]
    filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems, games = [] }: GamesTemplateProps) => {
    const handleFilter = () => {
        return
    }

    const handleShowMore = () => {
        return
    }
    return (
        <Base>
            <S.Main>
                <ExploreSidebar items={filterItems} onFilter={handleFilter} />
                <section>
                    <Grid>
                        {games.map((game) => (
                            <GameCard key={game.title} {...game} />
                        ))}
                    </Grid>

                    <S.ShowMore role="button" onClick={handleShowMore}>
                        <p>Show More</p>
                        <ArrowDown size={35} />
                    </S.ShowMore>
                </section>
            </S.Main>
        </Base>
    )
}

export default GamesTemplate
