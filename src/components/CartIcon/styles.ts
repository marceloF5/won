import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    ${({ theme }) => css`
        color: ${theme.colors.white};
        width: ${theme.spacings.small};
        height: ${theme.spacings.small};

        position: relative;
    `}
`

export const Badge = styled.span`
    ${({ theme }) => css`
        background-color: ${theme.colors.secondary};
        border-radius: 50%;
        color: ${theme.colors.white};
        font-size: 1rem;
        width: ${theme.spacings.xsmall};
        height: ${theme.spacings.xsmall};

        position: absolute;
        top: -${theme.spacings.xxxsmall};
        right: -${theme.spacings.xxxsmall};

        display: flex;
        align-items: center;
        justify-content: center;
    `}
`
