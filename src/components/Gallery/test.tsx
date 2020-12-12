import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Gallery from '.'
import items from './mock'

describe('<Gallery />', () => {
    it('should render thumbnails as buttons', () => {
        renderWithTheme(<Gallery items={items.slice(0, 2)} />)

        expect(
            screen.getByRole('button', { name: /thumb - gallery image 1/i })
        ).toHaveAttribute('src', items[0].src)

        expect(
            screen.getByRole('button', { name: /thumb - gallery image 2/i })
        ).toHaveAttribute('src', items[1].src)
    })
})
