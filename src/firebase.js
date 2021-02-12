import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAGZ0rWqLstxjHOxsiaK6rnz_qUhoMWkCY",
    authDomain: "crud-e78a5.firebaseapp.com",
    projectId: "crud-e78a5",
    storageBucket: "crud-e78a5.appspot.com",
    messagingSenderId: "175401489619",
    appId: "1:175401489619:web:4dd9fe15633a528d5ff026"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)
