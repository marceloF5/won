import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Highlight from '.'

const props = {
    title: 'Heading 1',
    subtitle: 'Heading 2',
    backgroundImage: 'https://source.unsplash.com/user/willianjusten/1042x580',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
}

describe('<Highlight />', () => {
    it('should render headings and button', () => {
        renderWithTheme(<Highlight {...props} />)

        expect(
            screen.getByRole('heading', { name: /heading 1/i })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { name: /heading 2/i })
        ).toBeInTheDocument()
    })

    it('should render background image', () => {
        const { container } = renderWithTheme(<Highlight {...props} />)

        expect(container.firstChild).toHaveStyle({
            backgroundImage: `url(${props.backgroundImage})`
        })
    })

    it('should render float image', () => {
        renderWithTheme(<Highlight {...props} floatImage="/float-image.png" />)

        expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
            'src',
            '/float-image.png'
        )
    })
})
