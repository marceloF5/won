import { renderWithTheme } from 'utils/tests/helpers'

import { FormWrapper, FormLink } from '.'

describe('<Form />', () => {
    it('should render the heading', () => {
        const { container } = renderWithTheme(
            <FormWrapper>
                <FormLink>My link</FormLink>
            </FormWrapper>
        )

        expect(container.parentElement).toMatchSnapshot()
    })
})
