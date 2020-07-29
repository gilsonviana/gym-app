import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import LaunchScreen from '@screens/Launch'

const Stack = createStackNavigator()

const AuthStack: React.FunctionComponent = () => {
    return (
        <Stack.Navigator headerMode={'none'}>
            <Stack.Screen name="Launch" component={LaunchScreen}/>
        </Stack.Navigator>
    )
}

export default AuthStack