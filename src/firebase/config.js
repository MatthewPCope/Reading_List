import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA68jP1z2sXPbKuXZ9d4pwwTVL_6a7dCeE",
    authDomain: "reading-list-1c6b3.firebaseapp.com",
    projectId: "reading-list-1c6b3",
    storageBucket: "reading-list-1c6b3.appspot.com",
    messagingSenderId: "918405818745",
    appId: "1:918405818745:web:b1ab610e131fe5667f27a8"
    };

initializeApp(firebaseConfig)

const db = getFirestore()

export { db }