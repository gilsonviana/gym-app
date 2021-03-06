import * as React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { OnBoardingStackParamList } from '@navigation/App/OnBoardingStack'
import theme from '@styled/theme'
import Chip from '@styled/Chip'
import Button from '@styled/Button'
import TextLead from '@styled/TextLead'

interface IOption {
    label: string
    selected: boolean
}

interface Props {
    navigation: StackNavigationProp<OnBoardingStackParamList, 'OnBoardingOne'>
}

const OnBoardingOne: React.FunctionComponent<Props> = ({
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
            label: 'Lose weight',
            selected: false
        }, {
            label: 'Run farther or faster',
            selected: false
        }, {
            label: 'Build strength',
            selected: false
        }, {
            label: 'Reduce stress',
            selected: false
        }, {
            label: 'Stay fit',
            selected: false
        }]

        setOptions([ ...OPTIONS ])
    }, [])

    useEffect(() => {
        populateOptions()
    }, [])

    const handleOnSubmit = (): void => {
        navigation.navigate('OnBoardingTwo')
    }

    const renderOptions = (): React.ReactNodeArray => {
        return options.map((option, i) => <Chip key={`onboardigin-option-${i}`} onPress={() => handleOptionOnPress(option.label)}  style={{marginTop: theme.spacing.margin / 1.5}} text={option.label} isSelected={option.selected}/>)
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={{flex: 1, alignItems: 'baseline'}}>
                <TextLead>
                    Welcome! The following quick
                    survey will help us personalize
                    your daily health plan. What's
                    your primary health goals?
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

export default OnBoardingOne