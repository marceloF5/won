import { Story, Meta } from '@storybook/react/types-6-0'
import { CartContextData } from 'hooks/useCart'
import GameCard, { GameCardProps } from '.'

export default {
    title: 'Module/GameCard',
    component: GameCard,
    args: {
        slug: 'population-zero',
        title: 'Population Zero',
        developer: 'Rockestar Games',
        img: 'https://source.unsplash.com/user/willianjusten/1042x580',
        price: 65
    },
    argTypes: {
        onFav: { action: 'clicked' },
        ribbon: { type: 'string' }
    },
    parameters: {
        backgrounds: {
            default: 'won-dark'
        }
    }
} as Meta

export const Default: Story<GameCardProps> = (args) => (
    <div style={{ width: '30rem' }}>
        <GameCard {...args} />
    </div>
)

export const IsInCart: Story<GameCardProps & CartContextData> = (args) => (
    <div style={{ width: '30rem' }}>
        <GameCard {...args} />
    </div>
)

IsInCart.args = {
    isInCart: () => true
}

export const WithRibbon: Story<GameCardProps> = (args) => (
    <div style={{ width: '30rem' }}>
        <GameCard {...args} />
    </div>
)

WithRibbon.args = {
    promotionalPrice: 20,
    ribbon: '80% OFF',
    ribbonSize: 'small',
    ribbonColor: 'primary'
}
