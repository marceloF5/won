import { bannerMapper, cartMapper, gamesMapper, highLightMapper } from '.'
import {
    QueryHome_banners,
    QueryHome_sections_freeGames_highlight
} from 'graphql/generated/QueryHome'
import { QueryGames_games } from 'graphql/generated/QueryGames'
import formatPrice from '../format-price'

describe('bannerMappers()', () => {
    it('should return right format when mapped', () => {
        const banner = {
            image: { url: '/image.jpg' },
            title: 'Banner Title',
            subtitle: 'Banner Subtitle',
            button: {
                label: 'button label',
                link: 'button link'
            },
            ribbon: { text: 'ribbon text', color: 'primary', size: 'small' }
        } as QueryHome_banners

        expect(bannerMapper([banner])).toStrictEqual([
            {
                img: 'http://localhost:1337/image.jpg',
                title: 'Banner Title',
                subtitle: 'Banner Subtitle',
                buttonLabel: 'button label',
                buttonLink: 'button link',
                ribbon: 'ribbon text',
                ribbonColor: 'primary',
                ribbonSize: 'small'
            }
        ])
    })
})

describe('gamesMapper()', () => {
    it('should return an empty array if there are no games', () => {
        expect(gamesMapper(null)).toStrictEqual([])
    })
    it('should return right format when mapped', () => {
        const games = {
            id: '1',
            name: 'game',
            slug: 'game',
            cover: { url: '/image.jpg' },
            developers: [{ name: 'developer' }],
            price: 10
        } as QueryGames_games

        expect(gamesMapper([games])).toStrictEqual([
            {
                id: '1',
                slug: 'game',
                title: 'game',
                developers: 'developer',
                img: 'http://localhost:1337/image.jpg',
                price: 10
            }
        ])
    })
})

describe('highlightMapper()', () => {
    it('should return an empty object if there is no highlight', () => {
        expect(highLightMapper(null)).toStrictEqual(null)
    })
    it('should return right format when mapped', () => {
        const highlight = {
            title: 'highlight title',
            subtitle: 'highlight subtitle',
            background: { url: '/imageBG.jpg' },
            floatImage: { url: '/imageFI.jpg' },
            buttonLabel: 'button label',
            buttonLink: 'button link',
            alignment: 'left'
        } as QueryHome_sections_freeGames_highlight

        expect(highLightMapper(highlight)).toStrictEqual({
            title: 'highlight title',
            subtitle: 'highlight subtitle',
            backgroundImage: 'http://localhost:1337/imageBG.jpg',
            floatImage: 'http://localhost:1337/imageFI.jpg',
            buttonLabel: 'button label',
            buttonLink: 'button link',
            alignment: 'left'
        })
    })
})

describe('cartMapper()', () => {
    it('should return an empty object if there is no games', () => {
        expect(cartMapper(undefined)).toStrictEqual([])
    })
    it('should return right format when mapped', () => {
        const game = {
            id: '1',
            name: 'Sample Game',
            price: 10.5,
            cover: {
                url: '/sample-game.jpg'
            }
        } as QueryGames_games

        expect(cartMapper([game])).toStrictEqual([
            {
                id: '1',
                title: 'Sample Game',
                img: 'http://localhost:1337/sample-game.jpg',
                price: formatPrice(10.5)
            }
        ])
    })
})
