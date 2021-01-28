import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { css } from 'styled-components'

import items from './mock'
import ExploreSidebar from '.'
import { Overlay } from './styles'

describe('<ExploreSidebar />', () => {
    it('should render the headings', () => {
        renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn} />)

        expect(
            screen.getByRole('heading', { name: /price/i })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { name: /sort by/i })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { name: /system/i })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { name: /genre/i })
        ).toBeInTheDocument()
    })

    it('should render inputs', () => {
        renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn} />)

        expect(
            screen.getByRole('checkbox', { name: /under \$50/i })
        ).toBeInTheDocument()

        expect(
            screen.getByRole('radio', { name: /low to high/i })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('radio', { name: /high to low/i })
        ).toBeInTheDocument()
    })

    it('should render filter button', () => {
        renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn} />)

        expect(
            screen.getByRole('button', { name: /filter/i })
        ).toBeInTheDocument()
    })

    it('should check initial values that are passed', () => {
        renderWithTheme(
            <ExploreSidebar
                items={items}
                onFilter={jest.fn}
                initialValues={{ windows: true, sort_by: 'low-to-high' }}
            />
        )

        expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked()
        expect(
            screen.getByRole('radio', { name: /low to high/i })
        ).toBeChecked()
    })

    it('should filter with initial values', () => {
        const onFilter = jest.fn()

        renderWithTheme(
            <ExploreSidebar
                items={items}
                onFilter={onFilter}
                initialValues={{ windows: true, sort_by: 'low-to-high' }}
            />
        )

        userEvent.click(screen.getByRole('button', { name: /filter/i }))

        expect(onFilter).toBeCalledWith({
            windows: true,
            sort_by: 'low-to-high'
        })
    })

    it('should filter with checked values', () => {
        const onFilter = jest.fn()

        renderWithTheme(<ExploreSidebar items={items} onFilter={onFilter} />)

        userEvent.click(screen.getByLabelText(/windows/i))
        userEvent.click(screen.getByLabelText(/linux/i))
        userEvent.click(screen.getByLabelText(/low to high/i))

        userEvent.click(screen.getByRole('button', { name: /filter/i }))

        expect(onFilter).toBeCalledWith({
            windows: true,
            linux: true,
            sort_by: 'low-to-high'
        })
    })

    it('should altern between  radio options', () => {
        const onFilter = jest.fn()

        renderWithTheme(<ExploreSidebar items={items} onFilter={onFilter} />)

        userEvent.click(screen.getByLabelText(/low to high/i))
        userEvent.click(screen.getByLabelText(/high to low/i))

        userEvent.click(screen.getByRole('button', { name: /filter/i }))

        expect(onFilter).toBeCalledWith({
            sort_by: 'high-to-low'
        })
    })

    it('should open/close sidebar when filtering on mobile ', () => {
        const { container } = renderWithTheme(
            <ExploreSidebar items={items} onFilter={jest.fn} />
        )

        const variant = {
            media: '(max-width:768px)',
            modifier: String(css`
                ${Overlay}
            `)
        }

        const Element = container.firstChild

        expect(Element).not.toHaveStyleRule('opacity', '1', variant)

        userEvent.click(screen.getByLabelText(/open filters/))

        expect(Element).toHaveStyleRule('opacity', '1', variant)

        userEvent.click(screen.getByLabelText(/close filters/))

        expect(Element).not.toHaveStyleRule('opacity', '1', variant)
    })
})
