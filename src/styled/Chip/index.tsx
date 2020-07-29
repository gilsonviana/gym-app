import * as React from 'react'
import { TouchableOpacityProps } from 'react-native'
import styled from 'styled-components/native'

import theme from '@styled/theme'

interface IStyledText {
    isSelected: boolean
}

interface Props extends TouchableOpacityProps {
    isSelected: boolean
    text: string
}

const StyledText = styled.Text<IStyledText>`
    text-align: center;
    font-weight: bold;
    color: ${({isSelected}) => isSelected ? theme.color.light : theme.color.dark};
`

const StyledTouchable = styled.TouchableOpacity<Props>`
    flex-wrap: wrap;
    background-color: ${({isSelected}) => isSelected ? theme.color.primary : 'transparent'};
    border-radius: 4px;
    padding: ${theme.spacing.margin / 2}px;
    border: 1px solid ${theme.color.grey};
`

const Chip: React.FunctionComponent<Props> = (props) => {
    const { text } = props

    return (
        <StyledTouchable {...props}>
            <StyledText isSelected={props.isSelected}>{text}</StyledText>
        </StyledTouchable>
    )
}

export default Chip