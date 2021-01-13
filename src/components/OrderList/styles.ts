import styled from 'styled-components'
import * as GameItemsStyles from 'components/GameItem/styles'

export const Wrapper = styled.main`
    ${GameItemsStyles.Wrapper} {
        &:last-child {
            border-bottom: 0;
        }
    }
`
