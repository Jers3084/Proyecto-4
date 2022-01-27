// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyBOCIUtNJD2XctUf04Z2zc5I1Y3euJy28w',
  authDomain: 'proyecto4-2f638.firebaseapp.com',
  projectId: 'proyecto4-2f638',
  storageBucket: 'proyecto4-2f638.appspot.com',
  messagingSenderId: '208918303877',
  appId: '1:208918303877:web:5beef66af8e738539b05ec',
}

const app = initializeApp(firebaseConfig)
export const dbConfig = getFirestore(app)
