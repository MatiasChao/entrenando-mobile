import React, { useRef }from 'react'
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-easy-toast'
import { Divider } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import LoginForm from '../../components/LoginForm'

export default function Login() {

    const toastRef = useRef()


    return (
        <ScrollView centerContent = { true } style = { styles.viewBody } >
            <Image 
                source = { require('../../../assets/logo.png') } 
                resizeMode = "contain"
                style = { styles.image }
            />
            <KeyboardAwareScrollView style = { styles.viewCointainer }>
                <LoginForm 
                    toastRef = { toastRef }
                />
                
                {
                    <CreateAccount />
                }
                
            </KeyboardAwareScrollView>

            {/* {
                <Divider style = { styles.divider } />
            } */}
            
            <Toast 
                ref = { toastRef }
                position = 'center'
                opacity = { 0.9 }
            />
            
        </ScrollView>
    )
}

function CreateAccount() {

    const navigation = useNavigation()

    return (
        <Text style={styles.textRegister}>
            ¿Aún no tienes una cuenta? { ' ' }
            <Text
                style={styles.btnRegister}
                onPress={() => navigation.navigate('register')}>
                Regístrate
            </Text>
        </Text>
    )
}

const styles = StyleSheet.create({
    viewBody: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10
    },
    image: {
        height: 100,
        width: '100%',
        marginBottom: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 19,
        marginBottom: 10,
        textAlign: 'center'
    },
    viewCointainer: {
        marginRight: 40,
        marginLeft: 40
    },
    textRegister: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        textAlign: 'center'
    },
    btnRegister: {
        color: '#00a680',
        fontWeight: 'bold'
    },
    divider: {
        backgroundColor: '#00a680',
        margin: 40
    }
})