import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
    it('should render a white label by default', () => {
        renderWithTheme(<Logo />)

        expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
            color: '#fafafa'
        })
    })

    it('should render a black label when color is passed', () => {
        renderWithTheme(<Logo color="black" />)

        expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
            color: '#030517'
        })
    })

    it('should render a normal logo when size is default', () => {
        renderWithTheme(<Logo />)

        expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
            width: '11rem',
            height: '3.3rem'
        })
    })

    it('should render a bigger logo when normal parameter is passed to size', () => {
        renderWithTheme(<Logo size="normal" />)

        expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
            width: '11rem',
            height: '3.3rem'
        })
    })

    it('should render a bigger logo when large parameter is passed to size', () => {
        renderWithTheme(<Logo size="large" />)

        expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
            width: '20rem',
            height: '5.9rem'
        })
    })
})
