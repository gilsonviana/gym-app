import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import OnBoardingHeader from '@navigation/Components/OnBoardingHeader'
import OnBoardingStack from '@navigation/App/OnBoardingStack'
import DashboardHeader from '@navigation/Components/DashboardHeader'
import DashboardStack from '@navigation/App/Dashboard'

export type AppStackParamList = {
    OnBoarding: undefined,
    Dashboard: undefined
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
            <Stack.Screen 
                name="Dashboard"
                component={DashboardStack}
                options={{
                    header: ({navigation}) => <DashboardHeader navigation={navigation}/>
                }}
                />
        </Stack.Navigator>
    )
}

export default AppStack