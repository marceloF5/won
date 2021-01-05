import GameItem, { GameItemProps } from 'components/GameItem'
import React from 'react'

import * as S from './styles'

export type CartListProps = {
    items: GameItemProps[]
    total: string
}

const CardList = ({ items, total }: CartListProps) => (
    <S.Wrapper>
        {items.map((item) => (
            <GameItem key={item.title} {...item} />
        ))}

        <S.Footer>
            Total <S.Total>{total}</S.Total>
        </S.Footer>
    </S.Wrapper>
)

export default CardList
