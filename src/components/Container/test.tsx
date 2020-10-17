import { renderWithTheme } from 'utils/tests/helpers'

import { Container } from '.'

describe('<Container />', () => {
    it('should render the heading', () => {
        const { container } = renderWithTheme(
            <Container>
                <span>Won Client</span>
            </Container>
        )

        expect(container.firstChild).toHaveStyleRule('max-width', '130rem')
        expect(container.firstChild).toMatchInlineSnapshot(`
            .c0 {
              max-width: 130rem;
              margin-right: auto;
              margin-left: auto;
              padding-right: calc(3.2rem / 2);
              padding-left: calc(3.2rem / 2);
            }

            <div
              class="c0"
            >
              <span>
                Won Client
              </span>
            </div>
        `)
    })
})
