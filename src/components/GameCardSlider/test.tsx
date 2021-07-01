import 'session.mock'
import 'match-media-mock'
import { render, screen } from 'utils/test-utils'
import GameCardSlider from '.'
import items from './mock'

describe('<GameCardSlider />', () => {
    it('should render the heading', () => {
        const { container } = render(<GameCardSlider items={items} />)

        expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
    })

    it('should render white arrows if color passed', () => {
        render(<GameCardSlider items={items} color="white" />)

        expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
            color: '#fafafa'
        })
        expect(screen.getByLabelText(/next games/i)).toHaveStyle({
            color: '#fafafa'
        })
    })
})
