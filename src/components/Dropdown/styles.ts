import styled, { css } from 'styled-components'

type WrapperProps = {
    isOpen?: boolean
}

const wrapperModifiers = {
    open: () => css`
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0);
    `,
    close: () => css`
        opacity: 0;
        pointer-events: none;
        transform: translateY(-2rem);
    `
}

export const Wrapper = styled.div<WrapperProps>`
    ${({ theme, isOpen }) => css`
        width: max-content;

        position: relative;

        ${Content},
        ${Overlay} {
            transition: transform 0.2s ease-in,
                opacity ${theme.transition.default};

            ${!!isOpen && wrapperModifiers.open()}
            ${!isOpen && wrapperModifiers.close()};
        }
    `}
`

export const Title = styled.div`
    ${({ theme }) => css`
        color: ${theme.colors.white};
        z-index: ${theme.layers.alwaysOnTop};

        position: relative;
        cursor: pointer;

        display: flex;
        align-items: center;
        padding-right: ${theme.spacings.small};
    `}
`

export const Content = styled.div`
    ${({ theme }) => css`
        background: ${theme.colors.white};
        color: ${theme.colors.black};
        margin-top: ${theme.spacings.small};
        z-index: ${theme.layers.alwaysOnTop};

        position: absolute;
        right: 0;

        display: flex;
        flex-direction: column;

        &::before {
            border-right: 1.2rem solid transparent;
            border-left: 1.2rem solid transparent;
            border-bottom: 1.2rem solid ${theme.colors.white};

            position: absolute;
            top: -1.2rem;
            right: 2.4rem;
            content: '';
        }
    `}
`

export const Overlay = styled.div`
    ${({ theme }) => css`
        background-color: rgb(0, 0, 0, 0.5);
        z-index: ${theme.layers.overlay};

        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    `}
`
