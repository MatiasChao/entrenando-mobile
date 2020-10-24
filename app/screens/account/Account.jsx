import React, { useState, useEffect } from 'react'
import Loading from '../../components/Loading'

import * as firebase from 'firebase'
import UserLogged from './UserLogged'
import Login from './Login'

export default function Account() {

    const [login, setLogin] = useState(null)

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            console.log("User: ", user)
            !user ? setLogin(false) : setLogin(true)
        })
    }, [])

    if(login === null) return <Loading isVisible = {true} text="Cargando..." />
    return login ? <UserLogged /> : <Login />
}