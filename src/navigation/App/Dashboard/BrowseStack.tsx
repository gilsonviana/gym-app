import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Browse from '@screens/Dashboard/Browse'

export type BrowseStackParamList = {
    Browse: undefined
}

const Stack = createStackNavigator<BrowseStackParamList>()

const BrowserStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Browse" component={Browse}/>
        </Stack.Navigator>
    )
}

export default BrowserStack