import Link from 'next/link'
import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'
import CartButton from 'components/CartButton'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import formatPrice from 'utils/format-price'

import * as S from './styles'

export type GameCardProps = {
    id: string
    slug: string
    title: string
    developer: string
    img: string
    price: number
    favorite?: boolean
    promotionalPrice?: number
    ribbon?: React.ReactNode
    ribbonColor?: RibbonColors
    ribbonSize?: RibbonSizes
    onFav?: () => void
}

const GameCard = ({
    id,
    slug,
    title,
    developer,
    img,
    price,
    favorite = false,
    promotionalPrice,
    ribbon,
    ribbonColor,
    ribbonSize,
    onFav
}: GameCardProps) => (
    <S.Wrapper>
        {!!ribbon && (
            <Ribbon color={ribbonColor} size={ribbonSize}>
                {ribbon}
            </Ribbon>
        )}
        <Link href={`game/${slug}`} passHref>
            <S.ImageBox>
                <img src={img} alt={title} />
            </S.ImageBox>
        </Link>
        <S.Content>
            <Link href={`game/${slug}`} passHref>
                <S.Info>
                    <S.Title>{title}</S.Title>
                    <S.Developer>{developer}</S.Developer>
                </S.Info>
            </Link>
            <S.FavButton onClick={onFav} role="button">
                {favorite ? (
                    <Favorite aria-label="Remove from Wishlist" />
                ) : (
                    <FavoriteBorder aria-label="Add to Wishlist" />
                )}
            </S.FavButton>
            <S.BuyBox>
                {!!promotionalPrice && (
                    <S.Price isPromotional>{formatPrice(price)}</S.Price>
                )}
                <S.Price>{formatPrice(promotionalPrice || price)}</S.Price>
                <CartButton id={id} />
            </S.BuyBox>
        </S.Content>
    </S.Wrapper>
)

export default GameCard
