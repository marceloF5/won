import Banner, { BannerProps } from 'components/Banner'
import Slider from 'components/Slider'
import React from 'react'
import * as S from './styles'

export type BannerSliderProps = {
    items: BannerProps[]
}

const settings = {}

const BannerSlider = ({ items }: BannerSliderProps) => (
    <S.Wrapper>
        <Slider settings={settings}>
            {items.map((item) => (
                <Banner key={item.title} {...item} />
            ))}
        </Slider>
    </S.Wrapper>
)

export default BannerSlider
