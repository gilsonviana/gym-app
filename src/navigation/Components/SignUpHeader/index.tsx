import * as React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { StackNavigationProp, HeaderBackButton } from '@react-navigation/stack'
import { FontAwesome5 } from '@expo/vector-icons';

import theme from '@styled/theme'
import Text from '@styled/Text'

interface Props {
    navigation: StackNavigationProp<any>,
}

const StackHeader: React.FunctionComponent<Props> = ({
    navigation
}) => {
    const handleOnBack = (): void => {
        navigation.goBack()
    }
    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.container}>
                <HeaderBackButton labelVisible={false} style={{flex: 1}} tintColor={theme.color.primary} onPress={handleOnBack} />
                <View style={styles.center}>
                    <FontAwesome5 name="dumbbell" size={24} color={theme.color.dark} />
                    <Text style={{marginLeft: 10}} large bold>GYM APP</Text>
                </View>
                <View style={{flex: 1}}></View>
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
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row', 
        justifyContent: 'center'
    }
})

export default StackHeader