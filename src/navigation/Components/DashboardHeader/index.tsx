import * as React from 'react'
import { SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { AntDesign } from '@expo/vector-icons';

import theme from '@styled/theme'
import Text from '@styled/Text'

interface Props {
    navigation: StackNavigationProp<any>,
}

const DashboardHeader: React.FunctionComponent<Props> = ({
    navigation
}) => {
    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.headerAvatar} hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}>
                    <AntDesign name="user" size={28} color={theme.color.dark} />
                </TouchableOpacity>
                <Text bold>Browse</Text>
                <TouchableOpacity style={styles.headerRight} hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}>
                    <AntDesign name="search1" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safe: {
        backgroundColor: theme.color.light, 
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: theme.color.grey
    },
    container: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    headerAvatar: {
        marginLeft: theme.spacing.margin,
        backgroundColor: theme.color.grey,
        borderRadius: 100,
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerRight: {
        marginRight: theme.spacing.margin,
    }
})

export default DashboardHeader