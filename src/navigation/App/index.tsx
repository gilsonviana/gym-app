import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import OnBoardingHeader from '@navigation/Components/OnBoardingHeader'
import OnBoardingStack from '@navigation/App/OnBoardingStack'

export type AppStackParamList = {
    OnBoarding: undefined
}

const Stack = createStackNavigator<AppStackParamList>()

const AppStack: React.FunctionComponent = () => {
    return (
        <Stack.Navigator headerMode="float">
            <Stack.Screen 
                name="OnBoarding" 
                component={OnBoardingStack}
                options={{
                    header: ({navigation}) => <OnBoardingHeader navigation={navigation}/>
                }}/>
        </Stack.Navigator>
    )
}

export default AppStack