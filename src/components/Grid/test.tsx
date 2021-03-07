import { render } from 'utils/test-utils'

import { Grid } from '.'

describe('<Grid />', () => {
    it('should render correct', () => {
        const { container } = render(<Grid />)

        expect(container.firstChild).toMatchInlineSnapshot(`
            .c0 {
              display: grid;
              grid-template-columns: repeat(auto-fill,minmax(25rem,1fr));
              grid-gap: 3.2rem;
              margin: 3.2rem 0;
            }

            <div
              class="c0"
            />
        `)
    })
})
