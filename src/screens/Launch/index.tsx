import * as React from 'react'
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

import theme from '@styled/theme'
import Text from '@styled/Text'
import Button from '@styled/Button'

const { height: HEIGHT } = Dimensions.get('screen')

const LaunchScreen: React.FunctionComponent = () => {
    return (
        <View style={styles.container}>
            <Image blurRadius={.5} style={styles.img} source={{uri: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80'}} resizeMode="cover"/>
            <SafeAreaView style={{flex: 1}}>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
                    <FontAwesome5 name="dumbbell" size={24} color={theme.color.light} />
                    <Text light style={{marginLeft: 10}} large bold>GYM APP</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <Text light large bold center style={{marginBottom: 10}}>Get trainer-guided workouts on demand</Text>
                    <Text light center style={{marginBottom: 20}}>Free 7-day trial</Text>
                    <Button text="Try it now" style={{marginBottom: 20}}/>
                    <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 40}}>
                        <Text light small>Already a member? </Text>
                        <TouchableOpacity hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}>
                            <Text light small bold>log in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.color.light,
        paddingHorizontal: theme.spacing.margin,
    },
    img: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
        // width: undefined,
        // height: HEIGHT
    }
})

export default LaunchScreen