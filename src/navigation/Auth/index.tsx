import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import StackHeader from '@navigation/Components/StackHeader'

import LaunchScreen from '@screens/Launch'
import SignUp from '@screens/SignUp'
import theme from '@styled/theme'

export type AuthStackParamList = {
    Launch: undefined,
    SignUp: undefined,
}

const Stack = createStackNavigator<AuthStackParamList>()

const AuthStack: React.FunctionComponent = () => {
    return (
        <Stack.Navigator headerMode="screen" screenOptions={{headerBackTitleVisible: false}}>
            <Stack.Screen name="Launch" component={LaunchScreen} options={{headerShown: false}}/>
            <Stack.Screen name="SignUp" component={SignUp} options={{header: ({navigation}) => <StackHeader navigation={navigation}/>}}/>
        </Stack.Navigator>
    )
}

export default AuthStack