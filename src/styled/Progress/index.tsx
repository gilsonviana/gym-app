import * as React from 'react'
import { ViewProps, Dimensions } from 'react-native'
import styled from 'styled-components/native'

import theme from '@styled/theme'

const { width: WIDTH } = Dimensions.get('screen')

interface Props extends ViewProps {
    stepsNumber: number,
    currentStep: number
}

const StyledContainer = styled.View`
    position: relative;
    flex: 1;
    height: 7px;
    background-color: ${theme.color.primary};
    border-radius: 6px;
    overflow: hidden;
`

const StyledFill = styled.View<Props>`
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${({stepsNumber, currentStep}) => (WIDTH / stepsNumber) * currentStep}px;
    right: 0;
    background-color: ${theme.color.grey};
`

const Progress: React.FunctionComponent<Props> = (props) => {
    const { stepsNumber, currentStep } = props

    return (
        <StyledContainer>
            <StyledFill stepsNumber={stepsNumber} currentStep={currentStep}/>
        </StyledContainer>
    )
}

export default Progress