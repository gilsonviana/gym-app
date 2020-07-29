import * as React from 'react'
import { ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'

import { AuthStackParamList } from '@navigation/Auth'

import theme from '@styled/theme'
import Button from '@styled/Button'
import TextInput from '@styled/TextInput'
import Text from '@styled/Text'

interface ISignUpForm {
    firstName: string
    lastName: string
    email: string,
    password: string
}

interface Props {
    navigation: StackNavigationProp<AuthStackParamList, 'SignUp'>
}

const SignUpScreen: React.FunctionComponent<Props> = ({
    navigation
}) => {
    const { useState } = React

    const [signUpForm, setSignUpForm] = useState<ISignUpForm>({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const handleFormOnChange = (key = '', value =''): void => {
        setSignUpForm({
            ...signUpForm,
            [key]: value
        })
    }

    const handleOnSubmit = (): void => {
        navigation.navigate('App')
    }
    return (
        <ScrollView contentContainerStyle={{flex: 1, backgroundColor: theme.color.light}}>
            <View style={styles.container}>
                <TextInput style={styles.input} autoCorrect={false} textContentType="name" autoCompleteType="name" onChangeText={value => handleFormOnChange('firstName', value)} placeholder="First name" autoFocus/>
                <TextInput style={styles.input} autoCorrect={false} textContentType="nameSuffix" autoCompleteType="name" onChangeText={value => handleFormOnChange('lastName', value)} placeholder="Last name"/>
                <TextInput style={styles.input} autoCorrect={false} textContentType="emailAddress" autoCompleteType="email" onChangeText={value => handleFormOnChange('email', value)} placeholder="Email address"/>
                <TextInput style={styles.input} autoCorrect={false} textContentType="password" autoCompleteType="password" onChangeText={value => handleFormOnChange('password', value)} placeholder="Password" secureTextEntry={true}/>
                <Button style={{marginTop: 10}} text="Join us" onPress={handleOnSubmit}/>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'row', marginBottom: 40}}>
                <Text small>By signing up, you agree to our</Text>
                <TouchableOpacity hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}>
                    <Text small underline bold>Terms of Service</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: theme.spacing.margin,
    },
    input: {
        marginBottom: 10
    }
})

export default SignUpScreen