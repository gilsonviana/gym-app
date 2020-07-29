import * as React from 'react'
import { TextProps } from 'react-native'
import styled from 'styled-components/native'

import theme from '@styled/theme'

const StyledText = styled.Text<Props>`
    text-align: ${({center}) => center ? 'center' : 'left'};
    font-weight: ${({bold}) => bold ? 'bold' : 'normal'};
    color: ${({light, danger}) => light ? theme.color.light : danger ? theme.color.danger : theme.color.dark};
    font-size: ${({large, small}) => large ? theme.font.size.large : small ? theme.font.size.small : theme.font.size.regular};
`

interface Props extends TextProps {
    center?: boolean
    bold?: boolean
    light?: boolean
    danger?: boolean
    large?: boolean
    small?: boolean
}

const Text: React.FunctionComponent<Props> = (props) => {
    return <StyledText {...props}/>
}

export default Text