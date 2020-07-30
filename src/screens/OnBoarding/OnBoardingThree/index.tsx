import * as React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'

import { AppStackParamList } from '@navigation/App'
import theme from '@styled/theme'
import Chip from '@styled/Chip'
import Button from '@styled/Button'
import TextLead from '@styled/TextLead'

interface IOption {
    label: string
    selected: boolean
}

interface Props {
    navigation: StackNavigationProp<AppStackParamList, 'OnBoarding'>
}

const OnBoardingThree: React.FunctionComponent<Props> = ({
    navigation
}) => {
    const { useState, useEffect, useCallback } = React

    const [options, setOptions] = useState<IOption[]>([])

    const isOptionsValid = (): boolean => {
        return Object.values(options).some((option) => option.selected === true)
    }

    const handleOptionOnPress = (label = ''): void => {
        setOptions([
            ...options.map((option) => {
                if (option.label === label) {
                    return {
                        ...option,
                        selected: !option.selected
                    }
                }
                return option
            })
        ])
    }

    const populateOptions = useCallback(() => {
        const OPTIONS: IOption[] = [{
            label: '< 15',
            selected: false
        }, {
            label: '15 - 30',
            selected: false
        }, {
            label: '30 - 45',
            selected: false
        }, {
            label: '45+',
            selected: false
        }]

        setOptions([ ...OPTIONS ])
    }, [])

    useEffect(() => {
        populateOptions()
    }, [])

    const handleOnSubmit = (): void => {
        navigation.navigate('Dashboard')
    }

    const renderOptions = (): React.ReactNodeArray => {
        return options.map((option, i) => <Chip key={`onboardigin-option-${i}`} onPress={() => handleOptionOnPress(option.label)}  style={{marginTop: theme.spacing.margin / 1.5}} text={option.label} isSelected={option.selected}/>)
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={{flex: 1, alignItems: 'baseline'}}>
                <TextLead>
                    When you work out, on average
                    how many minutes do you like to
                    work out?
                </TextLead>
                {
                    renderOptions()
                }
            </View>
            <View style={{marginBottom: 40}}>
                <Button disabled={!isOptionsValid()} text="Continue" onPress={handleOnSubmit}/>
            </View>
        </ScrollView>
    ) 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: theme.color.light,
        paddingHorizontal: theme.spacing.margin
    }
})

export default OnBoardingThree