import { screen } from '@testing-library/react'
import { AddShoppingCart } from '@styled-icons/material-outlined'
import React from 'react'
import { renderWithTheme } from 'utils/tests/helpers'

import Button from '.'

describe('<Button />', () => {
    it('should render default component corretly', () => {
        const { container } = renderWithTheme(<Button>Buy now</Button>)

        expect(container).toMatchSnapshot()
    })

    it('should render button small size', () => {
        renderWithTheme(<Button size={'small'}>Buy now</Button>)

        expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
            height: '3rem',
            'font-size': '1.2rem'
        })
    })

    it('should render button medium by default', () => {
        renderWithTheme(<Button size="medium">Buy now</Button>)

        expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
            height: '4rem',
            'font-size': '1.4rem',
            padding: '0.8rem 3.2rem'
        })
    })

    it('should render button large size', () => {
        renderWithTheme(<Button size={'large'}>Buy now</Button>)

        expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
            height: '5rem',
            'font-size': '1.6rem',
            padding: '0.8rem 4.8rem'
        })
    })

    it('should render a fullWidth button version', () => {
        renderWithTheme(<Button fullWidth>Buy now</Button>)

        expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
            width: '100%'
        })
    })

    it('should render a icon button version', () => {
        renderWithTheme(
            <Button icon={<AddShoppingCart data-testid="icon" />}>
                Buy now
            </Button>
        )

        expect(screen.getByText(/buy now/i)).toBeInTheDocument()
        expect(screen.getByTestId(/icon/i)).toBeInTheDocument()
    })
})
