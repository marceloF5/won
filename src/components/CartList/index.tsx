import Link from 'next/link'
import Button from 'components/Button'
import GameItem, { GameItemProps } from 'components/GameItem'
import Empty from 'components/Empty'

import * as S from './styles'

export type CartListProps = {
    items?: GameItemProps[]
    total?: string
    hasButton?: boolean
}

const CardList = ({ items = [], total, hasButton = false }: CartListProps) => (
    <S.Wrapper isEmpty={!items.length}>
        {items.length ? (
            <>
                {items.map((item) => (
                    <GameItem key={item.title} {...item} />
                ))}

                <S.Footer>
                    {!hasButton && <span>Total:</span>}
                    <S.Total>{total}</S.Total>
                    {hasButton && (
                        <Link href="/cart">
                            <Button as="a">Buy it now</Button>
                        </Link>
                    )}
                </S.Footer>
            </>
        ) : (
            <Empty
                title="Your cart is empty"
                description="Go back to the store and explore great games and offers"
                hasLink
            />
        )}
    </S.Wrapper>
)

export default CardList
