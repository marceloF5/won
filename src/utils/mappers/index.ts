import {
    QueryHome_banners,
    QueryHome_sections_freeGames_highlight
} from 'graphql/generated/QueryHome'
import { QueryGames_games } from 'graphql/generated/QueryGames'
import formatPrice from '../format-price'
import { QueryWishlist_wishlists_games } from 'graphql/generated/QueryWishlist'

export const bannerMapper = (banners: QueryHome_banners[]) => {
    return banners.map((banner) => ({
        img: `http://localhost:1337${banner.image!.url}`,
        title: banner.title,
        subtitle: banner.subtitle,
        buttonLabel: banner.button?.label,
        buttonLink: banner.button?.link,
        ...(banner.ribbon && {
            ribbon: banner.ribbon.text,
            ribbonColor: banner.ribbon.color,
            ribbonSize: banner.ribbon.size
        })
    }))
}

export const gamesMapper = (
    games:
        | QueryGames_games[]
        | QueryWishlist_wishlists_games[]
        | null
        | undefined
) => {
    return games
        ? games.map((game) => ({
              id: game.id,
              slug: game.slug,
              title: game.name,
              developer: game.developers[0].name,
              img: `http://localhost:1337${game.cover?.url}`,
              price: game.price
          }))
        : []
}

export const highLightMapper = (
    highlight: QueryHome_sections_freeGames_highlight | null | undefined
) => {
    return (
        highlight && {
            title: highlight.title,
            subtitle: highlight.subtitle,
            backgroundImage: `http://localhost:1337${highlight.background?.url}`,
            floatImage: `http://localhost:1337${highlight.floatImage?.url}`,
            buttonLabel: highlight.buttonLabel,
            buttonLink: highlight.buttonLink,
            alignment: highlight.alignment
        }
    )
}

export const cartMapper = (games: QueryGames_games[] | undefined) => {
    return games
        ? games.map((game) => ({
              id: game.id,
              title: game.name,
              img: `http://localhost:1337${game.cover?.url}`,
              price: formatPrice(game.price)
          }))
        : []
}
