import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type ModalProps = {
    isOpen: boolean
}

const modalModifiers = {
    open: () => css`
        opacity: 1;
    `,
    close: () => css`
        opacity: 0;
        pointer-events: none;
    `
}

export const Wrapper = styled.div`
    ${({ theme }) => css`
        .slick-prev,
        .slick-next {
            display: block;
            color: ${theme.colors.white};
            cursor: pointer;
            position: absolute;
            top: 50%;
            width: 2.5rem;
            height: 2.5rem;
            padding: 0;
            transform: translate(0, -50%);
        }

        .slick-prev {
            left: -${theme.spacings.xxlarge};
        }

        .slick-next {
            right: -${theme.spacings.xxlarge};
        }

        .slick-prev.slick-disabled,
        .slick-next.slick-disabled {
            visibility: hidden;
        }

        .slick-slide > div {
            margin: 0 ${theme.spacings.xsmall};
            cursor: pointer;
        }

        .slick-list {
            margin: 0 -${theme.spacings.xsmall};
        }

        ${media.lessThan('huge')`
            overflow-x: hidden;
        `}
    `}
`

export const Modal = styled.div<ModalProps>`
    ${({ theme, isOpen }) => css`
        background: rgba(0, 0, 0, 0.7);
        height: 100%;
        width: 100%;
        transition: opacity ${theme.transition.default};
        z-index: ${theme.layers.modal};

        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        ${isOpen && modalModifiers.open()}
        ${!isOpen && modalModifiers.close()};
    `}
`

export const Close = styled.div`
    ${({ theme }) => css`
        color: ${theme.colors.white};
        height: 100%;
        width: 100%;

        position: absolute;
        left: 0;
        top: 0;
        cursor: pointer;
        text-align: right;
    `}
`

export const Content = styled.div`
    ${() => css`
        max-height: 80;
        max-width: min(120rem, 100%);
    `}
`
