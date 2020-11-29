import { render, screen } from '@testing-library/react'

import GameInfo from '.'

describe('<GameInfo />', () => {
    it('should render the heading', () => {
        const { container } = render(<GameInfo />)

        expect(
            screen.getByRole('heading', { name: /GameInfo/i })
        ).toBeInTheDocument()

        expect(container.firstChild).toMatchSnapshot()
    })
})
