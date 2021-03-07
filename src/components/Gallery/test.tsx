import 'match-media-mock'
import { render, screen, fireEvent } from 'utils/test-utils'

import Gallery from '.'
import items from './mock'

describe('<Gallery />', () => {
    it('should render thumbnails as buttons', () => {
        render(<Gallery items={items.slice(0, 2)} />)

        expect(
            screen.getByRole('button', { name: /thumb - gallery image 1/i })
        ).toHaveAttribute('src', items[0].src)

        expect(
            screen.getByRole('button', { name: /thumb - gallery image 2/i })
        ).toHaveAttribute('src', items[1].src)
    })

    it('should handle open modal', () => {
        render(<Gallery items={items.slice(0, 2)} />)

        const modal = screen.getByLabelText('modal')

        expect(modal.getAttribute('aria-hidden')).toBe('true')
        expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' })

        fireEvent.click(
            screen.getByRole('button', { name: /thumb - gallery image 1/i })
        )

        expect(modal.getAttribute('aria-hidden')).toBe('false')
        expect(modal).toHaveStyle({ opacity: 1 })
    })

    it('should handle open modal with selected image', async () => {
        render(<Gallery items={items.slice(0, 2)} />)

        fireEvent.click(
            screen.getByRole('button', { name: /thumb - gallery image 2/i })
        )

        const img = await screen.findByRole('img', { name: /gallery image 2/i })

        expect(img.parentElement?.parentElement).toHaveClass('slick-active')
    })

    it('should handle close modal when overlay or button clicked', () => {
        render(<Gallery items={items.slice(0, 2)} />)

        const modal = screen.getByLabelText('modal')

        fireEvent.click(
            screen.getByRole('button', { name: /thumb - gallery image 1/i })
        )

        expect(modal.getAttribute('aria-hidden')).toBe('false')
        expect(modal).toHaveStyle({ opacity: 1 })

        fireEvent.click(screen.getByRole('button', { name: /close modal/i }))

        expect(modal.getAttribute('aria-hidden')).toBe('true')
        expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' })
    })

    it('should handle close modal when ESC button is pressed', () => {
        const { container } = render(<Gallery items={items.slice(0, 2)} />)

        const modal = screen.getByLabelText('modal')

        fireEvent.click(
            screen.getByRole('button', { name: /thumb - gallery image 1/i })
        )

        expect(modal.getAttribute('aria-hidden')).toBe('false')
        expect(modal).toHaveStyle({ opacity: 1 })

        fireEvent.keyUp(container, { key: 'Escape' })

        expect(modal.getAttribute('aria-hidden')).toBe('true')
        expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' })
    })
})
