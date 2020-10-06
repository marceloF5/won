import { Story, Meta } from '@storybook/react/types-6-0'
import { Settings } from 'react-slick'
import styled from 'styled-components'

import Slider from '.'

export default {
    title: 'Slider',
    component: Slider
} as Meta

const horizontalSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
}

const verticalSettings: Settings = {
    vertical: true,
    verticalSwiping: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
}

const Slide = styled.div`
    background: gray;
    border: 0.1rem solid red;
    color: white;
    padding: 10rem 0;
    text-align: center;
    width: 30rem;
`

export const Horizontal: Story = () => (
    <Slider settings={horizontalSettings}>
        <Slide>1</Slide>
        <Slide>2</Slide>
        <Slide>3</Slide>
        <Slide>4</Slide>
    </Slider>
)

export const Vertical: Story = () => (
    <Slider settings={verticalSettings}>
        <Slide>1</Slide>
        <Slide>2</Slide>
        <Slide>3</Slide>
        <Slide>4</Slide>
    </Slider>
)
