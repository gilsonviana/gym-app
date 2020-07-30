import * as React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp, HeaderBackButton } from '@react-navigation/stack'

import theme from '@styled/theme'
import Progress from '@styled/Progress'

interface Props {
    navigation: StackNavigationProp<any>,
    steps: number
    currentStep: number
}

const OnBoardingHeader: React.FunctionComponent<Props> = ({
    navigation,
    steps,
    currentStep
}) => {
    const handleOnBack = (): void => {
        navigation.goBack()
    }
    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.container}>
                <HeaderBackButton labelVisible={false} style={{flex: 1}} tintColor={theme.color.primary} onPress={handleOnBack} />
                <View style={styles.center}>
                    <Progress stepsNumber={steps} currentStep={currentStep}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safe: {
        backgroundColor: theme.color.light, 
    },
    container: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20
    },
    center: {
        flex: 11,
        alignItems: 'center',
        flexDirection: 'row', 
        justifyContent: 'center',
        marginHorizontal: theme.spacing.margin
    }
})

export default OnBoardingHeader