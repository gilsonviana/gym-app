import * as React from 'react'
import { ViewProps } from 'react-native'
import styled from 'styled-components/native'

import theme from '@styled/theme'
import Text from '@styled/Text'

interface Props extends ViewProps {
    children: React.ReactChild
}

const StyledContainer = styled.View`
    background-color: ${theme.color.grey};
    border-radius: 4px;
    padding: ${theme.font.size.regular} ${theme.font.size.large};
`

const TextLead: React.FunctionComponent<Props> = (props) => {
    const { children } = props

    return (
        <StyledContainer {...props}>
            <Text bold style={{letterSpacing: 2.2, lineHeight: 24}}>{children}</Text>
        </StyledContainer>
    )
}

export default TextLead