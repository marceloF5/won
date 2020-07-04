import { render, screen } from '@testing-library/react'

import Main from '../main'

describe('<Main />', () => {
    it('should render Main component', () => {
        const { container } = render(<Main />)

        expect(container.firstChild).toMatchSnapshot()

        expect(
            screen.getByRole('heading', { name: /Advanced React Course/i })
        ).toBeInTheDocument()
    })
})
