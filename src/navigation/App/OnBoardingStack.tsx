import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import OnBoardingOne from '@screens/OnBoarding/OnBoardingOne'
import OnBoardingTwo from '@screens/OnBoarding/OnBoardingTwo'
import OnBoardingThree from '@screens/OnBoarding/OnBoardingThree'

import OnBoardingHeader from '@navigation/Components/OnBoardingHeader'

export type OnBoardingStackParamList = {
    OnBoardingOne: undefined
    OnBoardingTwo: undefined
    OnBoardingThree: undefined
}

const Stack = createStackNavigator<OnBoardingStackParamList>()

const OnBoardingStack: React.FunctionComponent = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="OnBoardingOne" 
                component={OnBoardingOne} 
                options={{
                    header: ({ navigation }) => <OnBoardingHeader steps={3} currentStep={1} navigation={navigation}/>
                }}/>
            <Stack.Screen 
                name="OnBoardingTwo" 
                component={OnBoardingTwo}
                options={{
                    header: ({ navigation }) => <OnBoardingHeader steps={3} currentStep={2} navigation={navigation}/>
                }}/>
            <Stack.Screen 
                name="OnBoardingThree" 
                component={OnBoardingThree} 
                options={{
                    header: ({ navigation }) => <OnBoardingHeader steps={3} currentStep={3} navigation={navigation}/>
                }}/>
        </Stack.Navigator>
    )
}

export default OnBoardingStack