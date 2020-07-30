import * as React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
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
    navigation: StackNavigationProp<OnBoardingStackParamList, 'OnBoardingTwo'>
}

const OnBoardingTwo: React.FunctionComponent<Props> = ({
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
            label: 'Beginner',
            selected: false
        }, {
            label: 'Intermediate',
            selected: false
        }, {
            label: 'Advanced',
            selected: false
        }]

        setOptions([ ...OPTIONS ])
    }, [])

    useEffect(() => {
        populateOptions()
    }, [])

    const handleOnSubmit = (): void => {
        navigation.navigate('OnBoardingThree')
    }

    const renderOptions = (): React.ReactNodeArray => {
        return options.map((option, i) => <Chip key={`onboardigin-option-${i}`} onPress={() => handleOptionOnPress(option.label)}  style={{marginTop: theme.spacing.margin / 1.5}} text={option.label} isSelected={option.selected}/>)
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={{flex: 1, alignItems: 'baseline'}}>
                <TextLead>
                    What's you current level
                    of fitness?
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

export default OnBoardingTwo