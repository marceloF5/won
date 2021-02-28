import { useRouter } from 'next/router'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'
import { ParsedUrlQueryInput } from 'querystring'

import * as S from './styles'
import Base from 'templates/Base'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard from 'components/GameCard'
import { Grid } from 'components/Grid'
import { useQueryGames } from 'graphql/queries/games'
import { parseQueryStringToFilter, parseQueryStringToWhere } from 'utils/filter'
import Empty from 'components/Empty'

export type GamesTemplateProps = {
    filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
    const { push, query } = useRouter()
    const { data, loading, fetchMore } = useQueryGames({
        notifyOnNetworkStatusChange: true,
        variables: {
            limit: 9,
            where: parseQueryStringToWhere({ queryString: query, filterItems }),
            sort: query.sort as string | null
        }
    })

    if (!data) return <p>loading...</p>

    const { games, gamesConnection } = data

    const hasMoreGames = games?.length < (gamesConnection?.values?.length || 0)

    const handleFilter = (items: ParsedUrlQueryInput) => {
        push({
            pathname: '/games',
            query: items
        })
        return
    }

    const handleShowMore = () => {
        fetchMore({ variables: { limit: 9, start: games.length } })
    }

    return (
        <Base>
            <S.Main>
                <ExploreSidebar
                    initialValues={parseQueryStringToFilter({
                        queryString: query,
                        filterItems
                    })}
                    items={filterItems}
                    onFilter={handleFilter}
                />
                <section>
                    {games.length ? (
                        <>
                            <Grid>
                                {games.map((game) => (
                                    <GameCard
                                        key={game.slug}
                                        slug={game.slug}
                                        title={game.name}
                                        developer={game.developers[0].name}
                                        img={`http://localhost:1337${
                                            game.cover!.url
                                        }`}
                                        price={game.price}
                                    />
                                ))}
                            </Grid>
                            {hasMoreGames && (
                                <S.ShowMore>
                                    {loading ? (
                                        <S.ShowMoreLoading
                                            src="/img/dots.svg"
                                            alt="Loading more games..."
                                        />
                                    ) : (
                                        <S.ShowMoreButton
                                            role="button"
                                            onClick={handleShowMore}
                                        >
                                            <p>Show More</p>
                                            <ArrowDown size={35} />
                                        </S.ShowMoreButton>
                                    )}
                                </S.ShowMore>
                            )}
                        </>
                    ) : (
                        <Empty
                            title=":("
                            description="we did not any games with this filter"
                        />
                    )}
                </section>
            </S.Main>
        </Base>
    )
}

export default GamesTemplate
