import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'

import Slider, { SliderSettings } from 'components/Slider'
import React from 'react'

import * as S from './styles'

export type GalleryImageProps = {
    src: string
    label: string
}

export type GalleryProps = {
    items: GalleryImageProps[]
}

const settings: SliderSettings = {
    slidesToShow: 4,
    infinite: false,
    lazyLoad: 'ondemand',
    responsive: [
        {
            breakpoint: 1375,
            settings: {
                arrows: false,
                slidesToShow: 3.2,
                draggable: true
            }
        },
        {
            breakpoint: 1024,
            settings: {
                arrows: false,
                slidesToShow: 2.2,
                draggable: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 2.2,

                draggable: true
            }
        }
    ],
    nextArrow: <ArrowRight aria-label="next images" />,
    prevArrow: <ArrowLeft aria-label="previous images" />
}

const Gallery = ({ items }: GalleryProps) => (
    <S.Wrapper>
        <Slider settings={settings}>
            {items.map((item, index) => (
                <img
                    role="button"
                    key={`thumb-${index}`}
                    src={item.src}
                    alt={`Thumb - ${item.label}`}
                />
            ))}
        </Slider>
    </S.Wrapper>
)

export default Gallery
