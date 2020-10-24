import React, { useRef } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import Toast from 'react-native-easy-toast'

import RegisterForm from '../../components/RegisterForm'

export default function Register() {

    const toastRef = useRef()

    return (
        <View>
             <Image 
                source = { require('../../../assets/logo.png') } 
                resizeMode = "contain"
                style = { styles.image }
            />
            <View style={styles.viewForm}>
                <RegisterForm 
                    toastRef = { toastRef }
                />
            </View>
            <Toast
                ref = { toastRef }
                position = 'center'
                opacity = { 0.9 }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 100,
        width: '100%',
        marginBottom: 10,
        marginTop: 20
    },
    viewForm: {
        marginRight: 40,
        marginLeft: 40
    }
})