import * as React from 'react'
import { ViewProps, TextStyle, Animated, StyleSheet } from 'react-native'
import styled from 'styled-components/native'

import theme from '@styled/theme'
import Text from '@styled/Text'

interface Props {
    isVisible: boolean
    children: React.ReactChild
    success?: boolean
    info?: boolean
    textStyle?: TextStyle
}

const StyledContainer = styled.View<Props>`
    padding: ${theme.font.size.regular} ${theme.spacing.margin}px;
    background-color: ${({success, info}) => success ? 'green' : info ? 'blue' : theme.color.danger};
`

const SnackBar: React.FunctionComponent<Props> = ({
    isVisible,
    children,
    success,
    info,
    textStyle
}) => {
    const { useState, useEffect } = React

    const [shouldAppear, setShouldAppear] = useState(isVisible)
    const translateY = new Animated.Value(-100)

    useEffect(() => {
        Animated.timing(translateY, {
            toValue: 0,
            useNativeDriver: false
        }).start()
        // Animated.sequence([
        //     Animated.timing(translateY, {
        //       toValue: 0,
        //       duration: 1000,
        //       useNativeDriver: true,
        //     }),
        //     Animated.timing(translateY, {
        //       toValue: -100,
        //       duration: 1000,
        //       useNativeDriver: true,
        //       delay: autoHideMs,
        //     }),
        //   ]).start();
    }, [])

    if (!shouldAppear) return <></>

    return (
        <Animated.View style={[
            styles.container,
            {
                backgroundColor: success ? 'green' : info ? 'blue' : theme.color.danger
            },
            {
            transform: [{
                translateY
            }]
        }]}>
            <Text light style={textStyle}>{children}</Text>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: theme.spacing.margin,
        paddingVertical: 14,
        paddingHorizontal: 20
    }
})

export default SnackBar