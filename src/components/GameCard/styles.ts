import styled, { css, DefaultTheme } from 'styled-components'

type PriceProps = {
    isPromotional?: boolean
}

const priceModifiers = {
    default: (theme: DefaultTheme) => css`
        background-color: ${theme.colors.secondary};
        border-radius: ${theme.border.radius};
        color: ${theme.colors.white};
        margin-right: calc(${theme.spacings.xxsmall} / 2);
        padding: 0 ${theme.spacings.xxsmall};
    `,

    promotional: (theme: DefaultTheme) => css`
        color: ${theme.colors.gray};
        margin-right: ${theme.spacings.xsmall};
        text-decoration: line-through;
    `
}

export const Wrapper = styled.article`
    ${({ theme }) => css`
        background-color: ${theme.colors.white};
        height: 100%;
        width: 100%;

        position: relative;
        display: flex;
        flex-direction: column;
    `}
`

export const ImageBox = styled.a`
    height: 14rem;
    width: 100%;
    background: #f6f7f8;
    background-image: linear-gradient(
        to right,
        #f6f7f8 0%,
        #edeef1 20%,
        #f6f7f8 40%,
        #f6f7f8 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @keyframes placeholderShimmer {
        0% {
            background-position: -40rem 0;
        }

        100% {
            background-position: 40rem 0;
        }
    }
`

export const Content = styled.div`
    ${({ theme }) => css`
        height: 100%;
        margin: ${theme.spacings.xsmall};

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
    `}
`

export const Info = styled.a`
    max-width: calc(100% - 2.5rem);
    text-decoration: none;
`

export const Title = styled.h3`
    ${({ theme }) => css`
        color: ${theme.colors.black};
        font-size: ${theme.font.sizes.medium};
        font-weight: ${theme.font.bold};
        line-height: ${theme.font.sizes.medium};
    `}
`

export const Developer = styled.h4`
    ${({ theme }) => css`
        color: ${theme.colors.gray};
        font-size: ${theme.font.sizes.small};
        font-weight: ${theme.font.bold};
    `}
`

export const FavButton = styled.div`
    ${({ theme }) => css`
        color: ${theme.colors.primary};
        position: absolute;
        right: 0;
        top: -0.5rem;
        cursor: pointer;

        svg {
            width: 2.5rem;
        }
    `}
`

export const BuyBox = styled.div`
    ${({ theme }) => css`
        margin-top: ${theme.spacings.xxsmall};

        display: flex;
        align-items: center;
        justify-content: flex-end;
    `}
`

export const Price = styled.div<PriceProps>`
    ${({ theme, isPromotional }) => css`
        font-weight: ${theme.font.bold};
        height: 3rem;

        display: inline-flex;
        align-items: center;
        ${!isPromotional && priceModifiers.default(theme)}
        ${isPromotional && priceModifiers.promotional(theme)}
    `}
`
