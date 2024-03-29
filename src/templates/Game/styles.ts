import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Container } from 'components/Container'

type CoverProps = {
    src: string
}

export const Main = styled.main`
    margin-top: 18rem;

    ${media.greaterThan('medium')`
        margin-top: 43rem;
    `}
`

export const Cover = styled.div<CoverProps>`
    ${({ src }) => css`
        background-image: url(${src});
        background-position: top center;
        background-size: cover;
        height: 39.5rem;
        opacity: 0.4;

        position: absolute;
        top: 0;
        right: 0;
        left: 0;

        ${media.greaterThan('medium')`
            height: 70rem;
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%)
        `}
    `}
`

const Section = styled(Container).attrs({ as: 'section' })`
    ${({ theme }) => css`
        margin-bottom: ${theme.spacings.xlarge};

        ${media.greaterThan('medium')`
            margin-bottom: calc(${theme.spacings.xlarge} * 2);
        `}
    `}
`

export const SectionGameInfo = styled(Section)``

export const SectionGallery = styled(Section)`
    display: none;

    ${media.greaterThan('medium')`
        display: block;
    `}
`

export const SectionDescription = styled(Section)`
    ${({ theme }) => css`
        .description__copyrights {
            color: ${theme.colors.gray};
            font-size: ${theme.font.sizes.xsmall};
            margin-top: ${theme.spacings.medium};
        }
    `}
`

export const SectionGameDetails = styled(Section)``
