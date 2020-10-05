import {
    Favorite,
    FavoriteBorder,
    AddShoppingCart
} from '@styled-icons/material-outlined'

import Button from 'components/Button'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import * as S from './styles'

export type GameCardProps = {
    title: string
    developer: string
    img: string
    price: string
    favorite?: boolean
    promotionalPrice?: string
    ribbon?: React.ReactNode
    ribbonColor?: RibbonColors
    ribbonSize?: RibbonSizes
    onFav?: () => void
}

const GameCard = ({
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
        <S.ImageBox>
            <img src={img} alt={title} />
        </S.ImageBox>
        <S.Content>
            <S.Info>
                <S.Title>{title}</S.Title>
                <S.Developer>{developer}</S.Developer>
            </S.Info>
            <S.FavButton onClick={onFav} role="button">
                {favorite ? (
                    <Favorite aria-label="Remove from Wishlist" />
                ) : (
                    <FavoriteBorder aria-label="Add to Wishlist" />
                )}
            </S.FavButton>
            <S.BuyBox>
                {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
                <S.Price>{promotionalPrice || price}</S.Price>
                <Button icon={<AddShoppingCart />} size="small" />
            </S.BuyBox>
        </S.Content>
    </S.Wrapper>
)

export default GameCard
