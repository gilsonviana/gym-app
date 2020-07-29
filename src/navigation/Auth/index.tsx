import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import StackHeader from '@navigation/Components/SignUpHeader'
import LaunchScreen from '@screens/Launch'
import SignUp from '@screens/SignUp'
import AppStack from '@navigation/App'

export type AuthStackParamList = {
    Launch: undefined,
    SignUp: undefined,
    App: undefined
}

const Stack = createStackNavigator<AuthStackParamList>()

const AuthStack: React.FunctionComponent = () => {
    return (
        <Stack.Navigator headerMode="screen" screenOptions={{headerBackTitleVisible: false}}>
            <Stack.Screen name="Launch" component={LaunchScreen} options={{headerShown: false}}/>
            <Stack.Screen name="SignUp" component={SignUp} options={{header: ({navigation}) => <StackHeader navigation={navigation}/>}}/>
            {/* 
                //TODO Verify token here to move on to App stack
            */}
            <Stack.Screen name="App" component={AppStack} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default AuthStack