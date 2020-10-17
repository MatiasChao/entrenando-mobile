import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyAAEbJGo4fu5Olxdv-m_TbcLU_1KKR_iT8",
    authDomain: "entrenando-3cd3e.firebaseapp.com",
    databaseURL: "https://entrenando-3cd3e.firebaseio.com",
    projectId: "entrenando-3cd3e",
    storageBucket: "entrenando-3cd3e.appspot.com",
    messagingSenderId: "870417036756",
    appId: "1:870417036756:web:13a0f155d372a64ff19241",
    measurementId: "G-0YSRBGCS0N"
  };

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);