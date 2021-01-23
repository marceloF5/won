import { render, screen } from '@testing-library/react'

import ExplorerSidebar from '.'

describe('<ExplorerSidebar />', () => {
    it('should render the heading', () => {
        const { container } = render(<ExplorerSidebar />)

        expect(
            screen.getByRole('heading', { name: /ExplorerSidebar/i })
        ).toBeInTheDocument()

        expect(container.firstChild).toMatchSnapshot()
    })
})
