import * as React from 'react'
import { ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'

import { AuthStackParamList } from '@navigation/Auth'

import theme from '@styled/theme'
import Button from '@styled/Button'
import TextInput from '@styled/TextInput'
import Text from '@styled/Text'

enum FormFieldStatus {
    VALID = 'valid',
    INVALID = 'invalid',
    PRESTINE = 'prestine',
    EDITING = 'editing'
}
interface ISignUpFormField<T> {
    value: string
    status: T,
    [key: string]: string | T
}

interface ISignUpForm {
    firstName: ISignUpFormField<FormFieldStatus>
    lastName: ISignUpFormField<FormFieldStatus>
    email: ISignUpFormField<FormFieldStatus>
    password: ISignUpFormField<FormFieldStatus>
    [key: string]: ISignUpFormField<FormFieldStatus> | any
}

interface Props {
    navigation: StackNavigationProp<AuthStackParamList, 'SignUp'>
}

const SignUpScreen: React.FunctionComponent<Props> = ({
    navigation
}) => {
    const { useState } = React

    const [signUpForm, setSignUpForm] = useState<ISignUpForm>({
        firstName: {
            value: '',
            status: FormFieldStatus.PRESTINE
        },
        lastName: {
            value: '',
            status: FormFieldStatus.PRESTINE
        },
        email: {
            value: '',
            status: FormFieldStatus.PRESTINE
        },
        password: {
            value: '',
            status: FormFieldStatus.PRESTINE
        }
    })

    const handleFormOnBlur = (key: string): void => {
        if (signUpForm[key].value.trim() === '') {
            setSignUpForm({
                ...signUpForm,
                [key]: {
                    ...signUpForm[key],
                    status: FormFieldStatus.INVALID
                }
            })
            return 
        }
        if (key === 'email') {
            const emailRegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

            if (!emailRegExp.test(signUpForm[key].value)) {
                setSignUpForm({
                    ...signUpForm,
                    [key]: {
                        ...signUpForm[key],
                        status: FormFieldStatus.INVALID
                    }
                })
                return
            }
        }
        if (key === 'password') {
            if (signUpForm[key].value.length < 6) {
                setSignUpForm({
                    ...signUpForm,
                    [key]: {
                        ...signUpForm[key],
                        status: FormFieldStatus.INVALID
                    }
                })
                return
            }
        }
        setSignUpForm({
            ...signUpForm,
            [key]: {
                ...signUpForm[key],
                status: FormFieldStatus.VALID
            }
        })
    }

    const isFormValid = (): boolean => {
        return Object.values(signUpForm).every(field => field.status === FormFieldStatus.VALID)
    }

    const handleFormOnChange = (key = '', value =''): void => {
        setSignUpForm({
            ...signUpForm,
            [key]: {
                value,
                status: FormFieldStatus.EDITING
            }
        })
    }

    const handleOnSubmit = (): void => {
        navigation.navigate('App')
    }
    return (
        <>
        <ScrollView contentContainerStyle={{flex: 1, backgroundColor: theme.color.light}}>
            <View style={styles.container}>
                {signUpForm.firstName.status === FormFieldStatus.INVALID && <Text danger small>Field is required</Text>}
                <TextInput style={styles.input} autoCorrect={false} textContentType="name" autoCompleteType="name" onBlur={() => handleFormOnBlur('firstName')} onChangeText={value => handleFormOnChange('firstName', value)} placeholder="First name" autoFocus/>
                {signUpForm.lastName.status === FormFieldStatus.INVALID && <Text danger small>Field is required</Text>}
                <TextInput style={styles.input} autoCorrect={false} textContentType="nameSuffix" autoCompleteType="name" onBlur={() => handleFormOnBlur('lastName')} onChangeText={value => handleFormOnChange('lastName', value)} placeholder="Last name"/>
                {signUpForm.email.status === FormFieldStatus.INVALID && <Text danger small>Please, insert a valid email address</Text>}
                <TextInput style={styles.input} autoCorrect={false} textContentType="emailAddress" autoCompleteType="email" onBlur={() => handleFormOnBlur('email')} onChangeText={value => handleFormOnChange('email', value)} placeholder="Email address"/>
                {signUpForm.password.status === FormFieldStatus.INVALID && <Text danger small>Please, insert a valid password</Text>}
                <TextInput style={styles.input} autoCorrect={false} textContentType="password" autoCompleteType="password" onBlur={() => handleFormOnBlur('password')} onChangeText={value => handleFormOnChange('password', value)} placeholder="Password" secureTextEntry={true}/>
                <Text grey small>Password should be at least 6 characters long</Text>
                <Button disabled={!isFormValid()} style={{marginTop: 10}} text="Join us" onPress={handleOnSubmit}/>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'row', marginBottom: 40}}>
                <Text small>By signing up, you agree to our</Text>
                <TouchableOpacity hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}>
                    <Text small underline bold>Terms of Service</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        </>
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