import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
    it('should render a white heading by default', () => {
        renderWithTheme(<Heading>Won Games</Heading>)

        expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle(
            {
                color: '#fafafa'
            }
        )
    })

    it('should render a black heading when color is passed', () => {
        renderWithTheme(<Heading color="black">Won Games</Heading>)

        expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle(
            {
                color: '#030517'
            }
        )
    })

    it('should render a black heading with a line to the bottom', () => {
        renderWithTheme(<Heading lineBottom>Won Games</Heading>)

        expect(
            screen.getByRole('heading', { name: /won games/i })
        ).toHaveStyleRule('border-bottom', '0.5rem solid #f231a5', {
            modifier: '::after'
        })
    })

    it('should render a black heading with a line to the left side', () => {
        renderWithTheme(<Heading lineLeft>Won Games</Heading>)

        expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle(
            {
                'border-left': '0.7rem solid #3cd3c1'
            }
        )
    })
})
