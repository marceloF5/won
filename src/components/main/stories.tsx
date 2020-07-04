import { withKnobs, text } from '@storybook/addon-knobs'

import Main from '.'

export default {
    title: 'Main',
    component: Main,
    decorators: [withKnobs]
}

export const Basic = () => (
    <Main
        title={text('Title', 'Boilerplate NextJS')}
        description={text(
            'Description',
            'with TypeScript, ReactJS, NextJS and Styled Components'
        )}
    />
)
