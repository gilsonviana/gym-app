import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import BrowseStack from '@navigation/App/Dashboard/BrowseStack'
import theme from '@styled/theme';

export type DashboardTabsParamList = {
    Browse: undefined,
    Team: undefined,
    Programs: undefined,
    JoinNow: undefined,
}

const Tab = createBottomTabNavigator<DashboardTabsParamList>()

const DashboardTabs: React.FunctionComponent = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            style: {
                backgroundColor: theme.color.light
            },
            labelStyle: {
                fontWeight: "bold"
            },
            activeTintColor: theme.color.primary
        }}>
            <Tab.Screen 
                name="Browse" 
                component={BrowseStack}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons name="explore" size={size} color={color} />
                    )
                }}/>
            <Tab.Screen 
                name="Team" 
                component={BrowseStack}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <AntDesign name="team" size={size} color={color}/>
                    )
                }}/>
            <Tab.Screen 
                name="Programs" 
                component={BrowseStack}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <AntDesign name="Trophy" size={size} color={color} />
                    )
                }}/>
            <Tab.Screen 
                name="JoinNow" 
                component={BrowseStack} 
                options={{
                    title: 'Join Now',
                    tabBarIcon: ({color, size}) => (
                        <AntDesign name="tago" size={size} color={color} />
                    )
                }}/>
        </Tab.Navigator>
    )
}

export default DashboardTabs