import * as React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'

import BrowseLoading from '@screens/Dashboard/Browse/BrowseLoading'

import theme from '@styled/theme'

const Browse = () => {
    const { useState, useEffect } = React

    const [isLoading, setIsLoading] = useState<boolean>(true)

    const renderLoading = (): React.ReactNode => {
        if (isLoading) {
            return <BrowseLoading />
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }, [])

    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.container}>
                {
                    renderLoading()
                }
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: theme.color.light
    },
    container: {
        flex: 1,
        marginHorizontal: theme.spacing.margin
    }
})

export default Browse