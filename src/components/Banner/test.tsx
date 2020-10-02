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

    it('should render a Ribbon', () => {
        renderWithTheme(
            <Banner
                {...props}
                ribbon={'My Ribbon'}
                ribbonColor={'secondary'}
                ribbonSize={'small'}
            />
        )

        const ribbon = screen.getByText(/my ribbon/i)

        expect(ribbon).toBeInTheDocument()
        expect(ribbon).toHaveStyle({ backgroundColor: '#3cd3c1' })
        expect(ribbon).toHaveStyle({
            fontSize: '1.2rem',
            height: '2.6rem'
        })
    })
})
