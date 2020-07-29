import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import OnBoardingOne from '@screens/OnBoarding/OnBoardingOne'

export type OnBoardingStackParamList = {
    OnBoardingOne: undefined
}

const Stack = createStackNavigator<OnBoardingStackParamList>()

const OnBoardingStack: React.FunctionComponent = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="OnBoardingOne" 
                component={OnBoardingOne} />
        </Stack.Navigator>
    )
}

export default OnBoardingStack