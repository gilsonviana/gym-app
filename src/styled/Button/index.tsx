import * as React from 'react'
import { TouchableOpacityProps, Dimensions } from 'react-native'
import styled from 'styled-components/native'

import theme from '@styled/theme'

const { width } = Dimensions.get('screen')

const StyledContainer = styled.TouchableOpacity<Props>`
    border-radius: ${width / 2}px;
    padding: ${theme.font.size.regular} 0;
    background-color: ${({disabled}) => disabled ? theme.color.primaryAlt : theme.color.primary};
`

const StyledText = styled.Text`
    font-weight: bold;
    text-align: center;
    color: ${theme.color.light};
`

interface Props extends TouchableOpacityProps {
    text: React.ReactChild
    disabled?: boolean
}

const Button: React.FunctionComponent<Props> = (props) => {
    return (
        <StyledContainer {...props}>
            <StyledText>
                {props.text}
            </StyledText>
        </StyledContainer>
    )
}

export default Button
