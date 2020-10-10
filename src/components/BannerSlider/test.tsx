import { render, screen } from '@testing-library/react'

import BannerSlider from '.'

describe('<BannerSlider />', () => {
    it('should render the heading', () => {
        const { container } = render(<BannerSlider />)

        expect(
            screen.getByRole('heading', { name: /BannerSlider/i })
        ).toBeInTheDocument()

        expect(container.firstChild).toMatchSnapshot()
    })
})
