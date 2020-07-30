import * as React from 'react'
import { Animated } from 'react-native'
import LottieView from "lottie-react-native"

const BrowseLoading = () => {
    const { useEffect } = React

    const opacity = new Animated.Value(1)
    const scale = new Animated.Value(1)

    useEffect(() => {
        Animated.sequence([
            Animated.timing(opacity, {
                toValue: 0.2,
                useNativeDriver: false,
            }),
            Animated.timing(opacity, {
                toValue: 1,
                useNativeDriver: false,
                delay: 1500
            }),
            Animated.loop(
                Animated.timing(scale, {
                    toValue: 1.2,
                    useNativeDriver: false,
                    duration: 1000
                })
            ),
            Animated.loop(
                Animated.timing(scale, {
                    toValue: 1,
                    useNativeDriver: false,
                    delay: 500,
                    duration: 1500
                })
            )
        ]).start()
    }, [])

    return (
        <Animated.View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            opacity,
            transform: [{
                scale
            }]
        }}>
            <LottieView 
                loop={false}
                autoPlay={true}
                style={{
                    width: 120,
                    height: 120
                }}
                source={require('@assets/animations/browse-loading.json')}
            />
        </Animated.View>
    )
}

export default BrowseLoading