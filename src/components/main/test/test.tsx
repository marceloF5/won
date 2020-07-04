import { render, screen } from '@testing-library/react'

import Main from '../'

describe('<Main />', () => {
    it('should render Main component', () => {
        const { container } = render(<Main />)

        expect(container.firstChild).toMatchSnapshot()

        expect(
            screen.getByRole('heading', { name: /Advanced React Course/i })
        ).toBeInTheDocument()
    })

    it('should render the colors correctly', () => {
        const { container } = render(<Main />)

        expect(container.firstChild).toHaveStyle({
            'background-color': '#06092b'
        })
    })
})
