import { AddShoppingCart } from '@styled-icons/material-outlined'
import React from 'react'
import { render, screen } from 'utils/test-utils'

import Button from '.'

describe('<Button />', () => {
    it('should render default component corretly', () => {
        const { container } = render(<Button>Buy now</Button>)

        expect(container).toMatchSnapshot()
    })

    it('should render button small size', () => {
        render(<Button size={'small'}>Buy now</Button>)

        expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
            height: '3rem',
            'font-size': '1.2rem'
        })
    })

    it('should render button medium by default', () => {
        render(<Button size="medium">Buy now</Button>)

        expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
            height: '4rem',
            'font-size': '1.4rem',
            padding: '0.8rem 3.2rem'
        })
    })

    it('should render button large size', () => {
        render(<Button size={'large'}>Buy now</Button>)

        expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
            height: '5rem',
            'font-size': '1.6rem',
            padding: '0.8rem 4.8rem'
        })
    })

    it('should render a fullWidth button version', () => {
        render(<Button fullWidth>Buy now</Button>)

        expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
            width: '100%'
        })
    })

    it('should render a icon button version', () => {
        render(
            <Button icon={<AddShoppingCart data-testid="icon" />}>
                Buy now
            </Button>
        )

        expect(screen.getByText(/buy now/i)).toBeInTheDocument()
        expect(screen.getByTestId(/icon/i)).toBeInTheDocument()
    })

    it('should render a minimal button version', () => {
        render(
            <Button icon={<AddShoppingCart data-testid="icon" />} minimal>
                Buy now
            </Button>
        )

        expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
            background: 'none',
            color: '#F231A5'
        })

        expect(
            screen.getByRole('button', { name: /buy now/i })
        ).toHaveStyleRule('background', 'none', { modifier: ':hover' })
    })

    it('should render button as link', () => {
        render(
            <Button as="a" href="/link">
                Buy now
            </Button>
        )

        expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
            'href',
            '/link'
        )
    })

    it('should render a disabled button', () => {
        render(<Button disabled>Buy now</Button>)

        expect(
            screen.getByRole('button', { name: /buy now/i })
        ).toHaveStyleRule('cursor', 'not-allowed', { modifier: ':disabled' })
    })
})
