import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

const props = {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy Death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
    it('should render correctly', () => {
        const { container } = renderWithTheme(<Banner {...props} />)

        expect(
            screen.getByRole('img', { name: /defy death/i })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { name: /defy death/i })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('heading', {
                name: /play the new CrashLands season/i
            })
        ).toBeInTheDocument()

        expect(container.firstChild).toMatchSnapshot()
    })
})
