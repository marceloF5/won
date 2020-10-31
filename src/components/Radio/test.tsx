import { render, screen } from '@testing-library/react'

import Radio from '.'

describe('<Radio />', () => {
    it('should render the heading', () => {
        const { container } = render(<Radio />)

        expect(
            screen.getByRole('heading', { name: /Radio/i })
        ).toBeInTheDocument()

        expect(container.firstChild).toMatchSnapshot()
    })
})
