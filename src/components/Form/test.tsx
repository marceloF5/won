import { render } from 'utils/test-utils'

import { FormWrapper, FormLink } from '.'

describe('<Form />', () => {
    it('should render the heading', () => {
        const { container } = render(
            <FormWrapper>
                <FormLink>My link</FormLink>
            </FormWrapper>
        )

        expect(container.parentElement).toMatchSnapshot()
    })
})
